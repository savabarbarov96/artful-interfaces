const reasons = [
  {
    number: "01",
    title: "7–14 дни изпълнение",
    description: "Бързо и ефективно изграждане без компромис с качеството.",
  },
  {
    number: "02",
    title: "QA + Dev експертиза",
    description: "Всеки проект преминава през задълбочено тестване преди пускане.",
  },
  {
    number: "03",
    title: "50+ проекта",
    description: "Доказан опит с клиенти от различни индустрии и мащаби.",
  },
];

const WhyUs = () => {
  return (
    <section className="section-padding-sm bg-foreground text-background">
      <div className="container">
        {/* Section header */}
        <div className="text-center max-w-xl mx-auto mb-16">
          <span className="text-label text-primary mb-4 block">Защо ние</span>
          <h2 className="text-display-md">
            Нашият подход
          </h2>
        </div>

        {/* Reasons */}
        <div className="grid md:grid-cols-3 gap-12 md:gap-8">
          {reasons.map((reason, index) => (
            <div
              key={reason.number}
              className="relative"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Number */}
              <span className="text-6xl md:text-7xl font-display font-bold text-background/10 absolute -top-4 -left-2">
                {reason.number}
              </span>

              {/* Content */}
              <div className="relative pt-8">
                <h3 className="text-xl font-display font-bold mb-3">
                  {reason.title}
                </h3>
                <p className="text-background/70 leading-relaxed">
                  {reason.description}
                </p>
              </div>

              {/* Divider for desktop */}
              {index < reasons.length - 1 && (
                <div className="hidden md:block absolute top-0 -right-4 w-px h-full bg-background/10" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
