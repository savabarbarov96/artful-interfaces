import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import CompliancePricing from "@/components/sections/CompliancePricing";
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
  FileCheck,
  Lock,
  Database,
  HardDrive,
  AlertTriangle,
  FileText,
  ShoppingCart,
  Brain,
} from "lucide-react";

const complianceFaqs: FAQItem[] = [
  {
    question: "Можете ли да ни издадете сертификат по ISO 27001 или NIS2?",
    answer:
      "Не. Сертификати издават само акредитирани органи (напр. TÜV NORD, LRQA, Bureau Veritas). Ние ви подготвяме — акредитиран орган издава сертификата.",
  },
  {
    question: "Кой е задължен да спазва NIS2?",
    answer:
      "Изменението на Закона за киберсигурност, обнародвано в Държавен вестник бр. 17 от 13.02.2026 г., направи изискванията на NIS2 задължителни за средни и големи предприятия в 18 сектора. Ако не сте сигурни дали попадате в обхвата, можем да го изясним заедно.",
  },
  {
    question: "Какво точно включва подготовката за NIS2?",
    answer:
      "NIS2 е основно техническа задача: логване и мониторинг на събития, контрол на достъпа, резервни копия и възстановяване, план за реакция при инциденти и документация, доказваща тези мерки — работа, която е в основната ни инженерна компетентност.",
  },
  {
    question: "Различава ли се подготовката за ISO 27001 от GDPR?",
    answer:
      "ISO 27001 изгражда цялостна система за управление на сигурността на информацията и завършва с външен сертификационен одит. GDPR е законово изискване за всеки, който обработва лични данни, без сертификат — фокусът е върху регистри на обработване, политики и процеси за инциденти с лични данни.",
  },
  {
    question: "Приложимо ли е SOC 2 за българска фирма?",
    answer:
      "SOC 2 почти няма търсене на българския пазар — има смисъл единствено ако продавате на клиенти в САЩ, които изрично го изискват.",
  },
  {
    question: "Колко време отнема подготовката?",
    answer:
      "Зависи от обхвата: базова готовност за GDPR или NIS2 обикновено отнема няколко седмици, докато цялостно внедряване на ISO 27001 с документация и вътрешен одит може да отнеме няколко месеца.",
  },
];

const complianceServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Съответствие и сигурност — NIS2, ISO 27001, GDPR готовност",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Compliance readiness consulting",
      areaServed: "BG",
      url: "https://automationaid.bg/compliance",
      description:
        "Подготвяме ви за NIS2, ISO 27001 и GDPR — техническите мерки, документацията и доказателствата — а акредитиран орган ви сертифицира.",
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
          name: "Съответствие и сигурност",
          item: "https://automationaid.bg/compliance",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: complianceFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const ComplianceLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="NIS2 съответствие, ISO 27001 и GDPR готовност | Automation Aid"
        description="Подготвяме ви за NIS2, ISO 27001 и GDPR — техническите мерки, документацията и доказателствата. Акредитиран орган ви сертифицира."
        canonical="https://automationaid.bg/compliance"
        structuredData={complianceServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Съответствие и сигурност"
          title={
            <>
              <span className="block">Готови за</span>
              <span className="block text-[#FF6B35]">NIS2, ISO 27001</span>
              <span className="block">и</span>
              <span className="block text-[#FF6B35]">GDPR</span>
            </>
          }
          subtitle="Подготвяме ви за NIS2, ISO 27001 и GDPR — техническите мерки, документацията и доказателствата — а акредитиран орган ви сертифицира."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте плановете", href: "#pricing" }}
          technologies={[
            "NIS2",
            "ISO 27001",
            "GDPR",
            "Логване",
            "Контрол на достъпа",
            "Бекъпи",
            "Incident Response",
            "Мониторинг",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Техническа готовност"
          title={
            <>
              Мерките, които{" "}
              <span className="text-accent-italic">одиторът очаква</span>
            </>
          }
          subtitle="NIS2, ISO 27001 и GDPR изискват конкретни технически мерки и доказателства за тях — точно това изграждаме."
          features={[
            {
              icon: FileCheck,
              title: "Одит на съответствието",
              description:
                "Оценяваме текущото състояние спрямо изискванията на NIS2, ISO 27001 или GDPR и идентифицираме пропуските.",
            },
            {
              icon: Lock,
              title: "Контрол на достъпа",
              description:
                "Внедряваме политики и технически механизми за управление на достъпа до системи и данни.",
            },
            {
              icon: Database,
              title: "Логване и мониторинг",
              description:
                "Настройваме централизирано логване и мониторинг на събития за сигурност, изисквани от NIS2.",
            },
            {
              icon: HardDrive,
              title: "Бекъпи и възстановяване",
              description:
                "Изграждаме процеси за резервни копия и възстановяване след инцидент, съответстващи на изискванията.",
            },
            {
              icon: AlertTriangle,
              title: "Процеси за инциденти",
              description:
                "Разработваме план за реакция при инциденти и процедури за докладване в регулаторните срокове.",
            },
            {
              icon: FileText,
              title: "Документация и доказателства",
              description:
                "Подготвяме политики, регистри на обработване и доказателствен пакет за одит от акредитиран орган.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как подготвяме"
          title={
            <>
              От пропуски до{" "}
              <span className="text-accent-italic">готовност за одит</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Одит на пропуските",
              description:
                "Преглеждаме текущите ви системи и процеси спрямо изискванията на избраната рамка — NIS2, ISO 27001 или GDPR.",
            },
            {
              number: "02",
              title: "План за действие",
              description:
                "Изготвяме конкретен план с приоритизирани технически и документационни мерки.",
            },
            {
              number: "03",
              title: "Внедряване",
              description:
                "Изграждаме логване, контрол на достъпа, бекъпи и процеси за инциденти в реална среда.",
            },
            {
              number: "04",
              title: "Готовност за сертифициране",
              description:
                "Подготвяме пълния доказателствен пакет, с който подавате заявление към акредитиран сертифициращ орган.",
            },
          ]}
        />

        <div id="pricing">
          <CompliancePricing />
        </div>

        <SocialProof
          stats={[
            { value: "3", label: "Рамки: NIS2, ISO 27001, GDPR", suffix: "" },
            { value: "18", label: "Сектора, обхванати от NIS2", suffix: "" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
            { value: "0", label: "Сертификати издаваме ние — само акредитиран орган", suffix: "" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={complianceFaqs} />

        <RelatedServices
          services={[
            {
              title: "Онлайн магазин",
              description:
                "eCommerce платформа с checkout оптимизация и куриерски интеграции.",
              href: "/ecommerce-store",
              icon: ShoppingCart,
            },
            {
              title: "AI интеграция",
              description:
                "AI чатботове за обслужване на клиенти и автоматизация на поръчки.",
              href: "/ai-integration",
              icon: Brain,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови за{" "}
              <span className="font-display italic text-white/90">
                следващия одит?
              </span>
            </>
          }
          subtitle="Разкажете ни за бизнеса си и рамката, която ви интересува — ще предложим план за техническа готовност."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default ComplianceLanding;
