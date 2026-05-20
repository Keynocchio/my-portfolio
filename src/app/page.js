"use client"

import { useRef } from "react"

export default function CreativeHomepage() {

  const scrollRef = useRef(null)

  const scroll = (direction) => {
    if (!scrollRef.current) return

    const container = scrollRef.current
    const scrollAmount = window.innerWidth * 0.75

    container.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    })

    // Infinite loop illusion
    setTimeout(() => {

      if (
        container.scrollLeft + container.clientWidth >=
        container.scrollWidth - 5
      ) {
        container.scrollLeft = container.scrollWidth / 3
      }

      if (container.scrollLeft <= 0) {
        container.scrollLeft = container.scrollWidth / 3
      }

    }, 500)
  }

  const artworks = [1,2,3,4,5,6,7,8]

  // Repeat artworks for infinite scrolling illusion
  const repeatedArtworks = [
    ...artworks,
    ...artworks,
    ...artworks
  ]

  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">

      {/* Moving Background */}
      <div
        className="fixed inset-0 bg-tile"
        style={{
          backgroundImage: "url('/images/website-background.png')",
        }}
      />

      {/* Overlay */}
      <div className="relative min-h-screen bg-black/10">

        {/* Navigation */}
        <nav className="flex justify-center gap-8 px-6 py-8 text-xs uppercase tracking-[0.25em] text-white/70">

          <a href="#artwork" className="hover:text-white transition-colors">
            Artwork
          </a>

          <a href="#videos" className="hover:text-white transition-colors">
            Videos
          </a>

          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>

        </nav>

        {/* Hero */}
        <section className="px-6 pt-10 pb-16 text-center">
          <div className="max-w-3xl mx-auto">

            <p className="uppercase tracking-[0.3em] text-white/60 text-xs mb-6">
              Digital Artist • Creator • Animator
            </p>

            <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
              KEYNOCCHIO
            </h1>

            <p className="text-white/70 text-lg leading-relaxed mb-10">
              Stylized artwork, animation, and online content inspired
              by games and internet culture.
            </p>

            <div className="flex justify-center gap-4 flex-wrap">

              <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
                Artwork
              </button>

              <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
                Videos
              </button>

            </div>

          </div>
        </section>

        {/* Artwork Banner */}
        <section id="artwork" className="pb-24 relative">

          <p className="uppercase tracking-[0.3em] text-white/50 text-xs mb-8 text-center">
            Featured Artwork
          </p>

          {/* Left Button */}
          <button
            onClick={() => scroll("left")}
            className="
              absolute left-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              bg-black/40 backdrop-blur-md
              border border-white/10
              hover:bg-white hover:text-black
              transition-all
            "
          >
            ←
          </button>

          {/* Right Button */}
          <button
            onClick={() => scroll("right")}
            className="
              absolute right-4 top-1/2 -translate-y-1/2 z-20
              w-12 h-12 rounded-full
              bg-black/40 backdrop-blur-md
              border border-white/10
              hover:bg-white hover:text-black
              transition-all
            "
          >
            →
          </button>

          {/* Artwork Strip */}
          <div
            ref={scrollRef}
            className="
              flex overflow-x-auto overflow-y-hidden
              scroll-smooth snap-x snap-mandatory
              scrollbar-hide
            "
          >

            {repeatedArtworks.map((num, index) => (
              <div
                key={index}
                className="
                  flex-shrink-0 snap-center
                  h-[70vh]
                "
              >

                <img
                  src={`/images/pvz-art/PVZtiktok${num}.jpg`}
                  alt={`Artwork ${num}`}
                  draggable="false"
                  className="
                    h-full
                    w-auto
                    object-cover
                    select-none
                    pointer-events-none
                  "
                />

              </div>
            ))}

          </div>

        </section>

        {/* Video */}
        <section id="videos" className="px-6 pb-24">
          <div className="max-w-4xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-white/50 text-xs mb-6">
              Latest Video
            </p>

            <div className="overflow-hidden border border-white/10 bg-black/40 backdrop-blur-md">

              <img
                src="/images/pvz-art/PVZtiktok1.jpg"
                alt="Video"
                className="w-full h-[350px] object-cover"
              />

              <div className="p-8">

                <h2 className="text-3xl font-bold mb-4">
                  Latest Video
                </h2>

                <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
                  Watch Video
                </button>

              </div>

            </div>

          </div>
        </section>

        {/* About */}
        <section id="about" className="px-6 pb-24">
          <div className="max-w-3xl mx-auto text-center">

            <p className="uppercase tracking-[0.3em] text-white/50 text-xs mb-6">
              About
            </p>

            <h2 className="text-4xl md:text-5xl font-black mb-8">
              Description
            </h2>

            <p className="text-white/65 leading-relaxed text-lg">
              Keynocchio is a creative identity focused on stylized visuals,
              animation, fanart, videos, and experimental digital art.
            </p>

          </div>
        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 py-10 px-6">
          <div className="max-w-4xl mx-auto text-center">

            <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/60 mb-6">

              <a href="#" className="hover:text-white transition-colors">
                YouTube
              </a>

              <a href="#" className="hover:text-white transition-colors">
                TikTok
              </a>

              <a href="#" className="hover:text-white transition-colors">
                Instagram
              </a>

            </div>

            <p className="text-white/40 text-sm">
              Keynocchio © 2026
            </p>

          </div>
        </footer>

      </div>
    </main>
  )
}