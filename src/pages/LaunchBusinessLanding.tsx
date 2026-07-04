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
  Globe,
  CreditCard,
  Bot,
  Inbox,
  RefreshCw,
  LayoutDashboard,
  Monitor,
  ShoppingCart,
  Workflow,
} from "lucide-react";

const launchFaqs: FAQItem[] = [
  {
    question: "Трябва ли вече да имам регистрирана фирма?",
    answer:
      "Не е задължително преди да започнем работа по системата ви. Изграждаме сайта, плащанията и автоматизациите успоредно с това вие да уредите регистрацията си — така стартирате готови, веднага щом фирмата е вписана.",
  },
  {
    question: "С какво се различава това от обикновен уебсайт?",
    answer:
      "Не получавате само сайт — получавате цялата система за стартиране: сайт, начин за приемане на плащания, събиране на запитвания, AI асистент, който отговаря на клиенти, и автоматичен follow-up. Всичко работи заедно от първия ден.",
  },
  {
    question: "Колко време отнема да съм готов да приемам клиенти?",
    answer:
      "Стандартният срок е до 14 дни от одобрението на плана — същото обещание, което спазваме и при изработка на уебсайт. AI асистентът и автоматизациите се включват в рамките на този срок.",
  },
  {
    question: "Какво включва месечният абонамент?",
    answer:
      "Абонаментът покрива хостинг, домейн, SSL, поддръжка на сайта, настройка на AI асистента и основните автоматизации за запитвания и follow-up. Няма скрита такса за първоначално изграждане на системата.",
  },
  {
    question: "Ами ако по-късно ми трябва онлайн магазин?",
    answer:
      "Системата е изградена да расте с бизнеса ви. Ако преминете към продажба на продукти, надграждаме към пълноценен онлайн магазин с checkout и куриерски интеграции, без да презаписваме наученото за клиентите ви.",
  },
];

const launchServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Стартиране на онлайн бизнес",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Business launch bundle",
      areaServed: "BG",
      url: "https://automationaid.bg/launch-your-business",
      description:
        "Сайт, AI агент и автоматизации в един месечен абонамент — от идея до работещ онлайн бизнес, без начална инвестиция.",
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
          name: "Стартиране на онлайн бизнес",
          item: "https://automationaid.bg/launch-your-business",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: launchFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const LaunchBusinessLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Стартиране на онлайн бизнес | Automation Aid"
        description="От идея до работещ онлайн бизнес: сайт, AI агент и автоматизации — в един месечен абонамент, без начална инвестиция."
        canonical="https://automationaid.bg/launch-your-business"
        structuredData={launchServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Стартиране на бизнес"
          title={
            <>
              <span className="block">От идея до</span>
              <span className="block text-[#FF6B35]">работещ бизнес</span>
              <span className="block">на един</span>
              <span className="block text-[#FF6B35]">абонамент</span>
            </>
          }
          subtitle="Сайт, AI агент и автоматизации — в един месечен абонамент, без начална инвестиция. Изграждаме цялата система, за да стартирате готови да приемате клиенти."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте плановете", href: "#pricing" }}
          technologies={[
            "React",
            "TailwindCSS",
            "Supabase",
            "Stripe",
            "OpenAI API",
            "n8n",
            "PostgreSQL",
            "Vite",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Системата за стартиране"
          title={
            <>
              Всичко, от което се нуждае{" "}
              <span className="text-accent-italic">новият ви бизнес</span>
            </>
          }
          subtitle="Не продаваме сайт по отделно и автоматизация по отделно — изграждаме едно цялостно решение, готово да приема и обслужва клиенти."
          features={[
            {
              icon: Globe,
              title: "Професионален сайт",
              description:
                "Респонсив уебсайт, представящ бизнеса ви убедително — готов за първите посетители и клиенти.",
            },
            {
              icon: CreditCard,
              title: "Приемане на плащания",
              description:
                "Свързваме подходящото payment решение, за да можете да получавате плащания от старта.",
            },
            {
              icon: Inbox,
              title: "Събиране на запитвания",
              description:
                "Форми и лендинг елементи, проектирани да превръщат посетителите в реални запитвания.",
            },
            {
              icon: Bot,
              title: "AI асистент",
              description:
                "AI агент, който отговаря на често задавани въпроси и насочва клиентите, докато вие сте зает с бизнеса.",
            },
            {
              icon: RefreshCw,
              title: "Follow-up автоматизация",
              description:
                "Автоматични последващи съобщения до запитвания, за да не губите потенциални клиенти.",
            },
            {
              icon: LayoutDashboard,
              title: "Админ панел",
              description:
                "Управлявате съдържание, запитвания и настройки от едно място, без нужда от технически познания.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как стартираме"
          title={
            <>
              От нулата до{" "}
              <span className="text-accent-italic">първи клиенти</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Запознаване и план",
              description:
                "Разглеждаме идеята ви, целевите клиенти и какво трябва да включва системата ви от старта.",
            },
            {
              number: "02",
              title: "Изграждане на сайта",
              description:
                "Проектираме и разработваме сайта, свързваме плащанията и настройваме формите за запитвания.",
            },
            {
              number: "03",
              title: "AI и автоматизации",
              description:
                "Включваме AI асистента и настройваме автоматичния follow-up към запитванията ви.",
            },
            {
              number: "04",
              title: "Пускане",
              description:
                "Тестваме цялата система и я пускаме на живо — готова да приема и обслужва клиенти.",
            },
          ]}
        />

        <div id="pricing">
          <Pricing />
        </div>

        <SocialProof
          stats={[
            { value: "14", label: "Дни до пускане", suffix: "" },
            { value: "1", label: "Месечен абонамент", suffix: "" },
            { value: "0", label: "Начална инвестиция", suffix: " лв" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={launchFaqs} />

        <RelatedServices
          services={[
            {
              title: "Изработка на уебсайт",
              description:
                "Вече имате бизнес и ви трябва сайт? Професионален уебсайт с месечен абонамент.",
              href: "/website",
              icon: Monitor,
            },
            {
              title: "Онлайн магазин",
              description:
                "Стартирате с продукти за продажба? eCommerce платформа с checkout и куриерски интеграции.",
              href: "/ecommerce-store",
              icon: ShoppingCart,
            },
            {
              title: "Автоматизация за самонаети",
              description:
                "Вече работите сами и искате да автоматизирате запитвания и follow-up на фиксиран абонамент.",
              href: "/automation-for-business",
              icon: Workflow,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови да{" "}
              <span className="font-display italic text-white/90">
                стартирате бизнеса си?
              </span>
            </>
          }
          subtitle="Разкажете ни за идеята си и ще изградим сайта, плащанията и автоматизациите — готови за първите ви клиенти."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default LaunchBusinessLanding;
