import { salon } from "@/data/salon";
import { Reveal } from "./Reveal";

export const Hero = () => {
  return (
    <section
      id="hero"
      className="relative grid min-h-[100svh] grid-cols-1 overflow-hidden px-[clamp(20px,6vw,36px)] pb-16 pt-[110px] text-background sm:px-[clamp(32px,6vw,72px)] lg:grid-cols-[1.1fr_0.9fr] lg:px-[clamp(40px,8vw,145px)] lg:pb-[68px] lg:pt-[145px]"
    >
      {/* Background image with dark overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="https://vibe.filesafe.space/1788180416491982994/attachments/777cb2fe-99ae-491f-9167-700ea99cbff7.jpg"
          alt="Interno salone Diego Hair Cult"
          className="h-full w-full object-cover object-center"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-foreground/90 via-foreground/80 to-foreground/60 sm:from-foreground/95 sm:via-foreground/85 sm:to-foreground/65" />
      </div>

      {/* Copy */}
      <Reveal className="relative z-[2]">
        <p className="font-mono-display mb-[22px] text-[10px] font-medium tracking-[1.2px] text-primary">
          SENIGALLIA · EST. IN PASSIONE
        </p>
        <h1 className="font-display text-[clamp(48px,6.1vw,94px)] font-semibold leading-[0.93] tracking-[-3px]">
          Non seguiamo
          <br />
          i trend.
          <br />
          <em className="font-medium italic">Li rendiamo tuoi.</em>
        </h1>
        <p className="mt-6 max-w-[405px] text-[13px] leading-relaxed text-background/75 sm:mt-7 sm:text-[15px]">
          Un rituale di bellezza costruito intorno a te, ai tuoi capelli e a
          come vuoi sentirti quando esci dal salone.
        </p>
        <div className="mt-6 flex flex-col items-start gap-5 sm:mt-7 sm:flex-row sm:items-center sm:gap-7">
          <a
            href={salon.phoneHref}
            className="inline-flex items-center gap-6 rounded-full bg-primary px-[21px] py-[15px] text-[10px] font-extrabold uppercase tracking-[0.7px] text-primary-foreground transition-transform hover:-translate-y-[3px]"
          >
            Prenota il tuo momento
            <span className="text-[15px]">↗</span>
          </a>
          <a
            href="#cult"
            className="font-mono-display text-[10px] uppercase tracking-[0.6px] text-background/80 transition-colors hover:text-background"
          >
            Scopri il cult <span className="ml-2 text-[16px]">↓</span>
          </a>
        </div>
      </Reveal>

      {/* Visual */}
      <Reveal
        delay={120}
        className="relative z-[2] mt-12 flex flex-col items-center gap-4 lg:mt-0 lg:flex-row lg:items-center lg:justify-end"
      >
        <div className="relative h-[min(56vw,560px)] w-[min(36vw,385px)] overflow-hidden bg-clay max-lg:h-[260px] max-lg:w-[180px]">
          <img
            src={`${import.meta.env.BASE_URL}your-hair-energy.png`}
            alt=""
            aria-hidden="true"
            className="absolute inset-0 h-full w-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-foreground/75 via-foreground/10 to-transparent" />
          <p className="absolute right-4 top-[17px] font-mono-display text-[10px] tracking-[1px] text-background drop-shadow-md [writing-mode:vertical-rl]">
            THE PERSONAL CUT
          </p>
          <p className="absolute bottom-6 left-5 font-display text-[clamp(24px,2.4vw,31px)] font-semibold leading-[0.82] tracking-[-1px] text-background drop-shadow-md">
            YOUR
            <br />
            HAIR,
            <br />
            YOUR
            <br />
            ENERGY.
          </p>
        </div>

        {/* Rating card */}
        <div className="grid min-w-[150px] grid-cols-[auto_1fr] gap-x-[11px] bg-background p-[15px] text-foreground max-lg:min-w-[126px] max-lg:p-[11px] lg:absolute lg:bottom-6 lg:left-[-84px]">
          <strong className="font-display row-span-2 text-[32px] font-semibold leading-none max-lg:text-[26px]">
            5.0
          </strong>
          <span className="text-[11px] tracking-[1px] text-primary">★★★★★</span>
          <small className="mt-[3px] text-[8px] opacity-65">
            110 recensioni Google
          </small>
        </div>
      </Reveal>

      {/* Scroll mark */}
      <a
        href="#cult"
        className="absolute bottom-[26px] left-[clamp(22px,4vw,70px)] hidden items-center gap-[15px] font-mono-display text-[9px] tracking-[1px] text-background/70 lg:flex"
      >
        <span>SCROLL TO FEEL</span>
        <b className="text-[16px]">↓</b>
      </a>
    </section>
  );
};
