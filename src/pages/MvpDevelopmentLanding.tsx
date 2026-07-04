import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Testimonials from "@/components/sections/Testimonials";
import Proposition from "@/components/sections/Proposition";
import MvpPricing from "@/components/landing/MvpPricing";
import SEOHead from "@/components/landing/SEOHead";
import LandingHero from "@/components/landing/LandingHero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ProcessSteps from "@/components/landing/ProcessSteps";
import SocialProof from "@/components/landing/SocialProof";
import LandingCTA from "@/components/landing/LandingCTA";
import FAQSection, { type FAQItem } from "@/components/landing/FAQSection";
import RelatedServices from "@/components/landing/RelatedServices";
import {
  Code2,
  Sparkles,
  Layers,
  Rocket,
  Users,
  GitBranch,
  Monitor,
} from "lucide-react";

const mvpFaqs: FAQItem[] = [
  {
    question: "С какво се различава това от „Стартиране на онлайн бизнес“?",
    answer:
      "„Стартиране на онлайн бизнес“ ви дава сайт, AI агент и автоматизации на месечен абонамент — онлайн присъствие за бизнеса ви. Тук изграждаме софтуерен продукт (уеб или мобилно приложение), който получавате еднократно и притежавате изцяло — кодът е ваш, без месечна такса за самата разработка.",
  },
  {
    question: "Трябва ли ми технически съосновател?",
    answer:
      "Не. Ние поемаме цялата техническа страна — архитектура, разработка, AI компонент и хостинг на старта. Вие носите идеята и познанието за клиентите си, ние — инженерния екип.",
  },
  {
    question: "Какво означава „AI-native“ продукт?",
    answer:
      "AI компонентът (чат, автоматизация, препоръки или обработка на данни) е част от архитектурата на продукта от самото начало, а не добавен отгоре след старта. Това пести седмици преработка по-късно, когато решите да добавяте AI функции.",
  },
  {
    question: "Колко време отнема изграждането на MVP?",
    answer:
      "Пакетът MVP Старт отнема 4–6 седмици за един платформен продукт. По-сложни продукти с множество роли, плащания или интеграции (MVP Растеж) отнемат обичайно 8–12 седмици — точният срок се фиксира след кратък discovery разговор.",
  },
  {
    question: "Имате ли публично портфолио от SaaS MVP проекти?",
    answer:
      "Все още нямаме публикувани SaaS MVP казуси — това е нова услуга за нас. Това, което предлагаме, е инженерен екип с над 10 години комбиниран опит в компании като ASML и Cisco, прозрачен процес по седмични спринтове и фиксирана цена, договорена преди да започнем работа.",
  },
  {
    question: "Какво получавам след приключване на проекта?",
    answer:
      "Пълния изходен код, документация и достъп до всички ползвани услуги (хостинг, база данни, AI доставчик). Продуктът е изцяло ваш. По желание можете да преминете на месечен план за поддръжка и итерации.",
  },
];

const mvpServiceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "MVP разработка за стартъпи",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Software MVP development",
      areaServed: "BG",
      url: "https://automationaid.bg/mvp-development",
      description:
        "Разработка на AI-native MVP за стартиращи основатели — фиксирана цена, 4-6 седмици, пълна собственост на кода.",
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
          name: "MVP разработка",
          item: "https://automationaid.bg/mvp-development",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: mvpFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const MvpDevelopmentLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="MVP разработка за стартъпи | Automation Aid"
        description="От идея до работещ AI-native продукт за седмици, не месеци. Фиксирана цена, без нужда от технически съосновател. Разработка на приложение за стартъп."
        canonical="https://automationaid.bg/mvp-development"
        structuredData={mvpServiceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="MVP разработка"
          title={
            <>
              <span className="block">От идея до</span>
              <span className="block text-[#FF6B35]">работещ продукт</span>
              <span className="block">за</span>
              <span className="block text-[#FF6B35]">седмици</span>
            </>
          }
          subtitle="Изграждаме вашия AI-native MVP — уеб или мобилно приложение, което притежавате изцяло — на фиксирана цена, без нужда от технически съосновател."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
          secondaryCta={{ text: "Вижте пакетите", href: "#pricing" }}
          technologies={[
            "React",
            "React Native",
            "Supabase",
            "PostgreSQL",
            "OpenAI API",
            "Node.js",
            "Stripe",
            "Vite",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Защо MVP с нас"
          title={
            <>
              Продукт, който е{" "}
              <span className="text-accent-italic">изцяло ваш</span>
            </>
          }
          subtitle="Не абонамент за нашия софтуер — софтуерен продукт, който собствате, с AI, вграден от самото начало."
          features={[
            {
              icon: Code2,
              title: "Пълна собственост на кода",
              description:
                "Получавате целия изходен код и документация при завършване на проекта. Продуктът е ваш актив, не наш абонамент.",
            },
            {
              icon: Sparkles,
              title: "AI, вграден от старта",
              description:
                "AI компонентът е част от архитектурата от ден първи — не добавка, интегрирана набързо след пускането.",
            },
            {
              icon: Layers,
              title: "Фиксиран обхват и цена",
              description:
                "Договаряме обхвата и цената преди да започнем работа. Знаете точно какво получавате и кога.",
            },
            {
              icon: Rocket,
              title: "От идея до продукт за седмици",
              description:
                "Пакетът MVP Старт е готов за 4–6 седмици — достатъчно бързо, за да тествате хипотезата си с реални потребители.",
            },
            {
              icon: Users,
              title: "Инженерен екип, не агенция посредник",
              description:
                "Работите директно с инженери с над 10 години комбиниран опит в компании като ASML и Cisco — без прослойка от акаунт мениджъри.",
            },
            {
              icon: GitBranch,
              title: "Готов да расте",
              description:
                "Архитектурата е изградена да поеме следващите функции и потребители, вместо да се пренаписва при първия растеж.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как работим"
          title={
            <>
              От идея до{" "}
              <span className="text-accent-italic">пуснат продукт</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Discovery и обхват",
              description:
                "Дефинираме ключовия потребителски поток, технологичния стек и точния обхват на AI компонента.",
            },
            {
              number: "02",
              title: "Дизайн и архитектура",
              description:
                "Проектираме основните екрани и архитектурата на системата, преди да напишем ред код.",
            },
            {
              number: "03",
              title: "Разработка по спринтове",
              description:
                "Изграждаме продукта в седмични спринтове с демонстрация на прогреса след всеки етап.",
            },
            {
              number: "04",
              title: "Пускане и предаване",
              description:
                "Тестваме, пускаме на живо и ви предаваме кода, документацията и достъпите — продуктът е ваш.",
            },
          ]}
        />

        <div id="pricing">
          <MvpPricing />
        </div>

        <SocialProof
          stats={[
            { value: "4", label: "Седмици до MVP Старт", suffix: "-6" },
            { value: "100", label: "% собственост на кода", suffix: "%" },
            { value: "10", label: "Години опит (ASML, Cisco)", suffix: "+" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={mvpFaqs} />

        <RelatedServices
          services={[
            {
              title: "Изработка на уебсайт",
              description:
                "Трябва ви само сайт, а не пълноценен софтуерен продукт? Професионален уебсайт с месечен абонамент.",
              href: "/website",
              icon: Monitor,
            },
            {
              title: "Стартиране на онлайн бизнес",
              description:
                "Търсите онлайн присъствие, а не софтуерен продукт? Сайт, AI агент и автоматизации в един абонамент.",
              href: "/launch-your-business",
              icon: Rocket,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови да изградите{" "}
              <span className="font-display italic text-white/90">
                своя MVP?
              </span>
            </>
          }
          subtitle="Разкажете ни за идеята си и ще ви предложим фиксиран обхват, срок и цена за вашия AI-native продукт."
          ctaText="Заяви проекта сега"
          ctaOpensWizard
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default MvpDevelopmentLanding;
