import { useState, useEffect, useRef } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const testimonials = [
  {
    id: 1,
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=500&fit=crop&crop=face",
    headline: "ДИНАМИЧНА, ЯСНА И КРЕАТИВНА КОМУНИКАЦИЯ",
    quote: "Работата с тях беше лесна, бърза и качествена. Екипът умее да слуша, да разбира нуждите на клиента и да предлага практични решения. Всеки детайл беше изпипан.",
    name: "Андрей Петров",
    role: "Видео и маркетинг",
    company: "MediaPro",
    rating: 5,
  },
  {
    id: 2,
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=500&fit=crop&crop=face",
    headline: "ПРОФЕСИОНАЛИЗЪМ НА ВСЯКА СТЪПКА",
    quote: "От първата среща до финалния продукт - всичко беше прозрачно и ефективно. Препоръчвам ги на всеки, който търси надежден партньор за дигитални решения.",
    name: "Мария Иванова",
    role: "CEO",
    company: "TechStart Bulgaria",
    rating: 5,
  },
  {
    id: 3,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=500&fit=crop&crop=face",
    headline: "БЪРЗО ИЗПЪЛНЕНИЕ, ОТЛИЧНО КАЧЕСТВО",
    quote: "Имахме кратък срок и сложни изисквания. Екипът не само се справи, но и надмина очакванията ни. Сайтът ни генерира 40% повече запитвания.",
    name: "Георги Димитров",
    role: "Управител",
    company: "BuildPro",
    rating: 5,
  },
  {
    id: 4,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=400&h=500&fit=crop&crop=face",
    headline: "ИСТИНСКИ ПАРТНЬОР ЗА РАСТЕЖ",
    quote: "Не просто изпълниха задачата - помогнаха ни да разберем какво наистина имаме нужда. Онлайн магазинът ни работи безупречно от първия ден.",
    name: "Елена Стоянова",
    role: "Собственик",
    company: "EcoLife Store",
    rating: 5,
  },
];

const Testimonials = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const nextSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const prevSlide = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const current = testimonials[currentIndex];

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden bg-background"
    >
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-mesh opacity-50" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />

      {/* Large quote mark decoration */}
      <div className="absolute top-20 right-10 md:right-20 opacity-[0.03] pointer-events-none">
        <Quote className="w-64 h-64 md:w-96 md:h-96 text-primary" />
      </div>

      {/* Floating orbs */}
      <div className="glow-orb glow-orb-copper w-[300px] h-[300px] top-1/4 -left-32 opacity-15" />
      <div className="glow-orb glow-orb-teal w-[200px] h-[200px] bottom-1/4 right-0 opacity-10" />

      <div className="container relative z-10">
        {/* Section header */}
        <div
          className={`max-w-2xl mb-20 transition-all duration-1000 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Доверие, изградено чрез резултати
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-6">
            Какво споделят{" "}
            <span className="text-accent-italic">клиентите ни</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-body font-light">
            Вярваме, че най-добрият показател за нашата работа са думите на хората, с които сме изградили партньорство.
          </p>
        </div>

        {/* Testimonial content */}
        <div className="grid lg:grid-cols-12 gap-8 lg:gap-16 items-center">
          {/* Image - spans 5 columns */}
          <div
            className={`lg:col-span-5 relative transition-all duration-1000 delay-200 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Image frame with gradient border */}
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-lg border border-border">
              {/* Gradient overlay on image */}
              <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 via-transparent to-transparent z-10" />

              <img
                src={current.image}
                alt={current.name}
                className={`w-full h-full object-cover transition-all duration-700 ${isAnimating ? 'scale-110 opacity-50' : 'scale-100 opacity-100'}`}
              />

              {/* Corner accent */}
              <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-primary/50 rounded-tl-xl" />
              <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-secondary/50 rounded-br-xl" />
            </div>

            {/* Floating stats card */}
            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl p-5 shadow-xl border border-border animate-float-slow">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-blue-gradient flex items-center justify-center">
                  <span className="text-lg font-display font-bold text-white">50+</span>
                </div>
                <div>
                  <p className="text-foreground font-display text-lg">Проекта</p>
                  <p className="text-muted-foreground text-sm font-body">успешно завършени</p>
                </div>
              </div>
            </div>
          </div>

          {/* Content - spans 7 columns */}
          <div
            className={`lg:col-span-7 relative transition-all duration-1000 delay-400 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Quote icon */}
            <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center mb-10">
              <Quote className="w-7 h-7 text-primary fill-primary/30" />
            </div>

            {/* Rating stars */}
            <div className="flex gap-1.5 mb-6">
              {[...Array(current.rating)].map((_, i) => (
                <Star
                  key={i}
                  className="w-5 h-5 text-accent fill-accent"
                  style={{ animationDelay: `${i * 100}ms` }}
                />
              ))}
            </div>

            {/* Headline */}
            <h3
              className={`text-xl md:text-2xl font-display font-medium text-foreground mb-8 tracking-wide transition-all duration-500 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              {current.headline}
            </h3>

            {/* Quote */}
            <blockquote
              className={`text-muted-foreground text-xl md:text-2xl leading-relaxed mb-10 font-display font-light italic transition-all duration-500 delay-100 ${isAnimating ? 'opacity-0 translate-y-4' : 'opacity-100 translate-y-0'}`}
            >
              „{current.quote}"
            </blockquote>

            {/* Author info */}
            <div
              className={`flex items-center justify-between mb-10 transition-all duration-500 delay-200 ${isAnimating ? 'opacity-0' : 'opacity-100'}`}
            >
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 rounded-full overflow-hidden border-2 border-primary/30">
                  <img
                    src={current.image}
                    alt={current.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <h4 className="text-lg font-display font-medium text-foreground">
                    {current.name}
                  </h4>
                  <p className="text-muted-foreground text-sm font-body">
                    {current.role}, <span className="text-primary">{current.company}</span>
                  </p>
                </div>
              </div>
            </div>

            {/* CTA Button */}
            <Button
              variant="outline"
              className="group border-border hover:border-primary/50 hover:bg-primary/5 mb-12 rounded-xl px-6 py-5 transition-all duration-300"
            >
              <span>Вижте проекта</span>
              <ArrowUpRight className="w-4 h-4 ml-2 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </Button>

            {/* Navigation */}
            <div className="flex items-center justify-between pt-8 border-t border-border">
              <div className="flex gap-4">
                <button
                  onClick={prevSlide}
                  disabled={isAnimating}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 disabled:opacity-50"
                  aria-label="Previous testimonial"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>
                <button
                  onClick={nextSlide}
                  disabled={isAnimating}
                  className="w-12 h-12 rounded-full border border-border flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 disabled:opacity-50"
                  aria-label="Next testimonial"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>

              {/* Progress indicator */}
              <div className="flex items-center gap-4">
                <div className="flex gap-2">
                  {testimonials.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => {
                        if (!isAnimating && i !== currentIndex) {
                          setIsAnimating(true);
                          setCurrentIndex(i);
                          setTimeout(() => setIsAnimating(false), 600);
                        }
                      }}
                      className={`h-1.5 rounded-full transition-all duration-500 ${i === currentIndex
                          ? 'w-8 bg-primary'
                          : 'w-2 bg-border hover:bg-primary/50'
                        }`}
                      aria-label={`Go to testimonial ${i + 1}`}
                    />
                  ))}
                </div>
                <span className="text-muted-foreground font-body text-sm">
                  <span className="text-foreground font-medium">{String(currentIndex + 1).padStart(2, '0')}</span>
                  <span className="mx-1">/</span>
                  <span>{String(testimonials.length).padStart(2, '0')}</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
