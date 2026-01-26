import { useState } from "react";
import { Globe, ShoppingBag, Building2, Cpu, ArrowRight } from "lucide-react";

const services = [
  {
    icon: Globe,
    title: "Уебсайт",
    shortDesc: "Модерни и бързи сайтове",
    fullDesc: "Изграждаме модерни, бързи и SEO оптимизирани уебсайтове, които представят бизнеса ви в най-добрата светлина.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
  {
    icon: ShoppingBag,
    title: "Онлайн магазин",
    shortDesc: "E-commerce решения",
    fullDesc: "Пълнофункционални онлайн магазини с интегрирани плащания, инвентар и анализи на продажбите.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
  },
  {
    icon: Building2,
    title: "Корпоративни решения",
    shortDesc: "ERP & CRM системи",
    fullDesc: "Персонализирани корпоративни системи за управление на бизнес процеси, клиенти и ресурси.",
    color: "text-accent",
    bgColor: "bg-accent/10",
  },
  {
    icon: Cpu,
    title: "Софтуер & AI",
    shortDesc: "Иновативни технологии",
    fullDesc: "Custom софтуерни решения с интеграция на изкуствен интелект за автоматизация и оптимизация.",
    color: "text-primary",
    bgColor: "bg-primary/10",
  },
];

const Services = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section id="services" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-label text-secondary mb-4 block font-body font-medium">Услуги</span>
          <h2 className="text-display-lg text-foreground font-display">
            Всичко необходимо за вашето{" "}
            <span className="text-accent-italic">дигитално присъствие</span>
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
                className="group relative bg-card border border-border rounded-2xl p-8 md:p-10 cursor-pointer hover-lift shadow-card"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Icon */}
                <div className={`w-14 h-14 rounded-xl ${service.bgColor} flex items-center justify-center mb-6 transition-transform duration-300 group-hover:scale-110`}>
                  <Icon className={`w-7 h-7 ${service.color}`} />
                </div>

                {/* Title */}
                <h3 className="text-xl md:text-2xl font-display text-foreground mb-3">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground leading-relaxed font-body">
                  {isHovered ? service.fullDesc : service.shortDesc}
                </p>

                {/* Hover arrow */}
                <div className="absolute bottom-8 right-8 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-x-2 group-hover:translate-x-0">
                  <a
                    href="#contact"
                    className={`inline-flex items-center gap-2 text-sm font-medium ${service.color} font-body`}
                  >
                    Научи повече <ArrowRight className="w-4 h-4" />
                  </a>
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
