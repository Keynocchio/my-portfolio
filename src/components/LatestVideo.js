async function getYouTubePreview(videoUrl) {
  try {
    const videoIdMatch = videoUrl.match(/[?&]v=([^&#]+)/);
    const videoId = videoIdMatch?.[1];

    if (!videoId) {
      return null;
    }

    return `https://img.youtube.com/vi/${videoId}/hqdefault.jpg`;
  } catch {
    return null;
  }
}

export default async function LatestVideo({
  videoUrl = "https://www.youtube.com/watch?v=eSYmu-txDp8&list=RDeSYmu-txDp8&start_radio=1", // PUT THE URL HERE
}) {
  const thumbnailUrl = await getYouTubePreview(videoUrl);

  return (
    <section className="px-6 py-12" aria-labelledby="latest-video-title">
      <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6">
        <p className="-mt-1 mb-2 text-xs uppercase tracking-[0.35em] text-white/50">
          Latest video
        </p>
        <div className="flex flex-col gap-6 md:flex-row md:items-center">
          <a
            href={videoUrl}
            target="_blank"
            rel="noreferrer"
            className="group block aspect-square w-full max-w-[16rem] overflow-hidden rounded-xl border border-white/10 bg-black/30 transition-transform hover:scale-[1.01]"
          >
            {thumbnailUrl ? (
              <img
                src={thumbnailUrl}
                alt="YouTube video preview"
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

          <div className="flex-1 text-right">
            <h2 id="latest-video-title" className="mb-2 text-2xl font-semibold text-white">
              Latest Youtube Video
            </h2>
            <p className="text-medium text-white/70">
              Here is one of my latest videos, and you can click the thumbnail to watch it on YouTube! Hopefully you enjoy it, and if you do, please consider subscribing to my channel for more content!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}