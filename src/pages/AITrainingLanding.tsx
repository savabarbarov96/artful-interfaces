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
import TrainingPricing from "@/components/landing/TrainingPricing";
import {
  Users,
  Workflow,
  MessageSquareText,
  ClipboardCheck,
  LifeBuoy,
  ShieldCheck,
  Brain,
  Rocket,
} from "lucide-react";

const trainingFaqs: FAQItem[] = [
  {
    question: "Обучението обвързано ли е с автоматизациите, които изграждате?",
    answer:
      "Да — това е основната разлика от еднократните курсове на пазара. Обучаваме екипа ви конкретно върху AI инструментите и агентите, които сме изградили за вашия бизнес, върху вашите реални процеси, не с генерален curriculum.",
  },
  {
    question: "Само еднократен workshop ли предлагате, или има поддръжка след това?",
    answer:
      "И двете. Може да поръчате самостоятелен onsite/online workshop, или месечен abonament за continuous enablement — обучение на нови служители, отговори на въпроси и коригиране на употребата на инструментите с времето.",
  },
  {
    question: "Трябва ли екипът ми да има технически опит?",
    answer:
      "Не. Обучението е практическо и е насочено към хора без технически бекграунд — как да работят с готовите AI инструменти и агенти в ежедневната си работа.",
  },
  {
    question: "Има ли връзка с изискванията на AI Act за обучение на персонала?",
    answer:
      "AI Act (чл. 4) изисква организациите да осигурят AI грамотност на персонала, който работи с AI системи — обучението ви помага да покриете тази практика като част от внедряването.",
  },
  {
    question: "Можете ли да обучите екип, който вече използва AI инструменти от друг доставчик?",
    answer:
      "Да, но фокусът ни е върху инструментите и агентите, които сме изградили или ще изградим за вас — там носим най-голяма практическа стойност.",
  },
];

const trainingServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI обучение за служители",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Corporate AI training",
      areaServed: "BG",
      url: "https://automationaid.bg/ai-training",
      description:
        "Практическо обучение на екипи за работа с AI инструментите и агентите, които изграждаме — workshop или месечен enablement абонамент.",
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
          name: "AI обучение за служители",
          item: "https://automationaid.bg/ai-training",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: trainingFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const AITrainingLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI обучение за служители | Automation Aid"
        description="Практическо фирмено обучение AI за екипи — върху инструментите и агентите, които изграждаме за вас. Workshop или месечен enablement абонамент."
        canonical="https://automationaid.bg/ai-training"
        structuredData={trainingServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="AI обучение за служители"
          title={
            <>
              <span className="block">Обучаваме екипа ви</span>
              <span className="block text-[#FF6B35]">да работи с AI</span>
              <span className="block">инструментите,</span>
              <span className="block text-[#FF6B35]">които изграждаме</span>
            </>
          }
          subtitle="Практическо фирмено обучение AI, върху вашите реални процеси — не поредната обща презентация за ChatGPT."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте форматите", href: "#pricing" }}
          technologies={[
            "ChatGPT",
            "Claude",
            "n8n",
            "AI агенти",
            "Автоматизации",
            "Промпт инженерство",
            "Работни процеси",
            "AI Act готовност",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Какво включва обучението"
          title={
            <>
              От теория към{" "}
              <span className="text-accent-italic">реална употреба</span>
            </>
          }
          subtitle="Не поредният общ курс за AI — обучение, изградено върху инструментите и процесите на вашия бизнес."
          features={[
            {
              icon: Users,
              title: "Обучение по роли",
              description:
                "Отделни сесии за служители, мениджъри и екипи, които директно ще работят с AI инструментите и агентите ви.",
            },
            {
              icon: Workflow,
              title: "Върху вашите процеси",
              description:
                "Практически упражнения с реалните автоматизации и AI агенти, които сме изградили или изграждаме за вас — не генерични примери.",
            },
            {
              icon: MessageSquareText,
              title: "Промпт инженерство",
              description:
                "Как да формулират ефективни запитвания към ChatGPT, Claude и вътрешните AI асистенти, за да получават полезни резултати всеки път.",
            },
            {
              icon: ClipboardCheck,
              title: "Практически материали",
              description:
                "Кратки писмени ръководства и чеклисти за екипа ви, към които да се връщат след обучението.",
            },
            {
              icon: LifeBuoy,
              title: "Continuous enablement",
              description:
                "Месечен абонамент за текущи въпроси, обучение на нови служители и коригиране на употребата с времето — не еднократен workshop и толкова.",
            },
            {
              icon: ShieldCheck,
              title: "AI грамотност на екипа",
              description:
                "AI Act изисква обучение на персонала за работа с AI системи — обучението ви помага да покриете тази практика.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как работим"
          title={
            <>
              От запитване до{" "}
              <span className="text-accent-italic">самостоятелен екип</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Анализ на екипа",
              description:
                "Разглеждаме кои роли ще работят с AI инструментите и агентите ви и какви са текущите им познания.",
            },
            {
              number: "02",
              title: "Изготвяне на програмата",
              description:
                "Съставяме сесия, базирана на реалните ви процеси и инструменти, не на общ curriculum.",
            },
            {
              number: "03",
              title: "Workshop",
              description:
                "Провеждаме onsite или online практическо обучение с упражнения върху вашите реални случаи.",
            },
            {
              number: "04",
              title: "Продължаваща поддръжка",
              description:
                "При месечен абонамент — следим употребата, отговаряме на въпроси и обучаваме нови служители.",
            },
          ]}
        />

        <div id="pricing">
          <TrainingPricing />
        </div>

        <SocialProof
          stats={[
            { value: "1", label: "Ден за onsite workshop", suffix: "" },
            { value: "0", label: "Обща презентация", suffix: "" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
            { value: "1", label: "Фиксиран абонамент", suffix: "" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={trainingFaqs} />

        <RelatedServices
          services={[
            {
              title: "Автоматизация за самонаети",
              description:
                "Автоматизираме запитванията, follow-up-а и изпълнението на фиксиран месечен абонамент.",
              href: "/automation-for-business",
              icon: Rocket,
            },
            {
              title: "AI интеграция",
              description:
                "Чатботове, автоматизация на процеси и custom AI модели за вашия бизнес.",
              href: "/ai-integration",
              icon: Brain,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови да{" "}
              <span className="font-display italic text-white/90">
                обучите екипа си?
              </span>
            </>
          }
          subtitle="Разкажете ни какви AI инструменти и агенти използва или планира да използва екипът ви и ще предложим подходящ формат на обучение."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AITrainingLanding;
