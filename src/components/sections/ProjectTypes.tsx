import { useState } from "react";
import { cn } from "@/lib/utils";

const projectTypes = [
  {
    id: 1,
    title: "Сайтове за услуги",
    description: "Подходящи за специалисти и фирми, предлагащи конкретни услуги – от занаятчии до IT, правни или маркетингови агенции.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=800&h=600&fit=crop",
  },
  {
    id: 2,
    title: "Фирмени сайтове",
    description: "Професионално представяне на вашия бизнес онлайн с фокус върху бранд идентичност, услуги и контакт с клиенти.",
    image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=800&h=600&fit=crop",
  },
  {
    id: 3,
    title: "Институционални сайтове",
    description: "Решения за публични организации, образователни институции и държавни структури с акцент върху достъпност и информативност.",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=800&h=600&fit=crop",
  },
  {
    id: 4,
    title: "Продуктови и фирмени каталози",
    description: "Онлайн каталози за представяне на продукти и услуги с възможност за филтриране, търсене и детайлни описания.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
  },
  {
    id: 5,
    title: "Здраве, естетика и медицина",
    description: "Специализирани сайтове за клиники, лекари и wellness центрове с онлайн записване и представяне на процедури.",
    image: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1f?w=800&h=600&fit=crop",
  },
  {
    id: 6,
    title: "Лични сайтове и портфолиа",
    description: "Персонални уебсайтове за творци, фрийлансъри и професионалисти, които искат да покажат работата си.",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?w=800&h=600&fit=crop",
  },
];

const ProjectTypes = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = projectTypes[activeIndex];

  return (
    <section className="section-padding bg-primary">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-14">
          <span className="text-label text-accent mb-4 block font-body font-medium">
            Всяка идея заслужава добро онлайн присъствие
          </span>
          <h2 className="text-display-lg text-primary-foreground font-display">
            Какви уеб проекти създаваме
          </h2>
        </div>

        {/* Content grid */}
        <div className="grid lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Left - Navigation buttons */}
          <div className="flex flex-col gap-3">
            {projectTypes.map((type, index) => (
              <button
                key={type.id}
                onClick={() => setActiveIndex(index)}
                className={cn(
                  "text-left px-6 py-4 rounded-xl font-display text-lg transition-all duration-300 ease-out",
                  activeIndex === index
                    ? "bg-white text-foreground shadow-lg scale-[1.02]"
                    : "bg-white/10 text-primary-foreground/80 hover:bg-white/20 hover:text-primary-foreground"
                )}
              >
                {type.title}
              </button>
            ))}
          </div>

          {/* Right - Content display */}
          <div className="bg-white rounded-2xl p-8 lg:p-10 overflow-hidden">
            {/* Title */}
            <h3
              key={`title-${active.id}`}
              className="text-display-md text-foreground font-display mb-4 animate-fade-up"
            >
              {active.title}
            </h3>

            {/* Description */}
            <p
              key={`desc-${active.id}`}
              className="text-muted-foreground text-lg leading-relaxed mb-8 font-body animate-fade-up"
              style={{ animationDelay: "50ms" }}
            >
              {active.description}
            </p>

            {/* Image mockup */}
            <div
              key={`img-${active.id}`}
              className="relative animate-fade-up"
              style={{ animationDelay: "100ms" }}
            >
              {/* Laptop frame */}
              <div className="relative mx-auto max-w-lg">
                {/* Screen */}
                <div className="bg-foreground rounded-t-lg pt-6 px-4 pb-4">
                  {/* Browser dots */}
                  <div className="flex gap-1.5 mb-3">
                    <div className="w-2.5 h-2.5 rounded-full bg-destructive/70" />
                    <div className="w-2.5 h-2.5 rounded-full bg-accent" />
                    <div className="w-2.5 h-2.5 rounded-full bg-secondary" />
                  </div>
                  {/* Screen content */}
                  <div className="aspect-[16/10] rounded overflow-hidden">
                    <img
                      src={active.image}
                      alt={active.title}
                      className="w-full h-full object-cover transition-opacity duration-500"
                    />
                  </div>
                </div>
                {/* Laptop base */}
                <div className="h-4 bg-gradient-to-b from-muted-foreground/60 to-muted-foreground/80 rounded-b-lg" />
                <div className="h-2 bg-muted-foreground/80 rounded-b-xl mx-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjectTypes;
