import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Pricing from "@/components/sections/Pricing";
import Testimonials from "@/components/sections/Testimonials";
import Proposition from "@/components/sections/Proposition";
import SEOHead from "@/components/landing/SEOHead";
import LandingHero from "@/components/landing/LandingHero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ProcessSteps from "@/components/landing/ProcessSteps";
import SocialProof from "@/components/landing/SocialProof";
import LandingCTA from "@/components/landing/LandingCTA";
import FAQSection, { type FAQItem } from "@/components/landing/FAQSection";
import RelatedServices from "@/components/landing/RelatedServices";
import {
  Inbox,
  RefreshCw,
  CalendarClock,
  Receipt,
  Bot,
  BarChart3,
  Monitor,
  Brain,
  Rocket,
  GraduationCap,
} from "lucide-react";

const automationFaqs: FAQItem[] = [
  {
    question: "За кого е подходяща тази услуга?",
    answer:
      "За коучове, създатели на съдържание, консултанти и фрийлансъри, които работят сами или с малък екип и нямат време да отговарят ръчно на всяко запитване, да пращат follow-up съобщения или да гонят фактури.",
  },
  {
    question: "Може ли автоматизацията да замени нает служител?",
    answer:
      "Не претендираме за това — автоматизираме повтарящите се стъпки (запитвания, follow-up, напомняния), за да можете вие да се фокусирате върху клиентската работа, вместо да наемате човек само за административни задачи.",
  },
  {
    question: "Работи ли с инструментите, които вече ползвам?",
    answer:
      "Свързваме автоматизациите с имейл, календар и формите, които вече използвате за запитвания. При нужда от нов инструмент, го включваме в месечния абонамент.",
  },
  {
    question: "Колко бързо се настройва?",
    answer:
      "След уточняване на процесите ви, изграждаме и тестваме автоматизациите в рамките на договорения срок в предложението — без да спираме текущата ви работа с клиенти.",
  },
  {
    question: "Обвързан ли съм с договор?",
    answer:
      "Не, работим на месечен абонамент без обвързващ договор. Можете да прекратите по всяко време.",
  },
];

const automationServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Автоматизация за самонаети и малки екипи",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Business process automation",
      areaServed: "BG",
      url: "https://automationaid.bg/automation-for-business",
      description:
        "Автоматизираме запитванията, follow-up-а и изпълнението за коучове, създатели и фрийлансъри — на фиксиран месечен абонамент.",
    },
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Начало",
          item: "https://automationaid.bg/",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "Автоматизация за самонаети",
          item: "https://automationaid.bg/automation-for-business",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: automationFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const AutomationForBusinessLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Автоматизация за малък бизнес | Automation Aid"
        description="Работиш сам? Автоматизираме запитванията, follow-up-а и изпълнението, за да растеш без да наемаш хора — на фиксиран месечен абонамент."
        canonical="https://automationaid.bg/automation-for-business"
        structuredData={automationServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Автоматизация за самонаети"
          title={
            <>
              <span className="block">Автоматизирай</span>
              <span className="block text-[#FF6B35]">запитванията</span>
              <span className="block">и расти</span>
              <span className="block text-[#FF6B35]">сам</span>
            </>
          }
          subtitle="Работиш сам? Автоматизираме запитванията, follow-up-а и изпълнението, за да растеш без да наемаш хора — на фиксиран месечен абонамент."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте плановете", href: "#pricing" }}
          technologies={[
            "n8n",
            "OpenAI API",
            "Zapier",
            "Google Calendar API",
            "Stripe",
            "Supabase",
            "Email API",
            "Webhooks",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Какво автоматизираме"
          title={
            <>
              Повтарящите се задачи,{" "}
              <span className="text-accent-italic">които крадат времето ти</span>
            </>
          }
          subtitle="Изградено за коучове, създатели на съдържание, консултанти и фрийлансъри — не за IT отдели."
          features={[
            {
              icon: Inbox,
              title: "Обработка на запитвания",
              description:
                "Всяко ново запитване се улавя и организира автоматично — без изгубени съобщения в различни канали.",
            },
            {
              icon: RefreshCw,
              title: "Follow-up последователности",
              description:
                "Автоматични последващи съобщения до потенциални клиенти, които не са отговорили веднага.",
            },
            {
              icon: CalendarClock,
              title: "Календар и резервации",
              description:
                "Автоматично насрочване на срещи и консултации, синхронизирано с календара ви.",
            },
            {
              icon: Receipt,
              title: "Фактуриране и напомняния",
              description:
                "Автоматични напомняния за плащане, вместо ръчно да гоните всяка фактура.",
            },
            {
              icon: Bot,
              title: "AI отговори на въпроси",
              description:
                "AI асистент, който отговаря на често задавани въпроси на клиентите ви денонощно.",
            },
            {
              icon: BarChart3,
              title: "Преглед на резултатите",
              description:
                "Ясен поглед върху запитвания, последвани клиенти и предстоящи срещи на едно място.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как работим"
          title={
            <>
              От ръчна работа до{" "}
              <span className="text-accent-italic">автоматична система</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Анализ на процесите",
              description:
                "Разглеждаме как в момента получавате запитвания, комуникирате и фактурирате клиенти.",
            },
            {
              number: "02",
              title: "Изграждане на автоматизациите",
              description:
                "Свързваме имейл, календар и формите ви в единна автоматизирана система.",
            },
            {
              number: "03",
              title: "AI и follow-up",
              description:
                "Включваме AI отговорите и автоматичните follow-up последователности.",
            },
            {
              number: "04",
              title: "Наблюдение и настройка",
              description:
                "Следим системата и я коригираме според реалните запитвания и клиенти.",
            },
          ]}
        />

        <div id="pricing">
          <Pricing />
        </div>

        <SocialProof
          stats={[
            { value: "0", label: "Нает персонал нужен", suffix: "" },
            { value: "24", label: "AI достъпност", suffix: "/7" },
            { value: "1", label: "Фиксиран абонамент", suffix: "" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={automationFaqs} />

        <RelatedServices
          services={[
            {
              title: "AI интеграция",
              description:
                "Технологично решение за по-големи екипи — чатботове, аналитика и custom AI модели.",
              href: "/ai-integration",
              icon: Brain,
            },
            {
              title: "Изработка на уебсайт",
              description:
                "Все още нямате сайт? Професионален уебсайт с месечен абонамент.",
              href: "/website",
              icon: Monitor,
            },
            {
              title: "Стартиране на онлайн бизнес",
              description:
                "Тепърва стартирате? Сайт, AI агент и автоматизации в един абонамент, от нулата.",
              href: "/launch-your-business",
              icon: Rocket,
            },
            {
              title: "AI обучение за служители",
              description:
                "Обучаваме екипа ви да работи с AI инструментите и автоматизациите, които изграждаме.",
              href: "/ai-training",
              icon: GraduationCap,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови да{" "}
              <span className="font-display italic text-white/90">
                спрете да гоните запитвания?
              </span>
            </>
          }
          subtitle="Разкажете ни как работите сега и ще изградим автоматизациите, които ви пестят време всеки ден."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AutomationForBusinessLanding;
