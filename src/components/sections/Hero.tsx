import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Spline from '@splinetool/react-spline';

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const splineContainerRef = useRef<HTMLDivElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  // Block scroll events from reaching Spline
  useEffect(() => {
    const container = splineContainerRef.current;
    if (!container) return;

    const blockScroll = (e: WheelEvent) => {
      e.stopPropagation();
    };

    // Capture phase to intercept before Spline
    container.addEventListener('wheel', blockScroll, { capture: true, passive: true });

    return () => {
      container.removeEventListener('wheel', blockScroll, { capture: true });
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    const handleMouseMove = (e: MouseEvent) => {
      if (heroRef.current) {
        const rect = heroRef.current.getBoundingClientRect();
        setMousePos({
          x: (e.clientX - rect.left) / rect.width,
          y: (e.clientY - rect.top) / rect.height,
        });
      }
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  const technologies = [
    "React",
    "NodeJS",
    "Supabase",
    "TailwindCSS",
    "TypeScript",
    "PostgreSQL",
    "Vite",
    "Framer Motion",
    "Next.js",
    "SQL",
  ];

  return (
    <section
      ref={heroRef}
      className="relative min-h-screen flex items-center overflow-hidden grain-overlay bg-hero-gradient"
    >
      {/* Spline 3D Scene - hidden on mobile, positioned right on desktop */}
      <div
        ref={splineContainerRef}
        className="absolute inset-0 z-[5] hidden md:block"
      >
        <Spline
          scene="https://prod.spline.design/GkBTyEqij0NnFcAZ/scene.splinecode"
          style={{ width: '100%', height: '100%' }}
        />
      </div>

      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 opacity-45 pointer-events-none"
        style={{
          background: `radial-gradient(ellipse 70% 52% at ${30 + mousePos.x * 40}% ${20 + mousePos.y * 30}%, hsl(0 0% 100% / 0.24) 0%, transparent 55%)`,
          transition: 'background 0.5s ease-out',
        }}
      />

      {/* Radial lines emanating from center-bottom */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: `repeating-conic-gradient(
            from 0deg at 50% 120%,
            hsl(0 0% 100% / 0) 0deg,
            hsl(0 0% 100% / 0.15) 0.5deg,
            hsl(0 0% 100% / 0) 1deg
          )`,
        }}
      />

      {/* Spinning planet - mobile only */}
      <div
        className="absolute -right-20 top-1/3 w-[280px] h-[280px] md:hidden pointer-events-none"
      >
        <div
          className="w-full h-full rounded-full animate-spin-slow"
          style={{
            background: `
              radial-gradient(circle at 30% 30%, hsl(0 0% 100% / 0.4) 0%, transparent 50%),
              radial-gradient(circle at 70% 60%, hsl(217 91% 60% / 0.3) 0%, transparent 40%),
              radial-gradient(circle, hsl(217 91% 50% / 0.25) 0%, hsl(217 91% 40% / 0.1) 50%, transparent 70%)
            `,
            boxShadow: '0 0 60px hsl(217 91% 50% / 0.3), inset 0 0 40px hsl(0 0% 100% / 0.1)',
          }}
        />
      </div>

      {/* Floating glow orbs with mouse parallax */}
      <div
        className="absolute w-[520px] h-[520px] -top-32 -right-36 rounded-full opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.28) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px) scale(${1 + scrollY * 0.0002})`,
          transition: 'transform 0.8s ease-out',
        }}
      />
      <div
        className="absolute w-[360px] h-[360px] bottom-16 -left-40 rounded-full opacity-15 pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(173 80% 60% / 0.25) 0%, transparent 70%)',
          filter: 'blur(70px)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      />

      {/* Decorative geometric shapes */}
      <svg
        className="absolute right-[10%] top-[20%] w-64 h-64 opacity-10 pointer-events-none"
        viewBox="0 0 200 200"
        style={{
          transform: `rotate(${scrollY * 0.05}deg) translateY(${scrollY * 0.1}px)`,
        }}
      >
        <polygon
          points="100,10 190,50 190,150 100,190 10,150 10,50"
          fill="none"
          stroke="hsl(0 0% 100%)"
          strokeWidth="1"
        />
      </svg>

      {/* Floating accent particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/60 animate-float-slow shadow-glow pointer-events-none" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/40 animate-float delay-300 pointer-events-none" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/70 animate-float-slow delay-500 pointer-events-none" />
      <div className="absolute top-2/3 left-[20%] w-2 h-2 rounded-full bg-white/50 animate-float delay-700 pointer-events-none" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white/40 animate-float-slow delay-200 pointer-events-none" />

      {/* Decorative lines */}
      <div
        className="absolute left-[15%] top-0 bottom-0 w-px pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.2) 30%, hsl(0 0% 100% / 0.2) 70%, transparent 100%)',
          transform: `scaleY(${1 - scrollY * 0.001})`,
        }}
      />
      <div
        className="absolute right-[20%] top-0 bottom-0 w-px pointer-events-none"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.15) 40%, hsl(0 0% 100% / 0.15) 60%, transparent 100%)',
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 pt-32 pb-40 pointer-events-none">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 shadow-[0_10px_40px_rgba(255,255,255,0.12)]">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-label text-white">Премиум уеб решения</span>
            </div>
          </div>

          {/* Main headline with staggered animation */}
          <h1 className="text-display-hero text-white mb-8 drop-shadow-[0_8px_28px_rgba(255,255,255,0.25)] font-semibold leading-tight">
            <span className="block animate-fade-up">Вие развивате</span>
            <span className="block animate-fade-up delay-100 text-[#FF6B35]">бизнеса</span>
            <span className="block animate-fade-up delay-200">Ние се грижим за</span>
            <span className="block animate-fade-up delay-300 text-[#FF6B35]">сайта</span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-white max-w-2xl mb-12 leading-relaxed animate-fade-up delay-400 font-body font-medium drop-shadow-[0_6px_22px_rgba(255,255,255,0.22)]"
          >
            Пълен пакет: дизайн, разработка, хостинг и поддръжка — месечно.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-500 pointer-events-auto">
            <Button
              size="lg"
              className="group bg-white hover:bg-white/95 text-primary font-semibold px-8 py-6 text-base rounded-xl shadow-lg hover:shadow-xl transition-all duration-500"
              asChild
            >
              <a href="#contact" className="flex items-center gap-3">
                Безплатна консултация
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="hidden sm:inline-flex border-white/40 text-white hover:bg-white/20 hover:border-white/60 px-8 py-6 text-base rounded-xl transition-all duration-300 shadow-[0_10px_30px_rgba(255,255,255,0.12)]"
              asChild
            >
              <a href="#work">Вижте проектите ни</a>
            </Button>
          </div>

        </div>
      </div>

      {/* Clients strip - premium redesign */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white/10 backdrop-blur-lg border-t border-white/20 z-20 shadow-[0_-12px_40px_rgba(255,255,255,0.08)] pointer-events-auto"
      >
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="hidden md:flex items-center gap-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-glow" />
              <p className="text-white/70 text-sm font-body">
                Изпозлваме най-новите технологии.
              </p>
            </div>

            {/* Infinite scroll marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center gap-12 animate-marquee hover:[animation-play-state:paused]">
                {[...technologies, ...technologies].map((name, i) => (
                  <span
                    key={i}
                    className="font-display text-lg md:text-xl whitespace-nowrap tracking-wider text-white drop-shadow-[0_4px_18px_rgba(255,255,255,0.25)]"
                  >
                    {name}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-700 pointer-events-none"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.005),
        }}
      >
        <span className="text-white/70 text-xs font-body uppercase tracking-widest drop-shadow-[0_4px_14px_rgba(255,255,255,0.18)]">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
};

export default Hero;
