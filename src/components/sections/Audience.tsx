import { useEffect, useRef, useState } from "react";
import { Users, Factory, Rocket, ArrowUpRight } from "lucide-react";

const audiences = [
  {
    icon: Users,
    number: "01",
    title: "Малки бизнеси",
    description: "Изграждаме онлайн присъствие, което генерира клиенти и растеж. Всичко от лого до пълна дигитална екосистема.",
    gradient: "from-primary/20 to-primary/5",
    iconBg: "bg-primary/10 border-primary/20",
    iconColor: "text-primary",
  },
  {
    icon: Factory,
    number: "02",
    title: "Производствени фирми",
    description: "Дигитализираме процеси и оптимизираме производствените вериги с персонализирани уеб решения.",
    gradient: "from-secondary/20 to-secondary/5",
    iconBg: "bg-secondary/10 border-secondary/20",
    iconColor: "text-secondary",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Стартъпи",
    description: "Бързо прототипиране и MVP разработка за валидация на идеи. Готови за скалиране от първия ден.",
    gradient: "from-accent/20 to-accent/5",
    iconBg: "bg-accent/10 border-accent/20",
    iconColor: "text-accent",
  },
];

const Audience = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding-sm relative overflow-hidden bg-background"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-diamond-pattern opacity-20" />

      {/* Top and bottom lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Subtle glow */}
      <div className="glow-orb glow-orb-copper w-[400px] h-[400px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-10" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`text-center max-w-xl mx-auto mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            За кого е
          </span>
          <h2 className="text-display-md text-foreground font-display">
            Работим с{" "}
            <span className="text-accent-italic">амбициозни екипи</span>
          </h2>
        </div>

        {/* Audience blocks */}
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={audience.title}
                className={`group relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`relative p-8 lg:p-10 rounded-2xl transition-all duration-500 overflow-hidden bg-white ${isHovered ? 'scale-[1.02] shadow-lg' : 'shadow-sm'
                    }`}
                >
                  {/* Border effect */}
                  <div
                    className={`absolute inset-0 rounded-2xl border transition-all duration-500 ${isHovered ? 'border-primary/30' : 'border-border'
                      }`}
                  />

                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-500 bg-gradient-to-br ${audience.gradient} ${isHovered ? 'opacity-60' : 'opacity-0'
                      }`}
                  />

                  {/* Number watermark */}
                  <div
                    className={`absolute top-4 right-6 text-6xl font-display font-bold transition-all duration-500 ${isHovered ? 'text-primary/15' : 'text-border'
                      }`}
                  >
                    {audience.number}
                  </div>

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon */}
                    <div
                      className={`w-14 h-14 rounded-2xl ${audience.iconBg} border flex items-center justify-center mb-6 transition-all duration-500 ${isHovered ? 'scale-110 shadow-lg' : ''
                        }`}
                    >
                      <Icon className={`w-6 h-6 ${audience.iconColor} transition-all duration-300`} />
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display text-foreground mb-4 flex items-center gap-2">
                      {audience.title}
                      <ArrowUpRight
                        className={`w-4 h-4 text-muted-foreground transition-all duration-300 ${isHovered ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-2'
                          }`}
                      />
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground text-sm leading-relaxed font-body font-light">
                      {audience.description}
                    </p>
                  </div>

                  {/* Bottom accent line */}
                  <div
                    className={`absolute bottom-0 left-0 right-0 h-1 bg-blue-gradient transition-all duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
