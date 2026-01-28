import { useState, useEffect, useRef } from "react";
import { Check, Monitor, CreditCard, FolderOpen, BarChart3 } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    id: "communication",
    icon: Monitor,
    label: "Комуникация с екипа",
    title: "Трафика на сайта от телефона",
    description: "Вашите ключови метрики - посетители, сесии, важни събития - винаги на дистанция един клик. Google Analytics интегриран директно в портала, с ясни визуализации и данни на дневна или седмична база. Проверете статистиката от всяко устройство, докато пиете кафето си.",
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
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
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
        const windowHeight = window.innerHeight;
        const sectionHeight = rect.height;

        const progress = Math.max(0, Math.min(1,
          (windowHeight - rect.top) / (windowHeight + sectionHeight)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab || isTransitioning) return;
    setIsTransitioning(true);
    setActiveTab(tabId);
    setTimeout(() => setIsTransitioning(false), 400);
  };

  return (
    <section
      ref={sectionRef}
      id="services"
      className="relative overflow-hidden"
    >
      {/* Background - light blue gradient */}
      <div
        className="absolute inset-0"
        style={{
          background: 'linear-gradient(165deg, hsl(217 50% 97%) 0%, hsl(220 30% 98%) 50%, hsl(217 50% 97%) 100%)',
        }}
      />

      {/* Animated gradient overlay - parallax */}
      <div
        className="absolute inset-0 opacity-80"
        style={{
          background: `radial-gradient(ellipse 80% 60% at ${30 + scrollProgress * 40}% ${20 + scrollProgress * 30}%, hsl(217 91% 50% / 0.08) 0%, transparent 50%)`,
          transition: 'background 0.1s ease-out',
        }}
      />

      {/* Grid pattern overlay - parallax */}
      <div
        className="absolute inset-0 bg-geometric-grid opacity-40"
        style={{
          transform: `translateY(${scrollProgress * -50}px)`,
        }}
      />

      {/* Floating orbs with parallax */}
      <div
        className="glow-orb glow-orb-copper w-[500px] h-[500px] -top-40 -right-40 opacity-15"
        style={{
          transform: `translate(${scrollProgress * 50}px, ${scrollProgress * 30}px)`,
        }}
      />
      <div
        className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-20 -left-20 opacity-10"
        style={{
          transform: `translate(${scrollProgress * -30}px, ${scrollProgress * -20}px)`,
        }}
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

        {/* Tabs */}
        <div
          className={`flex flex-wrap gap-3 mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;

            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`group flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm transition-all duration-300 ${isActive
                    ? "bg-blue-gradient text-white shadow-blue"
                    : tab.isHighlighted
                      ? "bg-white border-2 border-primary/50 text-primary hover:border-primary hover:bg-primary/5"
                      : "bg-white border border-border text-foreground hover:border-primary/30 hover:shadow-sm"
                  }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? '' : 'text-muted-foreground group-hover:text-foreground'} transition-colors`} />
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content area */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Text content */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div
              key={activeTab}
              className={`transition-all duration-400 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                {activeContent.title}
              </h3>

              <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-10 font-display italic">
                {activeContent.description}
              </p>

              {/* Feature list */}
              <ul className="space-y-4 mb-10">
                {activeContent.features.map((feature, index) => (
                  <li
                    key={index}
                    className="flex items-center gap-4"
                    style={{
                      transitionDelay: `${index * 75}ms`,
                      opacity: isTransitioning ? 0 : 1,
                      transform: isTransitioning ? 'translateX(-10px)' : 'translateX(0)',
                      transition: 'all 0.3s ease-out',
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

          {/* Right: Premium Dashboard Mockup */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{
              transform: isVisible ? `translateY(${scrollProgress * -20}px)` : undefined,
            }}
          >
            {/* Floating phone mockup alongside */}
            <div
              className="absolute -left-8 top-1/2 -translate-y-1/2 w-28 hidden xl:block z-20"
              style={{
                transform: `translateY(${-50 + scrollProgress * 20}%)`,
              }}
            >
              <div
                className="rounded-3xl p-2 shadow-xl bg-gray-800"
              >
                <div className="rounded-2xl overflow-hidden bg-white">
                  <div className="aspect-[9/16] relative">
                    {/* Phone status bar */}
                    <div className="absolute top-2 left-1/2 -translate-x-1/2 w-12 h-1 bg-gray-200 rounded-full" />

                    {/* Mini stats */}
                    <div className="p-3 pt-6">
                      <div className="text-[8px] text-muted-foreground font-body mb-2">Уебсайт трафик</div>
                      <div className="space-y-2">
                        {[
                          { label: "Прегледи", value: "4,118", color: "bg-primary" },
                          { label: "Сесии", value: "1,861", color: "bg-secondary" },
                        ].map((stat, i) => (
                          <div key={i} className={`${stat.color} rounded-lg p-2`}>
                            <div className="text-[7px] text-white/70">{stat.label}</div>
                            <div className="text-xs font-bold text-white">{stat.value}</div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Main laptop mockup */}
            <div className="relative mx-auto max-w-lg" style={{ perspective: '1500px' }}>
              {/* Laptop screen */}
              <div
                className="relative rounded-t-2xl overflow-hidden shadow-xl"
                style={{
                  background: 'linear-gradient(180deg, #374151 0%, #1f2937 100%)',
                  padding: '12px 12px 0',
                  transform: `rotateX(${3 - scrollProgress * 2}deg) rotateY(${scrollProgress * 3 - 1.5}deg)`,
                  transition: 'transform 0.1s ease-out',
                }}
              >
                {/* Screen bezel */}
                <div className="rounded-lg overflow-hidden bg-white shadow-inner">
                  {/* Browser bar */}
                  <div className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100 bg-gray-50">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center px-3">
                        <span className="text-xs text-gray-400 font-body">app.automationaid.bg</span>
                      </div>
                    </div>
                  </div>

                  {/* Dashboard content */}
                  <div className="p-5 min-h-[300px] bg-gray-50">
                    {/* Dashboard header */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="text-base font-display text-foreground">Уебсайт трафик</div>
                      <div className="text-xs text-muted-foreground font-body bg-white px-3 py-1 rounded-lg border border-gray-100">
                        Последните 7 дни
                      </div>
                    </div>

                    {/* Stats grid - top row */}
                    <div className="grid grid-cols-4 gap-3 mb-4">
                      {[
                        { label: "Прегледи", value: "4,118", color: "bg-primary" },
                        { label: "Сесии", value: "1,861", color: "bg-primary" },
                        { label: "Потребители", value: "1,495", color: "bg-primary" },
                        { label: "Активни", value: "1,260", color: "bg-secondary" },
                      ].map((stat, i) => (
                        <div
                          key={i}
                          className={`${stat.color} rounded-xl p-3 text-center transition-all duration-300 hover:scale-105`}
                        >
                          <div className="text-[10px] text-white/70 font-body mb-1">{stat.label}</div>
                          <div className="text-sm font-display font-bold text-white">{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Stats grid - bottom row */}
                    <div className="grid grid-cols-4 gap-3 mb-5">
                      {[
                        { label: "Нови", value: "867", color: "bg-white border border-gray-100" },
                        { label: "Ангажираност", value: "4.42%", color: "bg-primary" },
                        { label: "Ср. продълж.", value: "20m", color: "bg-primary" },
                        { label: "Отпадане", value: "3.58%", color: "bg-white border border-gray-100" },
                      ].map((stat, i) => (
                        <div key={i} className={`${stat.color} rounded-xl p-3 text-center`}>
                          <div className={`text-[10px] font-body mb-1 ${stat.color.includes('white') ? 'text-muted-foreground' : 'text-white/70'}`}>{stat.label}</div>
                          <div className={`text-xs font-display font-medium ${stat.color.includes('white') ? 'text-foreground' : 'text-white'}`}>{stat.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Mini chart placeholder */}
                    <div className="bg-white rounded-xl p-4 border border-gray-100">
                      <div className="flex items-center justify-between mb-3">
                        <span className="text-xs text-muted-foreground font-body">Трафик по дни</span>
                        <span className="text-xs text-secondary font-body">+12.5%</span>
                      </div>
                      <div className="flex items-end gap-1 h-12">
                        {[40, 65, 45, 80, 55, 90, 70].map((height, i) => (
                          <div
                            key={i}
                            className="flex-1 bg-primary/30 rounded-t transition-all duration-300 hover:bg-primary"
                            style={{ height: `${height}%` }}
                          />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Laptop base */}
              <div
                className="h-5 rounded-b-xl mx-2"
                style={{
                  background: 'linear-gradient(180deg, #4b5563 0%, #374151 100%)',
                }}
              >
                <div className="h-1 w-20 bg-gray-500/50 rounded-b mx-auto" />
              </div>

              {/* Laptop shadow */}
              <div
                className="absolute -bottom-6 left-1/2 -translate-x-1/2 w-3/4 h-10 blur-2xl"
                style={{ background: 'hsl(217 91% 50% / 0.15)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
