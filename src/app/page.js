export default function CreativeHomepage() {
  return (
    <main className="min-h-screen text-white overflow-x-hidden relative">

      {/* Moving Background */}
      <div
        className="fixed inset-0 bg-cover bg-center scale-110 animate-bgMove"
        style={{
          backgroundImage: "url('/images/background.jpg')",
        }}
      />

      {/* Navigation */}
      <nav className="relative z-10 flex justify-center gap-8 px-6 py-8 text-xs uppercase tracking-[0.25em] text-white/80">

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
      <section className="relative z-10 px-6 pt-16 pb-20 text-center">
        <div className="max-w-3xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-white/70 text-xs mb-6">
            Digital Artist • Creator • Animator
          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-none mb-6">
            KEYNOCCHIO
          </h1>

          <p className="text-white/80 text-lg leading-relaxed mb-10">
            Stylized artwork, animation, experimental visuals,
            and online content inspired by games, internet culture,
            and surreal digital worlds.
          </p>

          <div className="flex justify-center gap-4 flex-wrap">

            <button className="px-6 py-3 bg-white text-black rounded-full text-sm font-medium hover:scale-105 transition-transform">
              Artwork
            </button>

            <button className="px-6 py-3 border border-white/40 rounded-full text-sm hover:bg-white hover:text-black transition-all">
              Videos
            </button>

          </div>

        </div>
      </section>

      {/* Artwork */}
      <section id="artwork" className="px-6 pb-24">
        <div className="max-w-5xl mx-auto">

          <p className="uppercase tracking-[0.3em] text-white/60 text-xs mb-8 text-center">
            Recent Work
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">

            {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
              <div
                key={num}
                className="group overflow-hidden rounded-2xl border border-white/20 bg-white/5"
              >
                <img
                  src={`/images/pvz-art/pvztiktok${num}.jpg`}
                  alt={`Artwork ${num}`}
                  className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                />
              </div>
            ))}

          </div>

        </div>
      </section>

      {/* Video */}
      <section id="videos" className="px-6 pb-24">
        <div className="max-w-4xl mx-auto text-center">

          <p className="uppercase tracking-[0.3em] text-white/60 text-xs mb-6">
            Latest Video
          </p>

          <div className="overflow-hidden rounded-3xl border border-white/20 bg-white/5">

            <img
              src="/images/pvz-art/pvztiktok1.jpg"
              alt="Video"
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">

              <h2 className="text-3xl font-bold mb-4">
                Latest YouTube Creation
              </h2>

              <p className="text-white/70 mb-6">
                Behind the scenes of my newest artwork and creative process.
              </p>

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

          <p className="uppercase tracking-[0.3em] text-white/60 text-xs mb-6">
            About
          </p>

          <h2 className="text-4xl md:text-5xl font-black mb-8">
            A digital world built through art and imagination.
          </h2>

          <p className="text-white/75 leading-relaxed text-lg">
            Keynocchio is a creative identity focused on stylized visuals,
            animation, and experimental storytelling through digital art,
            videos, and online media.
          </p>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="border-t border-white/20 py-10 px-6">

        <div className="max-w-4xl mx-auto text-center">

          <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/70 mb-6">

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

          <p className="text-white/50 text-sm">
            Keynocchio © 2026
          </p>

        </div>

      </footer>

    </main>
  )
}