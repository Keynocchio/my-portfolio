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
        <section className="text-center pt-6 pb-16 px-4">
          <h1 className="text-6xl md:text-8xl font-black tracking-tight">
            KEYNOCCHIO
          </h1>
          <p className="mx-auto mt-6 max-w-3xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
            Digital art, animation, video game development, and creative media.
          </p>
        </section>

        {/* ABOUT */}
        <section className="px-6 py-24">
          <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-6 text-center">
            <div className="flex flex-row items-center justify-center gap-4">
              <img
                src="/images/keynocchio-head-website.png"
                alt="Character illustration"
                className="h-64 w-auto max-w-none object-contain sm:h-80"
              />

              <div className="relative flex items-center justify-center">
                <img
                  src="/images/speech-bubble.png"
                  alt="Speech bubble"
                  className="h-48 w-auto max-w-full object-contain sm:h-56 -mt-60"
                />
                <p className="absolute inset-0 flex items-start justify-center px-10 pt-10 text-center text-3xl font-black text-black sm:text-4xl -mt-60">
                  Hi, I&apos;m Keynocchio!
                </p>
              </div>
            </div>

            <p className="mx-auto max-w-2xl text-lg leading-8 text-white/80 sm:text-xl sm:leading-9">
              Keynocchio is a vessel for me to share my work across digital art,
              animation, and video game design, and he is the way I "unlock" my creativity and share it with the world!
              I am a digital artist, animator, and game designer who loves to experiment with different mediums and techniques.
              My work is often inspired by my love for storytelling, music, and culture.
            </p>
          </div>
        </section>

        {/* LATEST VIDEO */}
        <LatestVideo />

        

        <Footer />
      </div>
    </main>
  );
}