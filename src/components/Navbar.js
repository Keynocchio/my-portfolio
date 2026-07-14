import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-6 py-8 text-[10px] uppercase tracking-[0.3em] text-white/70 sm:gap-8">
      <Link href="#" className="transition hover:text-white">
        Home
      </Link>
      <Link href="#about" className="transition hover:text-white">
        About
      </Link>
      <Link href="#videos" className="transition hover:text-white">
        Videos
      </Link>
    </nav>
  );
}