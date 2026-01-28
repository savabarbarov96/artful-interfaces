import { useState, useEffect, useRef } from "react";
import { ArrowRight, Maximize2, Play, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ProjectType {
  id: number;
  title: string;
  description: string;
  seoDescription: string;
  mediaType: "video" | "image";
  mediaUrl: string;
  features: string[];
  category: string;
  tech: string[];
}

const projectTypes: ProjectType[] = [
  {
    id: 1,
    title: "Сайтове за услуги",
    description: "Подходящи за специалисти и фирми, предлагащи услуги. Проектирани да представят вашата експертиза и да генерират запитвания от клиенти.",
    seoDescription: "Професионални уеб сайтове за услуги с модерен дизайн, SEO оптимизация и мобилна адаптивност. Идеални за застраховки, адвокати, консултанти и други услугови бизнеси.",
    mediaType: "video",
    mediaUrl: "/clients/wetransportit_desktop.mp4",
    features: ["Лендинг страници", "Портфолио секции", "Контактни форми", "SEO оптимизация"],
    category: "Услуги",
    tech: ["React", "TypeScript", "Tailwind"],
  },
  {
    id: 2,
    title: "Онлайн магазини",
    description: "Пълнофункционални e-commerce платформи с управление на продукти, плащания и доставки. Готови за скалиране от ден едно.",
    seoDescription: "Модерни онлайн магазини с персонализиран дизайн, интуитивна навигация, бърз checkout процес и интеграция с платежни системи. Уникален ecommerce сайт за CustomDecor със 100+ продукта, автоматизирано управление на инвентар и безпроблемен потребителски опит.",
    mediaType: "video",
    mediaUrl: "/clients/OnlineShop_customdecor.mp4",
    features: ["Продуктов каталог", "Кошница и плащания", "Управление на поръчки", "Интеграции с куриери"],
    category: "E-commerce",
    tech: ["React", "Stripe", "Node.js"],
  },
  {
    id: 3,
    title: "Корпоративни сайтове",
    description: "Професионално онлайн присъствие за средни и големи компании. Многоезични, с интегрирани CMS системи и разширена функционалност.",
    seoDescription: "Корпоративни уеб сайтове с професионален дизайн, многоезична поддръжка, CMS интеграция и корпоративни функции за големи организации.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
    features: ["Многоезичност", "CMS интеграция", "Разширена сигурност", "Корпоративен дизайн"],
    category: "Корпоративни",
    tech: ["Next.js", "CMS", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Уеб приложения",
    description: "Персонализирани уеб приложения за специфични бизнес нужди. От прости инструменти до сложни вътрешни системи.",
    seoDescription: "Персонализирани уеб приложения и SaaS платформи с модерна архитектура, API интеграции, реално-време данни и автоматизация на бизнес процеси.",
    mediaType: "image",
    mediaUrl: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    features: ["Потребителски панели", "API интеграции", "Реално време данни", "Автоматизации"],
    category: "SaaS",
    tech: ["React", "WebSockets", "REST API"],
  },
];

const ProjectTypes = () => {
  const [activeProject, setActiveProject] = useState<ProjectType>(projectTypes[1]); // Start with video project
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          // Auto-play video when section becomes visible
          if (activeProject.mediaType === "video" && videoRef.current) {
            videoRef.current.play().catch(() => {
              // Autoplay failed, user needs to interact
              setIsPlaying(false);
            });
          }
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, [activeProject.mediaType]);

  // Auto-play video when switching between project types
  useEffect(() => {
    if (isVisible && activeProject.mediaType === "video" && videoRef.current) {
      // Small delay to allow video source to load after transition
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(() => {
          setIsPlaying(false);
        });
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeProject.id, isVisible]);

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

  useEffect(() => {
    const handleFullscreenChange = () => {
      setIsFullscreen(Boolean(document.fullscreenElement));
    };

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange as EventListener);
    document.addEventListener("msfullscreenchange", handleFullscreenChange as EventListener);

    const video = videoRef.current as (HTMLVideoElement & {
      addEventListener: (
        type: "webkitbeginfullscreen" | "webkitendfullscreen",
        listener: () => void
      ) => void;
      removeEventListener: (
        type: "webkitbeginfullscreen" | "webkitendfullscreen",
        listener: () => void
      ) => void;
    }) | null;

    const handleWebkitBegin = () => setIsFullscreen(true);
    const handleWebkitEnd = () => setIsFullscreen(false);

    if (video?.addEventListener) {
      video.addEventListener("webkitbeginfullscreen", handleWebkitBegin);
      video.addEventListener("webkitendfullscreen", handleWebkitEnd);
    }

    return () => {
      document.removeEventListener("fullscreenchange", handleFullscreenChange);
      document.removeEventListener("webkitfullscreenchange", handleFullscreenChange as EventListener);
      document.removeEventListener("msfullscreenchange", handleFullscreenChange as EventListener);
      if (video?.removeEventListener) {
        video.removeEventListener("webkitbeginfullscreen", handleWebkitBegin);
        video.removeEventListener("webkitendfullscreen", handleWebkitEnd);
      }
    };
  }, []);

  const handleProjectChange = (project: ProjectType) => {
    if (project.id === activeProject.id || isTransitioning) return;
    setIsTransitioning(true);
    setActiveProject(project);
    setVideoLoaded(false);
    setTimeout(() => setIsTransitioning(false), 600);
  };

  const toggleVideoPlayback = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  const requestFullscreen = () => {
    const container = fullscreenRef.current as (HTMLDivElement & {
      webkitRequestFullscreen?: () => void;
      msRequestFullscreen?: () => void;
    }) | null;

    const video = videoRef.current as (HTMLVideoElement & {
      webkitEnterFullscreen?: () => void;
      webkitRequestFullscreen?: () => void;
      msRequestFullscreen?: () => void;
    }) | null;

    if (document.fullscreenElement && document.exitFullscreen) {
      document.exitFullscreen();
      return;
    }

    if (container?.requestFullscreen) {
      container.requestFullscreen();
    } else if (container?.webkitRequestFullscreen) {
      container.webkitRequestFullscreen();
    } else if (container?.msRequestFullscreen) {
      container.msRequestFullscreen();
    } else if (video?.webkitEnterFullscreen) {
      video.webkitEnterFullscreen();
    } else if (video?.requestFullscreen) {
      video.requestFullscreen();
    } else if (video?.webkitRequestFullscreen) {
      video.webkitRequestFullscreen();
    } else if (video?.msRequestFullscreen) {
      video.msRequestFullscreen();
    }
  };

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(217 91% 96%) 30%, hsl(220 30% 96%) 70%, hsl(220 30% 98%) 100%)'
      }}
    >
      {/* Cinematic background effects */}
      <div className="absolute inset-0 bg-radial-lines opacity-20" />

      {/* Dynamic gradient overlay */}
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background: `radial-gradient(ellipse 70% 60% at ${50 + scrollProgress * 10}% 50%, hsl(217 91% 50% / 0.08) 0%, transparent 70%)`,
        }}
      />

      {/* Floating orbs */}
      <div
        className="glow-orb glow-orb-copper w-[500px] h-[500px] -top-32 -right-48 opacity-20"
        style={{
          transform: `translate(${scrollProgress * -40}px, ${scrollProgress * 30}px) scale(${1 + scrollProgress * 0.1})`,
          transition: 'transform 0.3s ease-out'
        }}
      />
      <div
        className="glow-orb glow-orb-teal w-[400px] h-[400px] -bottom-32 -left-48 opacity-15"
        style={{
          transform: `translate(${scrollProgress * 35}px, ${scrollProgress * -25}px)`,
          transition: 'transform 0.3s ease-out'
        }}
      />

      {/* Top and bottom borders with shimmer */}
      <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-primary/40 to-transparent" />

      <div className="container relative z-10">
        {/* Section header - cinematic reveal */}
        <div
          className={`text-center mb-20 transition-all duration-1200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'}`}
        >
          <div
            className="inline-flex items-center gap-3 px-6 py-2.5 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 mb-8 shadow-subtle"
            style={{
              boxShadow:
                "0 18px 36px rgba(15, 23, 42, 0.18), 0 3px 10px rgba(15, 23, 42, 0.12)",
            }}
          >
            <Sparkles className="w-4 h-4 text-primary animate-pulse-glow" />
            <span className="text-label text-primary font-body font-semibold tracking-[0.25em]">
              Нашите решения
            </span>
          </div>

          <h2 className="text-display-lg text-foreground font-display max-w-3xl mx-auto mb-6">
            Какъв тип проект{" "}
            <span className="text-gradient-blue italic">търсите?</span>
          </h2>

          <p className="text-lg text-muted-foreground font-body max-w-2xl mx-auto leading-relaxed">
            От модерни онлайн магазини до корпоративни решения - създаваме уебсайтове,
            които превръщат посетители в клиенти
          </p>
        </div>

        {/* Navigation chips - floating style */}
        <div
          className={`flex flex-wrap justify-center gap-4 mb-16 transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          {projectTypes.map((project, index) => (
            <button
              key={project.id}
              onClick={() => handleProjectChange(project)}
              className={`group relative px-8 py-4 rounded-2xl font-body font-semibold text-sm transition-all duration-400 hover:scale-105 ${
                activeProject.id === project.id
                  ? "bg-blue-gradient text-white shadow-copper scale-105"
                  : "bg-white/90 backdrop-blur-sm border-2 border-border text-foreground hover:border-primary/50 hover:shadow-md"
              }`}
              style={{
                transitionDelay: `${index * 60}ms`,
                transform: activeProject.id === project.id ? 'scale(1.05) translateY(-2px)' : 'scale(1) translateY(0)'
              }}
            >
              <span className="relative z-10 flex items-center gap-2">
                {activeProject.id === project.id && (
                  <Play className="w-3.5 h-3.5 fill-current animate-pulse" />
                )}
                {project.title}
              </span>

              {/* Hover glow effect */}
              {activeProject.id !== project.id && (
                <div className="absolute inset-0 rounded-2xl bg-blue-gradient opacity-0 group-hover:opacity-10 transition-opacity duration-400" />
              )}
            </button>
          ))}
        </div>

        {/* Stacked layout: Text on top, media centerpiece below */}
        <div className="max-w-6xl mx-auto">
          <div
            className={`relative rounded-[2.25rem] bg-white/70 backdrop-blur-xl border border-primary/10 shadow-subtle p-8 md:p-10 lg:p-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <div
              key={activeProject.id}
              className={`transition-all duration-500 ${isTransitioning ? 'opacity-0 translate-y-8 scale-95' : 'opacity-100 translate-y-0 scale-100'}`}
            >
              {/* Category badge */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 border border-primary/20 mb-6">
                <div className="w-2 h-2 rounded-full bg-primary animate-pulse" />
                <span className="text-xs font-body font-bold text-primary uppercase tracking-wider">
                  {activeProject.category}
                </span>
              </div>

              <div className="grid lg:grid-cols-[1.1fr,0.9fr] gap-8 lg:gap-12 items-start">
                <div>
                  {/* Title with dramatic sizing */}
                  <h3 className="text-4xl md:text-5xl lg:text-6xl font-display text-foreground mb-6 leading-tight">
                    {activeProject.title}
                  </h3>

                  {/* Description */}
                  <p className="text-xl md:text-2xl text-foreground/80 leading-relaxed font-display italic">
                    {activeProject.description}
                  </p>

                  {/* SEO Description - hidden, for crawlers */}
                  <div className="sr-only" aria-hidden="true">
                    {activeProject.seoDescription}
                  </div>
                </div>

                <div className="lg:pt-2">
                  {/* Features list */}
                  <div className="space-y-4 mb-8">
                    {activeProject.features.map((feature, index) => (
                      <div
                        key={index}
                        className="flex items-center gap-4 group"
                        style={{
                          transitionDelay: `${index * 80}ms`,
                          opacity: isTransitioning ? 0 : 1,
                          transform: isTransitioning ? 'translateX(-20px)' : 'translateX(0)',
                          transition: 'all 0.4s cubic-bezier(0.16, 1, 0.3, 1)',
                        }}
                      >
                        <div className="flex-shrink-0 w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center group-hover:bg-primary/20 transition-colors">
                          <div className="w-2.5 h-2.5 rounded-full bg-primary" />
                        </div>
                        <span className="text-foreground font-body text-base font-medium">
                          {feature}
                        </span>
                      </div>
                    ))}
                  </div>

                  {/* Tech stack */}
                  <div className="flex flex-wrap gap-2 mb-8">
                    {activeProject.tech.map((tech, index) => (
                      <span
                        key={index}
                        className="px-3 py-1.5 text-xs font-body font-semibold bg-secondary/10 text-secondary rounded-lg border border-secondary/20"
                        style={{
                          transitionDelay: `${index * 60}ms`,
                          opacity: isTransitioning ? 0 : 1,
                          transition: 'opacity 0.3s ease-out',
                        }}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* CTA Button */}
                  <Button
                    className="bg-blue-gradient hover:shadow-copper text-white font-bold rounded-2xl px-10 py-7 text-base transition-all duration-400 group hover:scale-105 shadow-md"
                    asChild
                  >
                    <a href="#contact" className="flex items-center gap-3">
                      Поискайте оферта
                      <ArrowRight className="w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>

          {/* Interstitial text */}
          <div
            className={`text-center max-w-3xl mx-auto mt-10 lg:mt-12 transition-all duration-1000 delay-300 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}
          >
            <p className="text-base md:text-lg text-foreground/70 font-body leading-relaxed">
              {activeProject.id === 1
                ? "Вижте как изглежда един реален сайт за услуги с внимание към детайла, удобството и професионалното представяне."
                : "Вижте как изглежда една реална e-commerce реализация с внимание към детайла, удобството и усещането за премиум бранд."}
            </p>
          </div>

          {/* Media centerpiece */}
          <div
            className={`relative mt-12 lg:mt-16 transition-all ease-out ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-16'
            }`}
            style={{
              transitionDuration: '1.4s',
              transitionDelay: '0.5s',
            }}
          >
            <div className="text-center mb-6 md:mb-8">
              <span
                className="inline-flex items-center gap-3 px-5 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-primary/20 shadow-subtle"
                style={{
                  boxShadow:
                    "0 18px 36px rgba(15, 23, 42, 0.18), 0 3px 10px rgba(15, 23, 42, 0.12)",
                }}
              >
                <span className="text-sm font-body font-semibold tracking-[0.18em] text-primary uppercase">
                  {activeProject.id === 1 ? "Уебсайт по ваша визия" : "Магазин по ваша визия"}
                </span>
              </span>
            </div>
            <div className="relative flex items-center justify-center">
              {/* Background decorative element */}
              <div
                className="absolute inset-0 -m-10 rounded-[2.5rem] -z-10"
                style={{
                  background: 'radial-gradient(ellipse 75% 65% at 50% 50%, hsl(217 91% 50% / 0.08) 0%, transparent 72%)',
                }}
              />
              <div
                className="absolute -inset-8 rounded-[2.5rem] -z-10 opacity-70"
                style={{
                  background: 'conic-gradient(from 160deg at 50% 50%, hsl(220 30% 96%) 0deg, hsl(217 50% 94%) 120deg, hsl(220 30% 96%) 240deg, hsl(217 50% 94%) 360deg)',
                }}
              />

              <div className="relative w-full max-w-5xl xl:max-w-6xl mx-auto">
                {/* Cinematic frame */}
                <div
                  className="relative rounded-[2.5rem] overflow-hidden"
                  style={{
                    padding: '1px',
                    background: 'linear-gradient(135deg, rgba(0,0,0,0.1) 0%, rgba(0,0,0,0.02) 50%, rgba(0,0,0,0.08) 100%)',
                  }}
                >
                  <div className="relative rounded-[2.4rem] overflow-hidden bg-black/90">
                    {/* Media container */}
                    <div
                      key={activeProject.id}
                      className={`relative transition-all duration-700 ease-out ${
                        isTransitioning
                          ? 'opacity-0 translate-y-8'
                          : 'opacity-100 translate-y-0'
                      }`}
                    >
                      {activeProject.mediaType === "video" ? (
                        <div
                          ref={fullscreenRef}
                          className={`relative group ${
                            isFullscreen
                              ? "w-screen h-screen bg-black flex items-center justify-center"
                              : "aspect-[16/9]"
                          }`}
                        >
                          <video
                            ref={videoRef}
                            className={`w-full h-full block ${
                              isFullscreen ? "object-contain bg-black" : "object-cover"
                            }`}
                            loop
                            muted
                            playsInline
                            preload="metadata"
                            onLoadedData={() => setVideoLoaded(true)}
                            onPlay={() => setIsPlaying(true)}
                            onPause={() => setIsPlaying(false)}
                            aria-label={`${activeProject.title} - демонстрация на проект`}
                          >
                            {activeProject.id === 1 && (
                              <source
                                src="/clients/wetransportit_mobile.mp4"
                                media="(max-width: 768px)"
                                type="video/mp4"
                              />
                            )}
                            {activeProject.id === 2 && (
                              <source
                                src="/clients/ecommerce_raw.mp4"
                                media="(max-width: 768px)"
                                type="video/mp4"
                              />
                            )}
                            <source src={activeProject.mediaUrl} type="video/mp4" />
                          </video>

                          {/* Loading state */}
                          {!videoLoaded && (
                            <div className="absolute inset-0 bg-gray-900 flex items-center justify-center">
                              <div className="w-9 h-9 border-2 border-gray-600 border-t-white rounded-full animate-spin" />
                            </div>
                          )}

                          {/* Fullscreen control */}
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              requestFullscreen();
                            }}
                            className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110"
                            aria-label="Цял екран"
                          >
                            <Maximize2 className="w-4 h-4 text-gray-800" />
                          </button>

                          {/* Subtle play button on hover */}
                          <button
                            onClick={(event) => {
                              event.stopPropagation();
                              toggleVideoPlayback();
                            }}
                            className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                            aria-label={isPlaying ? "Пауза" : "Възпроизвеждане"}
                          >
                            <div className="w-16 h-16 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center shadow-xl hover:scale-110 transition-transform duration-200">
                              {isPlaying ? (
                                <div className="flex gap-1">
                                  <div className="w-1.5 h-6 bg-gray-800 rounded-full" />
                                  <div className="w-1.5 h-6 bg-gray-800 rounded-full" />
                                </div>
                              ) : (
                                <Play className="w-6 h-6 text-gray-800 ml-0.5 fill-current" />
                              )}
                            </div>
                          </button>
                        </div>
                      ) : (
                        <div className="aspect-[16/9]">
                          <img
                            src={activeProject.mediaUrl}
                            alt={`${activeProject.title} - ${activeProject.seoDescription}`}
                            loading="lazy"
                            className="w-full h-full object-cover block"
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Soft shadow underneath */}
                <div
                  className="absolute -bottom-4 left-10 right-10 h-8 rounded-full blur-2xl -z-10"
                  style={{ background: 'rgba(0,0,0,0.18)' }}
                />
                <div
                  className="absolute -bottom-10 left-16 right-16 h-14 rounded-full blur-3xl -z-20"
                  style={{ background: 'rgba(37, 99, 235, 0.18)' }}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
