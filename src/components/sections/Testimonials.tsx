import { useState, useEffect, useRef, useCallback } from "react";
import { Quote, Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";

interface Testimonial {
  id: number;
  image: string;
  logo?: string;
  logoText?: string;
  headline: string;
  quote: string;
  name: string;
  role: string;
  company: string;
  rating: number;
  projectUrl?: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    image: "/clients/ivan_mitev_examate_owner.webp",
    logo: "/clients/examate_logo.png",
    headline: "МОДЕРНА ПЛАТФОРМА ЗА ДИГИТАЛНО ОБРАЗОВАНИЕ",
    quote: "Имахме нужда от платформа, която да опрости процеса на провеждане на изпити и да бъде интуитивна както за преподаватели, така и за студенти. Резултатът надмина очакванията ни - бърза, надеждна и лесна за използване система.",
    name: "Иван Митев",
    role: "Основател",
    company: "Examate",
    rating: 5,
    projectUrl: "https://examate.net/",
  },
  {
    id: 2,
    image: "/clients/vanya_djuneva_sveti_nikola_guesthouse.jpg",
    logo: "/clients/sveti_nikola_logo.jpg",
    headline: "ГОСТОПРИЕМЕН БРАНД И ЛЕСНИ РЕЗЕРВАЦИИ",
    quote: "Търсехме сайт, който да представя къщата за гости професионално и да улесни резервациите. Интеграциите с Airbnb и Booking.com работят безупречно, а видимостта ни в търсачките се повиши осезаемо.",
    name: "Ваня Джунева",
    role: "Собственик",
    company: "Guest House Saint Nikola",
    rating: 5,
    projectUrl: "https://sveti-nikola.eu/",
  },
  {
    id: 3,
    image: "/clients/kostova_konsult.jpeg",
    logo: "/clients/kostova-logo.png",
    headline: "ПРОФЕСИОНАЛЕН ОБРАЗ ЗА СЧЕТОВОДНИ УСЛУГИ",
    quote: "Искахме сайт, който ясно представя услугите ни и вдъхва доверие още от първия контакт. Новият дизайн е чист, професионален и носи повече запитвания.",
    name: "Екип Костова Консулт",
    role: "Счетоводни услуги",
    company: "Kostova Consult",
    rating: 5,
    projectUrl: "https://kostova-consult.eu/",
  },
  {
    id: 4,
    image: "/clients/radanovmeincoon.webp",
    logo: "/clients/radanov-pride-logo.png",
    headline: "ЕЛЕГАНТЕН ДИЗАЙН ЗА РАЗВЪДНИК ОТ СВЕТОВНА КЛАСА",
    quote: "Уебсайтът перфектно улавя престижа на нашия развъдник. Дизайнът е толкова изискан, колкото и нашите Мейн Кун котки. Клиентите ни споделят, че сайтът им вдъхва доверие още от първия поглед.",
    name: "Елена Апостолова",
    role: "Собственик",
    company: "Radanov Pride Cattery",
    rating: 5,
    projectUrl: "https://www.mainecoonradanovpride.eu/",
  },
  {
    id: 5,
    image: "/clients/wetransportit.webp",
    logoText: "WT",
    headline: "ЛУКСОЗЕН ИМИДЖ ЗА ЛУКСОЗНИ УСЛУГИ",
    quote: "Нашият бизнес е транспорт на луксозни автомобили и имахме нужда от уебсайт, който излъчва същата премиум естетика. Екипът създаде точно това - модерен, бърз и впечатляващ сайт, който привлича клиенти от целия свят.",
    name: "Тодор Александров",
    role: "Собственик",
    company: "WeTransportIt",
    rating: 5,
    projectUrl: "https://wetransportit.eu/",
  },
  {
    id: 6,
    image: "/clients/lubomir-kupenski-espresso-cafe-bar.jpg",
    logoText: "ЕК",
    headline: "ДИГИТАЛНО МЕНЮ, КОЕТО УЛЕСНЯВА ОБСЛУЖВАНЕТО",
    quote: "Дигиталното меню направи поръчките по-бързи и ясни, а клиентите оценяват модерното преживяване. Получихме стилно решение, което пасва идеално на атмосферата в бара.",
    name: "Любомир Купенски",
    role: "Собственик",
    company: "Еспресо Кафе Бар",
    rating: 5,
  },
  {
    id: 7,
    image: "/clients/Vanya_owner.jpg",
    logo: "/clients/shelepkoglobalmindcare_logo.jpg",
    headline: "СЪВРЕМЕННА ПЛАТФОРМА ЗА ТЕРАПЕВТИ И КЛИЕНТИ",
    quote: "Искахме дигитална среда, която да свързва терапевти и клиенти сигурно и без излишни стъпки. Новата платформа е елегантна, бърза и с функции, които реално улесняват работата ни – от записванията до управлението на сесиите.",
    name: "Ваня Шелепко",
    role: "Основател",
    company: "Shelepko Mind Care",
    rating: 5,
    projectUrl: "https://shelepkoglobalmindcare.com/",
  },
];

