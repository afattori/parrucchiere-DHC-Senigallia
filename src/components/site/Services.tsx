import { Reveal } from "./Reveal";
import { services, salon } from "@/data/salon";

export const Services = () => {
  return (
    <section
      id="servizi"
      className="bg-foreground px-0 py-[75px] pb-[60px] text-background lg:py-[110px] lg:pb-[73px]"
    >
      <div className="section-pad">
        <Reveal className="font-mono-display flex items-center gap-[22px] text-[10px] tracking-[1.2px]">
          <span className="text-primary">02</span> RITUALI DI STILE
        </Reveal>
        <Reveal delay={80}>
          <h2 className="font-display mt-[43px] text-[clamp(39px,4.7vw,68px)] font-semibold leading-[0.93] tracking-[-3px]">
            Fatto per te.
            <br />
            <em className="font-medium italic">Non in serie.</em>
          </h2>
        </Reveal>
      </div>

      <div className="mt-[83px] border-t border-background/24">
        {services.map((s, i) => (
          <Reveal
            key={s.no}
            delay={i * 80}
            className="group grid grid-cols-[30px_1fr_auto] items-center gap-[10px] border-b border-background/24 px-[clamp(20px,6vw,36px)] py-[25px] transition-all duration-300 hover:bg-foreground/90 hover:pl-[calc(clamp(20px,6vw,36px)+12px)] sm:px-[clamp(32px,6vw,72px)] sm:hover:pl-[calc(clamp(32px,6vw,72px)+12px)] lg:grid-cols-[12%_1fr_auto] lg:gap-5 lg:px-[clamp(40px,8vw,145px)] lg:hover:pl-[calc(clamp(40px,8vw,145px)+12px)]"
          >
            <span className="font-mono-display text-[10px] text-primary">
              {s.no}
            </span>
            <div>
              <h3 className="font-display text-[clamp(28px,3.3vw,47px)] font-medium tracking-[-1px]">
                {s.title}
              </h3>
              <p className="mt-[5px] max-w-[400px] text-[11px] leading-[1.5] text-background/65">
                {s.desc}
              </p>
            </div>
            <span className="text-[27px] text-primary">↗</span>
          </Reveal>
        ))}
      </div>

      <div className="section-pad mt-[45px] flex flex-col items-start gap-[17px] sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-[20px] font-medium">
          Non sai da dove iniziare?
        </p>
        <a
          href={salon.phoneHref}
          className="inline-flex items-center gap-6 rounded-full border border-primary px-[21px] py-[15px] text-[10px] font-extrabold uppercase tracking-[0.7px] text-primary transition-transform hover:-translate-y-[3px]"
        >
          Parliamone al telefono <span className="text-[15px]">↗</span>
        </a>
      </div>
    </section>
  );
};
