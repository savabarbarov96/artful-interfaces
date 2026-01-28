import { useEffect, useRef, useState } from "react";
import { Check, X } from "lucide-react";

const Proposition = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);

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
        const sectionTop = rect.top;
        setScrollY(-sectionTop * 0.1);
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const willGet = [
    "Персонализиран дизайн с фокус върху доверие и конверсии",
    "Бърз сайт с оптимизации за скорост и стабилност",
    "Перфектна мобилна версия",
    "Ясна структура, водеща към действие",
    "Домейн, хостинг и SSL – всичко поддържано",
    "Форми + интеграции (Analytics, пиксели, CRM)",
    "SEO настройка (мета тагове, индексиране)",
    "Месечна поддръжка без доплащане",
  ];

  const wontGet = [
    "Висока начална инвестиция",
    "Разтеглени срокове",
    "Претрупани пакети с ненужни екстри",
    "Скрито оскъпяване и \"изненади\"",
    "Бавен сайт с компромисен UX",
    "Липса на поддръжка след пускане",
    "Дълги договори без гъвкавост",
    "DIY решения без професионален вид",
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-12 md:py-16 overflow-hidden bg-[hsl(220,30%,98%)]"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div
          className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 bg-primary/10 border border-primary/20"
          style={{ transform: `translateX(-50%) rotate(45deg) translateY(${scrollY * 0.3}px)` }}
        />
      </div>

      {/* Parallax background elements */}
      <div
        className="absolute top-8 left-[8%] w-32 h-32 rounded-full opacity-[0.03] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(217 91% 50%) 0%, transparent 70%)',
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      />
      <div
        className="absolute bottom-12 right-[12%] w-24 h-24 rounded-full opacity-[0.04] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, hsl(152 60% 40%) 0%, transparent 70%)',
          transform: `translateY(${scrollY * -0.4}px)`,
        }}
      />

      {/* Parallax decorative lines */}
      <div
        className="absolute left-[5%] top-1/4 w-px h-20 bg-gradient-to-b from-transparent via-primary/10 to-transparent pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.6}px)` }}
      />
      <div
        className="absolute right-[7%] top-1/3 w-px h-16 bg-gradient-to-b from-transparent via-secondary/10 to-transparent pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.5}px)` }}
      />

      {/* Floating parallax dots */}
      <div
        className="absolute top-16 left-[15%] w-1.5 h-1.5 rounded-full bg-primary/20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.8}px)` }}
      />
      <div
        className="absolute bottom-20 right-[20%] w-1 h-1 rounded-full bg-secondary/25 pointer-events-none"
        style={{ transform: `translateY(${scrollY * -0.6}px)` }}
      />
      <div
        className="absolute top-1/2 left-[3%] w-1 h-1 rounded-full bg-accent/20 pointer-events-none"
        style={{ transform: `translateY(${scrollY * 0.4}px)` }}
      />

      <div className="container relative z-10">
        {/* Compact section header */}
        <div className="text-center mb-8 md:mb-10">
          <h2
            className={`text-display-md text-foreground transition-all duration-700 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"
            }`}
          >
            Ясна <span className="text-accent-italic">стойност</span>
          </h2>
        </div>

        {/* Two cards comparison - more compact */}
        <div className="grid md:grid-cols-2 gap-5 md:gap-6 max-w-4xl mx-auto">
          {/* Will Get Card - Green accent */}
          <div
            className={`group relative transition-all duration-600 delay-100 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative h-full p-6 md:p-7 rounded-2xl bg-white border border-[hsl(152,60%,88%)] transition-all duration-400 hover:shadow-[0_16px_50px_-12px_hsl(152_60%_40%/0.14)]"
              style={{
                boxShadow: '0 6px 26px -10px hsl(152 60% 40% / 0.12)',
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[hsl(152,60%,92%)]">
                <div className="w-9 h-9 rounded-xl bg-[hsl(152,60%,94%)] flex items-center justify-center">
                  <Check className="w-4.5 h-4.5 text-[hsl(152,55%,40%)]" strokeWidth={2.5} />
                </div>
                <h3 className="font-body text-xl md:text-2xl text-foreground font-semibold">
                  Ще получиш
                </h3>
              </div>

              {/* List items - compact */}
              <ul className="space-y-3">
                {willGet.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 transition-all duration-400 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                    }`}
                    style={{ transitionDelay: `${200 + i * 40}ms` }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(152,60%,94%)] flex items-center justify-center mt-0.5">
                      <Check className="w-3 h-3 text-[hsl(152,55%,40%)]" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-[1.02rem] text-foreground/90 font-body font-semibold leading-snug">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Won't Get Card - Red/muted accent */}
          <div
            className={`group relative transition-all duration-600 delay-200 ${
              isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            <div
              className="relative h-full p-6 md:p-7 rounded-2xl bg-white border border-[hsl(0,0%,90%)] transition-all duration-400 hover:shadow-[0_16px_50px_-12px_hsl(0_0%_40%/0.1)]"
              style={{
                boxShadow: '0 6px 26px -10px hsl(0 0% 40% / 0.08)',
              }}
            >
              {/* Card header */}
              <div className="flex items-center gap-2.5 mb-5 pb-4 border-b border-[hsl(0,0%,93%)]">
                <div className="w-9 h-9 rounded-xl bg-[hsl(0,40%,96%)] flex items-center justify-center">
                  <X className="w-4.5 h-4.5 text-[hsl(0,40%,60%)]" strokeWidth={2.5} />
                </div>
                <h3 className="font-body text-xl md:text-2xl text-foreground font-semibold">
                  Няма да получиш
                </h3>
              </div>

              {/* List items - compact */}
              <ul className="space-y-3">
                {wontGet.map((item, i) => (
                  <li
                    key={i}
                    className={`flex items-start gap-2.5 transition-all duration-400 ${
                      isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-3"
                    }`}
                    style={{ transitionDelay: `${250 + i * 40}ms` }}
                  >
                    <div className="flex-shrink-0 w-5 h-5 rounded-full bg-[hsl(0,40%,96%)] flex items-center justify-center mt-0.5">
                      <X className="w-3 h-3 text-[hsl(0,40%,60%)]" strokeWidth={3} />
                    </div>
                    <span className="text-base md:text-[1.02rem] text-foreground/70 font-body font-semibold leading-snug line-through decoration-foreground/35">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/4 -bottom-0.5 w-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute right-1/3 -bottom-0.5 w-8 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>
    </section>
  );
};

export default Proposition;
