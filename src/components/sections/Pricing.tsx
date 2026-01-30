import { useEffect, useRef, useState } from "react";
import { Check, Sparkles, ArrowRight, Zap } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    badge: "Перфектен старт",
    icon: Zap,
    title: "Стартиращ уебсайт",
    subtitle: "НАЙ-ПОДХОДЯЩ ЗА МАЛКИ И СРЕДНИ БИЗНЕСИ",
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
    icon: Sparkles,
    title: "Бизнес уебсайт",
    subtitle: "ЗА РАСТЯЩИ БИЗНЕСИ И ОНЛАЙН ТЪРГОВИЯ",
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
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredPlan, setHoveredPlan] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh opacity-60" />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Floating orbs */}
      <div className="glow-orb glow-orb-copper w-[300px] h-[300px] top-1/4 -left-32 opacity-20" />
      <div className="glow-orb glow-orb-teal w-[400px] h-[400px] bottom-0 right-0 opacity-15" />

      {/* Geometric pattern */}
      <div className="absolute inset-0 bg-diamond-pattern opacity-30" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Прозрачни цени, без изненади
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-6">
            Изберете план за{" "}
            <span className="text-accent-italic">вашия бизнес</span>
          </h2>
          <p className="text-foreground text-xl md:text-2xl font-display font-medium italic">
            Месечни планове с включено всичко необходимо за успешно онлайн присъствие.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {plans.map((plan, index) => {
            const Icon = plan.icon;
            const isHovered = hoveredPlan === index;

            return (
              <div
                key={plan.title}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                onMouseEnter={() => setHoveredPlan(index)}
                onMouseLeave={() => setHoveredPlan(null)}
                style={{
                  transitionDelay: `${(index + 1) * 150}ms`,
                }}
              >
                {/* Popular badge */}
                {plan.isPopular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                    <div className="px-4 py-1.5 bg-blue-gradient text-white text-xs font-bold font-body rounded-full shadow-blue flex items-center gap-2">
                      <Sparkles className="w-3 h-3" />
                      <span>{plan.badge}</span>
                    </div>
                  </div>
                )}

                {/* Card */}
                <div
                  className={`relative h-full rounded-2xl p-5 md:p-6 lg:p-7 transition-all duration-500 overflow-hidden ${plan.isPopular
                      ? 'bg-white border-2 border-primary shadow-lg'
                      : 'bg-white border border-border shadow-sm'
                    } ${isHovered ? 'shadow-xl scale-[1.02]' : ''}`}
                >
                  {/* Animated glow on hover */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-all duration-700 ${isHovered ? 'opacity-40' : 'opacity-0'
                      }`}
                    style={{
                      background: plan.isPopular
                        ? 'hsl(217 91% 50%)'
                        : 'hsl(173 80% 40%)'
                    }}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Top badge / Icon */}
                    <div className="flex items-center justify-between mb-4">
                      <div
                        className={`inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-medium font-body border ${plan.isPopular
                            ? 'border-primary/30 bg-primary/10 text-primary'
                            : 'border-border bg-muted text-muted-foreground'
                          }`}
                      >
                        <Icon className="w-3.5 h-3.5" />
                        {!plan.isPopular && plan.badge}
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl md:text-2xl font-display text-foreground mb-2">
                      {plan.title}
                    </h3>

                    {/* Subtitle badge */}
                    <div
                      className={`inline-block px-3 py-1.5 rounded-lg text-xs font-medium font-body mb-5 ${plan.isPopular
                          ? 'bg-secondary/20 text-secondary'
                          : 'bg-primary/10 text-primary/80'
                        }`}
                    >
                      {plan.subtitle}
                    </div>

                    {/* Pricing */}
                    <div className="mb-1">
                      <span className="text-muted-foreground text-base font-body">от </span>
                      <span className="text-4xl md:text-5xl font-display font-medium text-foreground">
                        {plan.priceEur}
                      </span>
                      <span className="text-xl font-display text-primary">€</span>
                      <span className="text-muted-foreground text-base font-body">/месец </span>
                    </div>

                    {/* BGN price */}
                    <p className="text-base text-muted-foreground mb-5 font-body">
                      ≈ <span className="font-medium text-foreground">{plan.priceBgn} лв</span>/месец{" "}
                      <span className="text-sm opacity-60">(без ДДС)</span>
                    </p>

                    {/* Divider */}
                    <div className="h-px bg-gradient-to-r from-transparent via-border to-transparent mb-5" />

                    {/* Description */}
                    <p className="text-foreground mb-5 font-display text-base md:text-lg leading-relaxed font-medium italic">
                      {plan.description}
                    </p>

                    {/* Features */}
                    <ul className="space-y-3 mb-6">
                      {plan.features.map((feature) => (
                        <li
                          key={feature}
                          className="flex items-start gap-3"
                        >
                          <div
                            className={`w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 ${plan.isPopular
                                ? 'bg-primary/20 text-primary'
                                : 'bg-secondary/20 text-secondary'
                              }`}
                          >
                            <Check className="w-3 h-3" strokeWidth={3} />
                          </div>
                          <span className="text-foreground font-body text-sm font-medium">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {/* Details link */}
                    <a
                      href="#contact"
                      className="text-muted-foreground hover:text-primary underline underline-offset-4 transition-colors text-sm font-body block mb-5"
                    >
                      Вижте всичко, което получавате в плана си
                    </a>

                    {/* CTA Button */}
                    <Button
                      size="lg"
                      className={`w-full group rounded-xl py-5 text-sm md:text-base font-medium transition-all duration-300 ${plan.isPopular
                          ? 'bg-blue-gradient hover:shadow-blue text-white'
                          : 'bg-muted hover:bg-muted/80 text-foreground border border-border'
                        }`}
                      asChild
                    >
                      <a href="#contact" className="flex items-center justify-center gap-2">
                        {plan.cta}
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </a>
                    </Button>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Bottom note */}
        <div
          className={`text-center mt-12 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <p className="text-muted-foreground text-sm font-body">
            Нуждаете се от нещо по-специфично? {" "}
            <a href="#contact" className="text-primary hover:text-primary/80 underline underline-offset-4 transition-colors">
              Свържете се с нас
            </a>
            {" "} за персонална оферта.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Pricing;
