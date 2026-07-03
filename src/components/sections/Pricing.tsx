import { Check, ArrowRight } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

const plans = [
  {
    badge: "Перфектен старт",
    title: "Стартиращ уебсайт",
    subtitle: "Най-подходящ за малки и средни бизнеси",
    priceEur: "99",
    priceBgn: "193.50",
    description: "Уебсайт с висока ефективност, създаден да впечатлява, да продава и поддържа Вашия бранд с лекота:",
    features: [
      "До 6 основни страници",
      "Лого дизайн, включен в цената",
      "Основна SEO оптимизация",
      "Сигурен хостинг и мониторинг",
      "Включен .com домейн",
      "Ежедневни бекъпи и защита",
      "Ключови маркетинг интеграции",
      "До 1 час работа по сайта на месец",
    ],
    cta: "Вземете своя уебсайт",
    isPopular: false,
  },
  {
    badge: "Най-избиран",
    title: "Бизнес уебсайт",
    subtitle: "За растящи бизнеси и онлайн търговия",
    priceEur: "299",
    priceBgn: "585.00",
    description: "Разширена уеб платформа, създадена за продажби, маркетинг и стабилен онлайн растеж.",
    features: [
      "До 10 основни страници",
      "Цялостен бранд и лого дизайн",
      "Онлайн магазин с всички функционалности",
      "Разширен хостинг и сигурност",
      "Включен .com домейн",
      "SEO + маркетинг инструменти",
      "Приоритетна поддръжка и личен консултант",
      "До 3 часа работа по сайта на месец",
    ],
    cta: "Започнете своя онлайн магазин",
    isPopular: true,
  },
];

const Pricing = () => {
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
                Изберете план за <span className="text-machine-deep">вашия бизнес</span>
              </>
            }
            lead="Дизайн, хостинг, поддръжка и SEO — в една прозрачна месечна цена. Започвате без начална инвестиция и спирате, когато пожелаете."
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
                    <Cross className="absolute -top-[7px] -left-[7px] text-ink/40" />
                    <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/40" />
                  </>
                )}

                {/* Plan header */}
                <div className={"px-7 md:px-9 pt-8 pb-6 border-b border-ink/10"}>
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`aa-label ${dark ? "text-signal" : "text-machine-deep"}`}>{plan.badge}</span>
                    <span className={`font-plexmono text-[10px] tracking-widest ${dark ? "text-signal/70" : "text-ink/35"}`}>
                      план {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-[1.75rem] mb-2">{plan.title}</h3>
                  <p className={`font-plexmono text-[11px] uppercase tracking-[0.14em] ${dark ? "text-ink/50" : "text-ink/50"}`}>
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price */}
                <div className={"px-7 md:px-9 py-6 border-b border-ink/10"}>
                  <div className="flex items-baseline gap-2">
                    <span className={`font-plex text-sm ${dark ? "text-ink/50" : "text-ink/50"}`}>от</span>
                    <span className="font-heading text-5xl md:text-6xl leading-none">{plan.priceEur}</span>
                    <span className={`font-heading text-2xl ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                    <span className={`font-plex text-sm ${dark ? "text-ink/50" : "text-ink/50"}`}>/месец</span>
                  </div>
                  <p className={`font-plexmono text-xs mt-2.5 tracking-wide text-ink/45`}>
                    ≈ {plan.priceBgn} лв/месец (без ДДС)
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
                    className={`group flex items-center justify-center gap-3 w-full font-plex font-semibold text-sm uppercase tracking-[0.08em] py-4 rounded-sm transition-all duration-300 ${
                      dark
                        ? "bg-signal text-white hover:brightness-110 hover:shadow-[0_16px_36px_-12px_hsl(var(--aa-signal)/0.6)]"
                        : "bg-ink text-paper hover:bg-ink-soft"
                    }`}
                  >
                    {plan.cta}
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                  <a
                    href="#contact"
                    className={`block text-center font-plexmono text-[11px] tracking-wider underline underline-offset-4 mt-4 transition-colors ${
                      "text-ink/50 hover:text-ink"
                    }`}
                  >
                    Вижте всичко, което получавате в плана си
                  </a>
                </div>
              </div>
            );
          })}
        </div>

        <div className="text-center mt-12 aa-reveal" style={{ transitionDelay: "400ms" }}>
          <p className="font-plex text-sm text-ink/60">
            Нуждаете се от нещо по-специфично?{" "}
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

export default Pricing;
