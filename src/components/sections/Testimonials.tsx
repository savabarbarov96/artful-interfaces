import { useState, useEffect, useCallback } from "react";
import { Star, ChevronLeft, ChevronRight, ExternalLink } from "lucide-react";
import useEmblaCarousel from "embla-carousel-react";
import { useReveal, SectionHead } from "@/components/home/primitives";

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
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, dragFree: false, skipSnaps: false });
  const [currentIndex, setCurrentIndex] = useState(0);
  const { ref: sectionRef, inView: isVisible } = useReveal<HTMLElement>(0.12);

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

  const scrollPrev = useCallback(() => emblaApi?.scrollPrev(), [emblaApi]);
  const scrollNext = useCallback(() => emblaApi?.scrollNext(), [emblaApi]);

  return (
    <section
      ref={sectionRef}
      className={`relative py-20 md:py-28 bg-paper-deep text-ink overflow-hidden ${isVisible ? "aa-in" : ""}`}
    >
      <div className="absolute inset-0 aa-grid-paper opacity-70 pointer-events-none" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-8 mb-12 aa-reveal">
          <SectionHead
            index="03"
            label="Доверие чрез резултати"
            title={
              <>
                Какво споделят <span className="text-machine-deep">клиентите ни</span>
              </>
            }
            lead="Вярваме, че най-добрият показател за нашата работа са думите на хората, с които сме изградили партньорство."
          />

          {/* Counter + arrows */}
          <div className="flex items-center gap-6 flex-shrink-0">
            <span className="font-plexmono text-sm text-ink/50 tracking-[0.2em]">
              {String(currentIndex + 1).padStart(2, "0")} / {String(testimonials.length).padStart(2, "0")}
            </span>
            <div className="flex gap-2">
              <button
                onClick={scrollPrev}
                className="w-11 h-11 rounded-sm border border-ink/25 flex items-center justify-center hover:border-signal hover:text-signal transition-colors duration-300"
                aria-label="Предишен отзив"
              >
                <ChevronLeft className="w-5 h-5" />
              </button>
              <button
                onClick={scrollNext}
                className="w-11 h-11 rounded-sm border border-ink/25 flex items-center justify-center hover:border-signal hover:text-signal transition-colors duration-300"
                aria-label="Следващ отзив"
              >
                <ChevronRight className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>

        <div className="aa-reveal" style={{ transitionDelay: "150ms" }}>
          <div className="overflow-hidden cursor-grab active:cursor-grabbing" ref={emblaRef}>
            <div className="flex">
              {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="flex-[0_0_100%] min-w-0">
                  <div className="grid md:grid-cols-[minmax(0,0.38fr)_minmax(0,0.62fr)] gap-8 md:gap-12 items-stretch border border-ink/15 bg-white">
                    {/* Photo */}
                    <div className="relative overflow-hidden aspect-[4/5] md:aspect-auto md:min-h-[420px] border-b md:border-b-0 md:border-r border-ink/10">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="absolute inset-0 w-full h-full object-cover"
                        draggable={false}
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-ink/40 via-transparent to-transparent" />
                      {testimonial.logo ? (
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-sm bg-white/90 backdrop-blur-sm border border-ink/15 flex items-center justify-center p-2">
                          <img
                            src={testimonial.logo}
                            alt={testimonial.company}
                            className="w-full h-full object-contain"
                            draggable={false}
                          />
                        </div>
                      ) : testimonial.logoText ? (
                        <div className="absolute bottom-4 left-4 w-16 h-16 rounded-sm bg-signal flex items-center justify-center">
                          <span className="font-heading text-xl text-white">{testimonial.logoText}</span>
                        </div>
                      ) : null}
                    </div>

                    {/* Quote */}
                    <div className="flex flex-col justify-between p-7 md:py-10 md:pr-10 md:pl-0">
                      <div>
                        <div className="flex items-center justify-between gap-4 mb-6">
                          <h3 className="aa-label text-machine-deep">{testimonial.headline}</h3>
                          <div className="flex gap-1 flex-shrink-0">
                            {[...Array(testimonial.rating)].map((_, i) => (
                              <Star key={i} className="w-3.5 h-3.5 text-signal fill-signal" />
                            ))}
                          </div>
                        </div>

                        <blockquote className="font-plex text-lg md:text-xl lg:text-[1.35rem] leading-relaxed text-ink/85 mb-8">
                          „{testimonial.quote}"
                        </blockquote>
                      </div>

                      <div className="flex flex-wrap items-end justify-between gap-4 pt-6 border-t border-ink/10">
                        <div>
                          <h4 className="font-heading text-base md:text-lg text-ink mb-1">{testimonial.name}</h4>
                          <p className="font-plexmono text-xs text-ink/50 tracking-wider">
                            {testimonial.role} — {testimonial.company}
                          </p>
                        </div>
                        {testimonial.projectUrl ? (
                          <a
                            href={testimonial.projectUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group inline-flex items-center gap-2 font-plex font-semibold text-xs uppercase tracking-[0.1em] text-ink border border-ink/25 px-4 py-2.5 rounded-sm hover:border-signal hover:text-signal transition-colors duration-300"
                          >
                            Вижте проекта
                            <ExternalLink className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                          </a>
                        ) : null}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Dots */}
          <div className="flex justify-center gap-2.5 mt-8">
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => emblaApi?.scrollTo(i)}
                className={`h-1 transition-all duration-500 ${
                  i === currentIndex ? "w-10 bg-signal" : "w-4 bg-ink/20 hover:bg-ink/40"
                }`}
                aria-label={`Към отзив ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
