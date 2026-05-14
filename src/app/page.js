export default function CreativeHomepage() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden relative">
      {/* Background Glow */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-[-10rem] left-[-10rem] w-[30rem] h-[30rem] bg-white/10 blur-3xl rounded-full" />
        <div className="absolute bottom-[-15rem] right-[-10rem] w-[35rem] h-[35rem] bg-white/5 blur-3xl rounded-full" />
      </div>

      {/* Navigation */}
      <nav className="relative z-10 flex justify-between items-center px-8 py-6 text-sm uppercase tracking-[0.2em]">
        <h1 className="font-bold">David</h1>
        <div className="flex gap-6 text-white/70">
          <a href="#" className="hover:text-white transition-colors">Work</a>
          <a href="#" className="hover:text-white transition-colors">About</a>
          <a href="#" className="hover:text-white transition-colors">Contact</a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative z-10 px-8 pt-20 pb-32">
        <div className="max-w-7xl mx-auto">
          <p className="uppercase tracking-[0.3em] text-white/50 text-sm mb-6">
            Digital Artist / Creative Developer WOWIE
          </p>

          <h2 className="text-[5rem] md:text-[8rem] leading-[0.9] font-black tracking-tight max-w-5xl">
            Building Weird,
            <br />
            Interactive Art
            <br />
            Experiences.
          </h2>

          <div className="mt-12 flex flex-col md:flex-row gap-8 items-start md:items-center">
            <button className="px-8 py-4 bg-white text-black rounded-full font-medium hover:scale-105 transition-transform">
              View My Work
            </button>

            <p className="text-white/60 max-w-md text-lg leading-relaxed">
              Inspired by experimental web design, games, animation, and digital illustration.
            </p>
          </div>
        </div>
      </section>

      {/* Floating Cards */}
      <section className="relative z-10 px-8 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-white/40 text-sm mb-4">01</p>
            <h3 className="text-2xl font-bold mb-3">Digital Art</h3>
            <p className="text-white/60 leading-relaxed">
              Stylized illustrations and experimental character design inspired by games and animation.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300 md:translate-y-12">
            <p className="text-white/40 text-sm mb-4">02</p>
            <h3 className="text-2xl font-bold mb-3">Creative Coding</h3>
            <p className="text-white/60 leading-relaxed">
              Interactive websites, motion graphics, and immersive scrolling experiences.
            </p>
          </div>

          <div className="bg-white/5 backdrop-blur-xl border border-white/10 rounded-3xl p-6 hover:-translate-y-2 transition-transform duration-300">
            <p className="text-white/40 text-sm mb-4">03</p>
            <h3 className="text-2xl font-bold mb-3">Visual Design</h3>
            <p className="text-white/60 leading-relaxed">
              Combining typography, layout, and motion to create memorable digital experiences.
            </p>
          </div>
        </div>
      </section>

      {/* Large Statement */}
      <section className="relative z-10 border-t border-white/10 px-8 py-24">
        <div className="max-w-7xl mx-auto">
          <p className="text-white/40 uppercase tracking-[0.2em] text-sm mb-6">
            Philosophy
          </p>

          <h3 className="text-4xl md:text-6xl leading-tight font-bold max-w-5xl text-white/90">
            I want my websites to feel less like pages and more like worlds people can explore.
          </h3>
        </div>
      </section>
    </main>
  )
}
