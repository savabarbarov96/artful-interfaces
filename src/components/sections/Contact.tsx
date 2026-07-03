import { useState } from "react";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, ArrowRight, CheckCircle2, ClipboardList } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";
import { useProjectWizard } from "@/components/wizard/ProjectWizard";

const serviceOptions = ["Уебсайт", "AI интеграция", "Онлайн магазин", "Уеб приложение"];

const contactInfo = [
  {
    icon: Mail,
    label: "Email",
    value: "slav@automationaid.eu",
    href: "mailto:slav@automationaid.eu",
  },
  {
    icon: Phone,
    label: "Телефон",
    value: "0884323999",
    href: "tel:0884323999",
  },
];

const wizardSteps = [
  "Изберете целта си — нов бизнес, разширяване или автоматизация",
  "Отбележете какво да включва проектът",
  "Оставете телефон или email за предложението",
];

const inputClasses = (focused: boolean) =>
  `w-full h-12 px-4 rounded-sm border bg-white font-plex text-sm text-ink placeholder:text-ink/60 focus:outline-none transition-all duration-300 ${
    focused ? "border-machine shadow-[0_0_0_3px_hsl(var(--aa-teal)/0.12)]" : "border-ink/20"
  }`;

const Contact = () => {
  const { toast } = useToast();
  const { openWizard } = useProjectWizard();
  const { ref: sectionRef, inView: isVisible } = useReveal<HTMLElement>(0.08);
  const [contactFormData, setContactFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Уебсайт");

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const buildContactEmail = () => {
    const subject = `Запитване от сайт - ${selectedService}`;
    const bodyLines = [
      "Тип: Контактна форма",
      `Услуга: ${selectedService}`,
      `Име: ${contactFormData.name || "Не е попълнено"}`,
      `Email: ${contactFormData.email || "Не е попълнено"}`,
      `Телефон: ${contactFormData.phone || "Не е попълнен"}`,
      "",
      "Съобщение:",
      contactFormData.message || "Няма допълнително съобщение",
    ];

    return `mailto:slav@automationaid.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 700));
    window.location.href = buildContactEmail();

    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас до 24 часа.",
    });

    setContactFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section
      ref={sectionRef}
      id="contact"
      className={`relative py-20 md:py-28 bg-white text-ink overflow-hidden ${isVisible ? "aa-in" : ""}`}
    >
      <div className="absolute inset-0 aa-grid-paper opacity-70 pointer-events-none" aria-hidden="true" />
      <div
        className="absolute left-[-15%] bottom-[-30%] w-[50vw] h-[60vh] pointer-events-none"
        style={{
          background: "radial-gradient(ellipse 60% 55% at 50% 50%, hsl(var(--aa-teal) / 0.07) 0%, transparent 70%)",
        }}
        aria-hidden="true"
      />

      <div className="container relative z-10">
        <div className="text-center mb-14 aa-reveal">
          <SectionHead
            align="center"
            index="08"
            label="Стратегически старт"
            title={
              <>
                Нека превърнем идеята ви в <span className="text-machine-deep">работещ дигитален актив</span>
              </>
            }
            lead="Разкажете ни за проекта си — отговаряме до 24 часа. Или попълнете краткия въпросник и получете конкретно предложение."
          />
        </div>

        <div className="grid lg:grid-cols-[minmax(0,1.15fr)_minmax(0,0.85fr)] gap-6 lg:gap-8 max-w-6xl mx-auto items-start">
          {/* Inquiry form — paper card on ink */}
          <div className="relative aa-reveal" style={{ transitionDelay: "120ms" }}>
            <Cross className="absolute -top-[7px] -left-[7px] text-ink/55 z-10" />
            <div className="bg-bone text-ink border border-ink/15 p-6 md:p-8">
              <div className="flex flex-wrap items-start justify-between gap-3 mb-6 pb-5 border-b border-ink/10">
                <div>
                  <p className="aa-label text-machine-deep mb-2">Бриф за проект</p>
                  <h3 className="font-heading text-xl md:text-2xl text-ink">Изпратете запитване</h3>
                </div>
                <div className="flex items-center gap-2 font-plexmono text-[11px] uppercase tracking-wider text-ink/70 border border-ink/15 px-3 py-1.5">
                  <CheckCircle2 className="w-3.5 h-3.5 text-machine-deep" />
                  Отговор до 24 часа
                </div>
              </div>

              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="space-y-2">
                  <p className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">Изберете услуга</p>
                  <div className="flex flex-wrap gap-2">
                    {serviceOptions.map((service) => (
                      <button
                        key={service}
                        type="button"
                        onClick={() => setSelectedService(service)}
                        className={`px-3.5 py-1.5 rounded-sm font-plex text-xs md:text-sm font-medium border transition-all duration-250 ${
                          selectedService === service
                            ? "bg-ink text-paper border-ink"
                            : "bg-white text-ink border-ink/20 hover:border-ink/50"
                        }`}
                      >
                        {service}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-3">
                  <div className="space-y-1.5">
                    <label htmlFor="name" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                      Име
                    </label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={contactFormData.name}
                      onChange={handleContactChange}
                      onFocus={() => setFocusedField("name")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses(focusedField === "name")}
                      placeholder="Вашето име"
                    />
                  </div>

                  <div className="space-y-1.5">
                    <label htmlFor="email" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={contactFormData.email}
                      onChange={handleContactChange}
                      onFocus={() => setFocusedField("email")}
                      onBlur={() => setFocusedField(null)}
                      required
                      className={inputClasses(focusedField === "email")}
                      placeholder="email@example.com"
                    />
                  </div>
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="phone" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                    Телефон <span className="text-ink/50 normal-case">(опционално)</span>
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={contactFormData.phone}
                    onChange={handleContactChange}
                    onFocus={() => setFocusedField("phone")}
                    onBlur={() => setFocusedField(null)}
                    className={inputClasses(focusedField === "phone")}
                    placeholder="+359 888 123 456"
                  />
                </div>

                <div className="space-y-1.5">
                  <label htmlFor="message" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                    Съобщение
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={contactFormData.message}
                    onChange={handleContactChange}
                    onFocus={() => setFocusedField("message")}
                    onBlur={() => setFocusedField(null)}
                    required
                    rows={4}
                    className={`w-full px-4 py-3 rounded-sm border bg-white font-plex text-sm text-ink placeholder:text-ink/60 focus:outline-none transition-all duration-300 resize-none ${
                      focusedField === "message"
                        ? "border-machine shadow-[0_0_0_3px_hsl(var(--aa-teal)/0.12)]"
                        : "border-ink/20"
                    }`}
                    placeholder={`Разкажете ни за проекта ви в категория: ${selectedService}`}
                  />
                </div>

                <button
                  type="submit"
                  className="group flex items-center justify-center gap-3 w-full bg-signal text-white font-plex font-semibold text-sm uppercase tracking-[0.08em] py-4 rounded-sm transition-all duration-300 hover:brightness-110 hover:shadow-[0_16px_36px_-12px_hsl(var(--aa-signal)/0.6)] disabled:opacity-70"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Изпращане...
                    </>
                  ) : (
                    <>
                      Изпрати запитване
                      <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                    </>
                  )}
                </button>

                <div className="grid sm:grid-cols-2 gap-2 pt-1">
                  {contactInfo.map((item) => {
                    const Icon = item.icon;
                    return (
                      <a
                        key={item.href}
                        href={item.href}
                        className="group flex items-center gap-3 rounded-sm border border-ink/15 bg-white px-3 py-2.5 hover:border-ink/40 transition-all duration-300"
                      >
                        <span className="w-8 h-8 rounded-sm bg-ink flex items-center justify-center flex-shrink-0">
                          <Icon className="w-3.5 h-3.5 text-paper" />
                        </span>
                        <span className="min-w-0">
                          <span className="block font-plexmono text-[10px] uppercase tracking-wider text-ink/60">
                            {item.label}
                          </span>
                          <span className="block font-plex text-xs md:text-sm text-ink font-medium truncate">
                            {item.value}
                          </span>
                        </span>
                        <ArrowRight className="w-3.5 h-3.5 ml-auto text-ink/50 group-hover:text-ink group-hover:translate-x-0.5 transition-all duration-300" />
                      </a>
                    );
                  })}
                </div>
              </form>
            </div>
          </div>

          {/* Project questionnaire — fast lane */}
          <div className="relative aa-reveal" style={{ transitionDelay: "240ms" }}>
            <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/55 z-10" />
            <div className="bg-white border border-ink/15 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-ink/10">
                <span className="w-12 h-12 rounded-sm bg-ink flex items-center justify-center flex-shrink-0">
                  <ClipboardList className="w-5 h-5 text-paper" />
                </span>
                <div>
                  <p className="font-plex text-sm font-semibold text-ink">Кратък въпросник</p>
                  <p className="font-plexmono text-[11px] text-ink/65 tracking-wide">Под 2 минути • Без ангажимент</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 border border-ink/15 px-2.5 py-1 font-plexmono text-[10px] uppercase tracking-wider text-ink/65">
                  <span className="w-1.5 h-1.5 rounded-full bg-signal animate-pulse" />
                  По-бързо
                </span>
              </div>

              <h3 className="font-heading text-lg md:text-xl text-ink mb-2">Заявете проекта си</h3>
              <p className="font-plex text-sm text-ink/70 leading-relaxed mb-6">
                Няколко клика вместо дълго писане — отговорете на кратките въпроси и получете конкретно предложение
                до 24 часа.
              </p>

              <div className="border border-ink/15 bg-bone rounded-sm divide-y divide-ink/10 mb-6">
                {wizardSteps.map((step, i) => (
                  <div key={step} className="flex items-start gap-3 px-4 py-3.5">
                    <span className="font-plexmono text-[11px] text-signal pt-0.5">0{i + 1}</span>
                    <span className="font-plex text-sm text-ink/80 leading-snug">{step}</span>
                  </div>
                ))}
              </div>

              <button
                type="button"
                onClick={openWizard}
                className="group flex items-center justify-center gap-3 w-full bg-ink text-white font-plex font-semibold text-sm uppercase tracking-[0.08em] py-4 rounded-sm transition-all duration-300 hover:bg-ink-soft"
              >
                Заяви проекта сега
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="font-plexmono text-[10px] text-ink/55 text-center tracking-wide mt-3">
                Получавате отговор по email или телефон — без обвързване.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
