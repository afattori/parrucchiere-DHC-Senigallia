import { Reveal } from "./Reveal";
import { salon } from "@/data/salon";

export const Academy = () => {
  return (
    <section
      id="academy"
      className="section-pad grid grid-cols-1 items-center gap-[44px] py-[70px] lg:grid-cols-[0.85fr_1.15fr] lg:gap-[clamp(45px,8vw,140px)] lg:py-[120px]"
    >
      {/* Art */}
      <Reveal className="relative h-[360px] overflow-hidden bg-foreground text-background lg:h-[475px]">
        <img
          src="https://vibe.filesafe.space/1788180416491982994/assets/510f6260-c257-4fdd-a891-fe55aaa5735d.png"
          alt="Postazione di formazione del corso Diego Academy"
          className="absolute inset-0 h-full w-full object-cover"
          loading="lazy"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/30 to-foreground/45" />
        <p className="font-mono-display absolute left-[22px] top-[19px] text-[12px] leading-[1.5] tracking-[1.2px]">
          KEEP LEARNING
          <br />
          KEEP CREATING
        </p>
        <div className="font-display absolute bottom-[18px] left-7 text-[clamp(43px,5vw,70px)] font-semibold leading-[0.77] tracking-[-3px]">
          CRAFT
          <br />
          IS
          <br />
          CONTAGIOUS
        </div>
      </Reveal>

      {/* Copy */}
      <Reveal delay={120}>
        <div className="font-mono-display flex items-center gap-[22px] text-[10px] tracking-[1.2px]">
          <span className="text-clay">03</span> DIEGO ACADEMY
        </div>
        <h2 className="font-display mt-[43px] mb-[23px] text-[clamp(39px,4.7vw,68px)] font-semibold leading-[0.93] tracking-[-3px]">
          Condividere la tecnica.
          <br />
          <em className="font-medium italic">Moltiplicare l'ispirazione.</em>
        </h2>
        <p className="mb-7 max-w-[490px] text-[14px] leading-[1.75] text-muted-foreground">
          Diego è{" "}
          <strong className="text-foreground">
            milk_shake International Artist
          </strong>
          : la formazione è parte del suo linguaggio. Corsi, incontri e giornate
          di ispirazione per professionisti che vogliono far crescere il proprio
          talento.
        </p>
        <a
          href={salon.instagram}
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-6 rounded-full bg-foreground px-[21px] py-[15px] text-[10px] font-extrabold uppercase tracking-[0.7px] text-background transition-transform hover:-translate-y-[3px]"
        >
          Scopri i prossimi corsi <span className="text-[15px]">↗</span>
        </a>
        <small className="mt-[14px] block max-w-[350px] text-[10px] leading-[1.5] opacity-65">
          Per date, modalità e disponibilità, scrivici su Instagram.
        </small>
      </Reveal>
    </section>
  );
};
