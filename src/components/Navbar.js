import Link from "next/link";

export default function Navbar() {
  return (
    <nav className="flex justify-center gap-5 py-8 text-xs uppercase tracking-[0.25em] text-white/50">
      <Link href="/">Home</Link>
      <Link href="/portfolio">Portfolio & Artworks</Link>
      <Link href="/games">Games</Link>
      <Link href="/about">About</Link>
      <Link href="/contact">Contact</Link>
    </nav>
  );
}