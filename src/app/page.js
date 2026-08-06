import Navbar from "@/components/Navbar";
import LatestVideo from "@/components/LatestVideo";
import LatestTikTok from "@/components/LatestTikTok";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden text-white">
      <div className="fixed inset-0 bg-tile" aria-hidden="true" />

      <div className="relative z-10 min-h-screen bg-black/20">
        <Navbar />

        <section className="px-4 pb-8 pt-12 text-center">
          <h1 className="text-5xl font-extrabold tracking-[0.2em] sm:text-6xl">KEYNOCCHIO</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 tracking-[0.08em]">
            Digital art, animation, video game development, and creative media.
          </p>
        </section>

        <section className="flex justify-center px-6 py-8">
          <img
            src="/images/keynocchio-hello.png"
            alt="Keynocchio saying hello"
            className="h-72 w-auto object-contain sm:h-[24rem] md:h-[30rem]"
          />
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-8 tracking-[0.08em] text-white/80">
              Welcome — this is a simplified version of the site. I know you are seeing this jade of the woods and ruby vince vegas.
            </p>
          </div>
        </section>

        <LatestVideo />
        <LatestTikTok />

        <Footer />
      </div>
    </main>
  );
}