import { Users, Factory, Rocket } from "lucide-react";
import { useReveal, SectionHead } from "@/components/home/primitives";

const audiences = [
  {
    icon: Users,
    number: "01",
    title: "Малки бизнеси",
    description: "Изграждаме онлайн присъствие, което генерира клиенти и растеж. Всичко от лого до пълна дигитална екосистема.",
  },
  {
    icon: Factory,
    number: "02",
    title: "Производствени фирми",
    description: "Дигитализираме процеси и оптимизираме производствените вериги с персонализирани уеб решения.",
  },
  {
    icon: Rocket,
    number: "03",
    title: "Стартъпи",
    description: "Бързо прототипиране и MVP разработка за валидация на идеи. Готови за скалиране от първия ден.",
  },
];

const Audience = () => {
  const { ref, inView } = useReveal<HTMLElement>(0.15);

  return (
    <section ref={ref} className={`relative py-20 md:py-28 bg-paper-deep overflow-hidden ${inView ? "aa-in" : ""}`}>
      <div className="absolute top-0 left-0 right-0 h-px aa-rule-ink" aria-hidden="true" />

      <div className="container relative z-10">
        <div className="aa-reveal">
          <SectionHead
            index="07"
            label="За кого е"
            title={
              <>
                Работим с <span className="text-machine-deep">амбициозни екипи</span>
              </>
            }
            lead="Партнираме с визионери, които ценят качеството и иновациите."
          />
        </div>

        <div className="grid md:grid-cols-3 mt-14 border-t border-ink/15">
          {audiences.map((audience, index) => {
            const Icon = audience.icon;
            return (
              <div
                key={audience.title}
                className={`group relative pt-10 pb-12 md:px-8 first:md:pl-0 last:md:pr-0 border-b md:border-b-0 border-ink/10 ${
                  index < audiences.length - 1 ? "md:border-r md:border-ink/10" : ""
                } aa-reveal`}
                style={{ transitionDelay: `${150 + index * 130}ms` }}
              >
                {/* Big numeral */}
                <div className="flex items-end justify-between mb-8">
                  <span className="font-heading text-6xl md:text-7xl leading-none text-ink/[0.12] group-hover:text-signal/25 transition-colors duration-500">
                    {audience.number}
                  </span>
                  <span className="w-10 h-10 rounded-sm bg-ink text-paper flex items-center justify-center transition-colors duration-300 group-hover:bg-signal">
                    <Icon className="w-[18px] h-[18px]" />
                  </span>
                </div>

                <h3 className="font-heading text-xl md:text-2xl text-ink mb-4">{audience.title}</h3>
                <p className="font-plex text-[0.95rem] md:text-base text-ink/70 leading-relaxed">
                  {audience.description}
                </p>

                {/* Accent underline on hover */}
                <span className="absolute bottom-0 left-0 md:left-8 group-first:md:left-0 h-0.5 w-0 bg-signal transition-all duration-500 group-hover:w-16" />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Audience;
