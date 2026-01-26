import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-hero-gradient">
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern" />
      
      {/* Wireframe globe decoration */}
      <div className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-1/4 w-[700px] h-[700px] opacity-40">
        <svg viewBox="0 0 400 400" className="w-full h-full animate-spin-slow">
          {/* Longitude lines */}
          {[0, 30, 60, 90, 120, 150].map((angle) => (
            <ellipse
              key={`long-${angle}`}
              cx="200"
              cy="200"
              rx={200 * Math.cos((angle * Math.PI) / 180)}
              ry="200"
              fill="none"
              stroke="rgba(255,255,255,0.3)"
              strokeWidth="1"
              transform={`rotate(${angle} 200 200)`}
            />
          ))}
          {/* Latitude lines */}
          {[-60, -30, 0, 30, 60].map((lat, i) => (
            <ellipse
              key={`lat-${i}`}
              cx="200"
              cy={200 + lat * 2}
              rx={Math.sqrt(40000 - lat * lat * 4)}
              ry={Math.sqrt(40000 - lat * lat * 4) * 0.3}
              fill="none"
              stroke="rgba(255,255,255,0.25)"
              strokeWidth="1"
            />
          ))}
          {/* Outer circle */}
          <circle cx="200" cy="200" r="200" fill="none" stroke="rgba(255,255,255,0.4)" strokeWidth="1.5" />
        </svg>
      </div>

      {/* Floating accent orbs */}
      <div className="absolute top-1/4 left-1/4 w-4 h-4 rounded-full bg-accent/60 animate-float" />
      <div className="absolute bottom-1/3 left-1/3 w-3 h-3 rounded-full bg-primary-foreground/40 animate-float delay-300" />
      <div className="absolute top-1/3 right-1/3 w-2 h-2 rounded-full bg-accent/50 animate-float delay-500" />

      <div className="container relative z-10 pt-32 pb-24">
        <div className="max-w-3xl">
          {/* Main headline */}
          <h1 className="text-display-xl text-primary-foreground animate-fade-up">
            Не просто уебсайт
            <br />
            <span className="text-accent-italic">Цяло уеб решение</span>
          </h1>

          {/* Subheadline */}
          <p className="text-lg md:text-xl text-primary-foreground/80 max-w-xl mt-8 mb-10 leading-relaxed animate-fade-up delay-200">
            Премиум уебсайт и лого дизайн, всичко необходимо за Вашия бизнес онлайн - изградено от експерти.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-up delay-300">
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#contact">Безплатна консултация</a>
            </Button>
          </div>

          {/* Sub-CTA text */}
          <p className="text-primary-foreground/60 text-sm mt-4 animate-fade-up delay-400">
            Нека планираме проекта Ви
          </p>
        </div>
      </div>

      {/* Clients strip */}
      <div className="absolute bottom-0 left-0 right-0 bg-primary/30 backdrop-blur-sm border-t border-primary-foreground/10 py-8">
        <div className="container">
          <p className="text-primary-foreground/60 text-sm mb-6 animate-fade-up delay-500">
            Над 50+ бизнеса и институции ни се довериха
          </p>
          <div className="flex items-center gap-12 overflow-hidden">
            <div className="flex items-center gap-12 animate-slide-left">
              {/* Client logos - stylized placeholders */}
              {[
                "TechCorp",
                "Amelia Diva",
                "DroneShow.bg",
                "BuildPro",
                "EcoLife",
                "FinanceHub",
                "TechCorp",
                "Amelia Diva",
                "DroneShow.bg",
              ].map((name, i) => (
                <span
                  key={i}
                  className="text-primary-foreground/50 font-display text-lg md:text-xl whitespace-nowrap italic"
                >
                  {name}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
