import Navbar from "@/components/Navbar";
import LatestVideo from "@/components/LatestVideo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-tile" />

      <div className="relative bg-black/20 min-h-screen">
        <Navbar />

        {/* MAIN AREA */}
        <section className="text-center pt-16 pb-20 px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            KEYNOCCHIO
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Digital art, animation, experimental visuals, and creative media.
          </p>
        </section>

        {/* ABOUT */}
        <section className="text-center px-6 py-24">
          <h2 className="uppercase text-white/50 text-xs mb-4">About</h2>
          <p className="mx-auto max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            Keynocchio is a vessel for me to share my work across digital art,
            animation, and video game design, and he is the way I "unlock" my creativity and share it with the world!
            I am a digital artist, animator, and game designer who loves to experiment with different mediums and techniques.
            My work is often inspired by my love for storytelling, music, and culture.
          </p>
        </section>

        {/* LATEST VIDEO */}
        <LatestVideo />

        

        <Footer />
      </div>
    </main>
  );
}