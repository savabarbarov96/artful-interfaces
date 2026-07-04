import { Check, ArrowRight } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

// Indicative/placeholder pricing — new shape for this page, not yet confirmed by the owner.
// Anchored against NobleProg BG (~€270/seat remote, €470-1,120/seat onsite) and Aula (299 лв/person self-paced).
const plans = [
  {
    badge: "Еднократен формат",
    title: "Onsite workshop",
    subtitle: "Практическа сесия за екип до 10 души",
    priceEur: "2000",
    priceBgn: "3912",
    priceSuffix: "/сесия",
    description:
      "Еднодневен onsite workshop, изграден върху инструментите и агентите, които сме внедрили или планираме да внедрим за вас.",
    features: [
      "До 10 участника в сесията",
      "Материали, изготвени по вашите процеси",
      "Практически упражнения с реални случаи",
      "Писмени ръководства и чеклисти след сесията",
      "Онлайн вариант при нужда",
    ],
    cta: "Заяви workshop",
    isPopular: false,
  },
  {
    badge: "Continuous enablement",
    title: "Месечен абонамент",
    subtitle: "Обучение и поддръжка след внедряването",
    priceEur: "299",
    priceBgn: "585.00",
    priceSuffix: "/месец",
    description:
      "Продължаваща поддръжка на екипа ви — нови служители, текущи въпроси и коригиране на употребата на AI инструментите с времето.",
    features: [
      "Обучение на нови служители при онбординг",
      "Текущи отговори на въпроси на екипа",
      "Периодични кратки refresher сесии",
      "Коригиране на употребата с растежа на екипа",
      "Без обвързващ договор",
    ],
    cta: "Започнете абонамента",
    isPopular: true,
  },
];

const TrainingPricing = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="04"
            label="Индикативни цени"
            align="center"
            title={
              <>
                Workshop <span className="text-machine-deep">или continuous enablement</span>
              </>
            }
            lead="Изберете еднократен workshop, или месечен абонамент за текущо обучение на екипа ви. Цените са ориентировъчни — точната оферта зависи от размера на екипа и обхвата."
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

                <div className={"px-7 md:px-9 pt-8 pb-6 border-b border-ink/10"}>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`aa-label ${dark ? "text-signal" : "text-machine-deep"}`}>{plan.badge}</span>
                    <span className={`font-plexmono text-[10px] tracking-widest ${dark ? "text-signal/70" : "text-ink/50"}`}>
                      формат {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-[1.75rem] mb-2">{plan.title}</h3>
                  <p className={`font-plexmono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-ink/65" : "text-ink/65"}`}>
                    {plan.subtitle}
                  </p>
                </div>

                <div className={"px-7 md:px-9 py-6 border-b border-ink/10"}>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>от</span>
                    <span className="font-heading text-5xl md:text-6xl leading-none">{plan.priceEur}</span>
                    <span className={`font-heading text-2xl ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>{plan.priceSuffix}</span>
                  </div>
                  <p className={`font-plexmono text-xs mt-2.5 tracking-wide text-ink/60`}>
                    ≈ {plan.priceBgn} лв{plan.priceSuffix} (без ДДС)
                  </p>
                </div>

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

                <div className="px-7 md:px-9 pb-8">
                  <a
                    href="#contact"
                    className={`group flex items-center justify-center gap-2.5 w-full px-4 text-center font-plex font-semibold text-xs sm:text-sm leading-snug uppercase tracking-[0.06em] sm:tracking-[0.08em] py-4 rounded-sm transition-all duration-300 ${
                      dark
                        ? "bg-signal text-white hover:brightness-110 hover:shadow-[0_16px_36px_-12px_hsl(var(--aa-signal)/0.6)]"
                        : "bg-ink text-paper hover:bg-ink-soft"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 aa-reveal" style={{ transitionDelay: "400ms" }}>
          <p className="font-plex text-sm text-ink/70">
            Нуждаете се от индивидуален план за по-голям екип?{" "}
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

export default TrainingPricing;
