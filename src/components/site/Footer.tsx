import { salon } from "@/data/salon";

export const Footer = () => {
  return (
    <footer className="flex flex-col items-start gap-5 border-t border-background/20 bg-foreground px-[clamp(20px,6vw,36px)] py-9 text-background sm:px-[clamp(32px,6vw,72px)] lg:px-[clamp(40px,8vw,145px)] max-lg:flex-col">
      <a href="#top" className="flex flex-col leading-[0.85]">
        <span className="text-[15px] font-extrabold tracking-[-0.8px]">
          DIEGO
        </span>
        <span className="mt-[5px] text-[9px] font-medium tracking-[1.5px]">
          HAIR CULT
        </span>
      </a>
      <p className="font-mono-display order-3 text-[9px] tracking-[0.5px] text-background/70">
        © {new Date().getFullYear()} Diego Hair Cult · Senigallia
      </p>
      <a
        href="#top"
        className="font-mono-display text-[9px] tracking-[0.5px] text-background/70 transition-colors hover:text-background"
      >
        TORNA SU ↑
      </a>
    </footer>
  );
};
