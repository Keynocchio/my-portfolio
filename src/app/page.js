"use client";

import { useEffect, useState } from "react";

export default function CreativeHomepage() {
  const [artworks, setArtworks] = useState([]);

  useEffect(() => {
    fetch("/images/display-artwork/list.json")
      .then((res) => res.json())
      .then((data) => setArtworks(data));
  }, []);

  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* Background */}
      <div className="fixed inset-0 bg-tile" />

      {/* Page Container */}
      <div className="relative min-h-screen bg-black/20 flex flex-col gap-24">

        {/* NAV */}
        <nav className="flex justify-center gap-8 pt-10 text-xs uppercase tracking-[0.25em] text-white/70">
          <a href="#artwork">Artwork</a>
          <a href="#videos">Videos</a>
          <a href="#about">About</a>
          <a href="#contact">Contact</a>
        </nav>

        {/* HERO */}
        <section className="text-center px-6 pt-10 min-h-[40vh] flex flex-col justify-center">
          <h1 className="text-5xl md:text-7xl font-black mb-4">
            KEYNOCCHIO
          </h1>
          <p className="text-white/70 max-w-xl mx-auto">
            Stylized artwork, animation, and experimental digital content.
          </p>
        </section>

        {/* ART BANNER */}
        <section
          id="artwork"
          className="overflow-hidden min-h-[55vh] flex items-center"
        >
          <div className="art-track">
            {[...artworks, ...artworks].map((file, i) => (
              <img
                key={i}
                src={`/images/display-artwork/${file}`}
                alt=""
                draggable="false"
                className="art-item"
              />
            ))}
          </div>
        </section>

        {/* VIDEO */}
<section
  id="videos"
  className="text-center px-6 min-h-[70vh] flex flex-col justify-center"
>
  <h2 className="uppercase text-white/50 text-xs mb-6">
    Latest Video
  </h2>

  <div className="max-w-3xl mx-auto bg-black/40">

    {/* FIXED: proper widescreen ratio */}
    <div className="w-full aspect-video">
      <img
        src="/images/pvz-art/PVZtiktok1.jpg"
        className="w-full h-full object-cover"
      />
    </div>

    <div className="p-6">
      <h3 className="text-2xl mb-4">Latest Upload</h3>
      <button className="px-6 py-3 bg-white text-black rounded-full">
        Watch
      </button>
    </div>

  </div>
</section>

        {/* ABOUT */}
        <section
          id="about"
          className="text-center px-6 min-h-[40vh] flex flex-col justify-center"
        >
          <h2 className="uppercase text-white/50 text-xs mb-4">
            About
          </h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Keynocchio is a digital art identity focused on animation,
            surreal visuals, and experimental media.
          </p>
        </section>

        {/* FOOTER */}
        <footer
          id="contact"
          className="border-t border-white/10 py-12 text-center"
        >
          <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/60 mb-6">

            <a
              href="https://www.youtube.com/@keynocchio_official"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              YouTube
            </a>

            <a
              href="https://www.tiktok.com/@keynocchio"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              TikTok
            </a>

            <a
              href="https://www.instagram.com/keynocchio/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-white transition-colors"
            >
              Instagram
            </a>

          </div>

          <p className="text-white/40 text-sm">
            Keynocchio © 2026
          </p>
        </footer>

      </div>
    </main>
  );
}