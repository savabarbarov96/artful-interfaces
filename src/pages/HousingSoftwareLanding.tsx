import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Proposition from "@/components/sections/Proposition";
import SEOHead from "@/components/landing/SEOHead";
import LandingHero from "@/components/landing/LandingHero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ProcessSteps from "@/components/landing/ProcessSteps";
import SocialProof from "@/components/landing/SocialProof";
import LandingCTA from "@/components/landing/LandingCTA";
import {
  LayoutDashboard,
  Building2,
  Image,
  Search,
  CalendarSync,
  Globe,
} from "lucide-react";
import { useEffect, useRef, useState } from "react";
import { Button } from "@/components/ui/button";
import { ArrowRight, Check } from "lucide-react";

/* ── Bespoke section: Housing Features Showcase ─────────────────────── */

const housingTabs = [
  {
    id: "dashboard",
    label: "Табло за управление",
    title: "Пълен контрол от едно място",
    description:
      "Интуитивно табло с реална статистика — заетост, резервации, приходи и производителност. Всичко на едно място, достъпно от всяко устройство.",
    features: [
      "Реални данни за заетост и приходи",
      "Графики и визуализации",
      "Известия за нови резервации",
      "Мобилен достъп",
    ],
  },
  {
    id: "properties",
    label: "Управление на обекти",
    title: "Апартаменти, вили и къщи за гости",
    description:
      "Добавяйте и редактирайте обекти с детайлни описания, цени по сезони, удобства и наличност. Поддържа неограничен брой обекти.",
    features: [
      "Неограничен брой обекти",
      "Сезонни цени и промоции",
      "Детайлни описания и удобства",
      "Категории: апартамент, вила, стая",
    ],
  },
  {
    id: "gallery",
    label: "Галерия",
    title: "Професионална фото галерия",
    description:
      "Зашеметяващо представяне на вашите обекти. Автоматична оптимизация на изображения, lightbox, drag-and-drop подредба и поддръжка на видео.",
    features: [
      "Автоматична оптимизация на снимки",
      "Lightbox и fullscreen преглед",
      "Drag-and-drop подредба",
      "Поддръжка на видео",
    ],
  },
  {
    id: "seo",
    label: "SEO инструменти",
    title: "Видимост в Google и социални мрежи",
    description:
      "Вградени инструменти за SEO — мета тагове, schema markup за настаняване, sitemap, OG тагове и Google Analytics интеграция.",
    features: [
      "Schema markup за Lodging Business",
      "Автоматичен sitemap",
      "Google Analytics & Search Console",
      "Open Graph за социални мрежи",
    ],
  },
  {
    id: "calendar",
    label: "Airbnb & Booking",
    title: "Синхронизация на календари",
    description:
      "Двупосочна синхронизация с Airbnb и Booking.com. Автоматично обновяване на наличността, без риск от двойни резервации.",
    features: [
      "iCal синхронизация с Airbnb",
      "Booking.com channel manager",
      "Автоматично блокиране на дати",
      "Централизиран календар",
    ],
  },
];

