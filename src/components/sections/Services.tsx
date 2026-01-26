import { useState } from "react";
import { Globe, ShoppingBag, Building2, Cpu } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Уебсайт",
    shortDesc: "Модерни и бързи",
    fullDesc: "Изграждаме модерни, бързи и SEO оптимизирани уебсайтове, които представят бизнеса ви в най-добрата светлина.",
  },
  {
    icon: ShoppingBag,
    title: "Онлайн магазин",
    shortDesc: "E-commerce решения",
    fullDesc: "Пълнофункционални онлайн магазини с интегрирани плащания, инвентар и анализи на продажбите.",
  },
  {
    icon: Building2,
    title: "Корпоративни решения",
    shortDesc: "ERP & CRM системи",
    fullDesc: "Персонализирани корпоративни системи за управление на бизнес процеси, клиенти и ресурси.",
  },
  {
    icon: Cpu,
    title: "Софтуер & AI",
    shortDesc: "Иновативни технологии",
    fullDesc: "Custom софтуерни решения с интеграция на изкуствен интелект за автоматизация и оптимизация.",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16 md:mb-24">
          <span className="text-label text-primary mb-4 block">Услуги</span>
          <h2 className="text-display-md text-foreground">
            Всичко необходимо за вашето дигитално присъствие
          </h2>
        </div>

        {/* Services grid */}
        <div className="grid md:grid-cols-2 gap-6">
          {services.map((service, index) => {
            const Icon = service.icon;
            const isHovered = hoveredIndex === index;

            return (
              <div
                key={service.title}
                className="group relative bg-card-gradient border border-border/50 rounded-2xl p-8 md:p-10 cursor-pointer hover-lift shadow-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/15 transition-colors duration-300">
                  <Icon className="w-7 h-7 text-primary" />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display font-bold text-foreground mb-2">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed">
                  {isHovered ? service.fullDesc : service.shortDesc}
                </p>

                {/* Hover indicator */}
                <div className="absolute bottom-8 right-8 md:bottom-10 md:right-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <a
                    href="#contact"
                    className="text-sm font-medium text-primary hover:underline underline-offset-4"
                  >
                    Научи повече →
                  </a>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 overflow-hidden rounded-tr-2xl pointer-events-none">
                  <div className="absolute top-0 right-0 w-48 h-48 bg-gradient-to-bl from-primary/5 to-transparent transform translate-x-12 -translate-y-12 group-hover:translate-x-8 group-hover:-translate-y-8 transition-transform duration-500" />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
