async function getTikTokPreview(tiktokUrl) {
  try {
    const response = await fetch(
      `https://www.tiktok.com/oembed?url=${encodeURIComponent(tiktokUrl)}`,
      { next: { revalidate: 3600 } }
    );

    if (!response.ok) {
      return null;
    }

    const data = await response.json();
    return data.thumbnail_url || null;
  } catch {
    return null;
  }
}

export default async function LatestTikTok({
  tiktokUrl = "https://www.tiktok.com/@keynocchio/video/7668716461535366430", // PUT THE URL HERE
  title = "Latest TikTok",
  description = "Click the thumbnail to watch it on TikTok! I do my own renditions of characters especially from video games, and I also do some original content as well. If you enjoy my content, please consider following me on TikTok for more!",
  previewImageUrl,
}) {
  const thumbnailUrl = previewImageUrl || (await getTikTokPreview(tiktokUrl));

  return (
    <section className="px-6 py-12" aria-labelledby="latest-tiktok-title">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6">
        <p className="-mt-1 mb-2 text-right text-xs uppercase tracking-[0.35em] text-white/50">
          Latest TikTok
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <div className="flex-1 text-left">
            <h2 id="latest-tiktok-title" className="mb-2 text-2xl font-semibold text-white">
              {title}
            </h2>
            <p className="text-medium text-white/70">{description}</p>
          </div>

          <a
            href={tiktokUrl}
            target="_blank"
            rel="noreferrer"
            className="group block aspect-square w-full max-w-[16rem] overflow-hidden rounded-xl border border-white/10 bg-black/30 transition-transform hover:scale-[1.01]"
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="TikTok preview"
                className="h-full w-full object-cover"
              />
            ) : (
              <div className="flex h-full items-center justify-center bg-black/20 px-4 text-center">
                <span className="rounded-full bg-black/60 px-4 py-2 text-sm uppercase tracking-[0.3em] text-white">
                  Watch now
                </span>
              </div>
            )}
          </a>
        </div>
      </div>
    </section>
  );
}
