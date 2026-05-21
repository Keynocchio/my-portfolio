export default function Footer() {
  return (
    <footer className="border-t border-white/10 py-10 text-center">
      <div className="flex justify-center gap-6 text-sm uppercase tracking-[0.2em] text-white/60 mb-6">

        <a
          href="https://www.youtube.com/@keynocchio_official"
          target="_blank"
          className="hover:text-white"
        >
          YouTube
        </a>

        <a
          href="https://www.tiktok.com/@keynocchio"
          target="_blank"
          className="hover:text-white"
        >
          TikTok
        </a>

        <a
          href="https://www.instagram.com/keynocchio/"
          target="_blank"
          className="hover:text-white"
        >
          Instagram
        </a>

      </div>

      <p className="text-white/40 text-sm">
        Keynocchio © 2026
      </p>
    </footer>
  );
}