import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, ArrowRight, Sparkles, CheckCircle2, CalendarDays, Clock } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const sectionRef = useRef<HTMLElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Уебсайт");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("10:00");

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const buildEmail = (type: "inquiry" | "meeting") => {
    const subject =
      type === "meeting"
        ? `Запитване за среща - ${selectedService}`
        : `Запитване от сайт - ${selectedService}`;

    const meetingDate = selectedDate
      ? selectedDate.toLocaleDateString("bg-BG", {
          day: "2-digit",
          month: "long",
          year: "numeric",
        })
      : "Не е избрана";

    const bodyLines = [
      `Тип: ${type === "meeting" ? "Заявка за среща" : "Общо запитване"}`,
      `Услуга: ${selectedService}`,
      `Име: ${formData.name || "Не е попълнено"}`,
      `Email: ${formData.email || "Не е попълнено"}`,
      `Телефон: ${formData.phone || "Не е попълнен"}`,
      type === "meeting" ? `Предпочитана дата: ${meetingDate}` : "",
      type === "meeting" ? `Предпочитан час: ${selectedTime}` : "",
      "",
      "Съобщение:",
      formData.message || "Няма допълнително съобщение",
    ].filter(Boolean);

    return `mailto:slav@automationaid.eu?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(bodyLines.join("\n"))}`;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 700));
    window.location.href = buildEmail("inquiry");

    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас до 24 часа.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const handleMeetingRequest = () => {
    window.location.href = buildEmail("meeting");
    toast({
      title: "Срещата е заявена!",
      description: "Подготвихме имейл с избраните от вас детайли.",
    });
  };

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

  const serviceOptions = ["Уебсайт", "AI интеграция", "Онлайн магазин", "Уеб приложение"];

  const timeSlots = ["09:30", "10:00", "11:30", "14:00", "16:00"];
  const today = new Date();
  today.setHours(0, 0, 0, 0);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: "linear-gradient(180deg, hsl(218 44% 97%) 0%, hsl(220 32% 98%) 42%, hsl(218 44% 97%) 100%)",
      }}
    >
      <div className="absolute inset-0 bg-radial-lines opacity-20" />
      <div className="absolute inset-0 bg-diamond-pattern opacity-15" />
      <div className="glow-orb glow-orb-copper w-[480px] h-[480px] -top-20 -right-24 opacity-[0.16]" />
      <div className="glow-orb glow-orb-teal w-[360px] h-[360px] -bottom-16 -left-20 opacity-[0.14]" />
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-9 lg:mb-10">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-primary/20 bg-white/80 backdrop-blur-sm mb-4">
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-label text-primary font-body tracking-[0.18em]">СТРАТЕГИЧЕСКИ СТАРТ</span>
            </div>
            <h2 className="text-display-lg text-foreground font-display leading-tight">
              Нека превърнем идеята ви в{" "}
              <span className="text-accent-italic">работещ дигитален актив</span>
            </h2>
            <p className="text-sm md:text-base font-body text-muted-foreground max-w-3xl mx-auto mt-4 leading-relaxed">
              Кратка форма за запитване плюс опция да резервирате среща с един клик.
            </p>
          </div>

          <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-6 lg:gap-7 items-start">
            <div
              className={`transition-all duration-1000 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-10"}`}
            >
              <div className="relative rounded-[28px] border border-primary/20 bg-white p-5 md:p-6 lg:p-7 shadow-[0_30px_80px_-44px_hsl(217_91%_50%/0.55)] overflow-hidden">
                <div className="absolute -top-24 -right-24 w-52 h-52 rounded-full bg-primary/8 blur-3xl pointer-events-none" />
                <div className="absolute -bottom-20 -left-16 w-44 h-44 rounded-full bg-secondary/10 blur-3xl pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex flex-wrap items-start justify-between gap-3 mb-5">
                    <div>
                      <p className="text-[11px] uppercase tracking-[0.16em] text-primary font-body font-semibold mb-1.5">
                        Бриф за проект
                      </p>
                      <h3 className="text-xl md:text-2xl text-foreground font-display leading-tight">
                        Изпратете запитване
                      </h3>
                    </div>
                    <div className="flex items-center gap-2 text-xs md:text-sm text-foreground/80 font-body rounded-full border border-border px-3 py-1.5 bg-muted/40">
                      <CheckCircle2 className="w-4 h-4 text-primary" />
                      Отговор до 24 часа
                    </div>
                  </div>

                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="space-y-2">
                      <p className="text-sm font-body font-medium text-foreground">Изберете услуга</p>
                      <div className="flex flex-wrap gap-2">
                        {serviceOptions.map((service) => (
                          <button
                            key={service}
                            type="button"
                            onClick={() => setSelectedService(service)}
                            className={`px-3.5 py-1.5 rounded-full text-xs md:text-sm font-body font-medium border transition-all duration-250 ${
                              selectedService === service
                                ? "bg-primary text-white border-primary shadow-[0_10px_22px_-14px_hsl(217_91%_50%/0.9)]"
                                : "bg-white text-foreground border-border hover:border-primary/40"
                            }`}
                          >
                            {service}
                          </button>
                        ))}
                      </div>
                    </div>

                    <div className="grid md:grid-cols-2 gap-3">
                      <div className="space-y-1.5">
                        <label
                          htmlFor="name"
                          className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === "name" ? "text-primary" : "text-foreground"}`}
                        >
                          Име
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("name")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full h-12 px-4 rounded-xl border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 font-body ${
                            focusedField === "name" ? "border-primary/60 shadow-[0_0_0_3px_hsl(217_91%_50%/0.08)]" : "border-border/70"
                          }`}
                          placeholder="Вашето име"
                        />
                      </div>

                      <div className="space-y-1.5">
                        <label
                          htmlFor="email"
                          className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === "email" ? "text-primary" : "text-foreground"}`}
                        >
                          Email
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          onFocus={() => setFocusedField("email")}
                          onBlur={() => setFocusedField(null)}
                          required
                          className={`w-full h-12 px-4 rounded-xl border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 font-body ${
                            focusedField === "email" ? "border-primary/60 shadow-[0_0_0_3px_hsl(217_91%_50%/0.08)]" : "border-border/70"
                          }`}
                          placeholder="email@example.com"
                        />
                      </div>
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="phone"
                        className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === "phone" ? "text-primary" : "text-foreground"}`}
                      >
                        Телефон <span className="text-muted-foreground/50">(опционално)</span>
                      </label>
                      <input
                        type="tel"
                        id="phone"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("phone")}
                        onBlur={() => setFocusedField(null)}
                        className={`w-full h-12 px-4 rounded-xl border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 font-body ${
                          focusedField === "phone" ? "border-primary/60 shadow-[0_0_0_3px_hsl(217_91%_50%/0.08)]" : "border-border/70"
                        }`}
                        placeholder="+359 888 123 456"
                      />
                    </div>

                    <div className="space-y-1.5">
                      <label
                        htmlFor="message"
                        className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === "message" ? "text-primary" : "text-foreground"}`}
                      >
                        Съобщение
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        onFocus={() => setFocusedField("message")}
                        onBlur={() => setFocusedField(null)}
                        required
                        rows={4}
                        className={`w-full px-4 py-3 rounded-xl border bg-white text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-4 focus:ring-primary/10 transition-all duration-300 resize-none font-body ${
                          focusedField === "message" ? "border-primary/60 shadow-[0_0_0_3px_hsl(217_91%_50%/0.08)]" : "border-border/70"
                        }`}
                        placeholder={`Разкажете ни за проекта ви в категория: ${selectedService}`}
                      />
                    </div>

                    <Button
                      type="submit"
                      size="lg"
                      className="w-full bg-blue-gradient hover:shadow-[0_26px_56px_-20px_hsl(217_91%_50%/0.85)] text-white font-semibold rounded-xl py-6 text-sm md:text-base transition-all duration-300 group"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? (
                        <span className="flex items-center gap-2">
                          <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Изпращане...
                        </span>
                      ) : (
                        <span className="flex items-center gap-2">
                          Изпрати запитване
                          <Send className="w-4 h-4 group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform" />
                        </span>
                      )}
                    </Button>

                    <div className="grid sm:grid-cols-2 gap-2">
                      {contactInfo.map((item) => {
                        const Icon = item.icon;
                        return (
                          <a
                            key={item.href}
                            href={item.href}
                            className="group flex items-center gap-3 rounded-xl border border-border bg-muted/25 px-3 py-2.5 hover:bg-muted/40 transition-all duration-300"
                          >
                            <div className="w-9 h-9 rounded-lg bg-primary/10 flex items-center justify-center border border-primary/20">
                              <Icon className="w-4 h-4 text-primary" />
                            </div>
                            <div className="min-w-0">
                              <p className="text-[11px] uppercase tracking-wider text-muted-foreground font-body">{item.label}</p>
                              <p className="text-xs md:text-sm text-foreground font-body font-medium truncate">{item.value}</p>
                            </div>
                            <ArrowRight className="w-3.5 h-3.5 ml-auto text-muted-foreground group-hover:text-foreground group-hover:translate-x-0.5 transition-all duration-300" />
                          </a>
                        );
                      })}
                    </div>
                  </form>
                </div>
              </div>
            </div>

            <div
              className={`w-full lg:max-w-[430px] lg:ml-auto transition-all duration-1000 delay-150 ${isVisible ? "opacity-100 translate-x-0" : "opacity-0 translate-x-10"}`}
            >
              <div className="relative rounded-[28px] border border-primary/20 bg-white p-5 md:p-6 shadow-[0_30px_80px_-44px_hsl(217_91%_50%/0.45)] overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_12%,hsl(217_91%_50%/0.09),transparent_48%),radial-gradient(circle_at_-10%_100%,hsl(173_82%_55%/0.08),transparent_44%)] pointer-events-none" />
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-4">
                    <img
                      src="/clients/slav-4.jpg"
                      alt="Slav Astinov"
                      className="w-12 h-12 rounded-xl object-cover border border-primary/20"
                    />
                    <div>
                      <p className="text-foreground font-body text-sm font-semibold">Slav Astinov</p>
                      <p className="text-muted-foreground font-body text-xs">Co-owner • Project Discovery</p>
                    </div>
                    <div className="ml-auto inline-flex items-center gap-1.5 rounded-full border border-primary/20 bg-primary/5 px-2.5 py-1 text-[11px] text-primary">
                      <CalendarDays className="w-3.5 h-3.5 text-primary" />
                      Optional
                    </div>
                  </div>

                  <h3 className="text-xl md:text-2xl font-display text-foreground leading-tight mb-1.5">
                    Резервирайте кратка среща
                  </h3>
                  <p className="text-muted-foreground font-body text-sm leading-relaxed mb-4">
                    Изберете дата и час. Ще подготвим имейл със същите данни както формата.
                  </p>

                  <div className="rounded-2xl border border-border bg-white mb-4">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={{ before: today }}
                      className="mx-auto w-full"
                      classNames={{
                        day_selected: "bg-primary text-white hover:bg-primary",
                        day_today: "bg-primary/10 text-primary",
                        months: "flex flex-col w-full",
                        month: "space-y-4 w-full",
                        table: "w-full border-collapse",
                        row: "flex w-full mt-2",
                        head_row: "flex w-full",
                        head_cell:
                          "text-muted-foreground rounded-md w-9 lg:w-full text-center font-normal text-[0.75rem]",
                        cell:
                          "h-9 w-9 lg:h-10 lg:w-full text-center text-sm p-0 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-accent/50 [&:has([aria-selected])]:bg-accent first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                        nav_button:
                          "h-7 w-7 bg-white text-foreground border-border p-0 opacity-100 hover:bg-muted",
                        caption_label: "text-sm font-medium text-foreground",
                        day: "h-9 w-9 lg:h-10 lg:w-full p-0 font-normal text-foreground hover:bg-muted",
                      }}
                    />
                  </div>

                  <div className="mb-4">
                    <p className="text-muted-foreground text-xs uppercase tracking-wider font-body mb-2.5 flex items-center gap-2">
                      <Clock className="w-3.5 h-3.5 text-primary" />
                      Изберете час
                    </p>
                    <div className="grid grid-cols-3 gap-2">
                      {timeSlots.map((time) => (
                        <button
                          key={time}
                          type="button"
                          onClick={() => setSelectedTime(time)}
                          className={`px-2 py-2 rounded-lg text-xs font-body border transition-colors ${
                            selectedTime === time
                              ? "bg-primary text-white border-primary"
                              : "bg-white text-foreground border-border hover:bg-muted"
                          }`}
                        >
                          {time}
                        </button>
                      ))}
                    </div>
                  </div>

                  <Button
                    type="button"
                    size="lg"
                    onClick={handleMeetingRequest}
                    className="w-full rounded-xl py-6 bg-blue-gradient text-white hover:shadow-[0_24px_48px_-24px_hsl(217_91%_50%/0.8)] font-semibold text-sm md:text-base group"
                  >
                    <span className="flex items-center gap-2">
                      Заяви среща по имейл
                      <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                    </span>
                  </Button>

                  <p className="text-muted-foreground text-xs text-center font-body mt-3">
                    Ако не изберете дата, ще ви предложим първите свободни опции.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
