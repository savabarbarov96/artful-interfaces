import { useState } from "react";
import { Check, Monitor, CreditCard, FolderOpen, BarChart3, ArrowRight } from "lucide-react";
import { useReveal, SectionHead } from "@/components/home/primitives";

const tabs = [
  {
    id: "communication",
    icon: Monitor,
    label: "Комуникация с екипа",
    title: "Трафика на сайта от телефона",
    description: "Вашите ключови метрики - посетители, сесии, важни събития - винаги на дистанция един клик. Google Analytics интегриран директно в портала, с ясни визуализации и данни на дневна или седмична база.",
    features: [
      "Ключови метрики на дневна и седмична база",
      "Посетители, сесии и важни събития",
      "Google Analytics интегриран директно в портала",
      "Достъпно от всяко устройство",
    ],
    cta: "Бърз сайт - още днес!",
  },
  {
    id: "payments",
    icon: CreditCard,
    label: "Плащания и абонамент",
    title: "Управлявайте плащанията лесно",
    description: "Автоматизирани фактури, известия за предстоящи плащания и пълна история на транзакциите. Интегрирани платежни методи за максимално удобство.",
    features: [
      "Автоматични фактури и известия",
      "Пълна история на плащанията",
      "Множество платежни методи",
      "Сигурни транзакции",
    ],
    cta: "Започнете сега",
  },
  {
    id: "files",
    icon: FolderOpen,
    label: "Файлове и документи",
    title: "Всички документи на едно място",
    description: "Централизирано хранилище за всички ваши файлове - договори, дизайни, материали. Организирайте, споделяйте и достъпвайте документите си отвсякъде.",
    features: [
      "Централизирано съхранение",
      "Лесно споделяне с екипа",
      "Версии на документите",
      "Сигурен достъп отвсякъде",
    ],
    cta: "Организирайте файловете си",
  },
  {
    id: "statistics",
    icon: BarChart3,
    label: "Статистики на живо",
    title: "Реални данни в реално време",
    description: "Следете представянето на вашия сайт с детайлни статистики. Разберете кои страници работят най-добре и оптимизирайте на база реални данни.",
    features: [
      "Статистики в реално време",
      "Детайлни аналитични доклади",
      "Сравнение по периоди",
      "Препоръки за оптимизация",
    ],
    cta: "Вижте статистиките",
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("communication");
  const [displayedTab, setDisplayedTab] = useState("communication");
  const [contentVisible, setContentVisible] = useState(true);
  const { ref: sectionRef, inView: isVisible } = useReveal<HTMLElement>(0.1);

  const activeContent = tabs.find((tab) => tab.id === displayedTab) || tabs[0];

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setContentVisible(false);
    setTimeout(() => {
      setDisplayedTab(tabId);
      requestAnimationFrame(() => setContentVisible(true));
    }, 240);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className={`relative py-20 md:py-28 bg-paper-deep overflow-hidden ${isVisible ? "aa-in" : ""}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px aa-rule-ink" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="05"
            label="Клиентски портал"
            title={
              <>
                Управлявайте всичко от <span className="text-machine-deep">едно място</span>
              </>
            }
            lead="Клиентски портал, който работи за Вас."
          />
        </div>

        {/* Tab strip */}
        <div
          role="tablist"
          aria-label="Функции на портала"
          className="flex flex-wrap gap-x-8 gap-y-2 mt-12 mb-12 border-b border-ink/15 aa-reveal"
          style={{ transitionDelay: "120ms" }}
        >
          {tabs.map((tab, i) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                role="tab"
                aria-selected={isActive}
                onClick={() => handleTabChange(tab.id)}
                className={`relative flex items-center gap-2.5 pb-4 -mb-px font-plexmono text-xs uppercase tracking-[0.12em] transition-colors duration-300 border-b-2 ${
                  isActive
                    ? "text-ink border-signal"
                    : "text-ink/60 border-transparent hover:text-ink/75"
                }`}
              >
                <span className={`text-[10px] ${isActive ? "text-signal" : "text-ink/30"}`}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1fr)_minmax(0,1.15fr)] gap-12 lg:gap-16 items-center">
          {/* Left — text */}
          <div className="aa-reveal" style={{ transitionDelay: "200ms" }}>
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? "translateY(0)" : "translateY(14px)",
                transition: "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <h3 className="font-heading text-2xl md:text-3xl text-ink mb-5">{activeContent.title}</h3>

              <p className="font-plex text-base md:text-lg text-ink/75 leading-relaxed mb-8">
                {activeContent.description}
              </p>

              <ul className="space-y-3 mb-9">
                {activeContent.features.map((feature, index) => (
                  <li
                    key={`${displayedTab}-${index}`}
                    className="flex items-center gap-3.5"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? "translateX(0)" : "translateX(-10px)",
                      transition: `opacity 0.35s ease ${contentVisible ? index * 50 : 0}ms, transform 0.35s ease ${contentVisible ? index * 50 : 0}ms`,
                    }}
                  >
                    <span className="w-5 h-5 rounded-sm bg-machine/15 border border-machine/25 flex items-center justify-center flex-shrink-0">
                      <Check className="w-3 h-3 text-machine-deep" strokeWidth={3} />
                    </span>
                    <span className="font-plex text-[0.95rem] text-ink/85">{feature}</span>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink text-paper font-plex font-semibold text-sm uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-ink-soft"
              >
                {activeContent.cta}
                <ArrowRight className="w-4 h-4 text-signal group-hover:translate-x-1 transition-transform" />
              </a>
            </div>
          </div>

          {/* Right — device mockups */}
          <div className="relative aa-reveal" style={{ transitionDelay: "300ms" }}>
            {/* Phone */}
            <div className="absolute -left-1 sm:-left-5 bottom-4 sm:bottom-8 w-[88px] sm:w-[118px] lg:w-[140px] z-20">
              <div
                className="rounded-[18px] sm:rounded-[24px] p-[4px] sm:p-[5px] bg-ink shadow-[0_24px_50px_-16px_rgba(0,0,0,0.45)] ring-1 ring-paper/20"
                style={{ transform: "rotate(-4deg)" }}
              >
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[4px] bg-black rounded-full z-10" />
                <div className="rounded-[14px] sm:rounded-[20px] overflow-hidden bg-white">
                  <picture>
                    <source srcSet="/dashboard_mobile.webp" type="image/webp" />
                    <img
                      src="/dashboard_mobile.png"
                      alt="Клиентски портал — мобилна версия"
                      className="w-full block"
                      loading="lazy"
                      style={{ aspectRatio: "9/19", objectFit: "cover", objectPosition: "top center" }}
                    />
                  </picture>
                </div>
              </div>
            </div>

            {/* Laptop */}
            <div className="relative mx-auto max-w-md lg:max-w-none pl-8 sm:pl-12">
              <div className="relative border border-ink/25 bg-ink rounded-t-sm overflow-hidden shadow-[0_32px_70px_-20px_rgba(0,0,0,0.35)]">
                {/* Chrome bar */}
                <div className="flex items-center gap-3 px-4 py-2 border-b border-paper/15">
                  <div className="flex gap-[6px]">
                    <span className="w-[9px] h-[9px] rounded-full bg-signal/80" />
                    <span className="w-[9px] h-[9px] rounded-full bg-paper/30" />
                    <span className="w-[9px] h-[9px] rounded-full bg-machine/80" />
                  </div>
                  <span className="font-plexmono text-[10px] text-paper/50 tracking-wider truncate">
                    app.automationaid.bg/dashboard
                  </span>
                  <span className="ml-auto hidden sm:flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-machine animate-pulse" />
                    <span className="font-plexmono text-[10px] uppercase text-paper/40">онлайн</span>
                  </span>
                </div>
                <div className="relative overflow-hidden bg-white">
                  <picture>
                    <source srcSet="/dashboard_desktop.webp" type="image/webp" />
                    <img
                      src="/dashboard_desktop.png"
                      alt="Клиентски портал — административно табло"
                      className="w-full h-auto block"
                      loading="lazy"
                      style={{ maxHeight: "420px", objectFit: "cover", objectPosition: "top left" }}
                    />
                  </picture>
                </div>
              </div>
              {/* Base */}
              <div className="h-[10px] bg-ink-soft rounded-b-sm mx-[-6px] border border-t-0 border-ink/25" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
