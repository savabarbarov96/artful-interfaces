import { Users, Factory, Rocket } from "lucide-react";

const audiences = [
  {
    icon: Users,
    title: "Малки бизнеси",
    description: "Изграждаме онлайн присъствие, което генерира клиенти и растеж.",
  },
  {
    icon: Factory,
    title: "Производствени фирми",
    description: "Дигитализираме процеси и оптимизираме производствените вериги.",
  },
  {
    icon: Rocket,
    title: "Стартъпи",
    description: "Бързо прототипиране и MVP разработка за валидация на идеи.",
  },
];

const Audience = () => {
  return (
    <section className="section-padding-sm bg-secondary/30">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label text-primary mb-4 block">За кого е</span>
          <h2 className="text-display-md text-foreground">
            Работим с амбициозни екипи
          </h2>
        </div>

        {/* Audience blocks */}
        <div className="grid md:grid-cols-3 gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;

            return (
              <div
                key={audience.title}
                className="text-center group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-background border border-border/50 flex items-center justify-center mx-auto mb-6 group-hover:border-primary/30 group-hover:shadow-md transition-all duration-300">
                  <Icon className="w-7 h-7 text-foreground group-hover:text-primary transition-colors duration-300" />
                </div>

                {/* Title */}
                <h3 className="text-lg font-display font-bold text-foreground mb-3">
                  {audience.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-sm leading-relaxed max-w-xs mx-auto">
                  {audience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
