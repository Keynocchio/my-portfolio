import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ArtShowcase from '@/components/ArtShowcase';

export const metadata = {
  title: 'Portfolio | Keynocchio',
  description: 'Protected art gallery and showcase for Keynocchio work.',
};

export default function PortfolioPage() {
  return (
    <main className="min-h-screen text-white relative overflow-hidden">
      <div className="fixed inset-0 bg-tile" />

      <div className="relative min-h-screen bg-black/20">
        <Navbar />
        <section className="px-6 pt-8 pb-16 text-center">
          <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">
            Portfolio & Artworks
          </p>
          <h1 className="text-4xl font-black uppercase tracking-[0.2em] sm:text-5xl">
            A showcase designed to feel premium and protected
          </h1>
          <p className="mx-auto mt-4 max-w-2xl text-sm text-white/70 sm:text-base">
            This gallery presents your work with a polished presentation while adding visible friction for casual copying.
          </p>
        </section>

        <ArtShowcase />
        <Footer />
      </div>
    </main>
  );
}
