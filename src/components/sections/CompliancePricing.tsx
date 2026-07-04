import { Check, ArrowRight } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

// Indicative/placeholder pricing — new hybrid shape (one-time readiness project + monthly
// compliance maintenance), unlike the fixed 99/299 € website subscription plans elsewhere on
// the site. Anchors: market range €1,500–5,000 for ISO prep on a micro-company; CENTIO's
// 336–635 лв/mo NIS2 subscription. Confirm with the owner before treating these as final.
const plans = [
  {
    badge: "Начална стъпка",
    title: "Одит и подготовка",
    subtitle: "Еднократен проект за оценка и внедряване",
    priceEur: "1500",
    priceBgn: "2933",
    priceSuffix: "еднократно",
    description:
      "Оценяваме готовността ви спрямо NIS2, ISO 27001 или GDPR и внедряваме техническите мерки и документацията, нужни за одит от акредитиран орган.",
    features: [
      "Одит на пропуските спрямо избраната рамка",
      "План с приоритизирани технически мерки",
      "Логване, контрол на достъпа и бекъпи",
      "Процеси за реакция при инциденти",
      "Политики и документация",
      "Доказателствен пакет за акредитиран орган",
    ],
    cta: "Заявете одит",
    isPopular: false,
  },
  {
    badge: "За постоянна готовност",
    title: "Поддръжка на съответствието",
    subtitle: "Месечен абонамент след първоначалната подготовка",
    priceEur: "199",
    priceBgn: "389",
    priceSuffix: "/месец",
    description:
      "Поддържаме мерките и документацията актуални между одитите, за да сте готови при преоценка или проверка.",
    features: [
      "Преглед и наблюдение на логовете",
      "Актуализация на политики при промяна в изискванията",
      "Поддръжка на процесите за инциденти",
      "Годишна преоценка на готовността",
      "Приоритетна консултация",
    ],
    cta: "Заяви проекта сега",
    isPopular: true,
  },
];

const CompliancePricing = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="04"
            label="Прозрачни цени, без изненади"
            align="center"
            title={
              <>
                Готовност <span className="text-machine-deep">на два етапа</span>
              </>
            }
            lead="Еднократна подготовка, последвана от месечна поддръжка — цените по-долу са индикативни и се уточняват след кратък разговор за обхвата."
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
                    <span className="font-heading text-5xl md:text-6xl leading-none">{plan.priceEur}</span>
                    <span className={`font-heading text-2xl ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                    <span className={`font-plex text-sm ${dark ? "text-ink/65" : "text-ink/65"}`}>{plan.priceSuffix}</span>
                  </div>
                  <p className={`font-plexmono text-xs mt-2.5 tracking-wide text-ink/60`}>
                    ≈ {plan.priceBgn} лв {plan.priceSuffix} (без ДДС)
                  </p>
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
            Ние ви подготвяме — акредитиран орган издава сертификата.{" "}
            <a href="#contact" className="text-machine-deep hover:text-ink underline underline-offset-4 transition-colors">
              Свържете се с нас
            </a>{" "}
            за персонална оферта, спрямо обхвата ви.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CompliancePricing;
