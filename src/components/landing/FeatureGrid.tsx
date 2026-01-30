import { useEffect, useRef, useState, type ReactNode } from "react";
import type { LucideIcon } from "lucide-react";

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface FeatureGridProps {
  eyebrow: string;
  title: ReactNode;
  subtitle?: string;
  features: Feature[];
  columns?: 2 | 3;
}

const FeatureGrid = ({
  eyebrow,
  title,
  subtitle,
  features,
  columns = 3,
}: FeatureGridProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-[hsl(220,30%,98%)]"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      </div>

      {/* Background */}
      <div className="absolute inset-0 bg-mesh opacity-50 pointer-events-none" />
      <div className="absolute inset-0 bg-geometric-grid opacity-25 pointer-events-none" />

      {/* Orbs */}
      <div className="glow-orb glow-orb-copper w-[350px] h-[350px] -top-20 -right-20 opacity-10" />
      <div className="glow-orb glow-orb-teal w-[250px] h-[250px] bottom-0 left-0 opacity-8" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            {eyebrow}
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-6">
            {title}
          </h2>
          {subtitle && (
            <p className="text-foreground text-xl md:text-2xl font-display font-medium italic">
              {subtitle}
            </p>
          )}
        </div>

        {/* Grid */}
        <div
          className={`grid gap-6 max-w-6xl mx-auto ${
            columns === 2
              ? "md:grid-cols-2"
              : "md:grid-cols-2 lg:grid-cols-3"
          }`}
        >
          {features.map((feature, i) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.title}
                className={`group transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-12"
                }`}
                style={{ transitionDelay: `${(i + 1) * 100}ms` }}
              >
                <div
                  className="relative h-full p-7 md:p-8 rounded-2xl bg-white border border-[hsl(220,13%,91%)] transition-all duration-400 hover:translate-y-[-3px] hover:shadow-[0_20px_60px_-12px_hsl(217_91%_50%/0.12)]"
                  style={{
                    boxShadow:
                      "0 4px 20px -8px hsl(222 47% 11% / 0.07), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background:
                        "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(217 91% 50% / 0.04) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative">
                    <div className="w-12 h-12 rounded-xl bg-[hsl(217,91%,96%)] border border-[hsl(217,91%,90%)] flex items-center justify-center text-primary mb-5 group-hover:scale-110 transition-transform duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="text-foreground font-display text-xl md:text-2xl mb-3">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground font-body text-base leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
      </div>
    </section>
  );
};

export default FeatureGrid;
