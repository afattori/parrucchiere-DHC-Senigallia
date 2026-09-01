import { useEffect, useState } from "react";

const links = [
  { href: "#cult", label: "Il salone" },
  { href: "#servizi", label: "Servizi" },
  { href: "#academy", label: "Academy" },
  { href: "#contatti", label: "Contatti" },
];

export const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 flex items-center justify-between gap-3 px-[clamp(16px,5vw,36px)] py-4 transition-colors duration-300 sm:px-[clamp(28px,6vw,72px)] sm:py-5 lg:px-[clamp(40px,8vw,145px)] ${
        scrolled
          ? "bg-foreground/95 text-background backdrop-blur-sm shadow-[0_1px_0_rgba(244,240,232,0.12)]"
          : "bg-transparent text-background"
      }`}
    >
      <a
        href="#top"
        aria-label="Diego Hair Cult, inizio pagina"
        className="flex shrink-0 flex-col leading-[0.85]"
      >
        <span className="text-[13px] font-extrabold tracking-[-0.8px] sm:text-[15px]">
          DIEGO
        </span>
        <span className="mt-[5px] text-[8px] font-medium tracking-[1.5px] sm:text-[9px]">
          HAIR CULT
        </span>
      </a>

      <nav
        aria-label="Navigazione principale"
        className="flex items-center gap-2 sm:gap-6 lg:gap-7"
      >
        {links.map((l) => (
          <a
            key={l.href}
            href={l.href}
            className="whitespace-nowrap text-[9px] font-bold uppercase tracking-wide text-background/80 transition-colors hover:text-background sm:text-xs"
          >
            <span className="hidden sm:inline">{l.label}</span>
            <span className="sm:hidden">
              {l.href === "#cult" ? l.label : l.label.split(" ")[0]}
            </span>
          </a>
        ))}
        <a
          href="#contatti"
          className="shrink-0 rounded-full border border-background/40 px-2.5 py-2 text-[9px] font-bold uppercase tracking-wide transition-colors hover:bg-background hover:text-foreground sm:px-[17px] sm:py-[11px] sm:text-xs"
        >
          Prenota
        </a>
      </nav>
    </header>
  );
};