const Testimonials = () => {
  const [emblaRef, emblaApi] = useEmblaCarousel({
    loop: true,
    dragFree: false,
    skipSnaps: false,
  });
  const [currentIndex, setCurrentIndex] = useState(0);
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setCurrentIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
    return () => {
      emblaApi.off("select", onSelect);
    };
  }, [emblaApi, onSelect]);

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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      ref={sectionRef}
      className="py-20 md:py-28 relative overflow-hidden"
    >
      {/* Premium background with grid */}
      <div className="absolute inset-0 bg-gradient-to-b from-muted/50 via-background to-muted/30" />
      <div className="absolute inset-0 bg-geometric-grid opacity-60" />

      {/* Subtle glow orbs for depth */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-primary/5 rounded-full blur-[120px]" />
      <div className="absolute bottom-0 right-1/4 w-[400px] h-[400px] bg-secondary/5 rounded-full blur-[100px]" />

      {/* Top border gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container relative z-10">
        {/* Header */}
        <div
          className={`max-w-2xl mb-14 transition-all duration-1000 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            Доверие, изградено чрез резултати
          </span>
          <h2 className="text-display-lg text-foreground font-display mb-4">
            Какво споделят{" "}
            <span className="text-accent-italic">клиентите ни</span>
          </h2>
          <p className="text-foreground text-xl md:text-2xl font-display italic">
            Вярваме, че най-добрият показател за нашата работа са думите на хората, с които сме изградили партньорство.
          </p>
        </div>

        {/* Carousel */}
        <div
          className={`transition-all duration-1000 delay-200 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0 pl-0">
                  <div className="bg-white rounded-3xl overflow-hidden shadow-lg border border-border/50">
                    <div className="grid md:grid-cols-12 gap-0">
                      {/* Image column */}
                      <div className="md:col-span-5 lg:col-span-4 relative">
                        <div className="aspect-[4/5] md:aspect-auto md:h-full relative overflow-hidden bg-muted">
                          <img
                            src={testimonial.image}
                            alt={testimonial.name}
                            className="w-full h-full object-cover"
                            draggable={false}
                          />
                          {/* Gradient overlay */}
                          <div className="absolute inset-0 bg-gradient-to-t from-foreground/30 via-transparent to-transparent" />

                          {/* Logo overlay - bottom left */}
                          {testimonial.logo ? (
                            <div className="absolute bottom-4 left-4 w-20 h-20 rounded-2xl bg-black/80 backdrop-blur-sm flex items-center justify-center p-2 shadow-xl border border-white/10">
                              <img
                                src={testimonial.logo}
                                alt={testimonial.company}
                                className="w-full h-full object-contain"
                                draggable={false}
                              />
                            </div>
                          ) : testimonial.logoText ? (
                            <div className="absolute bottom-4 left-4 w-20 h-20 rounded-2xl bg-gradient-to-br from-primary to-primary/80 flex items-center justify-center shadow-xl border border-white/20">
                              <span className="text-2xl font-display font-bold text-white">
                                {testimonial.logoText}
                              </span>
                            </div>
                          ) : null}
                        </div>
                      </div>

                      {/* Content column */}
                      <div className="md:col-span-7 lg:col-span-8 p-8 md:p-10 lg:p-12 flex flex-col justify-between">
                        <div>
                          {/* Top row: Quote icon and rating */}
                          <div className="flex items-center justify-between mb-6">
                            <div className="w-12 h-12 rounded-2xl bg-primary/10 border border-primary/20 flex items-center justify-center">
                              <Quote className="w-5 h-5 text-primary fill-primary/30" />
                            </div>
                            <div className="flex gap-1.5">
                              {[...Array(testimonial.rating)].map((_, i) => (
                                <Star
                                  key={i}
                                  className="w-5 h-5 text-accent fill-accent"
                                />
                              ))}
                            </div>
                          </div>

                          {/* Headline */}
                          <h3 className="text-base md:text-lg font-body font-bold text-primary tracking-wide mb-5">
                            {testimonial.headline}
                          </h3>

                          {/* Quote - bigger font */}
                          <blockquote className="text-foreground text-xl md:text-2xl lg:text-[1.65rem] leading-relaxed font-display font-normal italic mb-8">
                            „{testimonial.quote}"
                          </blockquote>

                          {/* CTA Button - prominent centerpiece */}
                          {testimonial.projectUrl ? (
                            <div className="mb-8">
                              <a
                                href={testimonial.projectUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center gap-3 px-8 py-4 bg-gradient-to-r from-primary to-primary/90 hover:from-primary/90 hover:to-primary text-white rounded-xl font-body font-semibold text-base shadow-lg shadow-primary/25 hover:shadow-xl hover:shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5"
                              >
                                <span>Вижте проекта</span>
                                <ExternalLink className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                              </a>
                            </div>
                          ) : null}
                        </div>

                        {/* Bottom row: Author info */}
                        <div className="flex items-center justify-between pt-6 border-t border-border">
                          <div>
                            <h4 className="text-xl font-display font-semibold text-foreground mb-1">
                              {testimonial.name}
                            </h4>
                            <p className="text-muted-foreground text-base font-body">
                              {testimonial.role},{" "}
                              <span className="text-primary font-medium">{testimonial.company}</span>
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div className="flex items-center justify-center gap-6 mt-8">
            {/* Nav buttons */}
            <button
              onClick={scrollPrev}
              className="w-12 h-12 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-3">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => emblaApi?.scrollTo(i)}
                  className={`h-2.5 rounded-full transition-all duration-500 ${
                    i === currentIndex
                      ? "w-10 bg-primary"
                      : "w-2.5 bg-border hover:bg-primary/50"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>

            <button
              onClick={scrollNext}
              className="w-12 h-12 rounded-full border-2 border-border bg-white flex items-center justify-center hover:border-primary hover:text-primary hover:bg-primary/5 transition-all duration-300 shadow-sm"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      {/* Bottom border gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-secondary/20 to-transparent" />
    </section>
  );
};

export default Testimonials;
