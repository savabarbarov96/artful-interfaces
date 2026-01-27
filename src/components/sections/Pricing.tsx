import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const plans = [
  {
    badge: "БЕЗ ГУБЕНЕ НА ВРЕМЕ",
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
    variant: "default" as const,
  },
  {
    badge: "С ВГРАДЕН ОНЛАЙН МАГАЗИН",
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
    variant: "business" as const,
  },
];

const Pricing = () => {
  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-label text-primary mb-4 block font-body font-medium">
            Прозрачни цени, без изненади
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-4">
            Изберете план за{" "}
            <span className="text-accent-italic">вашия бизнес</span>
          </h2>
          <p className="text-muted-foreground text-lg font-body">
            Месечни планове с включено всичко необходимо за успешно онлайн присъствие.
          </p>
        </div>

        {/* Pricing cards */}
        <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {plans.map((plan) => (
            <div
              key={plan.title}
              className="bg-card border border-border rounded-2xl p-8 lg:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Top badge */}
              <div className="inline-block px-4 py-1.5 border border-border rounded-full text-xs font-medium text-muted-foreground mb-6 font-body">
                {plan.badge}
              </div>

              {/* Title */}
              <h3 className="text-2xl md:text-3xl font-display text-secondary mb-3">
                {plan.title}
              </h3>

              {/* Subtitle badge */}
              <div className="inline-block px-3 py-1 bg-secondary text-secondary-foreground rounded text-xs font-medium mb-6 font-body">
                {plan.subtitle}
              </div>

              {/* Pricing */}
              <div className="mb-2">
                <span className="text-muted-foreground text-lg font-body">от </span>
                <span className="text-4xl md:text-5xl font-display font-medium text-foreground">
                  {plan.priceEur}€
                </span>
                <span className="text-muted-foreground text-lg font-body">/месец </span>
                <span className="text-muted-foreground text-sm font-body">(без ДДС)</span>
              </div>

              {/* BGN price */}
              <p className="text-xl text-muted-foreground mb-6 font-body">
                ≈ <span className="font-medium text-foreground">{plan.priceBgn}лв</span>/месец{" "}
                <span className="text-sm">(без ДДС)</span>
              </p>

              {/* Description */}
              <p className="text-muted-foreground mb-6 font-body leading-relaxed">
                {plan.description}
              </p>

              {/* Features */}
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <div className="w-5 h-5 rounded-full bg-secondary/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                      <Check className="w-3 h-3 text-secondary" />
                    </div>
                    <span className="text-foreground font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              {/* Details link */}
              <a
                href="#contact"
                className="text-muted-foreground underline underline-offset-4 hover:text-foreground transition-colors text-sm font-body block mb-6"
              >
                Вижте всичко, което получавате в плана си
              </a>

              {/* CTA Button */}
              <Button
                variant={plan.variant === "business" ? "outline" : "default"}
                size="lg"
                className="w-full"
                asChild
              >
                <a href="#contact">{plan.cta}</a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Pricing;
