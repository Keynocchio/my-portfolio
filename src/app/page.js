import Navbar from "@/components/Navbar";
import InfiniteBanner from "@/components/InfiniteBanner";
import LatestVideo from "@/components/LatestVideo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-tile" />

      <div className="relative bg-black/20 min-h-screen">
        <Navbar />

        {/* MAIN DESCRIPTION */}
        <section className="text-center pt-16 pb-20 px-6">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            KEYNOCCHIO
          </h1>
          <p className="text-white/60 mt-4 max-w-xl mx-auto">
            Digital art, animation, video game development, and content creation.
          </p>
        </section>

        {/* LATEST VIDEO */}
        <LatestVideo />

        {/* ABOUT */}
        <section className="text-center px-6 py-24">
          <h2 className="uppercase text-white/50 text-xs mb-4">About</h2>
          <p className="max-w-2xl mx-auto text-white/70">
            Keynocchio represents unlocking one's creativity 
            and is my vessel for hostin all the forms of digital art I am fond of!
          </p>
        </section>

        <Footer />
      </div>
    </main>
  );
}