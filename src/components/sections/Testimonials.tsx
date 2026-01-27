import { useState } from "react";
import { Quote, Star, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    headline: "ДИНАМИЧНА, ЯСНА И КРЕАТИВНА КОМУНИКАЦИЯ",
    quote: "Работата с тях беше лесна, бърза и качествена. Екипът умее да слуша, да разбира нуждите на клиента и да предлага практични решения. Всеки детайл беше изпипан.",
    name: "Андрей Петров",
    role: "Видео и маркетинг",
    rating: 5,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    headline: "ПРОФЕСИОНАЛИЗЪМ НА ВСЯКА СТЪПКА",
    quote: "От първата среща до финалния продукт - всичко беше прозрачно и ефективно. Препоръчвам ги на всеки, който търси надежден партньор за дигитални решения.",
    name: "Мария Иванова",
    role: "CEO, TechStart Bulgaria",
    rating: 5,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    headline: "БЪРЗО ИЗПЪЛНЕНИЕ, ОТЛИЧНО КАЧЕСТВО",
    quote: "Имахме кратък срок и сложни изисквания. Екипът не само се справи, но и надмина очакванията ни. Сайтът ни генерира 40% повече запитвания.",
    name: "Георги Димитров",
    role: "Управител, BuildPro",
    rating: 5,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    headline: "ИСТИНСКИ ПАРТНЬОР ЗА РАСТЕЖ",
    quote: "Не просто изпълниха задачата - помогнаха ни да разберем какво наистина имаме нужда. Онлайн магазинът ни работи безупречно от първия ден.",
    name: "Елена Стоянова",
    role: "Собственик, EcoLife Store",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const current = testimonials[currentIndex];

  return (
    <section className="section-padding bg-background">
      <div className="container">
        {/* Section header */}
        <div className="max-w-2xl mb-16">
          <span className="text-label text-primary mb-4 block font-body font-medium">
            Доверие, изградено чрез резултати
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-4">
            Какво споделят клиентите ни
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-body">
            Вярваме, че най-добрият показател за нашата работа са думите на хората, с които сме изградили партньорство.
          </p>
        </div>

        {/* Testimonial content */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Image */}
          <div className="relative">
            <div className="aspect-[4/5] overflow-hidden rounded-lg">
              <img
                src={current.image}
                alt={current.name}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
          </div>

          {/* Content */}
          <div className="relative">
            {/* Quote icon */}
            <div className="w-14 h-14 rounded-xl bg-primary flex items-center justify-center mb-8">
              <Quote className="w-6 h-6 text-primary-foreground fill-primary-foreground" />
            </div>

            {/* Headline */}
            <h3 className="text-xl md:text-2xl font-display font-medium text-foreground mb-6 tracking-wide">
              {current.headline}
            </h3>

            {/* Quote */}
            <p className="text-muted-foreground text-lg leading-relaxed mb-8 font-body">
              "{current.quote}"
            </p>

            {/* Author info */}
            <div className="flex items-center justify-between mb-8">
              <div>
                <h4 className="text-lg font-display font-medium text-foreground">
                  {current.name}
                </h4>
                <p className="text-muted-foreground text-sm font-body">
                  {current.role}
                </p>
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {[...Array(current.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="w-5 h-5 text-accent fill-accent"
                  />
                ))}
              </div>
            </div>

            {/* CTA Button */}
            <Button variant="outline" className="mb-10">
              Вижте проекта
            </Button>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-6 border-t border-border">
              <div className="flex gap-3">
                <button
                  onClick={prevSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  className="w-10 h-10 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary transition-colors"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Slide indicator */}
              <span className="text-muted-foreground font-body">
                {currentIndex + 1} / {testimonials.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
