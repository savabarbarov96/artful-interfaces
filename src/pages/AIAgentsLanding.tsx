import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
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
import AIAgentPricing from "@/components/landing/AIAgentPricing";
import {
  Handshake,
  Headset,
  Cog,
  Database,
  ShieldCheck,
  Activity,
  Brain,
  Monitor,
  Rocket,
} from "lucide-react";

const aiAgentFaqs: FAQItem[] = [
  {
    question: "Какво е разликата между AI агент и чатбот?",
    answer:
      "Чатботът отговаря на съобщения. AI агентът изпълнява многостъпкови задачи самостоятелно — проверява данни, взема решения, използва инструменти (CRM, календар, плащания) и довежда процеса до край, без човек да следи всяка стъпка.",
  },
  {
    question: "Каква е разликата между AI агент и AI интеграция?",
    answer:
      "Искате AI в съществуващите си процеси? Вижте AI интеграция — чатботове, обработка на документи и аналитика върху текущата ви система. Искате автономен AI агент да е основният ви двигател за продажби или поддръжка? Това е тази страница.",
  },
  {
    question: "С какви данни и инструменти работи агентът?",
    answer:
      "Свързваме агента с вашите реални данни (CRM, база знания, продуктов каталог) и инструменти (имейл, календар, плащания, вътрешни системи), така че да действа с актуална информация, а не с общи отговори.",
  },
  {
    question: "Как проверявате, че агентът работи правилно, преди да го пуснете?",
    answer:
      "Преди пускане в реална работа минаваме през етап на оценка — тестваме агента върху реални сценарии от вашия бизнес и коригираме поведението му, преди да поеме реални разговори или задачи.",
  },
  {
    question: "Какво се случва след пускането в експлоатация?",
    answer:
      "Наблюдаваме работата на агента, преглеждаме реалните разговори и резултати, и правим месечни подобрения като част от абонамента — агентът не остава статичен след старта.",
  },
  {
    question: "Обвързан ли съм с дългосрочен договор?",
    answer:
      "Не. Плащате еднократна такса за изграждане и месечен абонамент за хостинг, наблюдение и подобрения, без обвързващ договор.",
  },
];

const aiAgentServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Разработка на AI агенти",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Autonomous AI agent development",
      areaServed: "BG",
      url: "https://automationaid.bg/ai-agents",
      description:
        "Изграждаме автономни AI агенти за продажби, поддръжка и операции, свързани с вашите данни и инструменти, на setup такса и месечен абонамент.",
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
          name: "AI Агенти",
          item: "https://automationaid.bg/ai-agents",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: aiAgentFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const AIAgentsLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Разработка на AI агенти | Automation Aid"
        description="Изграждаме автономни AI агенти за продажби, поддръжка и операции — не поредният чатбот, а агент, който работи 24/7 като част от екипа ви."
        canonical="https://automationaid.bg/ai-agents"
        structuredData={aiAgentServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Разработка на AI агенти"
          title={
            <>
              <span className="block">Автономни AI агенти,</span>
              <span className="block text-[#FF6B35]">не поредният</span>
              <span className="block">чатбот</span>
            </>
          }
          subtitle="Изграждаме автономни AI агенти — за продажби, поддръжка и операции — които работят 24/7 като част от екипа ви, на предвидим месечен абонамент."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте цените", href: "#pricing" }}
          technologies={[
            "Claude",
            "GPT-4",
            "n8n",
            "MCP",
            "Vector DB",
            "LangChain",
            "Webhooks",
            "API интеграции",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Защо агент, не чатбот"
          title={
            <>
              Агентът <span className="text-accent-italic">действа</span>, чатботът само отговаря
            </>
          }
          subtitle="Чатботът чака съобщение и отговаря. Агентът изпълнява многостъпкови задачи самостоятелно — с достъп до вашите данни и инструменти."
          features={[
            {
              icon: Handshake,
              title: "Агент по продажбите",
              description:
                "Квалифицира запитвания, отговаря на въпроси за продукта и придвижва потенциалния клиент напред — без да чака оператор.",
            },
            {
              icon: Headset,
              title: "Агент за поддръжка",
              description:
                "Решава реални казуси на клиенти самостоятелно, ескалира към човек само когато наистина е нужно.",
            },
            {
              icon: Cog,
              title: "Оперативен агент",
              description:
                "Изпълнява вътрешни задачи по зададени правила — проверки, обработка на заявки, координация между системи.",
            },
            {
              icon: Database,
              title: "Работи с вашите данни",
              description:
                "Свързан с вашия CRM, база знания и продуктова информация — отговаря с реални, актуални данни, не с общи фрази.",
            },
            {
              icon: ShieldCheck,
              title: "Оценка преди пускане",
              description:
                "Тестваме агента върху реални сценарии от бизнеса ви, преди да поеме реални разговори или задачи.",
            },
            {
              icon: Activity,
              title: "Наблюдение след старта",
              description:
                "Следим реалните разговори и резултати, и подобряваме агента месечно като част от абонамента.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Жизнен цикъл на агента"
          title={
            <>
              Как изграждаме <span className="text-accent-italic">агент, на който може да се разчита</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Проектиране",
              description:
                "Дефинираме ролята на агента, границите на действие и сценариите, с които ще работи.",
            },
            {
              number: "02",
              title: "Инструменти и данни",
              description:
                "Свързваме агента с вашия CRM, база знания и инструменти, от които се нуждае, за да действа реално.",
            },
            {
              number: "03",
              title: "Оценка",
              description:
                "Тестваме поведението на агента върху реални сценарии, преди да получи достъп до истински клиенти.",
            },
            {
              number: "04",
              title: "Пускане в експлоатация",
              description:
                "Внедряваме агента в реална работа с контролирано покритие, което разширяваме постепенно.",
            },
            {
              number: "05",
              title: "Наблюдение",
              description:
                "Следим резултатите и разговорите, и правим месечни подобрения като част от абонамента.",
            },
          ]}
        />

        <div id="pricing">
          <AIAgentPricing />
        </div>

        <SocialProof
          stats={[
            { value: "24", label: "AI достъпност", suffix: "/7" },
            { value: "0", label: "Изчакване за отговор", suffix: "" },
            { value: "1", label: "Месечен абонамент", suffix: "" },
            { value: "5", label: "Стъпков жизнен цикъл", suffix: "" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={aiAgentFaqs} />

        <RelatedServices
          services={[
            {
              title: "AI интеграция",
              description:
                "AI в съществуващите ви процеси — чатботове, обработка на документи и аналитика.",
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
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови за{" "}
              <span className="font-display italic text-white/90">
                AI агент, който наистина работи?
              </span>
            </>
          }
          subtitle="Разкажете ни за процеса, който искате да автоматизирате, и ще предложим агента, който го поема."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AIAgentsLanding;
