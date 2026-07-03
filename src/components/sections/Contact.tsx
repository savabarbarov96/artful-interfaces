import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import { Dialog, DialogContent, DialogDescription, DialogFooter, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, ArrowRight, CheckCircle2, CalendarDays, Clock } from "lucide-react";
import { useReveal, SectionHead, Cross } from "@/components/home/primitives";

const serviceOptions = ["Уебсайт", "AI интеграция", "Онлайн магазин", "Уеб приложение"];
const timeSlots = ["09:30", "10:00", "11:30", "14:00", "16:00"];

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

const inputClasses = (focused: boolean) =>
  `w-full h-12 px-4 rounded-sm border bg-white font-plex text-sm text-ink placeholder:text-ink/60 focus:outline-none transition-all duration-300 ${
    focused ? "border-machine shadow-[0_0_0_3px_hsl(var(--aa-teal)/0.12)]" : "border-ink/20"
  }`;

const Contact = () => {
  const { toast } = useToast();
  const { ref: sectionRef, inView: isVisible } = useReveal<HTMLElement>(0.08);
  const [contactFormData, setContactFormData] = useState({ name: "", email: "", phone: "", message: "" });
  const [meetingFormData, setMeetingFormData] = useState({ email: "", phone: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isMeetingSubmitting, setIsMeetingSubmitting] = useState(false);
  const [isMeetingDialogOpen, setIsMeetingDialogOpen] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);
  const [selectedService, setSelectedService] = useState("Уебсайт");
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedTime, setSelectedTime] = useState("10:00");

  const handleContactChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
  };

  const handleMeetingFieldChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setMeetingFormData({ ...meetingFormData, [e.target.name]: e.target.value });
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

  const buildMeetingEmail = () => {
    const subject = "Заявка за среща от календар";
    const meetingDate = selectedDate
      ? selectedDate.toLocaleDateString("bg-BG", { day: "2-digit", month: "long", year: "numeric" })
      : "Не е избрана";

    const bodyLines = [
      "Тип: Календарна заявка за среща",
      `Дата: ${meetingDate}`,
      `Час: ${selectedTime}`,
      "",
      "Контакти за потвърждение:",
      `Email: ${meetingFormData.email || "Не е попълнен"}`,
      `Телефон: ${meetingFormData.phone || "Не е попълнен"}`,
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

  const handleMeetingRequest = () => {
    if (!selectedDate) {
      toast({
        title: "Изберете дата за срещата",
        description: "Моля изберете ден от календара и после продължете.",
      });
      return;
    }
    setIsMeetingDialogOpen(true);
  };

  const handleMeetingSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const emailValue = meetingFormData.email.trim();
    const phoneValue = meetingFormData.phone.trim();
    const hasValidEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(emailValue);
    const digitsOnly = phoneValue.replace(/\D/g, "");
    const hasValidPhone = digitsOnly.length >= 6;

    if (!hasValidEmail || !hasValidPhone) {
      toast({
        title: "Попълнете email и телефон",
        description: "Нужни са валидни контакти, за да потвърдим срещата.",
      });
      return;
    }

    setIsMeetingSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 500));
    window.location.href = buildMeetingEmail();

    toast({
      title: "Срещата е заявена!",
      description: "Изпратихме заявката с избраната дата, час и вашите контакти.",
    });

    setMeetingFormData({ email: "", phone: "" });
    setIsMeetingDialogOpen(false);
    setIsMeetingSubmitting(false);
  };

  const today = new Date();
  today.setHours(0, 0, 0, 0);

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
            lead="Разкажете ни за проекта си — отговаряме до 24 часа. Или си запазете кратка среща директно от календара."
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

          {/* Meeting booking — dark card */}
          <div className="relative aa-reveal" style={{ transitionDelay: "240ms" }}>
            <Cross className="absolute -bottom-[7px] -right-[7px] text-ink/55 z-10" />
            <div className="bg-white border border-ink/15 p-6 md:p-7">
              <div className="flex items-center gap-3 mb-5 pb-5 border-b border-ink/10">
                <img
                  src="/clients/slav-4.jpg"
                  alt="Slav Astinov"
                  className="w-12 h-12 rounded-sm object-cover border border-ink/15"
                />
                <div>
                  <p className="font-plex text-sm font-semibold text-ink">Slav Astinov</p>
                  <p className="font-plexmono text-[11px] text-ink/65 tracking-wide">Co-owner • Project Discovery</p>
                </div>
                <span className="ml-auto inline-flex items-center gap-1.5 border border-ink/15 px-2.5 py-1 font-plexmono text-[10px] uppercase tracking-wider text-ink/65">
                  <CalendarDays className="w-3.5 h-3.5 text-signal" />
                  Optional
                </span>
              </div>

              <h3 className="font-heading text-lg md:text-xl text-ink mb-2">Резервирайте кратка среща</h3>
              <p className="font-plex text-sm text-ink/70 leading-relaxed mb-5">
                Изберете дата и час, после въведете email и телефон в pop-up за потвърждение.
              </p>

              <div className="rounded-sm border border-ink/15 bg-white mb-5">
                <Calendar
                  mode="single"
                  selected={selectedDate}
                  onSelect={setSelectedDate}
                  disabled={{ before: today }}
                  className="mx-auto w-full text-ink"
                  classNames={{
                    day_selected: "bg-signal text-white hover:bg-signal focus:bg-signal",
                    day_today: "bg-signal/10 text-signal",
                    months: "flex flex-col w-full",
                    month: "space-y-4 w-full",
                    table: "w-full border-collapse",
                    row: "flex w-full mt-2",
                    head_row: "flex w-full",
                    head_cell: "text-ink/55 rounded-sm w-9 lg:w-full text-center font-normal text-[0.7rem] font-plexmono uppercase",
                    cell: "h-9 w-9 lg:h-10 lg:w-full text-center text-sm p-0 relative focus-within:relative focus-within:z-20",
                    nav_button: "h-7 w-7 bg-transparent text-ink/70 border border-ink/15 p-0 opacity-100 hover:bg-bone hover:text-ink",
                    caption_label: "text-sm font-medium text-ink font-plex",
                    day: "h-9 w-9 lg:h-10 lg:w-full p-0 font-normal text-ink/85 hover:bg-bone rounded-sm",
                    day_disabled: "text-ink/20 hover:bg-transparent",
                    day_outside: "text-ink/25",
                  }}
                />
              </div>

              <div className="mb-5">
                <p className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/65 mb-2.5 flex items-center gap-2">
                  <Clock className="w-3.5 h-3.5 text-signal" />
                  Изберете час
                </p>
                <div className="grid grid-cols-3 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={`px-2 py-2 rounded-sm font-plexmono text-xs border transition-colors ${
                        selectedTime === time
                          ? "bg-signal text-white border-signal"
                          : "bg-white text-ink/70 border-ink/20 hover:border-ink/50"
                      }`}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              <button
                type="button"
                onClick={handleMeetingRequest}
                className="group flex items-center justify-center gap-3 w-full bg-ink text-white font-plex font-semibold text-sm uppercase tracking-[0.08em] py-4 rounded-sm transition-all duration-300 hover:bg-ink-soft"
              >
                Заяви среща по имейл
                <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
              </button>

              <p className="font-plexmono text-[10px] text-ink/55 text-center tracking-wide mt-3">
                Това е отделен канал от контактната форма и изпраща отделен имейл.
              </p>
            </div>
          </div>
        </div>

        <Dialog open={isMeetingDialogOpen} onOpenChange={setIsMeetingDialogOpen}>
          <DialogContent className="sm:max-w-[460px] rounded-sm bg-bone border-ink/20">
            <DialogHeader>
              <DialogTitle className="font-heading text-ink">Потвърдете данни за срещата</DialogTitle>
              <DialogDescription className="font-plex">
                Въведете email и телефон, за да се свържем с вас и потвърдим избраните дата и час.
              </DialogDescription>
            </DialogHeader>

            <form onSubmit={handleMeetingSubmit} className="space-y-4">
              <div className="rounded-sm border border-ink/15 bg-white px-3 py-2.5">
                <p className="font-plexmono text-xs text-ink/70">
                  Избрана среща:{" "}
                  <span className="text-ink font-medium">
                    {selectedDate
                      ? selectedDate.toLocaleDateString("bg-BG", { day: "2-digit", month: "long", year: "numeric" })
                      : "няма дата"}
                  </span>{" "}
                  • <span className="text-ink font-medium">{selectedTime}</span>
                </p>
              </div>

              <div className="space-y-1.5">
                <label htmlFor="meeting-email" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                  Email
                </label>
                <input
                  id="meeting-email"
                  name="email"
                  type="email"
                  required
                  value={meetingFormData.email}
                  onChange={handleMeetingFieldChange}
                  className="w-full h-12 px-4 rounded-sm border border-ink/20 bg-white font-plex text-sm text-ink placeholder:text-ink/60 focus:outline-none focus:border-machine"
                  placeholder="email@example.com"
                />
              </div>

              <div className="space-y-1.5">
                <label htmlFor="meeting-phone" className="font-plexmono text-[11px] uppercase tracking-[0.15em] text-ink/70">
                  Телефон
                </label>
                <input
                  id="meeting-phone"
                  name="phone"
                  type="tel"
                  required
                  value={meetingFormData.phone}
                  onChange={handleMeetingFieldChange}
                  className="w-full h-12 px-4 rounded-sm border border-ink/20 bg-white font-plex text-sm text-ink placeholder:text-ink/60 focus:outline-none focus:border-machine"
                  placeholder="+359 888 123 456"
                />
              </div>

              <DialogFooter>
                <Button
                  type="button"
                  variant="outline"
                  className="rounded-sm border-ink/25 text-ink"
                  onClick={() => setIsMeetingDialogOpen(false)}
                >
                  Отказ
                </Button>
                <Button
                  type="submit"
                  disabled={isMeetingSubmitting}
                  className="rounded-sm bg-signal text-white hover:bg-signal hover:brightness-110"
                >
                  {isMeetingSubmitting ? "Изпращане..." : "Изпрати заявка"}
                </Button>
              </DialogFooter>
            </form>
          </DialogContent>
        </Dialog>
      </div>
    </section>
  );
};

export default Contact;
