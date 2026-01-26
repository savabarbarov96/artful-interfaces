import projectFitness from "@/assets/project-fitness.jpg";
import projectPetstore from "@/assets/project-petstore.jpg";
import projectDecor from "@/assets/project-decor.jpg";
import projectGuesthouse from "@/assets/project-guesthouse.jpg";

const projects = [
  {
    title: "Fitness Management",
    category: "Система за управление",
    description: "Цялостна система за фитнес зали с резервации, членства и анализи.",
    image: projectFitness,
  },
  {
    title: "Pet Store E-commerce",
    category: "Онлайн магазин",
    description: "Модерен онлайн магазин за домашни любимци с 5000+ продукта.",
    image: projectPetstore,
  },
  {
    title: "CustomDecor System",
    category: "Корпоративно решение",
    description: "ERP система за производител на мебели по поръчка.",
    image: projectDecor,
  },
  {
    title: "Guest House Booking",
    category: "Резервационна система",
    description: "Система за онлайн резервации с интеграция към Booking.com.",
    image: projectGuesthouse,
  },
];

const Portfolio = () => {
  return (
    <section id="work" className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-16 md:mb-24">
          <div className="max-w-xl">
            <span className="text-label text-primary mb-4 block">Проекти</span>
            <h2 className="text-display-md text-foreground">
              Избрани разработки
            </h2>
          </div>
          <p className="text-muted-foreground max-w-sm">
            Всеки проект е уникално решение, съобразено с нуждите на клиента.
          </p>
        </div>

        {/* Projects grid */}
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <div
              key={project.title}
              className="group cursor-pointer"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Image container */}
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden mb-6 bg-secondary">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                />
                {/* Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                {/* Hover content */}
                <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                  <p className="text-background/90 text-sm">
                    {project.description}
                  </p>
                </div>
              </div>

              {/* Text content */}
              <div className="flex items-start justify-between gap-4">
                <div>
                  <span className="text-xs font-medium text-primary uppercase tracking-wider">
                    {project.category}
                  </span>
                  <h3 className="text-xl font-display font-bold text-foreground mt-1 group-hover:text-primary transition-colors duration-300">
                    {project.title}
                  </h3>
                </div>
                <div className="w-10 h-10 rounded-full border border-border flex items-center justify-center group-hover:border-primary group-hover:bg-primary transition-all duration-300">
                  <svg
                    className="w-4 h-4 text-foreground group-hover:text-primary-foreground transition-colors duration-300"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17 8l4 4m0 0l-4 4m4-4H3"
                    />
                  </svg>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
