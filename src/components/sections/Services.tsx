import { useState, useEffect, useRef, useCallback } from "react";
import { Check, Monitor, CreditCard, FolderOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

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
    isHighlighted: true,
  },
];

const Services = () => {
  const [activeTab, setActiveTab] = useState("communication");
  const [displayedTab, setDisplayedTab] = useState("communication");
  const [contentVisible, setContentVisible] = useState(true);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const scrollProgressRef = useRef(0);
  const rafRef = useRef<number>(0);
  const parallaxElsRef = useRef<{
    grid: HTMLDivElement | null;
    orbCopper: HTMLDivElement | null;
    orbTeal: HTMLDivElement | null;
    laptop: HTMLDivElement | null;
    phone: HTMLDivElement | null;
    badge: HTMLDivElement | null;
    gradientOverlay: HTMLDivElement | null;
    desktopImg: HTMLImageElement | null;
  }>({
    grid: null, orbCopper: null, orbTeal: null,
    laptop: null, phone: null, badge: null,
    gradientOverlay: null, desktopImg: null,
  });
  const tabIndicatorRef = useRef<HTMLDivElement>(null);
  const tabRefs = useRef<Map<string, HTMLButtonElement>>(new Map());

  const activeContent = tabs.find((tab) => tab.id === displayedTab) || tabs[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setIsVisible(true); },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  // RAF-based scroll parallax — no state updates, direct DOM manipulation
  useEffect(() => {
    const tick = () => {
      if (sectionRef.current) {
        const rect = sectionRef.current.getBoundingClientRect();
        const wh = window.innerHeight;
        const sh = rect.height;
        const p = Math.max(0, Math.min(1, (wh - rect.top) / (wh + sh)));
        scrollProgressRef.current = p;

        const els = parallaxElsRef.current;
        if (els.grid) els.grid.style.transform = `translateY(${p * -100}px)`;
        if (els.orbCopper) els.orbCopper.style.transform = `translate(${p * 80}px, ${p * 50}px)`;
        if (els.orbTeal) els.orbTeal.style.transform = `translate(${p * -50}px, ${p * -40}px)`;
        if (els.laptop) {
          els.laptop.style.transform = `rotateX(${4 - p * 5}deg) rotateY(${p * 5 - 2.5}deg)`;
        }
        if (els.phone) els.phone.style.transform = `translateY(${p * -60}px)`;
        if (els.badge) els.badge.style.transform = `translateY(${p * -70}px)`;
        if (els.gradientOverlay) {
          els.gradientOverlay.style.background = `radial-gradient(ellipse 80% 60% at ${30 + p * 40}% ${20 + p * 30}%, hsl(217 91% 50% / 0.08) 0%, transparent 50%)`;
        }
        if (els.desktopImg) {
          els.desktopImg.style.transform = `translateY(${p * -15}px)`;
        }
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  // Sliding tab indicator
  const updateIndicator = useCallback(() => {
    const el = tabRefs.current.get(activeTab);
    const ind = tabIndicatorRef.current;
    if (el && ind) {
      const parent = el.parentElement;
      if (parent) {
        const pr = parent.getBoundingClientRect();
        const er = el.getBoundingClientRect();
        ind.style.left = `${er.left - pr.left}px`;
        ind.style.top = `${er.top - pr.top}px`;
        ind.style.width = `${er.width}px`;
        ind.style.height = `${er.height}px`;
      }
    }
  }, [activeTab]);

  useEffect(() => {
    updateIndicator();
    window.addEventListener("resize", updateIndicator);
    return () => window.removeEventListener("resize", updateIndicator);
  }, [updateIndicator, isVisible]);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;

    // Immediately update activeTab so the indicator slides
    setActiveTab(tabId);

    // Fade out content
    setContentVisible(false);

    // After fade-out, swap content and fade in
    setTimeout(() => {
      setDisplayedTab(tabId);
      // Force a reflow then fade in
      requestAnimationFrame(() => {
        setContentVisible(true);
      });
    }, 280);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden"
    >
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, hsl(217 50% 97%) 0%, hsl(220 30% 98%) 50%, hsl(217 50% 97%) 100%)',
        }}
      />

      {/* Animated gradient overlay */}
      <div
        ref={(el) => { parallaxElsRef.current.gradientOverlay = el; }}
        className="absolute inset-0 opacity-80"
      />

      {/* Grid pattern overlay - parallax */}
      <div
        ref={(el) => { parallaxElsRef.current.grid = el; }}
        className="absolute inset-0 bg-geometric-grid opacity-40 will-change-transform"
      />

      {/* Floating orbs */}
      <div
        ref={(el) => { parallaxElsRef.current.orbCopper = el; }}
        className="glow-orb glow-orb-copper w-[500px] h-[500px] -top-40 -right-40 opacity-15 will-change-transform"
      />
      <div
        ref={(el) => { parallaxElsRef.current.orbTeal = el; }}
        className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-20 -left-20 opacity-10 will-change-transform"
      />

      {/* Top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10 section-padding">
        {/* Section header */}
        <div
          className={`max-w-2xl mb-12 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Клиентски портал, който работи за Вас
          </span>
          <h2 className="text-display-lg text-foreground font-display">
            Управлявайте всичко от{" "}
            <span className="text-accent-italic">едно място</span>
          </h2>
        </div>

        {/* Tabs with sliding indicator */}
        <div
          className={`relative flex flex-wrap gap-3 mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {/* Sliding background pill */}
          <div
            ref={tabIndicatorRef}
            className="absolute bg-blue-gradient rounded-xl shadow-blue z-0"
            style={{
              pointerEvents: "none",
              transition: 'left 0.45s cubic-bezier(0.4,0,0.2,1), top 0.45s cubic-bezier(0.4,0,0.2,1), width 0.35s cubic-bezier(0.4,0,0.2,1), height 0.35s cubic-bezier(0.4,0,0.2,1)',
            }}
          />

          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                ref={(el) => { if (el) tabRefs.current.set(tab.id, el); }}
                onClick={() => handleTabChange(tab.id)}
                className={`group relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm cursor-pointer select-none ${
                  isActive
                    ? "text-white"
                    : tab.isHighlighted
                      ? "bg-white border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/5"
                      : "bg-white border border-border text-foreground hover:border-primary/30 hover:shadow-sm"
                }`}
                style={{
                  transition: 'color 0.3s, background-color 0.3s, border-color 0.3s, box-shadow 0.3s',
                }}
              >
                <Icon className={`w-4 h-4 transition-colors duration-300 ${isActive ? 'text-white' : 'text-muted-foreground group-hover:text-foreground'}`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div className="grid lg:grid-cols-[1fr_1.2fr] gap-10 lg:gap-12 items-center">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible ? 'translateY(0)' : 'translateY(16px)',
                transition: 'opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)',
              }}
            >
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                {activeContent.title}
              </h3>

              <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-10 font-display font-medium italic">
                {activeContent.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-4 mb-10">
                {activeContent.features.map((feature, index) => (
                  <li
                    key={`${displayedTab}-${index}`}
                    className="flex items-center gap-4"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible ? 'translateX(0)' : 'translateX(-12px)',
                      transition: `opacity 0.35s cubic-bezier(0.4,0,0.2,1) ${contentVisible ? index * 50 : 0}ms, transform 0.35s cubic-bezier(0.4,0,0.2,1) ${contentVisible ? index * 50 : 0}ms`,
                    }}
                  >
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground font-body">
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA Button */}
              <Button
                size="lg"
                className="bg-blue-gradient hover:shadow-blue text-white font-medium rounded-xl px-8 py-6 transition-all duration-300"
                asChild
              >
                <a href="#contact">{activeContent.cta}</a>
              </Button>
            </div>
          </div>

          {/* Right: Dashboard mockups */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Floating phone mockup */}
            <div
              ref={(el) => { parallaxElsRef.current.phone = el; }}
              className="absolute -left-2 sm:-left-6 lg:-left-10 bottom-4 sm:bottom-8 lg:bottom-6 w-[90px] sm:w-[120px] lg:w-[150px] z-20 will-change-transform"
            >
              <div
                className="rounded-[18px] sm:rounded-[22px] lg:rounded-[26px] p-[4px] sm:p-[5px] lg:p-[6px] shadow-2xl bg-gradient-to-b from-gray-700 to-gray-900 ring-1 ring-white/10"
                style={{ transform: 'rotate(-4deg)' }}
              >
                {/* Dynamic island / notch */}
                <div className="absolute top-[8px] left-1/2 -translate-x-1/2 w-8 sm:w-10 lg:w-12 h-[4px] sm:h-[5px] bg-black rounded-full z-10" />
                <div className="rounded-[14px] sm:rounded-[18px] lg:rounded-[22px] overflow-hidden bg-white">
                  <img
                    src="/dashboard_mobile.png"
                    alt="Admin Panel - Mobile"
                    className="w-full block"
                    style={{
                      aspectRatio: '9/19',
                      objectFit: 'cover',
                      objectPosition: 'top center',
                    }}
                  />
                </div>
                {/* Home indicator */}
                <div className="absolute bottom-[4px] left-1/2 -translate-x-1/2 w-8 sm:w-10 h-[3px] bg-gray-600 rounded-full" />
              </div>
              {/* Phone shadow */}
              <div
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-[90%] h-8 blur-2xl rounded-full"
                style={{ background: 'hsl(222 47% 11% / 0.25)' }}
              />
            </div>

            {/* Main laptop mockup — bigger on desktop */}
            <div
              className="relative mx-auto max-w-md lg:max-w-none lg:ml-8 xl:ml-12 pl-6 sm:pl-10"
              style={{ perspective: '2000px' }}
            >
              {/* Laptop lid */}
              <div
                ref={(el) => { parallaxElsRef.current.laptop = el; }}
                className="relative rounded-t-xl sm:rounded-t-2xl overflow-hidden will-change-transform"
                style={{
                  background: 'linear-gradient(180deg, #2d3748 0%, #1a202c 100%)',
                  padding: '10px 10px 0',
                  boxShadow: '0 25px 60px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05) inset',
                }}
              >
                {/* Camera dot */}
                <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-gray-600 ring-1 ring-gray-500/50" />

                {/* Screen */}
                <div className="rounded-md sm:rounded-lg overflow-hidden bg-white">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-2 sm:gap-3 px-3 sm:px-4 py-1.5 sm:py-2 border-b border-gray-200/60 bg-gradient-to-b from-gray-100 to-gray-50">
                    <div className="flex gap-[5px] sm:gap-[6px]">
                      <div className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#ff5f57] ring-1 ring-[#e0443e]/30" />
                      <div className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#febc2e] ring-1 ring-[#dea123]/30" />
                      <div className="w-[9px] h-[9px] sm:w-[10px] sm:h-[10px] rounded-full bg-[#28c840] ring-1 ring-[#1aab29]/30" />
                    </div>
                    <div className="flex-1 mx-2 sm:mx-6">
                      <div className="h-[22px] sm:h-[26px] bg-white rounded-md sm:rounded-lg flex items-center px-2 sm:px-3 border border-gray-200/80 shadow-inner">
                        <svg className="w-3 h-3 text-gray-400 mr-1.5 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                        </svg>
                        <span className="text-[9px] sm:text-[11px] text-gray-500 font-body truncate">app.automationaid.bg/dashboard</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard image */}
                  <div className="relative overflow-hidden bg-[#f8f9fa]">
                    <img
                      ref={(el) => { parallaxElsRef.current.desktopImg = el; }}
                      src="/dashboard_desktop.png"
                      alt="Admin Panel - Desktop Dashboard"
                      className="w-full h-auto block will-change-transform"
                      style={{
                        maxHeight: '420px',
                        objectFit: 'cover',
                        objectPosition: 'top left',
                      }}
                    />

                    {/* Subtle reflection on the screen */}
                    <div
                      className="absolute inset-0 pointer-events-none"
                      style={{
                        background: 'linear-gradient(165deg, rgba(255,255,255,0.06) 0%, transparent 40%, transparent 60%, rgba(255,255,255,0.03) 100%)',
                      }}
                    />
                  </div>
                </div>
              </div>

              {/* Laptop hinge */}
              <div
                className="h-[6px] sm:h-[8px] mx-[2px]"
                style={{
                  background: 'linear-gradient(180deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)',
                  borderRadius: '0 0 2px 2px',
                }}
              />

              {/* Laptop base / keyboard deck */}
              <div
                className="h-[10px] sm:h-[14px] rounded-b-xl sm:rounded-b-2xl mx-[-4px] sm:mx-[-6px]"
                style={{
                  background: 'linear-gradient(180deg, #4a5568 0%, #2d3748 60%, #1a202c 100%)',
                  boxShadow: '0 2px 8px rgba(0,0,0,0.15)',
                }}
              >
                {/* Trackpad indentation */}
                <div className="h-[3px] sm:h-[4px] w-16 sm:w-24 bg-gray-600/40 rounded-b mx-auto" />
              </div>

              {/* Laptop shadow on desk */}
              <div
                className="absolute -bottom-6 sm:-bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-10 sm:h-14 blur-3xl rounded-full"
                style={{ background: 'hsl(222 47% 11% / 0.18)' }}
              />
            </div>

            {/* Floating badge */}
            <div
              ref={(el) => { parallaxElsRef.current.badge = el; }}
              className="absolute -right-2 sm:-right-4 top-2 sm:top-6 bg-white rounded-xl shadow-lg px-3 sm:px-4 py-2 sm:py-2.5 border border-gray-100 z-10 hidden md:flex items-center gap-2 will-change-transform"
            >
              <div className="w-2.5 h-2.5 rounded-full bg-green-400 animate-pulse" />
              <span className="text-xs font-body text-muted-foreground">Онлайн</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
