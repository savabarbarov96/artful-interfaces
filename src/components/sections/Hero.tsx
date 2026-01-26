import { Button } from "@/components/ui/button";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-hero-gradient">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-1/4 -right-20 w-[600px] h-[600px] rounded-full bg-primary/5 blur-3xl animate-pulse-subtle" />
        <div className="absolute -bottom-32 -left-20 w-[500px] h-[500px] rounded-full bg-primary/3 blur-3xl animate-pulse-subtle delay-500" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full border border-foreground/[0.03]" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] rounded-full border border-foreground/[0.02]" />
      </div>

      <div className="container relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Label */}
          <div className="animate-fade-up">
            <span className="text-label text-warm-gray tracking-widest">
              Software Development Studio
            </span>
          </div>

          {/* Main headline */}
          <h1 className="text-display-xl text-foreground mt-8 mb-8 animate-fade-up delay-100">
            Изграждаме дигитални решения за вашия бизнес
          </h1>

          {/* Subheadline */}
          <p className="text-body-xl text-muted-foreground max-w-xl mx-auto mb-12 animate-fade-up delay-200">
            Уебсайтове, онлайн магазини и custom софтуер.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up delay-300">
            <Button variant="hero" size="lg" asChild>
              <a href="#contact">Безплатна консултация</a>
            </Button>
            <Button variant="hero-outline" size="lg" asChild>
              <a href="#work">Нашите проекти</a>
            </Button>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-fade-up delay-700">
        <div className="flex flex-col items-center gap-3 text-muted-foreground">
          <span className="text-xs font-medium tracking-wider uppercase">Scroll</span>
          <div className="w-px h-12 bg-gradient-to-b from-foreground/20 to-transparent" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
