export default function AboutPage() {
  return (
    <main className="min-h-screen bg-black text-white">
      <div className="mx-auto flex min-h-screen max-w-4xl flex-col justify-center px-6 py-20 text-center">
        <p className="mb-3 text-xs uppercase tracking-[0.35em] text-white/50">About</p>
        <h1 className="text-4xl font-semibold tracking-[0.2em]">More about you</h1>
        <p className="mx-auto mt-4 max-w-2xl text-base text-white/70">
          This page is ready for your bio, story, and background.
        </p>
      </div>
    </main>
  );
}
