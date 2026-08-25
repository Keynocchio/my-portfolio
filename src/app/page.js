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
          <h1 className="text-5xl font-extrabold tracking-[0.2em] sm:text-6xl">KEYNOCCHIO BY DAVID</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80 tracking-[0.08em]">
            Digital art, animation, video game development, and creative media.
          </p>
        </section>

        <section className="flex justify-center px-6 py-8">
          <img
            src="/images/keynocchio-hello.png"
            alt="Keynocchio saying hello"
            className="h-72 w-auto object-contain sm:h-[24rem] md:h-[30rem] animate-[float_3s_ease-in-out_infinite]"
          />
        </section>

        <section className="px-6 py-12">
          <div className="mx-auto max-w-3xl text-center">
            <p className="text-lg leading-8 tracking-[0.08em] text-white/80">
              Welcome to my website! Here you can find a collection of my work, 
              including digital art, animation, and video game development projects. 
              Feel free to explore and enjoy the content I've created.
            </p>
          </div>
        </section>

        <LatestVideo />
        <LatestTikTok />

        <section className="px-6 py-4 sm:py-6" aria-labelledby="hurricane-deck-title">
          <div className="mx-auto max-w-3xl rounded-2xl border border-white/10 bg-black/40 p-6">
            <p className="-mt-1 mb-2 text-right text-xs uppercase tracking-[0.35em] text-white/50">
              Featured project
            </p>
            <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
              <div className="flex-1 text-left">
                <h2 id="hurricane-deck-title" className="mb-2 text-2xl font-semibold text-white">
                  Hurricane Playing Card Deck
                </h2>
                <p className="text-medium text-white/70">
                  A custom deck I created and wanted to feature here. If you are interested, you can use code "ARTBYDAVID"for $5 off your order! I hope you enjoy it, and thank you for supporting me!
                </p>
              </div>

              <a
                href="https://disaster-preparedness-playing-cards.myshopify.com/"
                className="inline-flex rounded-full border border-white/10 bg-white/10 px-5 py-3 text-sm font-medium uppercase tracking-[0.2em] text-white transition hover:bg-white/20"
              >
                View project
              </a>
            </div>
          </div>
        </section>

        <Footer />
      </div>
    </main>
  );
}