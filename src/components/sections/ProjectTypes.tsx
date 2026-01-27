import { useState, useEffect, useRef } from "react";
import { ArrowRight, Layers } from "lucide-react";
import { Button } from "@/components/ui/button";

const projectTypes = [
  {
    id: 1,
    title: "Сайтове за услуги",
    description: "Подходящи за специалисти и фирми, предлагащи услуги. Проектирани да представят вашата експертиза и да генерират запитвания от клиенти.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
    features: ["Лендинг страници", "Портфолио секции", "Контактни форми", "SEO оптимизация"],
  },
  {
    id: 2,
    title: "Онлайн магазини",
    description: "Пълнофункционални e-commerce платформи с управление на продукти, плащания и доставки. Готови за скалиране от ден едно.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    features: ["Продуктов каталог", "Кошница и плащания", "Управление на поръчки", "Интеграции с куриери"],
  },
  {
    id: 3,
    title: "Корпоративни сайтове",
    description: "Професионално онлайн присъствие за средни и големи компании. Многоезични, с интегрирани CMS системи и разширена функционалност.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    features: ["Многоезичност", "CMS интеграция", "Разширена сигурност", "Корпоративен дизайн"],
  },
  {
    id: 4,
    title: "Уеб приложения",
    description: "Персонализирани уеб приложения за специфични бизнес нужди. От прости инструменти до сложни вътрешни системи.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    features: ["Потребителски панели", "API интеграции", "Реално време данни", "Автоматизации"],
  },
];

const ProjectTypes = () => {
  const [activeProject, setActiveProject] = useState(projectTypes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

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
        const progress = Math.max(0, Math.min(1,
          (window.innerHeight - rect.top) / (window.innerHeight + rect.height)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleProjectChange = (project: typeof projectTypes[0]) => {
    if (project.id === activeProject.id || isTransitioning) return;
    setIsTransitioning(true);
    setActiveProject(project);
    setTimeout(() => setIsTransitioning(false), 500);
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(220 30% 96%) 50%, hsl(220 30% 98%) 100%)'
      }}
    >
      {/* Subtle background pattern */}
      <div className="absolute inset-0 bg-geometric-grid opacity-30" />

      {/* Gradient overlays */}
      <div
        className="absolute inset-0 opacity-50"
        style={{
          background: `radial-gradient(ellipse 60% 50% at ${60 - scrollProgress * 20}% 50%, hsl(217 91% 50% / 0.06) 0%, transparent 60%)`,
        }}
      />

      {/* Decorative orbs */}
      <div
        className="glow-orb glow-orb-copper w-[400px] h-[400px] top-0 -right-40 opacity-15"
        style={{ transform: `translate(${scrollProgress * -30}px, ${scrollProgress * 20}px)` }}
      />

      {/* Top and bottom borders */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-xl">
            <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
              Нашите решения
            </span>
            <h2 className="text-display-lg text-foreground font-display">
              Какъв тип проект{" "}
              <span className="text-accent-italic">търсите?</span>
            </h2>
          </div>
          <div className="flex items-center gap-3">
            <Layers className="w-5 h-5 text-primary" />
            <span className="text-muted-foreground font-body">4 типа решения</span>
          </div>
        </div>

        {/* Navigation tabs */}
        <div
          className={`flex flex-wrap gap-3 mb-14 transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {projectTypes.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleProjectChange(project)}
              className={`group relative px-6 py-3.5 rounded-xl font-body font-medium text-sm transition-all duration-300 ${activeProject.id === project.id
                  ? "bg-blue-gradient text-white shadow-blue"
                  : "bg-white border border-border text-foreground hover:border-primary/50 hover:shadow-sm"
                }`}
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              {project.title}
              {/* Active indicator line */}
              {activeProject.id === project.id && (
                <span className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-1/2 h-0.5 bg-primary rounded-full" />
              )}
            </button>
          ))}
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left: Content card */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-md border border-border relative overflow-hidden">
              {/* Accent gradient */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-blue-gradient" />

              <div
                key={activeProject.id}
                className={`transition-all duration-400 ${isTransitioning ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
              >
                {/* Title */}
                <h3 className="text-2xl md:text-3xl font-display text-foreground mb-6">
                  {activeProject.title}
                </h3>

                {/* Description */}
                <p className="text-muted-foreground text-lg leading-relaxed mb-10 font-body font-light">
                  {activeProject.description}
                </p>

                {/* Features grid */}
                <div className="grid grid-cols-2 gap-4 mb-10">
                  {activeProject.features.map((feature, index) => (
                    <div
                      key={index}
                      className="flex items-center gap-3 py-2"
                      style={{
                        transitionDelay: `${index * 75}ms`,
                        opacity: isTransitioning ? 0 : 1,
                        transform: isTransitioning ? 'translateX(-10px)' : 'translateX(0)',
                        transition: 'all 0.3s ease-out',
                      }}
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span className="text-foreground font-body text-sm">{feature}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <Button
                  className="bg-blue-gradient hover:shadow-blue text-white font-medium rounded-xl px-8 py-6 transition-all duration-300 group"
                  asChild
                >
                  <a href="#contact" className="flex items-center gap-2">
                    Поискайте оферта
                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </a>
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Premium laptop mockup */}
          <div
            className={`relative transition-all duration-1000 delay-500 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
            style={{
              perspective: '1500px',
              transform: `translateY(${scrollProgress * -15}px)`,
            }}
          >
            {/* Laptop frame */}
            <div
              className="relative mx-auto max-w-xl"
              style={{
                transform: `rotateX(${2 - scrollProgress}deg) rotateY(${scrollProgress * 2 - 1}deg)`,
                transition: 'transform 0.1s ease-out',
              }}
            >
              {/* Screen */}
              <div
                className="rounded-t-2xl overflow-hidden shadow-xl"
                style={{
                  background: 'linear-gradient(180deg, #374151 0%, #1f2937 100%)',
                  padding: '12px 12px 0',
                }}
              >
                {/* Browser chrome */}
                <div className="rounded-t-lg overflow-hidden bg-white">
                  {/* Browser bar */}
                  <div
                    className="flex items-center gap-3 px-4 py-2.5 border-b border-gray-100"
                    style={{ background: '#f9fafb' }}
                  >
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-400" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-400" />
                    </div>
                    <div className="flex-1 mx-4">
                      <div className="h-6 bg-gray-100 rounded-lg flex items-center px-3">
                        <span className="text-xs text-gray-400 font-body">automationaid.bg/проекти</span>
                      </div>
                    </div>
                  </div>

                  {/* Screen content */}
                  <div className="relative aspect-[16/10] overflow-hidden">
                    <img
                      src={activeProject.image}
                      alt={activeProject.title}
                      className={`w-full h-full object-cover transition-all duration-700 ${isTransitioning ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}
                    />

                    {/* Overlay gradient */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />

                    {/* Screen reflection */}
                    <div
                      className="absolute inset-0 opacity-30"
                      style={{
                        background: 'linear-gradient(135deg, transparent 40%, rgba(255,255,255,0.1) 50%, transparent 60%)',
                      }}
                    />
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

              {/* Shadow */}
              <div
                className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-3/4 h-12 rounded-full blur-2xl"
                style={{ background: 'hsl(217 91% 50% / 0.15)' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
