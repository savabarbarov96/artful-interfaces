import { useState, useEffect, useRef } from "react";
import { ArrowRight, Maximize2, Play } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

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
    mediaType: "video",
    mediaUrl: "/clients/WebsiteDesktopKostova.mp4",
    features: ["Многоезичност", "CMS интеграция", "Разширена сигурност", "Корпоративен дизайн"],
    category: "Корпоративни",
    tech: ["Next.js", "CMS", "PostgreSQL"],
  },
  {
    id: 4,
    title: "Уеб приложения",
    description: "Персонализирани уеб приложения за специфични бизнес нужди. От прости инструменти до сложни вътрешни системи.",
    seoDescription: "Персонализирани уеб приложения и SaaS платформи с модерна архитектура, API интеграции, реално-време данни и автоматизация на бизнес процеси.",
    mediaType: "video",
    mediaUrl: "/clients/WebsiteDesktopShelepko.mp4",
    features: ["Потребителски панели", "API интеграции", "Реално време данни", "Автоматизации"],
    category: "SaaS",
    tech: ["React", "WebSockets", "REST API"],
  },
];

const showcaseLabel: Record<number, string> = {
  1: "Уебсайт по ваша визия",
  2: "Магазин по ваша визия",
  3: "Корпоративен сайт по ваша визия",
  4: "Уеб приложение по ваша визия",
};

const interstitialCopy: Record<number, string> = {
  1: "Вижте как изглежда един реален сайт за услуги с внимание към детайла, удобството и професионалното представяне.",
  2: "Вижте как изглежда една реална e-commerce реализация с внимание към детайла, удобството и усещането за премиум бранд.",
  3: "Вижте как изглежда един корпоративен сайт с ясно послание, доверие и силно бизнес присъствие.",
  4: "Вижте как изглежда уеб приложение с модерна визия, ясни потоци и фокус върху ефективността.",
};

