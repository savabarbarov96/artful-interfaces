import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";

const Hero = () => {
  const heroRef = useRef<HTMLElement>(null);
  const [scrollY, setScrollY] = useState(0);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

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
      {/* Animated gradient mesh background */}
      <div
        className="absolute inset-0 opacity-60"
        style={{
          background: `radial-gradient(ellipse 80% 60% at ${30 + mousePos.x * 40}% ${20 + mousePos.y * 30}%, hsl(0 0% 100% / 0.3) 0%, transparent 50%)`,
          transition: 'background 0.5s ease-out',
        }}
      />

      {/* Geometric grid pattern with parallax */}
      <div
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `
            linear-gradient(to right, hsl(0 0% 100% / 0.3) 1px, transparent 1px),
            linear-gradient(to bottom, hsl(0 0% 100% / 0.3) 1px, transparent 1px)
          `,
          backgroundSize: '80px 80px',
          transform: `translateY(${scrollY * 0.2}px)`,
        }}
      />

      {/* Radial lines emanating from center-bottom */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background: `repeating-conic-gradient(
            from 0deg at 50% 120%,
            hsl(0 0% 100% / 0) 0deg,
            hsl(0 0% 100% / 0.15) 0.5deg,
            hsl(0 0% 100% / 0) 1deg
          )`,
        }}
      />

      {/* Floating glow orbs with mouse parallax */}
      <div
        className="absolute w-[600px] h-[600px] -top-40 -right-40 rounded-full opacity-30"
        style={{
          background: 'radial-gradient(circle, hsl(0 0% 100% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translate(${mousePos.x * -30}px, ${mousePos.y * -30}px) scale(${1 + scrollY * 0.0002})`,
          transition: 'transform 0.8s ease-out',
        }}
      />
      <div
        className="absolute w-[400px] h-[400px] bottom-20 -left-40 rounded-full opacity-20"
        style={{
          background: 'radial-gradient(circle, hsl(173 80% 60% / 0.4) 0%, transparent 70%)',
          filter: 'blur(80px)',
          transform: `translate(${mousePos.x * 20}px, ${mousePos.y * 20}px)`,
          transition: 'transform 0.6s ease-out',
        }}
      />

      {/* Decorative geometric shapes */}
      <svg
        className="absolute right-[10%] top-[20%] w-64 h-64 opacity-10"
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

      {/* Animated wireframe sphere - enhanced */}
      <div
        className="absolute right-0 top-1/2 translate-x-1/4 w-[800px] h-[800px] opacity-20"
        style={{
          transform: `translateY(${-50 + scrollY * 0.15}%) translateX(25%) rotate(${scrollY * 0.02}deg)`,
        }}
      >
        <svg viewBox="0 0 400 400" className="w-full h-full">
          {/* Longitude lines */}
          {[0, 20, 40, 60, 80, 100, 120, 140, 160].map((angle) => (
            <ellipse
              key={`long-${angle}`}
              cx="200"
              cy="200"
              rx={200 * Math.cos((angle * Math.PI) / 180)}
              ry="200"
              fill="none"
              stroke="hsl(0 0% 100% / 0.5)"
              strokeWidth="0.5"
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
          {/* Latitude lines */}
          {[-80, -60, -40, -20, 0, 20, 40, 60, 80].map((lat, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="200"
              cy={200 + lat * 1.8}
              rx={Math.sqrt(40000 - lat * lat * 3.2)}
              ry={Math.sqrt(40000 - lat * lat * 3.2) * 0.25}
              fill="none"
              stroke="hsl(0 0% 100% / 0.4)"
              strokeWidth="0.5"
            />
          ))}
          {/* Outer circle */}
          <circle
            cx="200"
            cy="200"
            r="199"
            fill="none"
            stroke="hsl(0 0% 100% / 0.6)"
            strokeWidth="1"
          />
          {/* Inner accent circle */}
          <circle
            cx="200"
            cy="200"
            r="150"
            fill="none"
            stroke="hsl(0 0% 100% / 0.3)"
            strokeWidth="0.5"
            strokeDasharray="10 20"
          />
        </svg>
      </div>

      {/* Floating accent particles */}
      <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/60 animate-float-slow shadow-glow" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-white/40 animate-float delay-300" />
      <div className="absolute top-1/3 right-1/3 w-1.5 h-1.5 rounded-full bg-accent/70 animate-float-slow delay-500" />
      <div className="absolute top-2/3 left-[20%] w-2 h-2 rounded-full bg-white/50 animate-float delay-700" />
      <div className="absolute top-1/2 right-1/4 w-1 h-1 rounded-full bg-white/40 animate-float-slow delay-200" />

      {/* Decorative lines */}
      <div
        className="absolute left-[15%] top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.2) 30%, hsl(0 0% 100% / 0.2) 70%, transparent 100%)',
          transform: `scaleY(${1 - scrollY * 0.001})`,
        }}
      />
      <div
        className="absolute right-[20%] top-0 bottom-0 w-px"
        style={{
          background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.15) 40%, hsl(0 0% 100% / 0.15) 60%, transparent 100%)',
        }}
      />

      {/* Main content */}
      <div className="container relative z-10 pt-32 pb-40">
        <div className="max-w-4xl">
          {/* Eyebrow label */}
          <div className="flex items-center gap-3 mb-8 animate-fade-up">
            <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
              <Sparkles className="w-4 h-4 text-white" />
              <span className="text-label text-white/90">Премиум уеб решения</span>
            </div>
          </div>

          {/* Main headline with staggered animation */}
          <h1 className="text-display-hero text-white mb-8">
            <span className="block animate-fade-up">Не просто уебсайт</span>
            <span className="block animate-fade-up delay-200">
              <span className="italic font-medium text-accent">Цяло уеб решение</span>
            </span>
          </h1>

          {/* Subheadline */}
          <p
            className="text-xl md:text-2xl text-white/80 max-w-2xl mb-12 leading-relaxed animate-fade-up delay-400 font-body font-light"
          >
            Премиум уебсайт и лого дизайн, всичко необходимо за Вашия бизнес онлайн — изградено от експерти с внимание към всеки детайл.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-5 animate-fade-up delay-500">
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
              className="border-white/30 text-white hover:bg-white/10 hover:border-white/50 px-8 py-6 text-base rounded-xl transition-all duration-300"
              asChild
            >
              <a href="#work">Вижте проектите ни</a>
            </Button>
          </div>

          {/* Sub-CTA text */}
          <p className="text-white/50 text-sm mt-6 animate-fade-up delay-600 font-body">
            Нека планираме проекта Ви • Отговор до 24 часа
          </p>
        </div>
      </div>

      {/* Clients strip - premium redesign */}
      <div
        className="absolute bottom-0 left-0 right-0 bg-white/5 backdrop-blur-md border-t border-white/10 z-20"
      >
        <div className="container py-8">
          <div className="flex flex-col md:flex-row md:items-center gap-6">
            <div className="flex items-center gap-3 flex-shrink-0">
              <div className="w-2 h-2 rounded-full bg-white animate-pulse-glow" />
              <p className="text-white/70 text-sm font-body">
                Работим с <span className="text-white font-semibold">най-добрите</span> технологии
              </p>
            </div>

            {/* Infinite scroll marquee */}
            <div className="flex-1 overflow-hidden">
              <div className="flex items-center gap-12 animate-marquee hover:[animation-play-state:paused]">
                {[...technologies, ...technologies].map((name, i) => (
                  <span
                    key={i}
                    className="text-white/40 font-display text-lg md:text-xl whitespace-nowrap tracking-wider hover:text-white/80 transition-colors duration-300 cursor-default"
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
        className="absolute bottom-32 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 animate-fade-up delay-700"
        style={{
          opacity: Math.max(0, 1 - scrollY * 0.005),
        }}
      >
        <span className="text-white/40 text-xs font-body uppercase tracking-widest">Scroll</span>
        <div className="w-px h-12 bg-gradient-to-b from-white/50 to-transparent animate-pulse-glow" />
      </div>
    </section>
  );
};

export default Hero;
