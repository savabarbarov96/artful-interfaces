import { Clock, Shield, Award } from "lucide-react";

const reasons = [
  {
    icon: Clock,
    number: "01",
    title: "7–14 дни изпълнение",
    description: "Бързо и ефективно изграждане без компромис с качеството.",
  },
  {
    icon: Shield,
    number: "02",
    title: "QA + Dev експертиза",
    description: "Всеки проект преминава през задълбочено тестване преди пускане.",
  },
  {
    icon: Award,
    number: "03",
    title: "50+ проекта",
    description: "Доказан опит с клиенти от различни индустрии и мащаби.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding bg-hero-gradient text-primary-foreground overflow-hidden relative">
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-grid-pattern opacity-50" />
      
      <div className="container relative z-10">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label text-accent mb-4 block font-body font-medium">Защо ние</span>
          <h2 className="text-display-lg font-display">
            Нашият{" "}
            <span className="text-accent-italic">подход</span>
          </h2>
        </div>

        {/* Reasons grid */}
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {reasons.map((reason, index) => {
            const Icon = reason.icon;
            
            return (
              <div
                key={reason.number}
                className="relative text-center md:text-left"
              >
                {/* Icon */}
                <div className="w-16 h-16 rounded-2xl bg-primary-foreground/10 border border-primary-foreground/20 flex items-center justify-center mx-auto md:mx-0 mb-6">
                  <Icon className="w-7 h-7 text-accent" />
                </div>

                {/* Content */}
                <h3 className="text-xl font-display mb-3">
                  {reason.title}
                </h3>
                <p className="text-primary-foreground/70 leading-relaxed font-body">
                  {reason.description}
                </p>

                {/* Divider for desktop */}
                {index < reasons.length - 1 && (
                  <div className="hidden md:block absolute top-0 -right-6 w-px h-full bg-primary-foreground/10" />
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