const ProjectTypes = () => {
  const [activeProject, setActiveProject] = useState<ProjectType>(projectTypes[0]);
  const [isTransitioning, setIsTransitioning] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  const fullscreenRef = useRef<HTMLDivElement>(null);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const { ref: sectionRef, inView: isVisible } = useReveal<HTMLElement>(0.1);

  // Auto-play once visible and on project switch
  useEffect(() => {
    if (isVisible && activeProject.mediaType === "video" && videoRef.current) {
      const timer = setTimeout(() => {
        videoRef.current?.play().catch(() => setIsPlaying(false));
      }, 100);
      return () => clearTimeout(timer);
    }
  }, [activeProject.id, activeProject.mediaType, isVisible]);

  useEffect(() => {
    const handleFullscreenChange = () => setIsFullscreen(Boolean(document.fullscreenElement));

    document.addEventListener("fullscreenchange", handleFullscreenChange);
    document.addEventListener("webkitfullscreenchange", handleFullscreenChange as EventListener);
    document.addEventListener("msfullscreenchange", handleFullscreenChange as EventListener);

    const video = videoRef.current as (HTMLVideoElement & {
      addEventListener: (type: "webkitbeginfullscreen" | "webkitendfullscreen", listener: () => void) => void;
      removeEventListener: (type: "webkitbeginfullscreen" | "webkitendfullscreen", listener: () => void) => void;
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
    setTimeout(() => setIsTransitioning(false), 500);
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
      id="work"
      className={`relative py-20 md:py-28 bg-paper-deep overflow-hidden ${isVisible ? "aa-in" : ""}`}
    >
      <div className="absolute top-0 left-0 right-0 h-px aa-rule-ink" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="02"
            label="Нашите решения"
            title={
              <>
                Какъв тип проект <span className="text-machine-deep">търсите?</span>
              </>
            }
            lead="От модерни онлайн магазини до корпоративни решения — създаваме уебсайтове, които превръщат посетители в клиенти."
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)] gap-10 lg:gap-16 mt-14 items-start">
          {/* Left — numbered selector rail */}
          <div className="aa-reveal" style={{ transitionDelay: "120ms" }}>
            <div role="tablist" aria-label="Типове проекти" className="border-t border-ink/15">
              {projectTypes.map((project, i) => {
                const isActive = activeProject.id === project.id;
                return (
                  <button
                    key={project.id}
                    role="tab"
                    aria-selected={isActive}
                    onClick={() => handleProjectChange(project)}
                    className={`group w-full flex items-baseline gap-4 md:gap-5 text-left px-1 py-5 border-b border-ink/15 transition-colors duration-300 ${
                      isActive ? "" : "hover:bg-ink/[0.03]"
                    }`}
                  >
                    <span
                      className={`font-plexmono text-xs transition-colors duration-300 ${
                        isActive ? "text-signal" : "text-ink/35 group-hover:text-ink/60"
                      }`}
                    >
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span
                      className={`font-heading text-xl md:text-[1.65rem] leading-none transition-colors duration-300 ${
                        isActive ? "text-ink" : "text-ink/35 group-hover:text-ink/70"
                      }`}
                    >
                      {project.title}
                    </span>
                    <ArrowRight
                      className={`w-4 h-4 ml-auto self-center transition-all duration-300 ${
                        isActive ? "text-signal opacity-100 translate-x-0" : "opacity-0 -translate-x-2"
                      }`}
                    />
                  </button>
                );
              })}
            </div>

            {/* Active project detail */}
            <div
              key={activeProject.id}
              className={`mt-8 transition-all duration-500 ${
                isTransitioning ? "opacity-0 translate-y-3" : "opacity-100 translate-y-0"
              }`}
            >
              <span className="aa-label text-machine-deep">{activeProject.category}</span>
              <p className="font-plex text-base md:text-lg text-ink/75 leading-relaxed mt-3 mb-6">
                {activeProject.description}
              </p>

              <ul className="grid grid-cols-2 gap-x-6 gap-y-2.5 mb-6">
                {activeProject.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-2.5">
                    <span className="w-1 h-1 bg-signal flex-shrink-0" />
                    <span className="font-plex text-sm text-ink/80">{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-8">
                {activeProject.tech.map((tech) => (
                  <span
                    key={tech}
                    className="font-plexmono text-[11px] uppercase tracking-wider px-2.5 py-1 border border-ink/20 text-ink/60"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <a
                href="#contact"
                className="group inline-flex items-center gap-3 bg-ink text-paper font-plex font-semibold text-sm uppercase tracking-[0.08em] px-7 py-3.5 rounded-sm transition-all duration-300 hover:bg-ink-soft"
              >
                Поискайте оферта
                <ArrowRight className="w-4 h-4 text-signal group-hover:translate-x-1 transition-transform" />
              </a>

              {/* SEO copy for crawlers */}
              <div className="sr-only" aria-hidden="true">
                {activeProject.seoDescription}
              </div>
            </div>
          </div>

          {/* Right — media in technical frame */}
          <div className="aa-reveal lg:sticky lg:top-28" style={{ transitionDelay: "220ms" }}>
            <div className="relative">
              <Cross className="absolute -top-[7px] -left-[7px] text-ink/40 z-10" />
              <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/40 z-10" />

              <div className="border border-ink/15 bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.3)]">
                {/* Caption bar */}
                <div className="flex items-center justify-between px-4 py-2.5 border-b border-ink/10 bg-bone">
                  <span className="font-plexmono text-[10px] uppercase tracking-[0.2em] text-ink/55">
                    {showcaseLabel[activeProject.id] ?? "Проект по ваша визия"}
                  </span>
                  <span className="flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                    <span className="font-plexmono text-[10px] uppercase tracking-wider text-ink/40">live demo</span>
                  </span>
                </div>

                <div
                  key={activeProject.id}
                  className={`relative transition-opacity duration-500 ${isTransitioning ? "opacity-0" : "opacity-100"}`}
                >
                  {activeProject.mediaType === "video" ? (
                    <div
                      ref={fullscreenRef}
                      className={`relative group ${
                        isFullscreen ? "w-screen h-screen bg-black flex items-center justify-center" : "aspect-[16/9]"
                      }`}
                    >
                      <video
                        ref={videoRef}
                        className={`w-full h-full block ${isFullscreen ? "object-contain bg-black" : "object-cover"}`}
                        loop
                        muted
                        playsInline
                        preload={isVisible ? "metadata" : "none"}
                        onLoadedData={() => setVideoLoaded(true)}
                        onPlay={() => setIsPlaying(true)}
                        onPause={() => setIsPlaying(false)}
                        aria-label={`${activeProject.title} - демонстрация на проект`}
                      >
                        {activeProject.id === 1 && (
                          <source src="/clients/wetransportit_mobile.mp4" media="(max-width: 768px)" type="video/mp4" />
                        )}
                        {activeProject.id === 2 && (
                          <source src="/clients/ecommerce_raw.mp4" media="(max-width: 768px)" type="video/mp4" />
                        )}
                        <source src={activeProject.mediaUrl} type="video/mp4" />
                      </video>

                      {!videoLoaded && (
                        <div className="absolute inset-0 bg-bone flex items-center justify-center">
                          <div className="w-8 h-8 border border-ink/15 border-t-signal rounded-full animate-spin" />
                        </div>
                      )}

                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          requestFullscreen();
                        }}
                        className="absolute top-3 right-3 z-20 w-9 h-9 rounded-sm bg-white/90 backdrop-blur-sm border border-ink/15 flex items-center justify-center transition-all duration-200 hover:bg-white"
                        aria-label="Цял екран"
                      >
                        <Maximize2 className="w-4 h-4 text-ink" />
                      </button>

                      <button
                        onClick={(event) => {
                          event.stopPropagation();
                          toggleVideoPlayback();
                        }}
                        className="absolute inset-0 z-10 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 cursor-pointer"
                        aria-label={isPlaying ? "Пауза" : "Възпроизвеждане"}
                      >
                        <span className="w-14 h-14 rounded-sm bg-white/90 backdrop-blur-sm flex items-center justify-center hover:scale-105 transition-transform duration-200">
                          {isPlaying ? (
                            <span className="flex gap-1">
                              <span className="w-1.5 h-5 bg-ink" />
                              <span className="w-1.5 h-5 bg-ink" />
                            </span>
                          ) : (
                            <Play className="w-5 h-5 text-ink ml-0.5 fill-current" />
                          )}
                        </span>
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

            <p className="font-plex text-sm text-ink/60 leading-relaxed mt-5 max-w-lg">
              {interstitialCopy[activeProject.id] ?? ""}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
