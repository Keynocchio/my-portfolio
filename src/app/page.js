import artworks from "@/public/images/display-artwork/list.json"

export default function CreativeHomepage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">

      {/* Moving Background */}
      <div className="fixed inset-0 bg-tile" />

      {/* Overlay */}
      <div className="relative min-h-screen bg-black/20">

        {/* Navigation */}
        <nav className="flex justify-center gap-8 py-8 text-xs uppercase tracking-[0.25em] text-white/70">
          <a href="#artwork" className="hover:text-white">Artwork</a>
          <a href="#videos" className="hover:text-white">Videos</a>
          <a href="#about" className="hover:text-white">About</a>
          <a href="#contact" className="hover:text-white">Contact</a>
        </nav>

        {/* Hero */}
        <section className="text-center px-6 pt-12 pb-20">
          <p className="uppercase tracking-[0.3em] text-white/60 text-xs mb-6">
            Digital Artist • Creator • Animator
          </p>

          <h1 className="text-5xl md:text-7xl leading-none mb-6">
            KEYNOCCHIO
          </h1>

          <p className="max-w-xl mx-auto text-white/70 text-lg">
            Stylized artwork, animation, and online content inspired by games.
          </p>
        </section>

        {/* Infinite Artwork Banner */}
        <section id="artwork" className="overflow-hidden py-10">

          <div className="art-scroll">

            {[...artworks, ...artworks].map((file, index) => (
              <img
                key={index}
                src={`/images/display-artwork/${file}`}
                alt={`Artwork ${index}`}
                draggable="false"
                className="h-[70vh] w-auto flex-shrink-0"
              />
            ))}

          </div>

        </section>

        {/* Video */}
        <section id="videos" className="px-6 py-24 text-center">

          <h2 className="uppercase tracking-[0.3em] text-white/50 text-xs mb-6">
            Latest Video
          </h2>

          <div className="max-w-4xl mx-auto overflow-hidden bg-black/40">

            <img
              src="/images/pvz-art/PVZtiktok1.jpg"
              alt=""
              className="w-full h-[350px] object-cover"
            />

            <div className="p-8">

              <h3 className="text-3xl mb-4">
                Latest Video
              </h3>

              <button className="px-6 py-3 bg-white text-black rounded-full">
                Watch Video
              </button>

            </div>

          </div>

        </section>

        {/* About */}
        <section id="about" className="px-6 pb-24 text-center">

          <h2 className="uppercase tracking-[0.3em] text-white/50 text-xs mb-6">
            About
          </h2>

          <p className="max-w-2xl mx-auto text-lg text-white/70">
            Keynocchio is a creative identity focused on stylized visuals,
            animation, and experimental storytelling.
          </p>

        </section>

        {/* Footer */}
        <footer id="contact" className="border-t border-white/10 py-10 text-center">

          <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/60 mb-6">
            <a href="#">YouTube</a>
            <a href="#">TikTok</a>
            <a href="#">Instagram</a>
          </div>

          <p className="text-white/40 text-sm">
            Keynocchio © 2026
          </p>

        </footer>

      </div>
    </main>
  )
}