import { Check, ArrowRight } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";
import { useProjectWizard } from "@/components/wizard/ProjectWizard";

/**
 * Indicative/placeholder pricing — this is a new one-time-package pricing
 * shape (vs. the site's default 99/299 €/month subscription in Pricing.tsx)
 * and the numbers below have not been confirmed by the owner.
 */
const packages = [
  {
    badge: "MVP старт",
    title: "MVP Старт",
    subtitle: "Работещ продукт с ключовите функции",
    priceEur: "5 000",
    priceSuffix: "от",
    timeline: "4–6 седмици",
    description:
      "Един платформен MVP с основния поток на продукта ви и вграден AI компонент — достатъчен да го покажете на реални потребители и инвеститори.",
    features: [
      "Дефиниране на обхвата и на ключовия потребителски поток",
      "UI/UX дизайн на основните екрани",
      "Уеб или мобилно приложение (една платформа)",
      "Вграден AI компонент (чат, търсене или автоматизация)",
      "База данни, автентикация и хостинг на старта",
      "Предаване на кода — продуктът е изцяло ваш",
    ],
    cta: "Обсъдете вашия MVP",
    isPopular: false,
  },
  {
    badge: "По договаряне",
    title: "MVP Растеж",
    subtitle: "За по-сложни продукти и интеграции",
    priceEur: "12 000+",
    priceSuffix: "от",
    timeline: "8–12 седмици",
    description:
      "За продукти с повече от един потребителски тип, платежни потоци, външни интеграции или по-сложна AI логика — обхватът се дефинира заедно с вас.",
    features: [
      "Всичко от MVP Старт",
      "Множество потребителски роли и права",
      "Платежни и external API интеграции",
      "По-сложна AI логика, обучена с ваши данни",
      "Уеб и мобилно приложение",
      "Персонален технически консултант по време на разработката",
    ],
    cta: "Заявете индивидуална оферта",
    isPopular: true,
  },
];

const MvpPricing = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.1);
  const { openWizard } = useProjectWizard();

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="04"
            label="Фиксирана цена, без изненади"
            align="center"
            title={
              <>
                Изберете пакет за <span className="text-machine-deep">вашия MVP</span>
              </>
            }
            lead="Еднократна фиксирана цена за разработката — вие получавате завършен продукт и пълна собственост върху кода, не абонамент за наш софтуер."
          />
        </div>

        <div className="grid md:grid-cols-2 gap-6 lg:gap-8 max-w-5xl mx-auto mt-14 items-stretch">
          {packages.map((pkg, index) => {
            const dark = pkg.isPopular;
            return (
              <div
                key={pkg.title}
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

                <div className="px-7 md:px-9 pt-8 pb-6 border-b border-ink/10">
                  <div className="flex items-center justify-between gap-4 mb-5">
                    <span className={`aa-label ${dark ? "text-signal" : "text-machine-deep"}`}>{pkg.badge}</span>
                    <span className={`font-plexmono text-[10px] tracking-widest ${dark ? "text-signal/70" : "text-ink/50"}`}>
                      пакет {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="font-heading text-2xl md:text-[1.75rem] mb-2">{pkg.title}</h3>
                  <p className="font-plexmono text-[11px] uppercase tracking-[0.14em] text-ink/65">{pkg.subtitle}</p>
                </div>

                <div className="px-7 md:px-9 py-6 border-b border-ink/10">
                  <div className="flex items-baseline gap-2">
                    <span className="font-plex text-sm text-ink/65">{pkg.priceSuffix}</span>
                    <span className="font-heading text-4xl md:text-5xl leading-none">{pkg.priceEur}</span>
                    <span className={`font-heading text-2xl ${dark ? "text-signal" : "text-machine-deep"}`}>€</span>
                  </div>
                  <p className="font-plexmono text-xs mt-2.5 tracking-wide text-ink/60">
                    Срок: {pkg.timeline} · еднократно плащане (без ДДС)
                  </p>
                </div>

                <div className="px-7 md:px-9 py-6 flex-1">
                  <p className="font-plex text-[0.95rem] leading-relaxed mb-5 text-ink/75">{pkg.description}</p>
                  <ul className="space-y-2.5">
                    {pkg.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <span
                          className={`w-4 h-4 rounded-sm flex items-center justify-center flex-shrink-0 mt-0.5 ${
                            dark ? "bg-signal/20" : "bg-machine/15"
                          }`}
                        >
                          <Check className={`w-3 h-3 ${dark ? "text-signal" : "text-machine-deep"}`} strokeWidth={3} />
                        </span>
                        <span className="font-plex text-sm text-ink/85">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>

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
                    {pkg.cta}
                    <ArrowRight className="w-4 h-4 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            );
          })}
        </div>

        {/* Optional monthly care/iteration plan — reuses the subscription framing */}
        <div
          className="max-w-5xl mx-auto mt-8 aa-reveal bg-white border border-ink/15 flex flex-col md:flex-row md:items-center gap-6 md:gap-10 px-7 md:px-9 py-7"
          style={{ transitionDelay: "420ms" }}
        >
          <div className="flex-1">
            <span className="aa-label text-machine-deep">По желание</span>
            <h3 className="font-heading text-xl md:text-2xl mt-2 mb-2">Поддръжка и итерации след старта</h3>
            <p className="font-plex text-sm text-ink/75 leading-relaxed">
              След пускането на MVP-то можете да преминете на месечен план за поддръжка, нови функции и итерации по обратната връзка от потребителите ви — без да сключвате нов проект всеки път.
            </p>
          </div>
          <div className="flex flex-col items-start md:items-end gap-3 flex-shrink-0">
            <div className="flex items-baseline gap-2">
              <span className="font-plex text-sm text-ink/65">от</span>
              <span className="font-heading text-3xl leading-none">299</span>
              <span className="font-heading text-lg text-machine-deep">€/месец</span>
            </div>
            <button
              type="button"
              onClick={openWizard}
              className="font-plexmono text-[11px] tracking-wider underline underline-offset-4 text-ink/65 hover:text-ink transition-colors"
            >
              Попитайте за плана за поддръжка
            </button>
          </div>
        </div>

        <div className="text-center mt-12 aa-reveal" style={{ transitionDelay: "500ms" }}>
          <p className="font-plex text-sm text-ink/70">
            Цените са ориентировъчни и зависят от обхвата на проекта.{" "}
            <a href="#contact" className="text-machine-deep hover:text-ink underline underline-offset-4 transition-colors">
              Свържете се с нас
            </a>{" "}
            за точна оферта след кратък разговор.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MvpPricing;
