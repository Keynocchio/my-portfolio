'use client';

import { useState } from 'react';

const artworks = [
  {
    slug: 'aurora',
    title: 'Aurora Drift',
    description: 'A cinematic piece built around motion and atmosphere.',
  },
  {
    slug: 'pulse',
    title: 'Pulse Frame',
    description: 'Bold contrast and rhythm in a compact visual study.',
  },
  {
    slug: 'echo',
    title: 'Echo Chamber',
    description: 'A surreal composition with layered depth and texture.',
  },
];

export default function FeaturedArtworkCarousel() {
  const [activeIndex, setActiveIndex] = useState(0);

  const prevArtwork = () => {
    setActiveIndex((current) => (current === 0 ? artworks.length - 1 : current - 1));
  };

  const nextArtwork = () => {
    setActiveIndex((current) => (current === artworks.length - 1 ? 0 : current + 1));
  };

  return (
    <section className="px-6 py-10 md:py-16">
      <div className="mx-auto max-w-6xl rounded-[2rem] border border-white/10 bg-black/45 p-4 shadow-2xl shadow-black/40 backdrop-blur sm:p-6 md:p-8">
        <div className="mb-6 flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
              Featured Artwork
            </p>
            <h2 className="mt-2 text-2xl font-black uppercase tracking-[0.2em] sm:text-3xl">
              A simple sliding showcase
            </h2>
          </div>
          <p className="max-w-xl text-sm text-white/70">
            Swipe through featured pieces with protected previews and minimal friction.
          </p>
        </div>

        <div className="flex items-center justify-center gap-3 sm:gap-4">
          <button
            type="button"
            onClick={prevArtwork}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white/80 transition hover:bg-white/20 sm:flex"
            aria-label="Previous artwork"
          >
            ←
          </button>

          <div className="flex w-full items-center justify-center gap-2 sm:gap-4">
            {artworks.map((artwork, index) => {
              const isActive = index === activeIndex;
              const isLeft = index === (activeIndex + artworks.length - 1) % artworks.length;
              const isRight = index === (activeIndex + 1) % artworks.length;

              if (!isActive && !isLeft && !isRight) {
                return null;
              }

              return (
                <div
                  key={artwork.slug}
                  className={`transition-all duration-300 ${
                    isActive
                      ? 'w-full max-w-2xl scale-100 opacity-100'
                      : 'hidden w-24 scale-90 opacity-60 sm:block sm:w-36 md:w-44'
                  }`}
                >
                  <div className="overflow-hidden rounded-[1.5rem] border border-white/10 bg-white/10">
                    <img
                      src={`/api/artwork/${artwork.slug}`}
                      alt={artwork.title}
                      className={`w-full object-cover ${isActive ? 'aspect-[4/5]' : 'aspect-[3/4]'}`}
                      draggable={false}
                      onContextMenu={(event) => event.preventDefault()}
                      onDragStart={(event) => event.preventDefault()}
                      referrerPolicy="no-referrer"
                      loading="lazy"
                    />
                  </div>
                  {isActive && (
                    <div className="mt-4 text-center sm:text-left">
                      <p className="text-[10px] uppercase tracking-[0.35em] text-white/50">
                        Protected preview
                      </p>
                      <h3 className="mt-2 text-xl font-semibold text-white">
                        {artwork.title}
                      </h3>
                      <p className="mt-2 text-sm text-white/70">{artwork.description}</p>
                    </div>
                  )}
                </div>
              );
            })}
          </div>

          <button
            type="button"
            onClick={nextArtwork}
            className="hidden h-11 w-11 items-center justify-center rounded-full border border-white/15 bg-white/10 text-xl text-white/80 transition hover:bg-white/20 sm:flex"
            aria-label="Next artwork"
          >
            →
          </button>
        </div>

        <div className="mt-5 flex justify-center gap-2 sm:mt-6">
          {artworks.map((artwork, index) => (
            <button
              key={artwork.slug}
              type="button"
              onClick={() => setActiveIndex(index)}
              className={`h-2.5 rounded-full transition ${
                index === activeIndex ? 'w-8 bg-white' : 'w-2.5 bg-white/30 hover:bg-white/60'
              }`}
              aria-label={`Show ${artwork.title}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
