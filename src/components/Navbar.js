import Link from "next/link";

const navItems = [
  { href: "https://keynocchio.com/", label: "Home" },
  { href: "/portfolio-and-artworks", label: "Portfolio & Artworks" },
  { href: "/comics", label: "Comics" },
  { href: "https://keynocchio.itch.io/", label: "Games", external: true },
  { href: "/about", label: "About" },
  { href: "#contact", label: "Contact" },
];

export default function Navbar() {
  return (
    <nav className="hidden px-4 py-8 text-xs uppercase tracking-[0.35em] text-white/60 sm:block sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-x-4 gap-y-3 sm:gap-x-6">
        {navItems.map((item) => {
          const content = (
            <span className="transition-colors hover:text-white">
              {item.label}
            </span>
          );

          if (item.external) {
            return (
              <a
                key={item.label}
                href={item.href}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center"
              >
                {content}
              </a>
            );
          }

          if (item.href.startsWith("#")) {
            return (
              <a key={item.label} href={item.href} className="inline-flex items-center">
                {content}
              </a>
            );
          }

          return (
            <Link key={item.label} href={item.href} className="inline-flex items-center">
              {content}
            </Link>
          );
        })}
      </div>
    </nav>
  );
}