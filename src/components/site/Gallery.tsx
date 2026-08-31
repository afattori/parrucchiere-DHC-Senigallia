import { Reveal } from "./Reveal";
import { galleryImages } from "@/data/salon";

export const Gallery = () => {
  return (
    <section
      id="gallery"
      className="section-pad relative border-t border-border/50 py-16 lg:py-32"
    >
      <div className="mx-auto max-w-7xl">
        <Reveal className="mb-16 max-w-2xl">
          <div className="mb-6 flex items-center gap-3 text-sm uppercase tracking-[0.4em] text-primary">
            <span className="h-px w-10 bg-primary/70" />
            Gallery
          </div>
          <h2 className="font-display text-5xl leading-tight text-foreground lg:text-6xl text-balance">
            Lavori che <span className="gold-text italic">parlano</span> per
            noi.
          </h2>
        </Reveal>

        <div className="grid grid-cols-2 gap-4 lg:grid-cols-4 lg:gap-6">
          {galleryImages.map((img, i) => (
            <Reveal
              key={img.src}
              delay={(i % 4) * 100}
              className={`group relative overflow-hidden rounded-lg ${
                i % 4 === 0 || i % 4 === 3 ? "row-span-2" : ""
              }`}
            >
              <div className="h-full min-h-[16rem]">
                <img
                  src={img.src}
                  alt={img.alt}
                  loading="lazy"
                  className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-0 left-0 p-5">
                <span className="text-[10px] uppercase tracking-[0.4em] text-primary">
                  {img.label}
                </span>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
};
