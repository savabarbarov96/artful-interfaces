import { useEffect, useRef, useState } from "react";
import projectFitness from "@/assets/project-fitness.jpg";
import projectPetstore from "@/assets/project-petstore.jpg";
import projectDecor from "@/assets/project-decor.jpg";
import projectGuesthouse from "@/assets/project-guesthouse.jpg";
import { ArrowUpRight, ExternalLink } from "lucide-react";

const projects = [
  {
    title: "Fitness Management",
    category: "Система за управление",
    description: "Цялостна система за фитнес зали с резервации, членства и анализи.",
    image: projectFitness,
    tags: ["React", "Node.js", "PostgreSQL"],
  },
  {
    title: "Pet Store E-commerce",
    category: "Онлайн магазин",
    description: "Модерен онлайн магазин за домашни любимци с 5000+ продукта.",
    image: projectPetstore,
    tags: ["Next.js", "Stripe", "CMS"],
  },
  {
    title: "CustomDecor System",
    category: "Корпоративно решение",
    description: "ERP система за производител на мебели по поръчка.",
    image: projectDecor,
    tags: ["Vue.js", "Laravel", "ERP"],
  },
  {
    title: "Guest House Booking",
    category: "Резервационна система",
    description: "Система за онлайн резервации с интеграция към Booking.com.",
    image: projectGuesthouse,
    tags: ["React", "API", "Booking"],
  },
];

const Portfolio = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [scrollProgress, setScrollProgress] = useState(0);

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
        const progress = Math.max(0, Math.min(1,
          (windowHeight - rect.top) / (windowHeight + rect.height)
        ));
        setScrollProgress(progress);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section
      ref={sectionRef}
      id="work"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(220 30% 96%) 50%, hsl(220 30% 98%) 100%)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute inset-0 bg-geometric-grid opacity-20" />

      {/* Decorative elements with parallax */}
      <div
        className="glow-orb glow-orb-copper w-[500px] h-[500px] -top-40 -left-40 opacity-10"
        style={{ transform: `translate(${scrollProgress * 50}px, ${scrollProgress * 30}px)` }}
      />
      <div
        className="glow-orb glow-orb-teal w-[400px] h-[400px] bottom-0 right-0 opacity-10"
        style={{ transform: `translate(${scrollProgress * -40}px, ${scrollProgress * -20}px)` }}
      />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-16 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <div className="max-w-xl">
            <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
              Проекти
            </span>
            <h2 className="text-display-lg text-foreground font-display">
              Избрани{" "}
              <span className="text-accent-italic">разработки</span>
            </h2>
          </div>
          <p className="text-foreground max-w-sm font-display text-xl leading-relaxed italic">
            Всеки проект е уникално решение, съобразено с нуждите на клиента и изградено с внимание към детайлите.
          </p>
        </div>

        {/* Projects grid - offset layout */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.map((project, index) => {
            const isHovered = hoveredProject === index;
            const isEven = index % 2 === 0;

            return (
              <div
                key={project.title}
                className={`group transition-all duration-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'}`}
                style={{
                  transitionDelay: `${(index + 1) * 150}ms`,
                  transform: isVisible ? `translateY(${isEven ? scrollProgress * -20 : scrollProgress * 20}px)` : undefined,
                }}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
              >
                <div className={`cursor-pointer ${isEven ? 'md:mt-12' : ''}`}>
                  {/* Image container with 3D hover effect */}
                  <div
                    className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 shadow-md"
                    style={{
                      perspective: '1000px',
                    }}
                  >
                    {/* Image wrapper for 3D transform */}
                    <div
                      className="w-full h-full transition-all duration-700"
                      style={{
                        transform: isHovered
                          ? 'scale(1.05) rotateX(-2deg) rotateY(2deg)'
                          : 'scale(1) rotateX(0) rotateY(0)',
                      }}
                    >
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover"
                      />
                    </div>

                    {/* Gradient overlay */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-100' : 'opacity-0'}`}
                      style={{
                        background: 'linear-gradient(180deg, transparent 0%, hsl(217 91% 30% / 0.8) 100%)',
                      }}
                    />

                    {/* Shimmer effect on hover */}
                    <div
                      className={`absolute inset-0 transition-opacity duration-500 ${isHovered ? 'opacity-30' : 'opacity-0'}`}
                      style={{
                        background: 'linear-gradient(135deg, transparent 40%, hsl(0 0% 100% / 0.2) 50%, transparent 60%)',
                        backgroundSize: '200% 200%',
                        animation: isHovered ? 'shimmer 1.5s infinite' : 'none',
                      }}
                    />

                    {/* Tags - revealed on hover */}
                    <div
                      className={`absolute top-4 left-4 flex flex-wrap gap-2 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4'
                        }`}
                    >
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="px-3 py-1 text-xs font-medium font-body bg-white/90 backdrop-blur-sm rounded-full text-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    {/* Description - revealed on hover */}
                    <div
                      className={`absolute bottom-0 left-0 right-0 p-6 transition-all duration-500 ${isHovered ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
                        }`}
                    >
                      <p className="text-white text-sm font-body leading-relaxed">
                        {project.description}
                      </p>
                    </div>

                    {/* View project button - bottom right on hover */}
                    <div
                      className={`absolute bottom-4 right-4 transition-all duration-500 ${isHovered ? 'opacity-100 scale-100' : 'opacity-0 scale-75'
                        }`}
                    >
                      <div className="w-12 h-12 rounded-full bg-blue-gradient flex items-center justify-center shadow-blue">
                        <ExternalLink className="w-5 h-5 text-white" />
                      </div>
                    </div>

                    {/* Corner accents */}
                    <div
                      className={`absolute top-4 right-4 w-8 h-8 border-t-2 border-r-2 rounded-tr-xl transition-all duration-500 ${isHovered ? 'border-white/60 scale-110' : 'border-white/20 scale-100'
                        }`}
                    />
                    <div
                      className={`absolute bottom-4 left-4 w-8 h-8 border-b-2 border-l-2 rounded-bl-xl transition-all duration-500 ${isHovered ? 'border-secondary/60 scale-110' : 'border-white/20 scale-100'
                        }`}
                    />
                  </div>

                  {/* Text content */}
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <span
                        className={`text-xs font-medium uppercase tracking-wider font-body transition-colors duration-300 ${isHovered ? 'text-primary' : 'text-muted-foreground'
                          }`}
                      >
                        {project.category}
                      </span>
                      <h3 className="text-xl font-display text-foreground mt-2">
                        {project.title}
                      </h3>
                    </div>

                    {/* Arrow button */}
                    <div
                      className={`w-11 h-11 rounded-full border flex items-center justify-center flex-shrink-0 transition-all duration-500 ${isHovered
                          ? 'border-primary bg-primary text-white scale-110'
                          : 'border-border text-muted-foreground bg-white'
                        }`}
                    >
                      <ArrowUpRight
                        className={`w-4 h-4 transition-transform duration-300 ${isHovered ? 'translate-x-0.5 -translate-y-0.5' : ''
                          }`}
                      />
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* View all projects link */}
        <div
          className={`text-center mt-16 transition-all duration-1000 delay-700 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <a
            href="#contact"
            className="inline-flex items-center gap-3 text-muted-foreground hover:text-primary transition-colors duration-300 font-body group"
          >
            <span className="underline underline-offset-4">Вижте всички проекти</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
