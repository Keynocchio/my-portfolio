'use client';

import { useEffect, useState } from 'react';

const artworks = [
  {
    slug: 'aurora',
    title: 'Aurora Drift',
    medium: 'Digital illustration',
    year: '2026',
    description:
      'A moody landscape study with layered light, designed as a protected preview of a larger concept piece.',
  },
  {
    slug: 'pulse',
    title: 'Pulse Frame',
    medium: 'Motion-inspired artwork',
    year: '2026',
    description:
      'A bold composition built around rhythm, color contrast, and cinematic atmosphere.',
  },
  {
    slug: 'echo',
    title: 'Echo Chamber',
    medium: 'Mixed media concept',
    year: '2026',
    description:
      'A layered visual experiment that blends surreal forms with a polished gallery finish.',
  },
];

export default function ArtShowcase() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSelectedArtwork(null);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <section className="px-6 py-16 md:py-24">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-black/50 p-6 shadow-2xl shadow-black/40 backdrop-blur md:p-10">
        <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-white/50">
              Protected art gallery
            </p>
            <h2 className="text-3xl font-black uppercase tracking-[0.2em] sm:text-4xl">
              Curated pieces, shown with built-in protection
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/70 sm:text-base">
            Each preview is served through a protected route, with watermarks and basic anti-copy friction so casual theft is much harder.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {artworks.map((artwork) => (
            <article
              key={artwork.slug}
              className="group overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/5 transition hover:-translate-y-1 hover:border-white/30"
            >
              <button
                type="button"
                onClick={() => setSelectedArtwork(artwork)}
                onContextMenu={(event) => event.preventDefault()}
                onDragStart={(event) => event.preventDefault()}
                className="block w-full text-left"
              >
                <div className="relative aspect-[4/5] overflow-hidden">
                  <img
                    src={`/api/artwork/${artwork.slug}`}
                    alt={artwork.title}
                    className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
                    draggable={false}
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/70 via-black/10 to-transparent" />
                  <div className="pointer-events-none absolute left-4 top-4 rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                    Protected preview
                  </div>
                  <div className="pointer-events-none absolute bottom-4 left-4 right-4">
                    <p className="text-xs uppercase tracking-[0.3em] text-white/60">
                      {artwork.medium}
                    </p>
                    <h3 className="mt-1 text-xl font-semibold text-white">
                      {artwork.title}
                    </h3>
                  </div>
                </div>
              </button>
            </article>
          ))}
        </div>
      </div>

      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/85 px-4 py-8 backdrop-blur">
          <div className="relative w-full max-w-5xl overflow-hidden rounded-[2rem] border border-white/10 bg-black/80 shadow-2xl">
            <button
              type="button"
              onClick={() => setSelectedArtwork(null)}
              className="absolute right-4 top-4 z-10 rounded-full border border-white/20 bg-black/60 px-3 py-2 text-sm uppercase tracking-[0.3em] text-white/80"
            >
              Close
            </button>
            <div className="grid gap-0 lg:grid-cols-[1.2fr_0.8fr]">
              <div className="relative aspect-[4/5] lg:aspect-auto">
                <img
                  src={`/api/artwork/${selectedArtwork.slug}`}
                  alt={selectedArtwork.title}
                  className="h-full w-full object-cover"
                  draggable={false}
                  referrerPolicy="no-referrer"
                />
                <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top_left,rgba(255,255,255,0.15),transparent_40%)]" />
                <div className="pointer-events-none absolute inset-0 flex items-end justify-start bg-gradient-to-t from-black/70 via-black/20 to-transparent p-6">
                  <div className="rounded-full border border-white/20 bg-black/50 px-3 py-1 text-[10px] uppercase tracking-[0.3em] text-white/80">
                    Watermarked preview
                  </div>
                </div>
              </div>
              <div className="flex flex-col justify-between p-6 sm:p-8">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-white/50">
                    {selectedArtwork.year}
                  </p>
                  <h3 className="mt-2 text-3xl font-black uppercase tracking-[0.2em]">
                    {selectedArtwork.title}
                  </h3>
                  <p className="mt-4 text-sm text-white/70">{selectedArtwork.description}</p>
                </div>
                <div className="mt-8 space-y-4 rounded-[1.25rem] border border-white/10 bg-white/5 p-4 text-sm text-white/70">
                  <p>
                    This view is intentionally watermarked and served through a protected endpoint to discourage casual copying.
                  </p>
                  <p>
                    For commissions or commercial use, contact me directly to discuss licensing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
