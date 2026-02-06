import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import AIIntegrations from "@/components/sections/AIIntegrations";
import Testimonials from "@/components/sections/Testimonials";
import Pricing from "@/components/sections/Pricing";
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
  MessageSquare,
  Workflow,
  BarChart3,
  Brain,
  Plug,
  TrendingDown,
  Monitor,
  Building2,
  ShoppingCart,
} from "lucide-react";

const aiFaqs: FAQItem[] = [
  {
    question: "Какви AI решения можете да внедрите?",
    answer:
      "Внедряваме чатботове (ChatGPT, Claude, Gemini), автоматизация на работни процеси, предиктивна аналитика, обработка на документи с AI и custom ML модели, трениране с вашите данни.",
  },
  {
    question: "Колко време отнема AI интеграцията?",
    answer:
      "Стандартна интеграция на чатбот или автоматизация отнема 2-4 седмици. По-сложни проекти с custom ML модели могат да отнемат 4-8 седмици в зависимост от обема на данните и сложността.",
  },
  {
    question: "Сигурни ли са данните ми при AI интеграция?",
    answer:
      "Да, работим само с enterprise-grade AI платформи и спазваме стриктни стандарти за сигурност. Данните ви остават под ваш контрол и не се споделят с трети страни.",
  },
  {
    question: "Нужно ли е да имам технически екип?",
    answer:
      "Не. Ние се грижим за цялата техническа страна — от проектиране и интеграция до поддръжка. Вашият екип използва готови решения без нужда от програмиране.",
  },
  {
    question: "Какъв ROI мога да очаквам от AI автоматизация?",
    answer:
      "Повечето ни клиенти виждат намаление на оперативните разходи с 20-40% и ускоряване на процесите 2-3 пъти. Конкретните резултати зависят от процесите, които автоматизираме.",
  },
];

const aiServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "AI интеграция за бизнеса",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "AI integration and automation",
      areaServed: "BG",
      url: "https://automationaid.bg/ai-integration",
      description:
        "Чатботове, автоматизация на процеси, предиктивна аналитика и custom AI модели за бизнеса.",
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
          name: "AI Интеграция",
          item: "https://automationaid.bg/ai-integration",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: aiFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const AIIntegrationLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="AI Интеграция за бизнеса | Automation Aid"
        description="Чатботове, автоматизация на процеси, предиктивна аналитика и custom AI модели. Внедряваме ChatGPT, Claude и Gemini решения за вашия бизнес."
        canonical="https://automationaid.bg/ai-integration"
        structuredData={aiServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="AI Интеграция"
          title={
            <>
              <span className="block">Интелигентна</span>
              <span className="block text-[#FF6B35]">AI автоматизация</span>
              <span className="block">за вашия</span>
              <span className="block text-[#FF6B35]">бизнес</span>
            </>
          }
          subtitle="Внедряваме AI работни процеси, предиктивна аналитика и разговорни интерфейси, които намаляват разходите и увеличават приходите."
          ctaText="Безплатен AI одит"
          secondaryCta={{ text: "Вижте възможностите", href: "#features" }}
          technologies={[
            "ChatGPT",
            "Claude",
            "Gemini",
            "LangChain",
            "Python",
            "TensorFlow",
            "OpenAI API",
            "Vector DB",
          ]}
        />

        <Proposition />

        <div id="features">
          <FeatureGrid
            eyebrow="AI Решения"
            title={
              <>
                Технологии, които{" "}
                <span className="text-accent-italic">трансформират</span>
              </>
            }
            subtitle="От чатботове до предиктивна аналитика — внедряваме AI решения, адаптирани за вашия бизнес."
            features={[
              {
                icon: MessageSquare,
                title: "AI Чатботове",
                description:
                  "Интелигентни асистенти, обучени с данните на вашия бизнес. 24/7 обслужване на клиенти, отговори на запитвания и генериране на лийдове.",
              },
              {
                icon: Workflow,
                title: "Автоматизация на процеси",
                description:
                  "Автоматизирайте повтарящи се задачи — обработка на документи, имейли, отчети и вътрешни работни потоци.",
              },
              {
                icon: BarChart3,
                title: "Предиктивна аналитика",
                description:
                  "Прогнозирайте продажби, анализирайте поведение на клиенти и откривайте скрити модели в данните.",
              },
              {
                icon: Brain,
                title: "Custom AI модели",
                description:
                  "Разработваме персонализирани ML модели, трениране с вашите данни за специфичните нужди на бизнеса ви.",
              },
              {
                icon: Plug,
                title: "API интеграции",
                description:
                  "Свързваме ChatGPT, Claude, Gemini и други AI платформи директно с вашите съществуващи системи.",
              },
              {
                icon: TrendingDown,
                title: "Оптимизация на разходите",
                description:
                  "Намалете оперативните разходи с до 40% чрез интелигентна автоматизация на рутинни дейности.",
              },
            ]}
          />
        </div>

        <AIIntegrations />

        <ProcessSteps
          eyebrow="Нашият подход"
          title={
            <>
              Системен процес за{" "}
              <span className="text-accent-italic">AI внедряване</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "AI одит",
              description:
                "Анализираме текущите ви процеси и идентифицираме възможности за AI автоматизация.",
            },
            {
              number: "02",
              title: "Стратегия",
              description:
                "Изготвяме план с конкретни AI решения, ROI прогнози и времеви график.",
            },
            {
              number: "03",
              title: "Внедряване",
              description:
                "Разработваме, интегрираме и тестваме AI решенията в реална среда.",
            },
            {
              number: "04",
              title: "Оптимизация",
              description:
                "Следим резултатите, оптимизираме моделите и мащабираме успешните решения.",
            },
          ]}
        />

        <SocialProof
          stats={[
            { value: "40", label: "% Намалени разходи", suffix: "%" },
            { value: "3", label: "× По-бърза обработка", suffix: "×" },
            { value: "24", label: "/7 AI поддръжка", suffix: "/7" },
            { value: "98", label: "% Точност на моделите", suffix: "%" },
          ]}
        />

        <Pricing />

        <Testimonials />

        <FAQSection faqs={aiFaqs} />

        <RelatedServices
          services={[
            {
              title: "Изработка на уебсайт",
              description:
                "Професионален уебсайт с месечен абонамент. Дизайн, разработка, хостинг и SEO.",
              href: "/website",
              icon: Monitor,
            },
            {
              title: "Софтуер за настаняване",
              description:
                "Платформа за къщи за гости и хотели с Airbnb и Booking.com синхронизация.",
              href: "/housing-software",
              icon: Building2,
            },
            {
              title: "Онлайн магазин",
              description:
                "eCommerce платформа с checkout оптимизация и куриерски интеграции.",
              href: "/ecommerce-store",
              icon: ShoppingCart,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови за{" "}
              <span className="font-display italic text-white/90">
                AI трансформация?
              </span>
            </>
          }
          subtitle="Заявете безплатен AI одит на вашия бизнес. Ще идентифицираме конкретни възможности за автоматизация и спестявания."
          ctaText="Заявете безплатен AI одит"
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default AIIntegrationLanding;
