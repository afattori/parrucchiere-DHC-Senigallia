import { Reveal } from "./Reveal";
import { salon } from "@/data/salon";

export const About = () => {
  return (
    <section
      id="cult"
      className="section-pad relative border-t border-border/50 py-[79px] pb-[70px] lg:py-[126px] lg:pb-[107px]"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="font-mono-display flex items-center gap-[22px] text-[10px] tracking-[1.2px]">
          <span className="text-clay">01</span> IL CULT
        </Reveal>

        <Reveal className="mt-[43px]">
          <h2 className="font-display text-[clamp(39px,4.7vw,68px)] font-semibold leading-[1.08] tracking-[-3px]">
            Il capello è materia.
            <br />
            <em className="font-medium italic">
              La tua identità, il nostro punto di partenza.
            </em>
          </h2>
        </Reveal>

        <div className="mt-[40px] grid grid-cols-[0.9fr_1fr] items-start gap-[12px] sm:mt-[55px] sm:grid-cols-[0.9fr_1fr] sm:gap-[32px] lg:grid-cols-[1fr_0.85fr] lg:items-center lg:gap-[48px]">
          <Reveal className="w-full">
            <a
              href="https://www.instagram.com/p/CxxJoaTNFqv/?img_index=1"
              target="_blank"
              rel="noreferrer"
              className="block w-full overflow-hidden rounded-[2px] border border-border/60 shadow-[0_20px_50px_-20px_rgba(18,59,53,0.25)] transition-transform hover:-translate-y-1"
            >
              <iframe
                src="https://www.instagram.com/p/CxxJoaTNFqv/embed"
                className="h-[267px] w-[111.12%] origin-top-left scale-90 sm:h-[420px] sm:w-full sm:scale-100 lg:h-[520px]"
                frameBorder={0}
                loading="lazy"
                scrolling="no"
                allowFullScreen
                title="Post Instagram di Diego Hair Cult"
              />
            </a>
          </Reveal>
          <Reveal delay={120} className="min-w-0">
            <p className="text-[13px] leading-[1.7] text-muted-foreground sm:text-[14px] sm:leading-[1.75]">
              Diego Hair Cult nasce dalla visione di Diego Avellini: uno spazio
              in cui tecnica, cura e accoglienza si fondono per offrire un
              servizio di altissimo livello. Per un taglio che ti somiglia, un
              colore che parla di te e un'esperienza che resta.
            </p>
            <p className="mt-3 text-[13px] leading-[1.7] text-muted-foreground sm:text-[14px] sm:leading-[1.75]">
              Uno staff preparato, simpatico e attento, in un ambiente inclusivo
              dove chiunque può sentirsi a proprio agio.
            </p>
            <a
              href={salon.instagram}
              target="_blank"
              rel="noreferrer"
              className="font-mono-display mt-[25px] inline-block text-[10px] uppercase tracking-[0.6px] text-foreground transition-colors hover:text-primary"
            >
              Segui il nostro mondo <span className="text-[16px]">↗</span>
            </a>
          </Reveal>
        </div>

        <div className="mt-[80px] grid grid-cols-1 border-t border-border sm:grid-cols-3 lg:mt-[105px]">
          {(salon.values ?? []).map((v, i) => (
            <Reveal
              key={v.no}
              delay={i * 100}
              className={`py-[26px] pr-[38px] ${
                i > 0 ? "sm:border-l sm:pl-[38px]" : ""
              }${i < (salon.values?.length ?? 0) - 1 ? " border-b sm:border-b-0" : ""}`}
            >
              <span className="font-mono-display text-[10px] text-clay">
                {v.no}
              </span>
              <h3 className="font-display mt-[25px] mb-2 text-[28px] font-semibold tracking-[-1px]">
                {v.title}
              </h3>
              <p className="max-w-[240px] text-[12px] leading-[1.65] text-muted-foreground">
                {v.desc}
              </p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