const HousingShowcase = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard");
  const [contentVisible, setContentVisible] = useState(true);
  const [displayedTab, setDisplayedTab] = useState("dashboard");

  const activeContent =
    housingTabs.find((t) => t.id === displayedTab) || housingTabs[0];

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  const handleTabChange = (tabId: string) => {
    if (tabId === activeTab) return;
    setActiveTab(tabId);
    setContentVisible(false);
    setTimeout(() => {
      setDisplayedTab(tabId);
      requestAnimationFrame(() => setContentVisible(true));
    }, 280);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(165deg, hsl(217 50% 97%) 0%, hsl(220 30% 98%) 50%, hsl(217 50% 97%) 100%)",
      }}
    >
      {/* Background */}
      <div className="absolute inset-0 bg-geometric-grid opacity-40" />
      <div className="glow-orb glow-orb-copper w-[500px] h-[500px] -top-40 -right-40 opacity-15" />
      <div className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-20 -left-20 opacity-10" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`max-w-2xl mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Функционалности
          </span>
          <h2 className="text-display-lg text-foreground font-display">
            Всичко за вашия{" "}
            <span className="text-accent-italic">бизнес с настаняване</span>
          </h2>
        </div>

        {/* Tabs */}
        <div
          className={`flex flex-wrap gap-3 mb-14 transition-all duration-1000 delay-200 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          {housingTabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`relative z-10 flex items-center gap-2 px-5 py-3 rounded-xl font-body font-medium text-sm cursor-pointer select-none transition-all duration-300 ${
                  isActive
                    ? "bg-blue-gradient text-white shadow-blue"
                    : "bg-white border border-border text-foreground hover:border-primary/30 hover:shadow-sm"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
          {/* Left: Text */}
          <div
            className={`transition-all duration-1000 delay-300 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div
              style={{
                opacity: contentVisible ? 1 : 0,
                transform: contentVisible
                  ? "translateY(0)"
                  : "translateY(16px)",
                transition:
                  "opacity 0.35s cubic-bezier(0.4,0,0.2,1), transform 0.35s cubic-bezier(0.4,0,0.2,1)",
              }}
            >
              <h3 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                {activeContent.title}
              </h3>
              <p className="text-foreground text-xl md:text-2xl leading-relaxed mb-10 font-display font-medium italic">
                {activeContent.description}
              </p>

              <ul className="space-y-4 mb-10">
                {activeContent.features.map((feature, index) => (
                  <li
                    key={`${displayedTab}-${index}`}
                    className="flex items-center gap-4"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transform: contentVisible
                        ? "translateX(0)"
                        : "translateX(-12px)",
                      transition: `opacity 0.35s cubic-bezier(0.4,0,0.2,1) ${
                        contentVisible ? index * 50 : 0
                      }ms, transform 0.35s cubic-bezier(0.4,0,0.2,1) ${
                        contentVisible ? index * 50 : 0
                      }ms`,
                    }}
                  >
                    <div className="w-7 h-7 rounded-lg bg-secondary/20 border border-secondary/30 flex items-center justify-center flex-shrink-0">
                      <Check className="w-4 h-4 text-secondary" strokeWidth={3} />
                    </div>
                    <span className="text-foreground font-body">{feature}</span>
                  </li>
                ))}
              </ul>

              <Button
                size="lg"
                className="bg-blue-gradient hover:shadow-blue text-white font-medium rounded-xl px-8 py-6 transition-all duration-300"
                asChild
              >
                <a href="#contact" className="flex items-center gap-2">
                  Заявете демо
                  <ArrowRight className="w-4 h-4" />
                </a>
              </Button>
            </div>
          </div>

          {/* Right: Visual mockup */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            {/* Browser mockup */}
            <div className="relative mx-auto" style={{ perspective: "2000px" }}>
              <div
                className="relative rounded-t-2xl overflow-hidden"
                style={{
                  background:
                    "linear-gradient(180deg, #2d3748 0%, #1a202c 100%)",
                  padding: "10px 10px 0",
                  boxShadow:
                    "0 25px 60px -12px rgba(0,0,0,0.25), 0 0 0 1px rgba(255,255,255,0.05) inset",
                }}
              >
                {/* Camera dot */}
                <div className="absolute top-[4px] left-1/2 -translate-x-1/2 w-[5px] h-[5px] rounded-full bg-gray-600 ring-1 ring-gray-500/50" />

                {/* Screen */}
                <div className="rounded-lg overflow-hidden bg-white">
                  {/* Browser chrome */}
                  <div className="flex items-center gap-3 px-4 py-2 border-b border-gray-200/60 bg-gradient-to-b from-gray-100 to-gray-50">
                    <div className="flex gap-[6px]">
                      <div className="w-[10px] h-[10px] rounded-full bg-[#ff5f57] ring-1 ring-[#e0443e]/30" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#febc2e] ring-1 ring-[#dea123]/30" />
                      <div className="w-[10px] h-[10px] rounded-full bg-[#28c840] ring-1 ring-[#1aab29]/30" />
                    </div>
                    <div className="flex-1 mx-6">
                      <div className="h-[26px] bg-white rounded-lg flex items-center px-3 border border-gray-200/80 shadow-inner">
                        <svg
                          className="w-3 h-3 text-gray-400 mr-1.5 flex-shrink-0"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                          strokeWidth={2}
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"
                          />
                        </svg>
                        <span className="text-[11px] text-gray-500 font-body truncate">
                          sveti-nikola.eu
                        </span>
                      </div>
                    </div>
                  </div>

                  {/* Content mockup */}
                  <div
                    className="p-6 md:p-8 space-y-4"
                    style={{
                      opacity: contentVisible ? 1 : 0,
                      transition: "opacity 0.35s ease",
                    }}
                  >
                    {/* Dashboard mock content */}
                    {displayedTab === "dashboard" && (
                      <div className="space-y-4">
                        <div className="grid grid-cols-3 gap-3">
                          {[
                            { label: "Резервации", val: "127" },
                            { label: "Заетост", val: "84%" },
                            { label: "Приходи", val: "€12.4K" },
                          ].map((s) => (
                            <div
                              key={s.label}
                              className="bg-[hsl(220,30%,98%)] rounded-xl p-4 text-center"
                            >
                              <div className="text-2xl font-display font-bold text-foreground">
                                {s.val}
                              </div>
                              <div className="text-xs text-muted-foreground font-body mt-1">
                                {s.label}
                              </div>
                            </div>
                          ))}
                        </div>
                        <div className="h-32 bg-[hsl(220,30%,98%)] rounded-xl flex items-end p-4 gap-2">
                          {[40, 65, 55, 80, 70, 90, 75, 85, 60, 95, 82, 88].map(
                            (h, i) => (
                              <div
                                key={i}
                                className="flex-1 bg-primary/20 rounded-t"
                                style={{ height: `${h}%` }}
                              />
                            )
                          )}
                        </div>
                      </div>
                    )}

                    {displayedTab === "properties" && (
                      <div className="space-y-3">
                        {[
                          { type: "Апартамент", name: "Делукс Студио", price: "€65/нощ" },
                          { type: "Вила", name: "Mountain View", price: "€120/нощ" },
                          { type: "Стая", name: "Комфорт Дабъл", price: "€45/нощ" },
                        ].map((p) => (
                          <div
                            key={p.name}
                            className="flex items-center gap-4 p-4 bg-[hsl(220,30%,98%)] rounded-xl"
                          >
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                              <Building2 className="w-5 h-5 text-primary" />
                            </div>
                            <div className="flex-1">
                              <div className="text-sm font-body font-semibold text-foreground">
                                {p.name}
                              </div>
                              <div className="text-xs text-muted-foreground font-body">
                                {p.type}
                              </div>
                            </div>
                            <span className="text-sm font-body font-bold text-primary">
                              {p.price}
                            </span>
                          </div>
                        ))}
                      </div>
                    )}

                    {displayedTab === "gallery" && (
                      <div className="grid grid-cols-3 gap-2">
                        {[...Array(6)].map((_, i) => (
                          <div
                            key={i}
                            className="aspect-square bg-gradient-to-br from-primary/10 to-secondary/10 rounded-lg flex items-center justify-center"
                          >
                            <Image className="w-6 h-6 text-primary/30" />
                          </div>
                        ))}
                      </div>
                    )}

                    {displayedTab === "seo" && (
                      <div className="space-y-3">
                        <div className="p-4 bg-[hsl(220,30%,98%)] rounded-xl">
                          <div className="flex items-center gap-2 mb-2">
                            <Search className="w-4 h-4 text-primary" />
                            <span className="text-xs font-body font-bold text-foreground">
                              Google Search
                            </span>
                          </div>
                          <div className="text-sm font-body font-semibold text-primary">
                            Къща за гости Свети Никола — Разлог
                          </div>
                          <div className="text-xs text-muted-foreground font-body mt-1">
                            sveti-nikola.eu — Луксозна къща за гости в Разлог,
                            до ски курорт Банско...
                          </div>
                        </div>
                        <div className="grid grid-cols-2 gap-3">
                          {[
                            { metric: "92", label: "Performance" },
                            { metric: "98", label: "SEO Score" },
                          ].map((m) => (
                            <div
                              key={m.label}
                              className="bg-[hsl(220,30%,98%)] rounded-xl p-4 text-center"
                            >
                              <div className="text-2xl font-display font-bold text-secondary">
                                {m.metric}
                              </div>
                              <div className="text-xs text-muted-foreground font-body mt-1">
                                {m.label}
                              </div>
                            </div>
                          ))}
                        </div>
                      </div>
                    )}

                    {displayedTab === "calendar" && (
                      <div className="space-y-3">
                        <div className="grid grid-cols-7 gap-1">
                          {["П", "В", "С", "Ч", "П", "С", "Н"].map((d) => (
                            <div
                              key={d}
                              className="text-center text-[10px] font-body text-muted-foreground py-1"
                            >
                              {d}
                            </div>
                          ))}
                          {[...Array(28)].map((_, i) => {
                            const isBooked = [3, 4, 5, 10, 11, 18, 19, 20, 21].includes(i);
                            const isAirbnb = [3, 4, 5].includes(i);
                            const isBooking = [10, 11].includes(i);
                            return (
                              <div
                                key={i}
                                className={`aspect-square rounded-md flex items-center justify-center text-xs font-body ${
                                  isBooked
                                    ? isAirbnb
                                      ? "bg-[#FF5A5F]/15 text-[#FF5A5F] font-bold"
                                      : isBooking
                                      ? "bg-[#003580]/15 text-[#003580] font-bold"
                                      : "bg-primary/15 text-primary font-bold"
                                    : "bg-[hsl(220,30%,98%)] text-muted-foreground"
                                }`}
                              >
                                {i + 1}
                              </div>
                            );
                          })}
                        </div>
                        <div className="flex gap-4 justify-center">
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded bg-[#FF5A5F]/20" />
                            <span className="text-[10px] font-body text-muted-foreground">
                              Airbnb
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded bg-[#003580]/20" />
                            <span className="text-[10px] font-body text-muted-foreground">
                              Booking.com
                            </span>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <div className="w-3 h-3 rounded bg-primary/20" />
                            <span className="text-[10px] font-body text-muted-foreground">
                              Директни
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Base */}
              <div
                className="h-[8px] mx-[2px]"
                style={{
                  background:
                    "linear-gradient(180deg, #1a202c 0%, #2d3748 50%, #4a5568 100%)",
                  borderRadius: "0 0 2px 2px",
                }}
              />
              <div
                className="h-[14px] rounded-b-2xl mx-[-6px]"
                style={{
                  background:
                    "linear-gradient(180deg, #4a5568 0%, #2d3748 60%, #1a202c 100%)",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                }}
              >
                <div className="h-[4px] w-24 bg-gray-600/40 rounded-b mx-auto" />
              </div>

              {/* Shadow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[85%] h-14 blur-3xl rounded-full"
                style={{ background: "hsl(222 47% 11% / 0.18)" }}
              />
            </div>
          </div>
        </div>
      </div>

      {/* Bottom separator */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

/* ── Main Page ──────────────────────────────────────────────────────── */

const HousingSoftwareLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Софтуер за настаняване и хотелски мениджмънт | Automation Aid"
        description="Професионален софтуер за управление на къщи за гости, хотели и ваканционни имоти. Dashboard, галерия, SEO, Airbnb и Booking.com интеграции. Заявете демо."
        canonical="https://automationaid.bg/housing-software"
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Софтуер за настаняване"
          title={
            <>
              <span className="block">Управлявайте</span>
              <span className="block text-[#FF6B35]">резервациите</span>
              <span className="block">от едно</span>
              <span className="block text-[#FF6B35]">място</span>
            </>
          }
          subtitle="Цялостна платформа за къщи за гости, хотели и ваканционни имоти. Dashboard, Airbnb и Booking.com синхронизация, галерия и SEO — всичко включено."
          ctaText="Заявете безплатно демо"
          secondaryCta={{ text: "Вижте функциите", href: "#features" }}
          technologies={[
            "Dashboard",
            "Airbnb Sync",
            "Booking.com",
            "SEO Tools",
            "Галерия",
            "iCal",
            "Analytics",
            "SSL",
          ]}
        />

        <Proposition />

        <div id="features">
          <FeatureGrid
            eyebrow="Основни функции"
            title={
              <>
                Всичко за успешен{" "}
                <span className="text-accent-italic">бизнес с настаняване</span>
              </>
            }
            subtitle="От резервации до маркетинг — една платформа за всичко."
            features={[
              {
                icon: LayoutDashboard,
                title: "Интуитивен Dashboard",
                description:
                  "Заетост, приходи и статистики в реално време. Управлявайте бизнеса от телефона или компютъра.",
              },
              {
                icon: Building2,
                title: "Управление на обекти",
                description:
                  "Добавяйте апартаменти, вили и стаи. Сезонни цени, удобства и описания — лесно и бързо.",
              },
              {
                icon: Image,
                title: "Професионална галерия",
                description:
                  "Автоматична оптимизация на снимки, lightbox преглед и drag-and-drop подредба.",
              },
              {
                icon: Search,
                title: "SEO инструменти",
                description:
                  "Schema markup, sitemap, мета тагове и Google Analytics. Бъдете на първа страница в Google.",
              },
              {
                icon: CalendarSync,
                title: "Airbnb & Booking.com",
                description:
                  "Двупосочна синхронизация на календари. Без двойни резервации, автоматично обновяване.",
              },
              {
                icon: Globe,
                title: "Многоезичен сайт",
                description:
                  "Достигнете международни гости с поддръжка на множество езици и валути.",
              },
            ]}
          />
        </div>

        <HousingShowcase />

        <ProcessSteps
          eyebrow="Как започвате"
          title={
            <>
              Лесен старт за вашия{" "}
              <span className="text-accent-italic">обект</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Демо среща",
              description:
                "Показваме ви платформата на живо и обсъждаме нуждите на вашия обект.",
            },
            {
              number: "02",
              title: "Настройка",
              description:
                "Конфигурираме платформата, добавяме обектите и настройваме интеграциите.",
            },
            {
              number: "03",
              title: "Миграция",
              description:
                "Прехвърляме съществуващите данни, снимки и резервации без загуба.",
            },
            {
              number: "04",
              title: "Старт",
              description:
                "Пускаме сайта и синхронизираме Airbnb и Booking.com каналите.",
            },
          ]}
        />

        <SocialProof
          stats={[
            { value: "84", label: "% Средна заетост", suffix: "%" },
            { value: "0", label: "Двойни резервации", suffix: "" },
            { value: "3", label: "× Повече директни резервации", suffix: "×" },
            { value: "99", label: "% Uptime", suffix: "%" },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови за повече{" "}
              <span className="font-display italic text-white/90">
                резервации?
              </span>
            </>
          }
          subtitle="Заявете безплатно демо и вижте как платформата ще трансформира управлението на вашия обект."
          ctaText="Заявете безплатно демо"
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default HousingSoftwareLanding;
