import { useEffect, useRef, useState } from "react";
import { Clock, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    number: "01",
    stat: "7–14",
    statLabel: "дни",
    title: "Бързо изпълнение",
    description: "Бързо и ефективно изграждане без компромис с качеството. Стартирайте онлайн преди конкуренцията.",
  },
  {
    icon: Shield,
    number: "02",
    stat: "100%",
    statLabel: "сигурност",
    title: "QA + Dev експертиза",
    description: "Всеки проект преминава през задълбочено тестване преди пускане. Нулеви компромиси с качеството.",
  },
  {
    icon: Award,
    number: "03",
    stat: "50+",
    statLabel: "проекта",
    title: "Доказан опит",
    description: "Доказан опит с клиенти от различни индустрии и мащаби. Вашият успех е нашата репутация.",
  },
];

const WhyUs = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

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

  useEffect(() => {
    const handleScroll = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const windowHeight = window.innerHeight;
        const progress = Math.max(0, Math.min(1,
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Animated background gradient */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${40 + scrollProgress * 20}% ${50}%, hsl(217 91% 50% / 0.06) 0%, transparent 60%)`,
        }}
      />

      {/* Grid pattern with parallax */}
      <div
        className="absolute inset-0 bg-geometric-grid opacity-30"
        style={{ transform: `translateY(${scrollProgress * -30}px)` }}
      />

      {/* Floating elements */}
      <div
        className="glow-orb glow-orb-copper w-[400px] h-[400px] top-1/4 -right-40 opacity-15"
        style={{ transform: `translate(${scrollProgress * -40}px, ${scrollProgress * 20}px)` }}
      />
      <div
        className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-1/4 -left-20 opacity-10"
        style={{ transform: `translate(${scrollProgress * 30}px, ${scrollProgress * -15}px)` }}
      />

      {/* Decorative lines */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`text-center max-w-xl mx-auto mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Защо ние
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-4">
            Нашият{" "}
            <span className="text-accent-italic">подход</span>
          </h2>
          <p className="text-muted-foreground font-body font-light">
            Съчетаваме скорост, качество и експертиза за постигане на резултати.
          </p>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            const isHovered = hoveredCard === index;

            return (
              <div
                key={reason.number}
                className={`relative transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
                style={{ transitionDelay: `${(index + 1) * 150}ms` }}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                {/* Card */}
                <div
                  className={`relative h-full p-8 lg:p-10 rounded-2xl transition-all duration-500 overflow-hidden bg-white border ${isHovered ? 'scale-[1.02] shadow-lg border-primary/30' : 'shadow-sm border-border'
                    }`}
                >
                  {/* Gradient glow on hover */}
                  <div
                    className={`absolute -top-20 -right-20 w-40 h-40 rounded-full blur-3xl transition-opacity duration-700 bg-gradient-to-br from-primary/20 to-primary/5 ${isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                  />

                  {/* Content */}
                  <div className="relative z-10">
                    {/* Icon and stat row */}
                    <div className="flex items-start justify-between mb-8">
                      {/* Icon */}
                      <div
                        className={`w-14 h-14 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center transition-all duration-500 ${isHovered ? 'scale-110 shadow-lg' : ''
                          }`}
                      >
                        <Icon className={`w-6 h-6 transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-primary/70'}`} />
                      </div>

                      {/* Stat */}
                      <div className="text-right">
                        <div className="flex items-baseline gap-1">
                          <span
                            className={`text-3xl font-display font-bold transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-foreground'
                              }`}
                          >
                            {reason.stat}
                          </span>
                        </div>
                        <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                          {reason.statLabel}
                        </span>
                      </div>
                    </div>

                    {/* Title */}
                    <h3 className="text-xl font-display text-foreground mb-4">
                      {reason.title}
                    </h3>

                    {/* Description */}
                    <p className="text-muted-foreground font-body font-light leading-relaxed text-sm">
                      {reason.description}
                    </p>
                  </div>

                  {/* Bottom accent bar */}
                  <div
                    className={`absolute bottom-0 left-8 right-8 h-0.5 rounded-full transition-all duration-500 bg-blue-gradient ${isHovered ? 'opacity-100' : 'opacity-0'
                      }`}
                  />
                </div>

                {/* Divider for desktop - hidden on last item */}
                {index < reasons.length - 1 && (
                  <div
                    className="hidden md:block absolute top-1/2 -right-4 lg:-right-6 w-px h-24 -translate-y-1/2 bg-border"
                  />
                )}
              </div>
            );
          })}
        </div>

        {/* Trust indicators */}
        <div
          className={`flex flex-wrap items-center justify-center gap-8 lg:gap-16 mt-20 pt-12 border-t border-border transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {[
            { label: "Години опит", value: "5+" },
            { label: "Доволни клиенти", value: "50+" },
            { label: "Поддръжка", value: "24/7" },
          ].map((item, index) => (
            <div key={index} className="text-center">
              <div className="text-2xl font-display font-bold text-gradient-blue mb-1">
                {item.value}
              </div>
              <div className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                {item.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
