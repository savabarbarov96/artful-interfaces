import { useEffect, useRef, useState } from "react";

const AIIntegrations = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const coreRef = useRef<HTMLDivElement>(null);
  const ringRefs = useRef<(HTMLDivElement | null)[]>([null, null, null]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.12 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const tick = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const wh = window.innerHeight;
        const sh = rect.height;
        const p = Math.max(0, Math.min(1, (wh - rect.top) / (wh + sh)));
        scrollProgressRef.current = p;

        if (coreRef.current) {
          coreRef.current.style.transform = `translateY(${(p - 0.5) * -30}px) scale(${0.96 + p * 0.08})`;
        }
        ringRefs.current.forEach((ring, i) => {
          if (ring) {
            const speed = [0.3, -0.2, 0.15][i];
            ring.style.transform = `rotate(${p * 360 * speed}deg)`;
          }
        });
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const logos = [
    {
      src: "/clients/chatgpt_logo_chatgpt_logo_circle_gpt_ia_openai_icon_264978.webp",
      alt: "OpenAI ChatGPT",
      label: "ChatGPT",
    },
    {
      src: "/clients/claude-logo.svg",
      alt: "Anthropic Claude",
      label: "Claude",
      isSvg: true,
    },
    {
      src: "/clients/circle-gemini-google-icon-symbol-logo-free-png.webp",
      alt: "Google Gemini",
      label: "Gemini",
    },
  ];

  return (
    <section
      ref={sectionRef}
      className="relative py-16 md:py-24 lg:py-32 overflow-hidden bg-[hsl(220,30%,98%)]"
    >
      {/* Top separator */}
      <div className="absolute top-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
        <div className="absolute left-1/2 -translate-x-1/2 -top-1 w-2 h-2 rotate-45 bg-primary/10 border border-primary/20" />
      </div>

      {/* Subtle background radials */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 25% 50%, hsl(217 91% 50% / 0.04) 0%, transparent 60%), radial-gradient(ellipse 50% 60% at 75% 30%, hsl(230 80% 55% / 0.03) 0%, transparent 60%)",
        }}
      />

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-geometric-grid opacity-30 pointer-events-none" />

      {/* Parallax decorative elements */}
      <div
        className="absolute top-12 left-[8%] w-40 h-40 rounded-full opacity-[0.04] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(217 91% 50%) 0%, transparent 70%)" }}
      />
      <div
        className="absolute bottom-16 right-[10%] w-28 h-28 rounded-full opacity-[0.05] pointer-events-none"
        style={{ background: "radial-gradient(circle, hsl(173 80% 40%) 0%, transparent 70%)" }}
      />

      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center mb-14 md:mb-18">
          <span
            className={`text-label text-primary mb-4 block font-body font-medium tracking-[0.2em] transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-4"}`}
          >
            AI Интеграции
          </span>
          <h2
            className={`text-display-lg text-foreground mb-6 transition-all duration-700 delay-100 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            AI <span className="text-accent-italic">Бизнес</span>{" "}
            Интеграция
          </h2>
          <p
            className={`max-w-2xl mx-auto text-muted-foreground text-lg md:text-xl leading-relaxed font-body transition-all duration-700 delay-200 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
          >
            Трансформирайте операциите си с интелигентна автоматизация и machine
            learning решения. Внедряваме AI работни процеси, предиктивна
            аналитика и разговорни интерфейси.
          </p>
        </div>

        {/* Orbital visualization + Cards layout */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Orbital animation */}
          <div
            className={`relative flex items-center justify-center transition-all duration-1000 delay-300 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"}`}
          >
            <div className="relative w-[300px] h-[300px] md:w-[380px] md:h-[380px]">
              {/* Outer ring */}
              <div
                ref={(el) => { ringRefs.current[0] = el; }}
                className="absolute inset-0 rounded-full will-change-transform"
                style={{
                  border: "1px solid hsl(217 91% 50% / 0.12)",
                  animation: "spin-slow 60s linear infinite",
                }}
              />

              {/* Middle ring */}
              <div
                ref={(el) => { ringRefs.current[1] = el; }}
                className="absolute inset-[15%] rounded-full will-change-transform"
                style={{
                  border: "1px dashed hsl(217 91% 50% / 0.08)",
                  animation: "spin-slow 80s linear infinite reverse",
                }}
              />

              {/* Inner ring */}
              <div
                ref={(el) => { ringRefs.current[2] = el; }}
                className="absolute inset-[32%] rounded-full will-change-transform"
                style={{
                  border: "1px solid hsl(217 91% 50% / 0.06)",
                  animation: "spin-slow 45s linear infinite",
                }}
              />

              {/* Center core */}
              <div
                ref={coreRef}
                className="absolute inset-[38%] rounded-full will-change-transform flex items-center justify-center"
                style={{
                  background:
                    "radial-gradient(circle, hsl(217 91% 50% / 0.1) 0%, hsl(217 91% 50% / 0.03) 60%, transparent 80%)",
                }}
              >
                <div
                  className="w-10 h-10 md:w-14 md:h-14 rounded-full flex items-center justify-center"
                  style={{
                    background: "linear-gradient(135deg, hsl(217 91% 50%) 0%, hsl(230 85% 55%) 100%)",
                    boxShadow: "0 4px 20px hsl(217 91% 50% / 0.3), 0 0 50px hsl(217 91% 50% / 0.1)",
                    animation: "pulse-glow 4s ease-in-out infinite",
                  }}
                >
                  <span className="text-white text-xs md:text-sm font-bold font-body tracking-wider">
                    AI
                  </span>
                </div>
              </div>

              {/* Orbiting logos */}
              {logos.map((logo, i) => (
                <div
                  key={logo.label}
                  className={`absolute transition-all duration-700 ${isVisible ? "opacity-100 scale-100" : "opacity-0 scale-50"}`}
                  style={{
                    transitionDelay: `${500 + i * 200}ms`,
                    left: "50%",
                    top: "50%",
                    animation: `orbit-${i} 30s linear infinite`,
                  }}
                >
                  <div className="group relative -translate-x-1/2 -translate-y-1/2">
                    {/* Hover glow */}
                    <div
                      className="absolute inset-[-10px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                      style={{
                        background: "radial-gradient(circle, hsl(217 91% 50% / 0.12) 0%, transparent 70%)",
                      }}
                    />

                    {/* Logo container */}
                    <div
                      className="relative w-14 h-14 md:w-[72px] md:h-[72px] rounded-2xl flex items-center justify-center cursor-pointer transition-all duration-500 hover:scale-110 hover:-translate-y-1"
                      style={{
                        background: "white",
                        border: "1px solid hsl(220 13% 91%)",
                        boxShadow:
                          "0 4px 16px hsl(222 47% 11% / 0.08), 0 1px 3px hsl(222 47% 11% / 0.06)",
                      }}
                    >
                      <img
                        src={logo.src}
                        alt={logo.alt}
                        className={`w-8 h-8 md:w-10 md:h-10 object-contain ${logo.isSvg ? "" : "rounded-lg"}`}
                      />
                    </div>

                    {/* Label */}
                    <span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-[10px] md:text-xs text-muted-foreground font-body font-medium whitespace-nowrap">
                      {logo.label}
                    </span>
                  </div>
                </div>
              ))}

              {/* Floating dots */}
              {[...Array(5)].map((_, i) => (
                <div
                  key={i}
                  className="absolute w-1 h-1 rounded-full bg-primary/15"
                  style={{
                    left: `${25 + i * 12}%`,
                    top: `${20 + (i % 3) * 25}%`,
                    animation: `float-slow ${12 + i * 3}s ease-in-out infinite`,
                    animationDelay: `${i * 1.5}s`,
                  }}
                />
              ))}
            </div>
          </div>

          {/* Right — Feature cards */}
          <div className="space-y-5">
            {[
              {
                title: "Работни процеси",
                desc: "Автоматизирайте повтарящи се задачи с AI-базирани работни потоци, които учат и се адаптират.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: "Предиктивна аналитика",
                desc: "Разкрийте скрити модели в данните и вземете информирани решения с ML прогнози.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 13.125C3 12.504 3.504 12 4.125 12h2.25c.621 0 1.125.504 1.125 1.125v6.75C7.5 20.496 6.996 21 6.375 21h-2.25A1.125 1.125 0 013 19.875v-6.75zM9.75 8.625c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125v11.25c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V8.625zM16.5 4.125c0-.621.504-1.125 1.125-1.125h2.25C20.496 3 21 3.504 21 4.125v15.75c0 .621-.504 1.125-1.125 1.125h-2.25a1.125 1.125 0 01-1.125-1.125V4.125z" />
                  </svg>
                ),
              },
              {
                title: "Разговорни интерфейси",
                desc: "Чатботове и гласови асистенти, които разбират контекста на вашия бизнес.",
                icon: (
                  <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 01-.825-.242m9.345-8.334a2.126 2.126 0 00-.476-.095 48.64 48.64 0 00-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0011.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                  </svg>
                ),
              },
            ].map((card, i) => (
              <div
                key={card.title}
                className={`group relative transition-all duration-600 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
                style={{ transitionDelay: `${400 + i * 150}ms` }}
              >
                <div
                  className="relative p-6 md:p-7 rounded-2xl bg-white border border-[hsl(220,13%,91%)] transition-all duration-400 hover:translate-y-[-2px] hover:shadow-[0_16px_50px_-12px_hsl(217_91%_50%/0.12)]"
                  style={{
                    boxShadow: "0 4px 20px -8px hsl(222 47% 11% / 0.08), inset 0 1px 0 hsl(0 0% 100% / 0.8)",
                  }}
                >
                  {/* Hover glow */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
                    style={{
                      background: "radial-gradient(ellipse 80% 60% at 30% 20%, hsl(217 91% 50% / 0.04) 0%, transparent 60%)",
                    }}
                  />

                  <div className="relative flex items-start gap-4">
                    <div className="flex-shrink-0 w-10 h-10 rounded-xl bg-[hsl(217,91%,96%)] border border-[hsl(217,91%,90%)] flex items-center justify-center text-primary">
                      {card.icon}
                    </div>
                    <div>
                      <h3 className="text-foreground font-display text-xl md:text-2xl mb-2">
                        {card.title}
                      </h3>
                      <p className="text-muted-foreground font-body text-base leading-relaxed">
                        {card.desc}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom tagline */}
        <div
          className={`text-center mt-14 md:mt-18 transition-all duration-700 delay-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-6"}`}
        >
          <p className="text-muted-foreground font-body text-sm md:text-base max-w-lg mx-auto">
            Отключваме нови приходни потоци и оперативна ефективност чрез интелигентна автоматизация.
          </p>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px">
        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-border to-transparent" />
        <div className="absolute left-1/4 -bottom-0.5 w-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent" />
        <div className="absolute right-1/3 -bottom-0.5 w-8 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
      </div>

      {/* Orbital keyframes */}
      <style>{`
        @keyframes orbit-0 {
          from { transform: translate(-50%, -50%) rotate(0deg) translateX(130px) rotate(0deg); }
          to   { transform: translate(-50%, -50%) rotate(360deg) translateX(130px) rotate(-360deg); }
        }
        @keyframes orbit-1 {
          from { transform: translate(-50%, -50%) rotate(120deg) translateX(130px) rotate(-120deg); }
          to   { transform: translate(-50%, -50%) rotate(480deg) translateX(130px) rotate(-480deg); }
        }
        @keyframes orbit-2 {
          from { transform: translate(-50%, -50%) rotate(240deg) translateX(130px) rotate(-240deg); }
          to   { transform: translate(-50%, -50%) rotate(600deg) translateX(130px) rotate(-600deg); }
        }
        @media (min-width: 768px) {
          @keyframes orbit-0 {
            from { transform: translate(-50%, -50%) rotate(0deg) translateX(160px) rotate(0deg); }
            to   { transform: translate(-50%, -50%) rotate(360deg) translateX(160px) rotate(-360deg); }
          }
          @keyframes orbit-1 {
            from { transform: translate(-50%, -50%) rotate(120deg) translateX(160px) rotate(-120deg); }
            to   { transform: translate(-50%, -50%) rotate(480deg) translateX(160px) rotate(-480deg); }
          }
          @keyframes orbit-2 {
            from { transform: translate(-50%, -50%) rotate(240deg) translateX(160px) rotate(-240deg); }
            to   { transform: translate(-50%, -50%) rotate(600deg) translateX(160px) rotate(-600deg); }
          }
        }
      `}</style>
    </section>
  );
};

export default AIIntegrations;
