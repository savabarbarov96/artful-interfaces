import { useEffect, useRef, useState } from "react";
import { ChevronDown } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQSectionProps {
  eyebrow?: string;
  title?: string;
  faqs: FAQItem[];
}

const FAQSection = ({
  eyebrow = "Често задавани въпроси",
  title = "Имате въпроси?",
  faqs,
}: FAQSectionProps) => {
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) setIsVisible(true);
      },
      { threshold: 0.1 }
    );
    if (sectionRef.current) observer.observe(sectionRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="section-padding relative overflow-hidden"
      style={{
        background:
          "linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(217 50% 97%) 50%, hsl(220 30% 98%) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-mesh opacity-40 pointer-events-none" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div
          className={`text-center max-w-2xl mx-auto mb-12 transition-all duration-1000 ${
            isVisible
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
            {eyebrow}
          </span>
          <h2 className="text-display-lg text-foreground font-display">
            {title}
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-3">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div
                key={i}
                className={`rounded-xl border bg-white transition-all duration-500 ${
                  isVisible
                    ? "opacity-100 translate-y-0"
                    : "opacity-0 translate-y-6"
                } ${
                  isOpen
                    ? "border-primary/20 shadow-md"
                    : "border-border hover:border-primary/10"
                }`}
                style={{ transitionDelay: `${(i + 1) * 80}ms` }}
              >
                <button
                  onClick={() => setOpenIndex(isOpen ? null : i)}
                  className="w-full flex items-center justify-between gap-4 p-5 md:p-6 text-left cursor-pointer"
                  aria-expanded={isOpen}
                >
                  <h3 className="text-foreground font-display text-lg md:text-xl pr-4">
                    {faq.question}
                  </h3>
                  <ChevronDown
                    className={`w-5 h-5 text-primary flex-shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>
                <div
                  className="overflow-hidden transition-all duration-300"
                  style={{
                    maxHeight: isOpen ? "500px" : "0",
                    opacity: isOpen ? 1 : 0,
                  }}
                >
                  <p className="px-5 md:px-6 pb-5 md:pb-6 text-muted-foreground font-body leading-relaxed">
                    {faq.answer}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />
    </section>
  );
};

export default FAQSection;
