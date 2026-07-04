import { Check, ArrowRight } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";
import { useProjectWizard } from "@/components/wizard/ProjectWizard";

/**
 * Placeholder pricing anchors for the AI agent development page. This is a new,
 * unproven pricing shape (setup fee + monthly retainer) distinct from the
 * standard 99/299 € website subscription — the owner should confirm these
 * numbers against real project costs before launch.
 */
const plans = [
  {
    badge: "Единичен агент",
    title: "Един AI агент",
    subtitle: "За продажби, поддръжка или конкретна операция",
    setupEur: "1500",
    monthlyEur: "299",
    description:
      "Изграждаме един автономен AI агент, свързан с вашите данни и инструменти, готов да работи 24/7.",
    features: [
      "Проектиране на агента и неговите задачи",
      "Свързване с вашите данни и инструменти",
      "Тестване и оценка преди пускане в реална работа",
      "Мониторинг и месечни подобрения",
      "Хостинг и поддръжка на агента",
    ],
    cta: "Заяви проекта сега",
    isPopular: false,
  },
  {
    badge: "Екип от агенти",
    title: "Мулти-агентна система",
    subtitle: "За бизнеси с няколко процеса за автоматизация",
    setupEur: "3500",
    monthlyEur: "599",
    description:
      "Няколко свързани агенти, всеки със своя роля, координирани в обща система за продажби, поддръжка и операции.",
    features: [
      "Всичко от плана за един агент",
      "Няколко координирани агента с отделни роли",
      "Разширена интеграция с CRM и вътрешни системи",
      "Приоритетно наблюдение и итерации",
      "Личен консултант за развитието на системата",
    ],
    cta: "Заяви проекта сега",
    isPopular: true,
  },
];

const AIAgentPricing = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.1);
  const { openWizard } = useProjectWizard();

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="04"
            label="Ориентировъчни цени, без изненади"
            align="center"
            title={
              <>
                Setup + месечен абонамент за <span className="text-machine-deep">вашия AI агент</span>
              </>
            }
            lead="Плащате еднократна такса за изграждане и месечен абонамент за хостинг, наблюдение и подобрения. Точната цена зависи от сложността на процеса — числата по-долу са ориентировъчни начални нива."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-14 items-stretch">
          {plans.map((plan, index) => {
            const dark = plan.isPopular;
            return (
              <div
                key={plan.title}
                className={`relative flex flex-col aa-reveal bg-white text-ink border ${
                  dark ? "border-signal shadow-[0_24px_60px_-24px_hsl(var(--aa-signal)/0.35)]" : "border-ink/15"
                }`}
                style={{ transitionDelay: `${150 + index * 120}ms` }}
              >
                {dark && (
                  <>
                    <span className="absolute top-0 left-0 right-0 h-1 bg-signal" />
                    <Cross className="absolute -top-[7px] -left-[7px] text-ink/55" />
                    <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/55" />
                  </>
                )}

                {/* Plan header */}
                <div className={"px-7 md:px-9 pt-8 pb-6 border-b border-ink/10"}>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`aa-label ${dark ? "text-signal" : "text-machine-deep"}`}>{plan.badge}</span>
                    <span className={`font-plexmono text-[10px] tracking-widest ${dark ? "text-signal/70" : "text-ink/50"}`}>
                      план {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-[1.75rem] mb-2">{plan.title}</h3>
                  <p className={`font-plexmono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-ink/65" : "text-ink/65"}`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className={"px-7 md:px-9 py-6 border-b border-ink/10"}>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>от</span>
                    <span className="font-heading text-4xl md:text-5xl leading-none">{plan.setupEur}</span>
                    <span className={`font-heading text-xl ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>setup</span>
                  </div>
                  <div className="flex items-baseline gap-2 mt-2">
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>от</span>
                    <span className="font-heading text-3xl md:text-4xl leading-none">{plan.monthlyEur}</span>
                    <span className={`font-heading text-lg ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>/месец</span>
                  </div>
                </div>

                {/* Features */}
                <div className="px-7 md:px-9 py-6 flex-1">
                  <p className={`font-plex text-[0.95rem] leading-relaxed mb-5 text-ink/75`}>
                    {plan.description}
                  </p>
                  <ul className="space-y-2.5">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            dark ? "bg-signal/20" : "bg-machine/15"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${dark ? "text-signal" : "text-machine-deep"}`} strokeWidth={3} />
                        </span>
                        <span className={`font-plex text-sm text-ink/85`}>{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* CTA */}
                <div className="px-7 md:px-9 pb-8">
                  <button
                    type="button"
                    onClick={openWizard}
                    className={`group flex items-center justify-center gap-2.5 w-full px-4 text-center font-plex font-semibold text-xs sm:text-sm leading-snug uppercase tracking-[0.06em] sm:tracking-[0.08em] py-4 rounded-sm transition-all duration-300 ${
                      dark
                        ? "bg-signal text-white hover:brightness-110 hover:shadow-[0_16px_36px_-12px_hsl(var(--aa-signal)/0.6)]"
                        : "bg-ink text-paper hover:bg-ink-soft"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 aa-reveal" style={{ transitionDelay: "400ms" }}>
          <p className="font-plex text-sm text-ink/70">
            Цените са ориентировъчни начални нива — точната оферта зависи от сложността на процеса.{" "}
            <a href="#contact" className="text-machine-deep hover:text-ink underline underline-offset-4 transition-colors">
              Свържете се с нас
            </a>{" "}
            за персонална оферта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default AIAgentPricing;
