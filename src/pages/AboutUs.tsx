import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import { ArrowRight, Trophy, Award, Brain, Code, Cpu, Shield, Linkedin, Github, Send, Mail, Phone, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";
import { useToast } from "@/hooks/use-toast";
import SEOHead from "@/components/landing/SEOHead";

const founders = [
  {
    name: "Сава Барбаров",
    title: "Световен шампион по софтуерно тестване",
    subtitle: "AI & Automation специалист",
    image: "/clients/sava_main.png",
    achievement: "Победител в ISTQB National Testing Cup 2025",
    bio: [
      "Сава е признат като един от водещите инженери в България в областта на софтуерното качество и тестване.",
      "С опит в индустриални лидери като ASML (глобален лидер в полупроводниковите технологии) и Cisco (гигант в мрежовите и ИТ инфраструктури), Сава носи световен клас експертиза във всеки проект.",
      "Като съосновател на Automation Aid, Сава се специализира в създаването на AI-базирани решения за автоматизация, които елиминират повтарящи се задачи и оптимизират операциите.",
    ],
    skills: ["AI интеграция", "Уеб разработка", "Автоматизация", "QA"],
    linkedin: "https://www.linkedin.com/in/sava-barbarov-79a898232/",
    github: "https://github.com/savabarbarov96",
    facebook: "https://www.facebook.com/sava.barbarov.7",
  },
  {
    name: "Слав Астинов",
    title: "Глобален шампион по софтуерно тестване",
    subtitle: "QA & AI иновационен лидер",
    image: "/clients/slav_main.png",
    achievement: "ISTQB World Testing Cup Global Champion 2025 — Копенхаген",
    bio: [
      "Слав е глобалният шампион на ISTQB World Testing Cup 2025, като се е състезавал срещу най-добрите тестери в света в Копенхаген и е излязъл победител на международната сцена.",
      "Като съосновател на Automation Aid, Слав не просто тества софтуер — той революционизира начина, по който бизнесите гарантират качество. Комбинирайки дълбока експертиза в QA с авангарден изкуствен интелект, той създава интелигентни системи.",
      "През последните четири години Слав е изградил множество automation frameworks от нулата и е пионер в интегрирането на AI в тестване и бизнес процеси.",
    ],
    skills: ["AI инструменти", "Testing Frameworks", "Azure", "ISTQB"],
    linkedin: "https://www.linkedin.com/in/slav-astinov-6b574b20b/",
    github: "https://github.com/slavislav",
    facebook: "https://www.facebook.com/slav.astinov",
  },
];

const values = [
  {
    icon: Brain,
    title: "Иновация",
    description: "Използваме AI и автоматизация, за да създаваме решения, които традиционните методи просто не могат да постигнат.",
  },
  {
    icon: Shield,
    title: "Качество",
    description: "Световни шампиони по тестване — качеството е в нашата ДНК. Всеки проект преминава през най-високите стандарти.",
  },
  {
    icon: Cpu,
    title: "Автоматизация",
    description: "Елиминираме повтарящите се задачи и освобождаваме екипите да се фокусират върху това, което наистина има значение.",
  },
  {
    icon: Code,
    title: "Практичност",
    description: "Доставяме решения, които не просто работят на хартия, а правят измерим ефект върху ежедневните операции.",
  },
];

const stats = [
  { value: "10+", label: "Години комбиниран опит в IT" },
  { value: "20+", label: "Завършени проекта" },
  { value: "2024", label: "Година на основаване" },
];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "slav@automationaid.eu",
    href: "mailto:slav@automationaid.eu",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "0884323999",
    href: "tel:0884323999",
  },
];

