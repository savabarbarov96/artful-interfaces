import { useEffect, useRef, useState, type ReactNode } from "react";

interface Step {
  number: string;
  title: string;
  description: string;
}

interface ProcessStepsProps {
  eyebrow: string;
  title: ReactNode;
  steps: Step[];
}

const ProcessSteps = ({ eyebrow, title, steps }: ProcessStepsProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.15 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(217 50% 97%) 50%, hsl(220 30% 98%) 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-diamond-pattern opacity-20 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      {/* Orbs */}
      <div
        className="absolute top-1/4 left-[5%] w-36 h-36 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(217 91% 50%) 0%, transparent 70%)",
        }}
      />
      <div
        className="absolute bottom-1/4 right-[8%] w-28 h-28 rounded-full opacity-[0.05] pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 80% 40%) 0%, transparent 70%)",
        }}
      />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`text-center max-w-2xl mx-auto mb-16 md:mb-20 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            {eyebrow}
          </span>
          <h2 className="text-display-lg text-foreground font-display">
            {title}
          </h2>
        </div>

        {/* Steps */}
        <div className="max-w-5xl mx-auto">
          <div className="grid md:grid-cols-4 gap-8 md:gap-6 relative">
            {/* Connecting line — desktop only */}
            <div className="hidden md:block absolute top-10 left-[12.5%] right-[12.5%] h-px">
              <div
                className={`h-full transition-all duration-1500 ${
                  isVisible ? "bg-gradient-to-r from-primary/30 via-primary/20 to-primary/30" : "bg-transparent"
                }`}
                style={{
                  transitionDelay: "400ms",
                }}
              />
            </div>

            {steps.map((step, i) => (
              <div
                key={step.number}
                className={`relative text-center transition-all duration-700 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-8"
                }`}
                style={{ transitionDelay: `${(i + 1) * 150}ms` }}
              >
                {/* Number circle */}
                <div className="relative mx-auto mb-6 w-20 h-20">
                  {/* Pulse ring */}
                  <div
                    className={`absolute inset-0 rounded-full transition-all duration-700 ${
                      isVisible ? "opacity-100 scale-100" : "opacity-0 scale-75"
                    }`}
                    style={{
                      transitionDelay: `${(i + 1) * 150 + 200}ms`,
                      background:
                        "radial-gradient(circle, hsl(217 91% 50% / 0.08) 0%, transparent 70%)",
                    }}
                  />
                  <div
                    className="relative w-20 h-20 rounded-full flex items-center justify-center bg-white border-2 border-primary/20 shadow-md"
                    style={{
                      boxShadow:
                        "0 4px 20px hsl(217 91% 50% / 0.1), inset 0 1px 0 hsl(0 0% 100%)",
                    }}
                  >
                    <span className="text-2xl font-display font-bold text-primary">
                      {step.number}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <h3 className="text-foreground font-display text-xl md:text-2xl mb-3">
                  {step.title}
                </h3>
                <p className="text-muted-foreground font-body text-sm md:text-base leading-relaxed max-w-[220px] mx-auto">
                  {step.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default ProcessSteps;
