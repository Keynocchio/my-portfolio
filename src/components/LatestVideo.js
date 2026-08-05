export default function LatestVideo() {
  return (
    <section className="px-6 py-12">
      <div className="mx-auto max-w-3xl p-6 text-left">
        <p className="mb-2 text-xs uppercase tracking-[0.35em] text-white/50">
          Latest video
        </p>
        <h2 className="text-2xl font-semibold text-white mb-2">Watch on YouTube</h2>
        <p className="text-sm text-white/70 mb-4">
          Visit the YouTube channel to see uploads.
        </p>

        <a
          href="https://www.youtube.com/@keynocchio_official"
          target="_blank"
          rel="noreferrer"
          className="inline-block rounded bg-white/10 px-4 py-2 text-sm hover:bg-white/20"
        >
          Open channel
        </a>
      </div>
    </section>
  );
}