const AboutUs = () => {
  const { toast } = useToast();
  const [scrollY, setScrollY] = useState(0);
  const heroRef = useRef<HTMLDivElement>(null);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас до 24 часа.",
    });
    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="За нас | Automation Aid"
        description="Екип от световни шампиони по софтуерно тестване и инженери по автоматизация. Създаваме решения с AI, които дават реални резултати."
        canonical="https://automationaid.bg/about"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section
          ref={heroRef}
          className="relative min-h-[80vh] flex items-center overflow-hidden grain-overlay bg-hero-gradient"
        >
          {/* Background effects */}
          <div className="absolute inset-0 opacity-30 pointer-events-none"
            style={{
              background: `repeating-conic-gradient(from 0deg at 50% 120%, hsl(0 0% 100% / 0) 0deg, hsl(0 0% 100% / 0.15) 0.5deg, hsl(0 0% 100% / 0) 1deg)`,
            }}
          />
          <div
            className="absolute w-[520px] h-[520px] -top-32 -right-36 rounded-full opacity-20 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(0 0% 100% / 0.28) 0%, transparent 70%)',
              filter: 'blur(70px)',
              transform: `translateY(${scrollY * 0.15}px)`,
              transition: 'transform 0.3s ease-out',
            }}
          />
          <div
            className="absolute w-[360px] h-[360px] bottom-16 -left-40 rounded-full opacity-15 pointer-events-none"
            style={{
              background: 'radial-gradient(circle, hsl(173 80% 60% / 0.25) 0%, transparent 70%)',
              filter: 'blur(70px)',
            }}
          />

          {/* Floating particles */}
          <div className="absolute top-1/4 left-1/4 w-2 h-2 rounded-full bg-white/60 animate-float-slow shadow-glow pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/3 w-3 h-3 rounded-full bg-white/40 animate-float delay-300 pointer-events-none" />
          <div className="absolute top-1/3 right-1/4 w-1.5 h-1.5 rounded-full bg-accent/70 animate-float-slow delay-500 pointer-events-none" />

          {/* Decorative lines */}
          <div
            className="absolute left-[15%] top-0 bottom-0 w-px pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.2) 30%, hsl(0 0% 100% / 0.2) 70%, transparent 100%)',
            }}
          />
          <div
            className="absolute right-[20%] top-0 bottom-0 w-px pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent 0%, hsl(0 0% 100% / 0.15) 40%, hsl(0 0% 100% / 0.15) 60%, transparent 100%)',
            }}
          />

          <div className="container relative z-10 pt-32 pb-24">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex items-center justify-center gap-3 mb-8 animate-fade-up">
                <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30">
                  <Trophy className="w-4 h-4 text-[#FF6B35]" />
                  <span className="text-label text-white">Световно признат екип</span>
                </div>
              </div>

              <h1 className="text-display-hero text-white mb-8 drop-shadow-[0_8px_28px_rgba(255,255,255,0.25)] font-semibold leading-tight">
                <span className="block animate-fade-up">Запознайте се с</span>
                <span className="block animate-fade-up delay-100 text-[#FF6B35]">екипа</span>
              </h1>

              <p className="text-xl md:text-2xl text-white/90 max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-up delay-200 font-body font-medium drop-shadow-[0_6px_22px_rgba(255,255,255,0.22)]">
                Над 10 години комбиниран опит в IT сферата, над 20 завършени проекта и страст към иновациите.
              </p>
            </div>
          </div>

          {/* Bottom fade */}
          <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-20" />
        </section>

        {/* Stats Bar */}
        <section className="relative -mt-16 z-30 pb-20">
          <div className="container">
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto">
              {stats.map((stat, i) => (
                <div
                  key={i}
                  className="glass-card rounded-2xl p-6 text-center animate-fade-up-stagger hover-lift"
                  style={{ animationDelay: `${i * 100 + 300}ms` }}
                >
                  <div className="text-xl md:text-2xl font-display font-semibold text-gradient-blue mb-1">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground font-body">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Founders Section */}
        <section className="section-padding relative">
          <div className="container">
            <div className="text-center mb-20">
              <span className="text-label text-primary mb-4 block animate-fade-up">Съоснователи</span>
              <h2 className="text-display-lg text-foreground animate-fade-up delay-100">
                Хората зад <span className="text-accent-italic">Automation Aid</span>
              </h2>
            </div>

            <div className="space-y-32">
              {founders.map((founder, index) => (
                <div
                  key={founder.name}
                  className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 lg:gap-20 items-center`}
                >
                  {/* Photo */}
                  <div className="w-full lg:w-5/12 animate-fade-up">
                    <div className="relative group">
                      <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 via-transparent to-secondary/20 rounded-3xl blur-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
                      <div className="relative overflow-hidden rounded-3xl border border-border/50 shadow-lg">
                        <img
                          src={founder.image}
                          alt={founder.name}
                          className="w-full aspect-[4/5] object-cover object-top transition-transform duration-700 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent" />
                        <div className="absolute bottom-6 left-6 right-6">
                          <div className="flex items-center gap-2 px-4 py-3 rounded-xl bg-white/95 backdrop-blur-sm shadow-md">
                            <Award className="w-5 h-5 text-[#FF6B35] flex-shrink-0" />
                            <span className="text-sm font-body font-semibold text-foreground leading-tight">
                              {founder.achievement}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Info */}
                  <div className="w-full lg:w-7/12 animate-fade-up delay-200">
                    <div className="space-y-6">
                      <div>
                        <h3 className="text-display-md text-foreground mb-2">{founder.name}</h3>
                        <p className="text-lg font-body font-semibold text-primary">{founder.title}</p>
                        <p className="text-base font-body text-muted-foreground">{founder.subtitle}</p>
                      </div>

                      <div className="h-px bg-gradient-to-r from-primary/30 via-border to-transparent" />

                      <div className="space-y-4">
                        {founder.bio.map((paragraph, i) => (
                          <p key={i} className="text-base md:text-lg leading-relaxed font-body text-muted-foreground">
                            {paragraph}
                          </p>
                        ))}
                      </div>

                      <div className="flex flex-wrap gap-3 pt-2">
                        {founder.skills.map((skill) => (
                          <span
                            key={skill}
                            className="px-4 py-2 rounded-full text-sm font-body font-medium bg-primary/10 text-primary border border-primary/20"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>

                      <div className="flex items-center gap-4 pt-2">
                        <a
                          href={founder.linkedin}
                          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Linkedin className="w-5 h-5" />
                          LinkedIn
                        </a>
                        <a
                          href={founder.github}
                          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <Github className="w-5 h-5" />
                          GitHub
                        </a>
                        <a
                          href={founder.facebook}
                          className="flex items-center gap-2 text-sm font-body font-medium text-muted-foreground hover:text-primary transition-colors duration-300"
                        >
                          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
                          </svg>
                          Facebook
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Story Section (with photo) */}
        <section className="section-padding relative overflow-hidden bg-mesh">
          <div className="container">
            <div className="max-w-5xl mx-auto">
              <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                {/* Photo */}
                <div className="relative rounded-3xl overflow-hidden shadow-lg border border-border/50 group">
                  <img
                    src="/clients/savaandslav.jpg"
                    alt="Сава и Слав — съоснователи на Automation Aid"
                    className="w-full aspect-[4/3] object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>

                {/* Story text */}
                <div className="space-y-6">
                  <span className="text-label text-primary">Нашата история</span>
                  <h2 className="text-display-md text-foreground">
                    Как започна <span className="text-accent-italic">Automation Aid</span>
                  </h2>
                  <div className="space-y-4">
                    <p className="text-base md:text-lg leading-relaxed font-body text-muted-foreground">
                      Сава и Слав основават Automation Aid през 2024 г. с ясна цел — да донесат световен опит и експертиза на българския пазар, като наблегнат на иновации и реални резултати.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-body text-muted-foreground">
                      С над 10 години комбиниран опит в IT индустрията и работа с компании от ранга на ASML и Cisco, те видяха възможност да помагат на бизнеси от всякакъв мащаб да работят по-умно чрез AI и автоматизация.
                    </p>
                    <p className="text-base md:text-lg leading-relaxed font-body text-muted-foreground">
                      Днес екипът стои зад над 20 успешно завършени проекта — от уеб приложения и браузърна автоматизация до интелигентни AI системи, които трансформират ежедневните операции на клиентите.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="section-padding relative">
          <div className="container">
            <div className="text-center mb-16">
              <span className="text-label text-primary mb-4 block">Нашият подход</span>
              <h2 className="text-display-lg text-foreground">
                Какво ни <span className="text-accent-italic">движи</span>
              </h2>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
              {values.map((value, i) => (
                <div
                  key={value.title}
                  className="glass-card rounded-2xl p-8 hover-lift animate-fade-up-stagger group"
                  style={{ animationDelay: `${i * 100}ms` }}
                >
                  <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors duration-300">
                    <value.icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-display font-semibold text-foreground mb-3">{value.title}</h3>
                  <p className="text-sm font-body text-muted-foreground leading-relaxed">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section
          id="contact"
          className="section-padding relative overflow-hidden"
          style={{
            background: 'linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(217 50% 97%) 50%, hsl(220 30% 98%) 100%)'
          }}
        >
          <div className="absolute inset-0 bg-mesh opacity-60" />
          <div className="absolute inset-0 bg-diamond-pattern opacity-20" />
          <div className="glow-orb glow-orb-copper w-[400px] h-[400px] top-0 right-1/4 opacity-10" />
          <div className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-1/4 left-0 opacity-10" />
          <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

          <div className="container relative z-10">
            <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
              {/* Left side - Info */}
              <div>
                <div className="mb-12">
                  <div className="flex items-center gap-3 mb-6">
                    <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                      <Sparkles className="w-5 h-5 text-primary" />
                    </div>
                    <span className="text-label text-primary font-body font-medium tracking-[0.2em]">
                      Контакт
                    </span>
                  </div>
                  <h2 className="text-display-lg text-foreground font-display mb-6">
                    Искате да{" "}
                    <span className="text-accent-italic">работим заедно?</span>
                  </h2>
                  <p className="text-foreground text-xl md:text-2xl font-display leading-relaxed font-medium italic">
                    Разкажете ни за вашия проект и ние ще ви помогнем да го реализирате. Отговаряме до 24 часа.
                  </p>
                </div>

                <div className="space-y-4 mb-12">
                  {contactInfo.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={index}
                        href={item.href}
                        className="group flex items-center gap-5 p-5 rounded-xl transition-all duration-300 bg-white hover:shadow-md border border-transparent hover:border-primary/20"
                      >
                        <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                          <Icon className="w-5 h-5 text-primary" />
                        </div>
                        <div>
                          <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                            {item.label}
                          </span>
                          <p className="text-foreground font-body font-medium group-hover:text-primary transition-colors duration-300">
                            {item.value}
                          </p>
                        </div>
                        <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
              </div>

              {/* Right side - Form */}
              <div>
                <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-border">
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                        <label
                          htmlFor="about-name"
                          className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-foreground'}`}
                        >
                          Име
                        </label>
                        <div className="relative">
                          <input
                            type="text"
                            id="about-name"
                            name="name"
                            value={formData.name}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('name')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                            placeholder="Вашето име"
                          />
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'name' ? 'opacity-100 bg-primary' : 'opacity-0'}`} />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <label
                          htmlFor="about-email"
                          className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-foreground'}`}
                        >
                          Email
                        </label>
                        <div className="relative">
                          <input
                            type="email"
                            id="about-email"
                            name="email"
                            value={formData.email}
                            onChange={handleChange}
                            onFocus={() => setFocusedField('email')}
                            onBlur={() => setFocusedField(null)}
                            required
                            className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                            placeholder="email@example.com"
                          />
                          <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'email' ? 'opacity-100 bg-primary' : 'opacity-0'}`} />
                        </div>
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="about-phone"
                        className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'phone' ? 'text-primary' : 'text-foreground'}`}
                      >
                        Телефон <span className="text-muted-foreground/50">(опционално)</span>
                      </label>
                      <div className="relative">
                        <input
                          type="tel"
                          id="about-phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('phone')}
                          onBlur={() => setFocusedField(null)}
                          className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                          placeholder="+359 888 123 456"
                        />
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'phone' ? 'opacity-100 bg-primary' : 'opacity-0'}`} />
                      </div>
                    </div>

                    <div className="space-y-2">
                      <label
                        htmlFor="about-message"
                        className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-foreground'}`}
                      >
                        Съобщение
                      </label>
                      <div className="relative">
                        <textarea
                          id="about-message"
                          name="message"
                          value={formData.message}
                          onChange={handleChange}
                          onFocus={() => setFocusedField('message')}
                          onBlur={() => setFocusedField(null)}
                          required
                          rows={5}
                          className="w-full px-5 py-4 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 resize-none font-body border-border focus:border-primary focus:bg-white"
                          placeholder="Разкажете ни за вашия проект..."
                        />
                        <div className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'message' ? 'opacity-100 bg-primary' : 'opacity-0'}`} />
                      </div>
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-gradient hover:shadow-blue text-white font-semibold rounded-xl py-7 text-base transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Изпращане...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Изпрати запитване
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      )}
                    </Button>

                    <p className="text-muted-foreground text-xs text-center font-body">
                      С изпращането на формата се съгласявате с нашите{" "}
                      <a href="/privacy-policy" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
                        условия за ползване
                      </a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default AboutUs;
