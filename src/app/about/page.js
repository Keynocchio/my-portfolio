import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const faqs = [
  {
    question: "Who are you?",
    answer: "My real name is David! I am currently a college student studying both computer science and digital art: animation, but have decided to dedicate myself to creating projects and sharing my work, hoping to learn as time goes on! I have great ambitions to accomplish what I can, and I plan to spend my time bringing my ideas to life through any avenue, whether that be art, video games, or animation!",
  },
  {
    question: "What is Keynocchio?",
    answer: "Well, Keynocchio is supposed to be my little mascot, a brand that I use when I share my work online. He is effectively a vessel, or a puppet, that I use to help me \"unlock\" my creativity! His design is inspired by characters such as Pinocchio, Cuphead, and other cartoons that I have grown up with. The name is, of course, inspired by Pinocchio, my favorite story growing up, as well as keys, which represent the power to grow as an artist and open the door for new opportunities. I want to take this opportunity to especially thank you for visiting my website!",
  },
  {
    question: "What are your goals?",
    answer: "My goal is to put something out there that I can be proud of, that I can look back and see that I had grown so much to point of being able to create something meaningful. I think that comes from an early mindset I've had since I was a kid, when I would see cartoons and shows and works of art, and feel inspired; I would do anything to be able to inspire even one person, to set them on their path like how those who inspired me have.",
  },
  {
    question: "What can people expect from you?",
    answer: "I would say to hopefully expect a consistent stream of content, including YouTube videos, TikTok art, animation projects, and video game dev-logs. That take a bit of time to do, especially considering that I have relationships with those I love, schoolwork to complete, a part-time job to work at, and, of course, me time! But I suspect I will dedicate myself easily to this, and have already completed smaller projects such as ones I have posted on TikTok, so get ready!",
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
  <p className="mb-3 text-lg uppercase tracking-[0.35em] text-white">
    About
  </p>

  <div className="flex items-center gap-3 sm:gap-5">
  <div className="flex w-32 shrink-0 justify-center sm:w-50 md:w-75">
    <img
      src="/images/keynocchio-sideway.png"
      alt="Keynocchio sideways"
      className="h-auto max-h-40 w-auto object-contain sm:max-h-72 md:max-h-96 animate-[float_3s_ease-in-out_infinite]"
    />
  </div>

  <h1 className="min-w-0 flex-1 text-left text-3xl font-semibold tracking-[0.12em] text-white sm:text-5xl sm:tracking-[0.2em]">
    Q&A About Me!
  </h1>
</div>
</div>

          <section className="space-y-6">
            {faqs.map((item) => (
              <div key={item.question} className="border-b border-white/10 pb-5 last:border-b-0 last:pb-0">
                <h2 className="text-xl font-semibold uppercase tracking-[0.2em] text-white">
                  {item.question}
                </h2>
                <p className="mt-3 text-lg leading-7 text-white/80">
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
