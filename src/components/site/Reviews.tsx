import { Reveal } from "./Reveal";
import { reviews, salon } from "@/data/salon";
import { Star, Quote } from "lucide-react";

export const Reviews = () => {
  return (
    <section
      id="reviews"
      className="section-pad relative overflow-hidden border-t border-border/50 bg-secondary/30 py-16 lg:py-32"
    >
      <div className="absolute inset-0 grain opacity-50" />
      <div className="relative mx-auto max-w-7xl">
        <Reveal className="mb-16 text-center">
          <div className="mb-6 flex items-center justify-center gap-3 text-sm uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary/70" />
            Recensioni
            <span className="h-px w-10 bg-primary/70" />
          </div>
          <h2 className="font-display text-5xl leading-tight text-foreground lg:text-6xl text-balance">
            <span className="gold-text">{salon.rating.toFixed(1)}</span> su 5 ·{" "}
            {salon.reviewCount} recensioni
          </h2>
        </Reveal>

        <div className="grid gap-6 lg:grid-cols-3">
          {reviews.map((r, i) => (
            <Reveal
              key={r.name}
              delay={i * 120}
              className="relative flex flex-col rounded-lg border border-border/60 bg-card p-8"
            >
              <Quote size={32} className="mb-4 text-primary/40" />
              <div className="mb-4 flex">
                {Array.from({ length: 5 }).map((_, s) => (
                  <Star
                    key={s}
                    size={16}
                    className="fill-primary text-primary"
                  />
                ))}
              </div>
              <p className="flex-1 leading-relaxed text-muted-foreground">
                "{r.text}"
              </p>
              <div className="mt-6 border-t border-border/60 pt-4">
                <div className="font-display text-xl text-foreground">
                  {r.name}
                </div>
                <div className="mt-1 text-xs uppercase tracking-widest text-muted-foreground">
                  {r.meta}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-12 text-center">
          <a
            href={salon.maps}
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-border px-8 py-4 text-sm uppercase tracking-widest text-foreground transition-colors hover:border-primary hover:text-primary"
          >
            Leggi tutte le recensioni su Google
          </a>
        </Reveal>
      </div>
    </section>
  );
};
