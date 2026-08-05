import Navbar from "@/components/Navbar";
import LatestVideo from "@/components/LatestVideo";
import Footer from "@/components/Footer";

export default function HomePage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-tile" aria-hidden="true" />

      <div className="relative z-10 bg-black/20 min-h-screen">
        <Navbar />

        <section className="text-center pt-12 pb-8 px-4">
          <h1 className="text-5xl font-extrabold tracking-tight">KEYNOCCHIO</h1>
          <p className="mx-auto mt-4 max-w-2xl text-base text-white/80">
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
            <p className="text-lg text-white/80">
              Welcome — this is a simplified version of the site. Images and
              artwork have been removed; content is kept minimal for now.
            </p>
          </div>
        </section>

        <LatestVideo />

        <Footer />
      </div>
    </main>
  );
}