"use client";

import Image from "next/image";
import { useState } from "react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import balatro from "./saved-artwork/balatrojumbodesign.jpg";
import diggaleg from "./saved-artwork/diggalegmariogalaxy2.jpg";
import fnaf from "./saved-artwork/fnafplushdesigns.jpg";
import forest from "./saved-artwork/forestscene.jpg";
import gobblegut from "./saved-artwork/gobblegutmariogalaxy2.jpg";
import poker from "./saved-artwork/pokerpvz.jpg";

const artworks = [
  { image: forest, title: "Forest Scene", category: "Environment" },
  { image: poker, title: "Poker PVZ", category: "Character design" },
  { image: balatro, title: "Balatro Jumbo Design", category: "Illustration" },
  { image: fnaf, title: "FNAF Plush Designs", category: "Character design" },
  { image: diggaleg, title: "Diggaleg: Mario Galaxy 2", category: "Character design" },
  { image: gobblegut, title: "Gobblegut: Mario Galaxy 2", category: "Character design" },
];

export default function PortfolioAndArtworksPage() {
  const [selectedArtwork, setSelectedArtwork] = useState(null);

  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="fixed inset-0 bg-tile" aria-hidden="true" />

      <div className="relative z-10 min-h-screen bg-black/35">
        <Navbar />

        <header className="mx-auto max-w-6xl px-6 pb-14 pt-16 sm:px-10 sm:pt-20">
          <div className="flex flex-col justify-between gap-8 border-b border-white/20 pb-10 md:flex-row md:items-end">
            <div>
              <p className="mb-5 text-xs uppercase tracking-[0.4em] text-white/55">Portfolio &amp; artworks / selected works</p>
              <h1 className="max-w-3xl text-5xl leading-none tracking-[0.12em] sm:text-7xl">A collection of things I&apos;ve made.</h1>
            </div>
            <p className="max-w-xs text-sm leading-6 text-white/65 md:text-right">
              Digital illustrations, designs, and strange little worlds from the archive.
            </p>
          </div>
          <div className="flex justify-between pt-5 text-xs uppercase tracking-[0.3em] text-white/45">
            <span>Selected works</span>
            <span>{String(artworks.length).padStart(2, "0")} pieces</span>
          </div>
        </header>

        <section className="mx-auto max-w-6xl px-6 pb-24 sm:px-10" aria-label="Artwork collection">
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
            {artworks.map((artwork, index) => (
              <button
                key={artwork.title}
                type="button"
                onClick={() => setSelectedArtwork(artwork)}
                className={`group relative overflow-hidden border border-white/20 bg-black/50 text-left transition duration-500 hover:-translate-y-1 hover:border-white/70 ${index === 0 ? "sm:row-span-2" : ""}`}
                aria-label={`View ${artwork.title}`}
              >
                <Image
                  src={artwork.image}
                  alt={artwork.title}
                  placeholder="blur"
                  className="h-full min-h-[22rem] w-full object-cover transition duration-700 group-hover:scale-105"
                />
                <span className="absolute inset-0 bg-gradient-to-t from-black/85 via-transparent to-transparent opacity-80" />
                <span className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-3 p-5">
                  <span>
                    <span className="mb-2 block text-[10px] uppercase tracking-[0.28em] text-white/60">{artwork.category}</span>
                    <span className="block text-lg tracking-[0.08em] text-white">{artwork.title}</span>
                  </span>
                  <span className="border border-white/40 px-2 py-1 text-[10px] uppercase tracking-[0.2em] text-white/70 transition group-hover:border-white group-hover:text-white">View</span>
                </span>
              </button>
            ))}
          </div>
        </section>

        <Footer />
      </div>

      {selectedArtwork && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-5" role="dialog" aria-modal="true" aria-label={`${selectedArtwork.title} artwork viewer`} onClick={() => setSelectedArtwork(null)}>
          <div className="relative max-h-full max-w-5xl" onClick={(event) => event.stopPropagation()}>
            <Image src={selectedArtwork.image} alt={selectedArtwork.title} className="max-h-[82vh] max-w-full object-contain" />
            <div className="mt-3 flex items-center justify-between gap-5 text-xs uppercase tracking-[0.25em] text-white/60">
              <span>{selectedArtwork.title}</span>
              <button type="button" onClick={() => setSelectedArtwork(null)} className="text-white hover:text-white/60">Close [x]</button>
            </div>
          </div>
        </div>
      )}
    </main>
  );
}
