import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

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
  },
  {
    src: "/clients/circle-gemini-google-icon-symbol-logo-free-png.webp",
    alt: "Google Gemini",
    label: "Gemini",
  },
];

const capabilities = [
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
];

const AIIntegrations = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.1);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute inset-0 aa-grid-paper opacity-50 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="06"
            label="AI Интеграции"
            align="center"
            title={
              <>
                AI <span className="text-machine-deep">бизнес</span> интеграция
              </>
            }
            lead="Трансформирайте операциите си с интелигентна автоматизация и machine learning решения. Внедряваме AI работни процеси, предиктивна аналитика и разговорни интерфейси."
          />
        </div>

        {/* Schematic panel */}
        <div
          className="relative max-w-4xl mx-auto mt-14 border border-ink/15 bg-bone aa-reveal"
          style={{ transitionDelay: "150ms" }}
        >
          <Cross className="absolute -top-[7px] -right-[7px] text-ink/40" />
          <Cross className="absolute -bottom-[7px] -left-[7px] text-ink/40" />

          {/* Providers row */}
          <div className="grid grid-cols-3 border-b border-ink/15">
            {logos.map((logo, i) => (
              <div
                key={logo.label}
                className={`flex flex-col items-center gap-3 py-7 ${i < logos.length - 1 ? "border-r border-ink/10" : ""}`}
              >
                <div className="w-12 h-12 md:w-14 md:h-14 rounded-sm bg-white border border-ink/10 shadow-sm flex items-center justify-center transition-transform duration-300 hover:-translate-y-1">
                  <img src={logo.src} alt={logo.alt} className="w-7 h-7 md:w-8 md:h-8 object-contain" loading="lazy" />
                </div>
                <span className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/55">{logo.label}</span>
              </div>
            ))}
          </div>

          {/* Flow connector */}
          <div className="relative h-16 border-b border-ink/15" aria-hidden="true">
            <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none" viewBox="0 0 600 64">
              <path
                d="M100 0 V20 Q100 32 130 32 H270 M300 0 V32 M500 0 V20 Q500 32 470 32 H330 M300 32 V64"
                fill="none"
                stroke="hsl(var(--aa-teal))"
                strokeWidth="1.5"
                strokeDasharray="5 6"
                className="aa-dash-flow"
                opacity="0.7"
              />
            </svg>
            <span className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 px-3 py-1 bg-ink text-paper font-plexmono text-[10px] uppercase tracking-[0.2em]">
              вашият бизнес
            </span>
          </div>

          {/* Capabilities */}
          <div className="grid md:grid-cols-3">
            {capabilities.map((card, i) => (
              <div
                key={card.title}
                className={`p-6 md:p-7 aa-reveal ${
                  i < capabilities.length - 1 ? "border-b md:border-b-0 md:border-r border-ink/10" : ""
                }`}
                style={{ transitionDelay: `${300 + i * 120}ms` }}
              >
                <div className="w-9 h-9 rounded-sm bg-machine/12 border border-machine/25 flex items-center justify-center text-machine-deep mb-4">
                  {card.icon}
                </div>
                <h3 className="font-heading text-lg text-ink mb-2">{card.title}</h3>
                <p className="font-plex text-sm text-ink/65 leading-relaxed">{card.desc}</p>
              </div>
            ))}
          </div>
        </div>

        <p
          className="text-center font-plexmono text-xs md:text-sm text-ink/50 tracking-wide max-w-lg mx-auto mt-10 aa-reveal"
          style={{ transitionDelay: "500ms" }}
        >
          Отключваме нови приходни потоци и оперативна ефективност чрез интелигентна автоматизация.
        </p>
      </div>
    </section>
  );
};

export default AIIntegrations;
