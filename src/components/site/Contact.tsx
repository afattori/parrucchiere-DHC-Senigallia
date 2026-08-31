import { Reveal } from "./Reveal";
import { salon } from "@/data/salon";

export const Contact = () => {
  return (
    <section
      id="contatti"
      className="grid grid-cols-1 bg-foreground text-background lg:grid-cols-2"
    >
      <Reveal className="section-pad py-[75px] lg:py-[110px]">
        <div className="font-mono-display flex items-center gap-[22px] text-[10px] tracking-[1.2px]">
          <span className="text-primary">04</span> VIENI A TROVARCI
        </div>
        <h2 className="font-display mt-[43px] mb-[43px] text-[clamp(39px,4.7vw,68px)] font-semibold leading-[0.93] tracking-[-3px]">
          Il tuo nuovo
          <br />
          <em className="font-medium italic">rituale preferito.</em>
        </h2>
        <a
          href={salon.phoneHref}
          className="inline-flex items-center gap-6 rounded-full bg-primary px-[21px] py-[15px] text-[10px] font-extrabold uppercase tracking-[0.7px] text-primary-foreground transition-transform hover:-translate-y-[3px]"
        >
          Chiama per prenotare <span className="text-[15px]">↗</span>
        </a>
      </Reveal>

      <Reveal
        delay={120}
        className="flex flex-col justify-center bg-primary px-[clamp(20px,6vw,36px)] py-[65px] text-primary-foreground sm:px-[clamp(32px,6vw,72px)] lg:px-[clamp(40px,8vw,125px)] lg:py-[110px]"
      >
        <a
          href={salon.maps}
          target="_blank"
          rel="noreferrer"
          className="font-display text-[clamp(23px,2.2vw,32px)] font-semibold leading-[1.1] tracking-[-1px]"
        >
          Via Capanna, 7/1
          <br />
          60019 Senigallia AN <span className="font-sans text-[18px]">↗</span>
        </a>
        <a
          href={salon.phoneHref}
          className="mt-[19px] mb-[43px] text-[12px] font-extrabold"
        >
          {salon.phone}
        </a>
        <div className="border-t border-primary-foreground/30 pt-[14px] text-[11px] tracking-[0.3px]">
          <p className="mb-[11px] flex justify-between gap-[15px]">
            <span>Martedì — Mercoledì</span>
            <b className="font-normal whitespace-nowrap">08:30 — 18:30</b>
          </p>
          <p className="mb-[11px] flex justify-between gap-[15px]">
            <span>Giovedì</span>
            <b className="font-normal whitespace-nowrap">12:00 — 20:00</b>
          </p>
          <p className="mb-[11px] flex justify-between gap-[15px]">
            <span>Venerdì</span>
            <b className="font-normal whitespace-nowrap">08:30 — 18:00</b>
          </p>
          <p className="mb-[11px] flex justify-between gap-[15px]">
            <span>Sabato</span>
            <b className="font-normal whitespace-nowrap">09:00 — 18:00</b>
          </p>
          <p className="flex justify-between gap-[15px]">
            <span>Domenica — Lunedì</span>
            <b className="font-normal whitespace-nowrap">Chiuso</b>
          </p>
        </div>
        <a
          href={salon.instagram}
          target="_blank"
          rel="noreferrer"
          className="mt-[25px] border-t border-primary-foreground/30 pt-[14px] text-[11px] tracking-[0.3px]"
        >
          Instagram <span className="ml-3">{salon.instagramHandle}</span> ↗
        </a>
      </Reveal>
    </section>
  );
};
