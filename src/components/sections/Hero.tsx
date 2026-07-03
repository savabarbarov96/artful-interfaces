import { ArrowRight, ArrowDown } from "lucide-react";
import heroBlocks from "@/assets/hero section.png";
import { Cross } from "@/components/home/primitives";
import { useProjectWizard } from "@/components/wizard/ProjectWizard";

const technologies = [
  "React",
  "NodeJS",
  "Supabase",
  "TailwindCSS",
  "TypeScript",
  "PostgreSQL",
  "Vite",
  "Framer Motion",
  "Next.js",
  "SQL",
];

const Hero = () => {
  const { openWizard } = useProjectWizard();

  return (
    <section className="relative min-h-screen flex flex-col bg-white text-ink overflow-hidden">
      {/* Blueprint grid */}
      <div className="absolute inset-0 aa-grid-paper" aria-hidden="true" />

      {/* Teal atmosphere behind illustration */}
      <div
        className="absolute right-[-10%] top-[10%] w-[55vw] h-[70vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 60% 45%, hsl(var(--aa-teal) / 0.10) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      {/* Vertical hairlines */}
      <div className="absolute left-6 md:left-10 top-0 bottom-0 w-px aa-rule-ink opacity-50 pointer-events-none" aria-hidden="true" />
      <div className="absolute right-6 md:right-10 top-0 bottom-0 w-px aa-rule-ink opacity-50 pointer-events-none" aria-hidden="true" />

      {/* Registration marks */}
      <Cross className="absolute left-[18px] md:left-[34px] top-28 text-ink/25 hidden sm:block" />
      <Cross className="absolute right-[18px] md:right-[34px] bottom-40 text-ink/25 hidden sm:block" />

      <div className="container relative z-10 flex-1 flex items-center pt-32 pb-16 md:pt-36">
        <div className="grid lg:grid-cols-[1.05fr_0.95fr] gap-14 lg:gap-8 items-center w-full">
          {/* Left — message */}
          <div>
            <div className="flex items-center gap-4 mb-7 animate-fade-up">
              <span className="aa-label text-signal">Automation Aid</span>
              <span className="h-px w-12 aa-rule-ink" />
              <span className="aa-label text-ink/65">Уебсайтове · AI · Автоматизация</span>
            </div>

            <h1 className="aa-display text-[clamp(1.8rem,4.2vw,3rem)] text-ink mb-7">
              <span className="block animate-fade-up">
                Вие развивате <span className="text-signal">бизнеса</span>.
              </span>
              <span className="block animate-fade-up delay-100">
                Ние се грижим за <span className="text-signal">сайта</span>.
              </span>
            </h1>

            <p className="font-plex text-lg md:text-xl text-ink/70 max-w-xl mb-9 leading-relaxed animate-fade-up delay-300">
              Изработка на уебсайт, AI интеграции и автоматизации за българския бизнес.
              Дизайн, разработка, хостинг и поддръжка — в един месечен план{" "}
              <span className="text-ink font-semibold whitespace-nowrap">от 99 €</span>, без висока начална
              инвестиция и без скрити такси.
            </p>

            <div className="flex flex-col sm:flex-row sm:items-center gap-4 animate-fade-up delay-400">
              <button
                type="button"
                onClick={openWizard}
                className="group inline-flex items-center justify-center gap-3 bg-signal text-white font-plex font-semibold text-sm uppercase tracking-[0.08em] px-8 py-4 rounded-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_40px_-12px_hsl(var(--aa-signal)/0.65)]"
              >
                Заяви проекта сега
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </button>
              <a
                href="#work"
                className="group inline-flex items-center justify-center gap-3 border border-ink/25 text-ink font-plex font-medium text-sm uppercase tracking-[0.08em] px-8 py-4 rounded-sm transition-all duration-300 hover:border-ink/60 hover:bg-ink/5"
              >
                Вижте проектите ни
                <ArrowDown className="w-4 h-4 group-hover:translate-y-0.5 transition-transform" />
              </a>
            </div>

            <div className="flex items-center gap-3 mt-9 animate-fade-up delay-500">
              <span className="w-1.5 h-1.5 rounded-full bg-machine animate-pulse" />
              <span className="font-plexmono text-xs text-ink/65 tracking-wider">Отговаряме до 24 часа</span>
            </div>
          </div>

          {/* Right — owned isometric illustration */}
          <div className="relative hidden md:block animate-fade-in delay-300">
            <div className="relative aa-drift">
              <img
                src={heroBlocks}
                alt="Изометрична илюстрация на дигитални градивни блокове — уебсайтове, AI и автоматизации"
                className="w-full max-w-[540px] mx-auto drop-shadow-[0_30px_50px_hsl(var(--aa-teal)/0.25)]"
                loading="eager"
              />
            </div>
            {/* Schematic caption */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 flex items-center gap-3">
              <span className="h-px w-8 aa-rule-ink" />
              <span className="font-plexmono text-[10px] uppercase tracking-[0.25em] text-ink/55">
                fig. 01 — дигитална екосистема
              </span>
              <span className="h-px w-8 aa-rule-ink" />
            </div>
          </div>
        </div>
      </div>

      {/* Technology ticker */}
      <div className="relative z-10 border-t border-ink/10 bg-bone">
        <div className="flex items-center">
          <div className="hidden md:flex items-center gap-3 flex-shrink-0 px-8 py-5 border-r border-ink/10">
            <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
            <p className="font-plexmono text-[11px] uppercase tracking-[0.18em] text-ink/65 whitespace-nowrap">
              Използваме най-новите технологии
            </p>
          </div>
          <div className="flex-1 overflow-hidden py-5" aria-hidden="true">
            <div className="flex items-center gap-10 aa-ticker w-max hover:[animation-play-state:paused]">
              {[...technologies, ...technologies].map((name, i) => (
                <span key={i} className="flex items-center gap-10 whitespace-nowrap">
                  <span className="font-plexmono text-sm text-ink/70 tracking-wider">{name}</span>
                  <span className="text-signal/60 text-xs">+</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
