import { Check, X } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

const willGet = [
  "Персонализиран дизайн с фокус върху доверие и конверсии",
  "Бърз сайт с оптимизации за скорост и стабилност",
  "Перфектна мобилна версия",
  "Ясна структура, водеща към действие",
  "Домейн, хостинг и SSL – всичко поддържано",
  "Форми + интеграции (Analytics, пиксели, CRM)",
  "SEO настройка (мета тагове, индексиране)",
  "Месечна поддръжка без доплащане",
];

const wontGet = [
  "Висока начална инвестиция",
  "Разтеглени срокове",
  "Претрупани пакети с ненужни екстри",
  "Скрито оскъпяване и \"изненади\"",
  "Бавен сайт с компромисен UX",
  "Липса на поддръжка след пускане",
  "Дълги договори без гъвкавост",
  "DIY решения без професионален вид",
];

const Proposition = () => {
  const { ref, inView } = useReveal<HTMLElement>();

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-60 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="01"
            label="Ясна стойност"
            title={
              <>
                Какво получавате — <span className="text-machine-deep">и какво си спестявате</span>
              </>
            }
            lead="Без дребен шрифт: това е, което всеки наш клиент получава от първия месец."
          />
        </div>

        {/* Ledger */}
        <div className="mt-12 border border-ink/15 bg-bone relative aa-reveal" style={{ transitionDelay: "120ms" }}>
          <Cross className="absolute -top-[7px] -left-[7px] text-ink/55" />
          <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/55" />

          {/* Column headers */}
          <div className="grid md:grid-cols-2 border-b border-ink/15">
            <div className="flex items-center gap-3 px-6 md:px-8 py-5 border-b md:border-b-0 md:border-r border-ink/15">
              <span className="w-8 h-8 rounded-sm bg-machine/15 border border-machine/30 flex items-center justify-center">
                <Check className="w-4 h-4 text-machine-deep" strokeWidth={2.5} />
              </span>
              <h3 className="font-heading text-xl md:text-2xl text-ink">Ще получиш</h3>
            </div>
            <div className="flex items-center gap-3 px-6 md:px-8 py-5">
              <span className="w-8 h-8 rounded-sm bg-ink/5 border border-ink/15 flex items-center justify-center">
                <X className="w-4 h-4 text-ink/55" strokeWidth={2.5} />
              </span>
              <h3 className="font-heading text-xl md:text-2xl text-ink/60">Няма да получиш</h3>
            </div>
          </div>

          {/* Rows */}
          <div className="grid md:grid-cols-2">
            <ul className="md:border-r border-ink/15">
              {willGet.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 px-6 md:px-8 py-3.5 border-b border-ink/10 last:border-b-0 aa-reveal"
                  style={{ transitionDelay: `${180 + i * 45}ms` }}
                >
                  <span className="font-plexmono text-[10px] text-machine-deep/70 mt-1.5 w-6 flex-shrink-0">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-plex text-[0.95rem] md:text-base text-ink font-medium leading-snug">{item}</span>
                </li>
              ))}
            </ul>
            <ul className="border-t md:border-t-0 border-ink/15">
              {wontGet.map((item, i) => (
                <li
                  key={i}
                  className="flex items-start gap-3.5 px-6 md:px-8 py-3.5 border-b border-ink/10 last:border-b-0 aa-reveal"
                  style={{ transitionDelay: `${220 + i * 45}ms` }}
                >
                  <X className="w-3.5 h-3.5 text-signal/60 mt-1.5 flex-shrink-0" strokeWidth={2.5} />
                  <span className="font-plex text-[0.95rem] md:text-base text-ink/60 leading-snug line-through decoration-ink/25">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Proposition;
