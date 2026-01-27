import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send, Mail, Phone, MapPin, ArrowRight, Sparkles } from "lucide-react";

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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1500));

    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас до 24 часа.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  const contactInfo = [
    {
      icon: Mail,
      label: "Email",
      value: "hello@automationaid.bg",
      href: "mailto:hello@automationaid.bg",
    },
    {
      icon: Phone,
      label: "Телефон",
      value: "+359 888 123 456",
      href: "tel:+359888123456",
    },
    {
      icon: MapPin,
      label: "Локация",
      value: "София, България",
      href: "#",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="section-padding relative overflow-hidden"
      style={{
        background: 'linear-gradient(180deg, hsl(220 30% 98%) 0%, hsl(217 50% 97%) 50%, hsl(220 30% 98%) 100%)'
      }}
    >
      {/* Background decorations */}
      <div className="absolute inset-0 bg-mesh opacity-60" />
      <div className="absolute inset-0 bg-diamond-pattern opacity-20" />

      {/* Floating orbs */}
      <div className="glow-orb glow-orb-copper w-[400px] h-[400px] top-0 right-1/4 opacity-10" />
      <div className="glow-orb glow-orb-teal w-[300px] h-[300px] bottom-1/4 left-0 opacity-10" />

      {/* Top line */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-border to-transparent" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
          {/* Left side - Info */}
          <div
            className={`transition-all duration-1000 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}
          >
            {/* Section header */}
            <div className="mb-12">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-primary/20 to-primary/5 border border-primary/20 flex items-center justify-center">
                  <Sparkles className="w-5 h-5 text-primary" />
                </div>
                <span className="text-label text-primary font-body font-medium tracking-[0.2em]">
                  Контакт
                </span>
              </div>
              <h2 className="text-display-lg text-foreground font-display mb-6">
                Готови за{" "}
                <span className="text-accent-italic">старт?</span>
              </h2>
              <p className="text-muted-foreground text-lg font-body font-light leading-relaxed">
                Разкажете ни за вашия проект и ние ще ви помогнем да го реализирате. Отговаряме до 24 часа.
              </p>
            </div>

            {/* Contact info cards */}
            <div className="space-y-4 mb-12">
              {contactInfo.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    className="group flex items-center gap-5 p-5 rounded-xl transition-all duration-300 bg-white hover:shadow-md border border-transparent hover:border-primary/20"
                    style={{
                      transitionDelay: `${(index + 1) * 100}ms`,
                    }}
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-primary/10 to-primary/5 border border-primary/20 flex items-center justify-center group-hover:scale-110 transition-all duration-300">
                      <Icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <span className="text-xs text-muted-foreground font-body uppercase tracking-wider">
                        {item.label}
                      </span>
                      <p className="text-foreground font-body font-medium group-hover:text-primary transition-colors duration-300">
                        {item.value}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground ml-auto opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300" />
                  </a>
                );
              })}
            </div>

            {/* Trust badge */}
            <div className="bg-white rounded-2xl p-6 inline-block shadow-sm border border-border">
              <div className="flex items-center gap-4">
                <div className="flex -space-x-2">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-gradient-to-br from-primary/20 to-primary/10 border-2 border-white flex items-center justify-center"
                    >
                      <span className="text-sm font-display font-bold text-primary">{i}</span>
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-foreground font-body font-medium text-sm">50+ доволни клиенти</p>
                  <p className="text-muted-foreground font-body text-xs">ни се довериха през 2024</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right side - Form */}
          <div
            className={`transition-all duration-1000 delay-300 ${isVisible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}
          >
            {/* Form container */}
            <div className="bg-white rounded-2xl p-8 lg:p-10 shadow-lg border border-border">
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name and Email row */}
                <div className="grid md:grid-cols-2 gap-6">
                  {/* Name */}
                  <div className="space-y-2">
                    <label
                      htmlFor="name"
                      className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'name' ? 'text-primary' : 'text-foreground'
                        }`}
                    >
                      Име
                    </label>
                    <div className="relative">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('name')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                        placeholder="Вашето име"
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'name' ? 'opacity-100 bg-primary' : 'opacity-0'
                          }`}
                      />
                    </div>
                  </div>

                  {/* Email */}
                  <div className="space-y-2">
                    <label
                      htmlFor="email"
                      className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'email' ? 'text-primary' : 'text-foreground'
                        }`}
                    >
                      Email
                    </label>
                    <div className="relative">
                      <input
                        type="email"
                        id="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        onFocus={() => setFocusedField('email')}
                        onBlur={() => setFocusedField(null)}
                        required
                        className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                        placeholder="email@example.com"
                      />
                      <div
                        className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'email' ? 'opacity-100 bg-primary' : 'opacity-0'
                          }`}
                      />
                    </div>
                  </div>
                </div>

                {/* Phone */}
                <div className="space-y-2">
                  <label
                    htmlFor="phone"
                    className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'phone' ? 'text-primary' : 'text-foreground'
                      }`}
                  >
                    Телефон <span className="text-muted-foreground/50">(опционално)</span>
                  </label>
                  <div className="relative">
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('phone')}
                      onBlur={() => setFocusedField(null)}
                      className="w-full h-14 px-5 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 font-body border-border focus:border-primary focus:bg-white"
                      placeholder="+359 888 123 456"
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'phone' ? 'opacity-100 bg-primary' : 'opacity-0'
                        }`}
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label
                    htmlFor="message"
                    className={`text-sm font-medium font-body transition-colors duration-300 ${focusedField === 'message' ? 'text-primary' : 'text-foreground'
                      }`}
                  >
                    Съобщение
                  </label>
                  <div className="relative">
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={() => setFocusedField(null)}
                      required
                      rows={5}
                      className="w-full px-5 py-4 rounded-xl border bg-muted/30 text-foreground placeholder:text-muted-foreground/50 focus:outline-none transition-all duration-300 resize-none font-body border-border focus:border-primary focus:bg-white"
                      placeholder="Разкажете ни за вашия проект..."
                    />
                    <div
                      className={`absolute bottom-0 left-0 right-0 h-0.5 rounded-full transition-all duration-500 ${focusedField === 'message' ? 'opacity-100 bg-primary' : 'opacity-0'
                        }`}
                    />
                  </div>
                </div>

                {/* Submit button */}
                <Button
                  type="submit"
                  size="lg"
                  className="w-full bg-blue-gradient hover:shadow-blue text-white font-semibold rounded-xl py-7 text-base transition-all duration-300 group"
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

                {/* Privacy note */}
                <p className="text-muted-foreground text-xs text-center font-body">
                  С изпращането на формата се съгласявате с нашите{" "}
                  <a href="#" className="text-primary hover:text-primary/80 underline underline-offset-2 transition-colors">
                    условия за ползване
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
