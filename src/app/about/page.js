import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Who are you?",
    answer:
      "A",
  },
  {
    question: "What do you do?",
    answer:
      "A",
  },
  {
    question: "What is your process?",
    answer:
      "A",
  },
  {
    question: "What can people expect here?",
    answer:
      "A",
  },
];

export default function AboutPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-black text-white">
      <div className="fixed inset-0 bg-tile" aria-hidden="true" />

      <div className="relative z-10 min-h-screen bg-black/20">
        <Navbar />

        <div className="mx-auto flex max-w-4xl flex-col px-6 py-16 sm:px-8 lg:px-12">
          <div className="mb-10 text-center">
            <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white">About</p>
            <h1 className="text-4xl font-semibold tracking-[0.2em] sm:text-5xl text-white">
              Q&A About Me & Keynocchio
            </h1>
            <p className="mx-auto mt-4 max-w-2xl text-base leading-7 text-white/80">
              Here I will answer some questions about what Keynocchio is, what I do, and what you can expect from me!
            </p>
          </div>

          <section className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <h2 className="text-lg font-semibold uppercase tracking-[0.2em] text-white">
                  {item.question}
                </h2>
                <p className="mt-3 text-sm leading-7 text-white/80">
                  {item.answer}
                </p>
              </div>
            ))}
          </section>
        </div>
        <Footer />
      </div>
    </main>
  );
}
