import { Reveal } from "./Reveal";
import { salon } from "@/data/salon";

export const Contact = () => {
  const weekdayNames = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const currentWeekday = new Intl.DateTimeFormat("en-US", {
    timeZone: "Europe/Rome",
    weekday: "short",
  }).format(new Date());
  const currentDayIndex = weekdayNames.indexOf(currentWeekday);

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
        <div className="space-y-1 border-t border-primary-foreground/30 pt-[14px] text-[11px] tracking-[0.3px]">
          {salon.hours.map(({ day, time }, index) => {
            const isToday = index === currentDayIndex;

            return (
              <p
                key={day}
                aria-current={isToday ? "date" : undefined}
                className={`flex items-center justify-between gap-[15px] rounded-lg px-3 py-2 transition-colors ${
                  isToday
                    ? "bg-primary-foreground font-bold text-foreground shadow-sm"
                    : "text-primary-foreground"
                }`}
              >
                <span>{day}</span>
                <b className="font-normal whitespace-nowrap">{time}</b>
              </p>
            );
          })}
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
