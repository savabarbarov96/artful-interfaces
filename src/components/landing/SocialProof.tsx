import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
  suffix?: string;
}

interface SocialProofProps {
  stats: Stat[];
}

const SocialProof = ({ stats }: SocialProofProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [counts, setCounts] = useState<number[]>(stats.map(() => 0));
  const animatedRef = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.3 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // Animated count-up
  useEffect(() => {
    if (!isVisible || animatedRef.current) return;
    animatedRef.current = true;

    const targets = stats.map((s) => parseInt(s.value.replace(/\D/g, ""), 10) || 0);
    const duration = 1800;
    const start = performance.now();

    const tick = (now: number) => {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3);

      setCounts(targets.map((t) => Math.round(t * eased)));

      if (progress < 1) requestAnimationFrame(tick);
    };

    requestAnimationFrame(tick);
  }, [isVisible, stats]);

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-20 overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, hsl(217 91% 50%) 0%, hsl(230 85% 52%) 50%, hsl(217 91% 45%) 100%)",
        }}
      />
      <div className="absolute inset-0 bg-geometric-grid opacity-[0.06]" />

      {/* Glow orbs */}
      <div
        className="absolute -top-20 left-1/4 w-[300px] h-[300px] rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(0 0% 100% / 0.3) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute -bottom-20 right-1/3 w-[250px] h-[250px] rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 80% 60% / 0.3) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      <div className="container relative z-10">
        <div
          className={`grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-8"
          }`}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="text-center"
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-4xl md:text-5xl lg:text-6xl font-display font-bold text-white mb-2 drop-shadow-[0_4px_16px_rgba(255,255,255,0.2)]">
                {counts[i]}
                {stat.suffix || stat.value.replace(/\d/g, "")}
              </div>
              <div className="text-white/70 font-body text-sm md:text-base tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SocialProof;
