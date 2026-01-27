import { useState } from "react";
import { Check } from "lucide-react";
import { Button } from "@/components/ui/button";

const tabs = [
  {
    id: "communication",
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
    label: "Статистиките на живо",
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
  const activeContent = tabs.find((tab) => tab.id === activeTab) || tabs[0];

  return (
    <section id="services" className="relative overflow-hidden">
      {/* Parallax background with stripes */}
      <div 
        className="absolute inset-0 bg-hero-gradient"
        style={{
          backgroundAttachment: "fixed",
        }}
      />
      
      {/* Diagonal stripes overlay */}
      <div 
        className="absolute inset-0 opacity-[0.08]"
        style={{
          backgroundImage: `repeating-linear-gradient(
            -45deg,
            transparent,
            transparent 20px,
            hsl(0 0% 100%) 20px,
            hsl(0 0% 100%) 22px
          )`,
        }}
      />
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-grid-pattern opacity-30" />

      <div className="container relative z-10 section-padding">
        {/* Section header */}
        <div className="mb-10">
          <span className="text-label text-accent mb-4 block font-body font-medium">
            Клиентски портал, който работи за Вас
          </span>
          <h2 className="text-display-lg text-primary-foreground font-display">
            Управлявайте всичко от{" "}
            <span className="text-accent-italic">едно място</span>
          </h2>
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap gap-3 mb-12">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-body font-medium text-sm transition-all duration-300 ${
                activeTab === tab.id
                  ? "bg-accent text-accent-foreground shadow-lg"
                  : tab.isHighlighted
                  ? "bg-transparent border-2 border-accent text-accent hover:bg-accent/10"
                  : "bg-primary-foreground/10 text-primary-foreground border border-primary-foreground/20 hover:bg-primary-foreground/20"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Content area */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left: Text content */}
          <div 
            key={activeTab}
            className="animate-fade-in"
          >
            <h3 className="text-2xl md:text-3xl font-display text-primary-foreground mb-6">
              {activeContent.title}
            </h3>
            
            <p className="text-primary-foreground/80 text-lg leading-relaxed mb-8 font-body">
              {activeContent.description}
            </p>

            {/* Feature list */}
            <ul className="space-y-4 mb-8">
              {activeContent.features.map((feature, index) => (
                <li 
                  key={index} 
                  className="flex items-center gap-3"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="w-6 h-6 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
                    <Check className="w-4 h-4 text-secondary-foreground" />
                  </div>
                  <span className="text-primary-foreground font-body">
                    {feature}
                  </span>
                </li>
              ))}
            </ul>

            {/* CTA Button */}
            <Button 
              size="lg" 
              className="bg-accent hover:bg-accent/90 text-accent-foreground font-body"
              asChild
            >
              <a href="#contact">{activeContent.cta}</a>
            </Button>
          </div>

          {/* Right: Laptop mockup */}
          <div className="relative">
            {/* Laptop frame */}
            <div className="relative mx-auto max-w-lg">
              {/* Screen */}
              <div className="bg-card rounded-t-xl overflow-hidden shadow-2xl border-8 border-foreground/90 border-b-0">
                {/* Browser bar */}
                <div className="bg-muted px-4 py-2 flex items-center gap-2 border-b border-border">
                  <div className="flex gap-1.5">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent/60" />
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary/60" />
                  </div>
                  <div className="flex-1 mx-4">
                    <div className="bg-background rounded px-3 py-1 text-xs text-muted-foreground font-body">
                      app.automationaid.bg
                    </div>
                  </div>
                </div>
                
                {/* Dashboard content */}
                <div className="bg-background p-4 min-h-[280px]">
                  <div className="text-sm font-display text-foreground mb-3">Уебсайт трафик</div>
                  
                  {/* Analytics preview */}
                  <div className="bg-muted rounded-lg p-3 mb-3">
                    <div className="text-xs text-muted-foreground mb-2 font-body">Преглед на аналитиката</div>
                    <div className="text-[10px] text-muted-foreground font-body">Последните 7 дни</div>
                  </div>
                  
                  {/* Stats grid */}
                  <div className="grid grid-cols-4 gap-2 mb-3">
                    {[
                      { label: "Прегледи", value: "4,118", color: "bg-primary" },
                      { label: "Сесии", value: "1,861", color: "bg-primary" },
                      { label: "Потребители", value: "1,495", color: "bg-primary" },
                      { label: "Активни", value: "1,260", color: "bg-secondary" },
                    ].map((stat, i) => (
                      <div key={i} className={`${stat.color} rounded-lg p-2 text-center`}>
                        <div className="text-[10px] text-primary-foreground/70 font-body">{stat.label}</div>
                        <div className="text-sm font-display text-primary-foreground font-medium">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                  
                  {/* Second row stats */}
                  <div className="grid grid-cols-4 gap-2">
                    {[
                      { label: "Нови", value: "867", color: "bg-muted" },
                      { label: "Ангажираност", value: "4.42%", color: "bg-primary" },
                      { label: "Ср. продълж.", value: "20m 20s", color: "bg-primary" },
                      { label: "Отпадане", value: "3.58%", color: "bg-muted" },
                    ].map((stat, i) => (
                      <div key={i} className={`${stat.color} rounded-lg p-2 text-center`}>
                        <div className="text-[10px] text-muted-foreground font-body">{stat.label}</div>
                        <div className="text-xs font-display font-medium text-foreground">{stat.value}</div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              
              {/* Laptop base */}
              <div className="relative h-4 bg-gradient-to-b from-foreground/80 to-foreground/90 rounded-b-lg">
                <div className="absolute left-1/2 -translate-x-1/2 top-0 w-16 h-1 bg-foreground/60 rounded-b" />
              </div>
              <div className="h-2 bg-foreground/70 mx-8 rounded-b-xl" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
