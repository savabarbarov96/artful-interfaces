import { useEffect, useRef, useState, type ReactNode } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

interface LandingCTAProps {
  title: ReactNode;
  subtitle: string;
  ctaText: string;
  ctaHref?: string;
}

const LandingCTA = ({
  title,
  subtitle,
  ctaText,
  ctaHref = "#contact",
}: LandingCTAProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.2 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative py-20 md:py-28 overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0 bg-hero-gradient" />
      <div className="absolute inset-0 grain-overlay pointer-events-none" />

      {/* Radial glow */}
      <div
        className="absolute inset-0 opacity-40 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, hsl(0 0% 100% / 0.15) 0%, transparent 60%)",
        }}
      />

      {/* Floating orbs */}
      <div
        className="absolute w-[400px] h-[400px] -top-32 -left-32 rounded-full opacity-20 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(0 0% 100% / 0.2) 0%, transparent 70%)",
          filter: "blur(60px)",
        }}
      />
      <div
        className="absolute w-[300px] h-[300px] -bottom-24 -right-24 rounded-full opacity-15 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle, hsl(173 80% 60% / 0.2) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Decorative particles */}
      <div className="absolute top-1/4 right-[15%] w-2 h-2 rounded-full bg-white/40 animate-float-slow pointer-events-none" />
      <div className="absolute bottom-1/3 left-[20%] w-1.5 h-1.5 rounded-full bg-white/50 animate-float delay-300 pointer-events-none" />

      <div className="container relative z-10">
        <div
          className={`max-w-3xl mx-auto text-center transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h2 className="text-display-lg text-white mb-6 drop-shadow-[0_6px_20px_rgba(255,255,255,0.2)]">
            {title}
          </h2>
          <p className="text-xl md:text-2xl text-white/80 font-body mb-10 max-w-2xl mx-auto leading-relaxed">
            {subtitle}
          </p>
          <Button
            size="lg"
            className="group bg-white hover:bg-white/95 text-primary font-semibold px-10 py-7 text-lg rounded-xl shadow-xl hover:shadow-2xl transition-all duration-500"
            asChild
          >
            <a href={ctaHref} className="flex items-center gap-3">
              {ctaText}
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </a>
          </Button>
          <p className="text-white/50 font-body text-sm mt-6">
            Безплатна консултация • Отговаряме до 24 часа
          </p>
        </div>
      </div>
    </section>
  );
};

export default LandingCTA;
