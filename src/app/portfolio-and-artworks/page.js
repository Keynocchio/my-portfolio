import Link from "next/link";

export default function PortfolioAndArtworksPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-5xl flex-col justify-center px-6 py-20">
        <p className="mb-3 text-center text-xs uppercase tracking-[0.35em] text-white/50">
          Portfolio & Artworks
        </p>
        <h1 className="text-center text-4xl font-semibold tracking-[0.2em]">
          Explore your work
        </h1>
        <p className="mx-auto mt-4 max-w-2xl text-center text-base text-white/70">
          This page is now the single home for your portfolio highlights and gallery pieces.
        </p>

        <div className="mt-10 flex justify-center">
          <Link
            href="/portfolio-and-artworks"
            className="rounded-2xl border border-white/10 bg-white/5 px-8 py-6 text-center transition hover:bg-white/10"
          >
            <h2 className="text-2xl font-semibold">Portfolio + Artworks</h2>
            <p className="mt-3 text-sm text-white/70">A single place to view your featured projects and visual work.</p>
          </Link>
        </div>
      </div>
    </main>
  );
}
