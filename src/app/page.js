export default function CreativeHomepage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-x-hidden relative">

      {/* Background */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-15rem] left-[-10rem] w-[40rem] h-[40rem] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-20rem] right-[-10rem] w-[45rem] h-[45rem] bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-20 flex justify-between items-center px-8 md:px-12 py-8 uppercase tracking-[0.25em] text-sm">
        <h1 className="font-black text-lg">KEYNOCCHIO</h1>

        <div className="hidden md:flex gap-8 text-white/60">
          <a href="#artwork" className="hover:text-white transition-colors">
            Artwork
          </a>

          <a href="#videos" className="hover:text-white transition-colors">
            Videos
          </a>

          <a href="#shorts" className="hover:text-white transition-colors">
            Shorts
          </a>

          <a href="#about" className="hover:text-white transition-colors">
            About
          </a>

          <a href="#contact" className="hover:text-white transition-colors">
            Contact
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-6 md:px-12 pt-12 pb-24">
        <div className="max-w-[1700px] mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

          {/* Left Side */}
          <div>
            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-6">
              Digital Artist • Creator • Animator
            </p>

            <h2 className="text-[4rem] md:text-[7rem] leading-[0.9] font-black tracking-tight mb-8">
              Building
              <br />
              Strange Digital
              <br />
              Worlds.
            </h2>

            <p className="text-white/60 text-lg leading-relaxed max-w-xl mb-10">
              Keynocchio is a creative project focused on stylized artwork,
              experimental visuals, animation, and online storytelling through
              videos, shorts, and interactive media.
            </p>

            <div className="flex gap-4 flex-wrap">
              <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300">
                View Artwork
              </button>

              <button className="px-8 py-4 border border-white/20 rounded-full text-white hover:bg-white hover:text-black transition-all duration-300">
                Latest Video
              </button>
            </div>
          </div>

          {/* Hero Artwork */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-xl">
              <img
                src="/images/pvz-art/pvztiktok1.jpg"
                alt="Keynocchio Artwork"
                className="w-full h-full object-cover"
              />
            </div>

            <div className="absolute -bottom-6 -left-6 bg-black/70 backdrop-blur-xl border border-white/10 rounded-2xl p-5 max-w-xs">
              <p className="text-white/40 uppercase tracking-[0.2em] text-xs mb-2">
                Current Focus
              </p>

              <p className="text-white/80 leading-relaxed text-sm">
                Stylized PvZ fanart, animated concepts, and experimental web visuals.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Video */}
      <section id="videos" className="relative z-10 px-6 md:px-12 pb-28">
        <div className="max-w-[1700px] mx-auto">

          <div className="flex justify-between items-end mb-8">
            <div>
              <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-3">
                Featured Content
              </p>

              <h3 className="text-4xl md:text-6xl font-black leading-none">
                Latest YouTube Video
              </h3>
            </div>
          </div>

          <div className="relative overflow-hidden rounded-[2rem] border border-white/10 bg-white/5 group">

            <img
              src="/images/pvz-art/pvztiktok2.jpg"
              alt="Featured Video"
              className="w-full h-[600px] object-cover group-hover:scale-105 transition-transform duration-700"
            />

            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent" />

            <div className="absolute bottom-0 left-0 p-8 md:p-12 max-w-3xl">
              <p className="uppercase tracking-[0.25em] text-white/50 text-sm mb-4">
                YouTube Feature
              </p>

              <h4 className="text-3xl md:text-5xl font-black leading-tight mb-6">
                Inside the Creation of Stylized PvZ Fanart
              </h4>

              <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform duration-300">
                Watch Video
              </button>
            </div>

          </div>
        </div>
      </section>

      {/* Shorts Section */}
      <section id="shorts" className="relative z-10 px-6 md:px-12 pb-28">
        <div className="max-w-[1700px] mx-auto">

          <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-8">
            Recent Shorts
          </p>

          <div className="grid grid-cols-2 md:grid-cols-4 xl:grid-cols-7 gap-4">

            {[1,2,3,4,5,6,7].map((num) => (
              <div key={num} className="group cursor-pointer">
                <div className="overflow-hidden rounded-3xl border border-white/10 bg-white/5">
                  <img
                    src={`/images/pvz-art/pvztiktok${num}.jpg`}
                    alt={`Artwork ${num}`}
                    className="w-full aspect-square object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
              </div>
            ))}

          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="relative z-10 border-t border-white/10 px-6 md:px-12 py-28">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

          <div>
            <p className="uppercase tracking-[0.3em] text-white/40 text-sm mb-6">
              About Keynocchio
            </p>

            <h3 className="text-4xl md:text-6xl font-black leading-tight">
              A digital world built through art, animation, and experimentation.
            </h3>
          </div>

          <div>
            <p className="text-white/60 text-lg leading-relaxed mb-6">
              Keynocchio is an online creative identity focused on stylized
              visuals, experimental design, and entertainment through artwork,
              short-form content, and digital storytelling.
            </p>

            <p className="text-white/60 text-lg leading-relaxed">
              Inspired by games, internet culture, animation, and surreal visual
              aesthetics, the goal is to create experiences that feel immersive,
              strange, and memorable.
            </p>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer id="contact" className="relative z-10 border-t border-white/10 px-6 md:px-12 py-10">
        <div className="max-w-[1700px] mx-auto flex flex-col md:flex-row justify-between gap-6 text-white/50 text-sm uppercase tracking-[0.2em]">

          <p>Keynocchio © 2026</p>

          <div className="flex gap-6">
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

        </div>
      </footer>

    </main>
  )
}

