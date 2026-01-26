import { useState } from "react";
import { Button } from "@/components/ui/button";
import { useToast } from "@/hooks/use-toast";
import { Send } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Съобщението е изпратено!",
      description: "Ще се свържем с вас до 24 часа.",
    });

    setFormData({ name: "", email: "", phone: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="section-padding bg-background">
      <div className="container">
        <div className="max-w-2xl mx-auto">
          {/* Section header */}
          <div className="text-center mb-12">
            <span className="text-label text-secondary mb-4 block font-body font-medium">Контакт</span>
            <h2 className="text-display-lg text-foreground font-display mb-4">
              Готови за{" "}
              <span className="text-accent-italic">старт?</span>
            </h2>
            <p className="text-muted-foreground text-lg font-body">
              Отговаряме до 24 часа.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid md:grid-cols-2 gap-5">
              {/* Name */}
              <div className="space-y-2">
                <label htmlFor="name" className="text-sm font-medium text-foreground font-body">
                  Име
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body"
                  placeholder="Вашето име"
                />
              </div>

              {/* Email */}
              <div className="space-y-2">
                <label htmlFor="email" className="text-sm font-medium text-foreground font-body">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body"
                  placeholder="email@example.com"
                />
              </div>
            </div>

            {/* Phone */}
            <div className="space-y-2">
              <label htmlFor="phone" className="text-sm font-medium text-foreground font-body">
                Телефон
              </label>
              <input
                type="tel"
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                className="w-full h-12 px-4 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 font-body"
                placeholder="+359 888 123 456"
              />
            </div>

            {/* Message */}
            <div className="space-y-2">
              <label htmlFor="message" className="text-sm font-medium text-foreground font-body">
                Съобщение
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={5}
                className="w-full px-4 py-3 rounded-xl border border-border bg-card text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all duration-200 resize-none font-body"
                placeholder="Разкажете ни за вашия проект..."
              />
            </div>

            {/* Submit button */}
            <Button
              type="submit"
              variant="default"
              size="lg"
              className="w-full rounded-xl"
              disabled={isSubmitting}
            >
              {isSubmitting ? (
                "Изпращане..."
              ) : (
                <>
                  Изпрати запитване
                  <Send className="w-4 h-4 ml-2" />
                </>
              )}
            </Button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
