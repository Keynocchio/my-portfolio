import Navbar from "@/components/Navbar";
import LatestVideo from "@/components/LatestVideo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-tile" />

      <div className="relative min-h-screen bg-black/20">
        <Navbar />

        <section className="px-6 pt-12 pb-16 text-center md:pt-20 md:pb-20">
          <p className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/50">
            Creative work • digital art • motion
          </p>
          <h1 className="text-5xl font-black tracking-tight sm:text-6xl md:text-8xl">
            KEYNOCCHIO
          </h1>
          <p className="mx-auto mt-5 max-w-2xl text-sm text-white/70 sm:text-base">
            A simple home for visual experiments, animation, and creative media.
          </p>
        </section>

        <LatestVideo />

        <section id="about" className="px-6 py-16 md:py-20">
          <div className="mx-auto max-w-3xl rounded-[1.5rem] border border-white/10 bg-black/40 p-8 text-center shadow-xl shadow-black/20 backdrop-blur">
            <h2 className="mb-4 text-[10px] uppercase tracking-[0.35em] text-white/50">
              About
            </h2>
            <p className="text-sm leading-7 text-white/75 sm:text-base">
              Keynocchio is a digital identity focused on surreal visuals, animation,
              and experimental creative work across platforms.
            </p>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}