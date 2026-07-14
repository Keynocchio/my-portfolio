import Navbar from "@/components/Navbar";
import InfiniteBanner from "@/components/InfiniteBanner";
import LatestVideo from "@/components/LatestVideo";
import Footer from "@/components/Footer";
import Link from "next/link";

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
            Keynocchio represents unlocking one's creativity and is my vessel for hosting all the forms of digital art I am fond of.
          </p>

          <div className="mx-auto mt-8 max-w-2xl rounded-[1.5rem] border border-white/10 bg-black/40 p-6 text-left text-sm text-white/70">
            <p className="mb-3 font-semibold uppercase tracking-[0.3em] text-white/50">
              Art protection note
            </p>
            <p className="mb-4">
              I want the work to feel premium, but I also want it to be harder for casual viewers to copy or re-upload without permission.
            </p>
            <Link
              href="/portfolio"
              className="inline-flex rounded-full border border-white/20 px-4 py-2 text-xs uppercase tracking-[0.3em] text-white/80 transition hover:bg-white/10"
            >
              View protected gallery
            </Link>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}