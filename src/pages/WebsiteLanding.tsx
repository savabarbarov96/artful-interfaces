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
  Monitor,
  Search,
  Server,
  Zap,
  LayoutDashboard,
  Headset,
  Brain,
  Building2,
  ShoppingCart,
} from "lucide-react";

const websiteFaqs: FAQItem[] = [
  {
    question: "Колко време отнема изработката на уебсайт?",
    answer:
      "Стандартният срок е до 14 дни от одобрението на дизайна. За по-сложни проекти с допълнителни функционалности срокът може да бъде до 30 дни.",
  },
  {
    question: "Какво включва месечният абонамент?",
    answer:
      "Абонаментът покрива хостинг, SSL сертификат, домейн, ежедневни бекъпи, техническа поддръжка, актуализации на софтуера и SEO основи. Няма скрити такси.",
  },
  {
    question: "Мога ли да променям съдържанието сам?",
    answer:
      "Да, всеки сайт включва админ панел, от който може да редактирате текстове, снимки и страници. Освен това можете да се обърнете към нас за промени по всяко време.",
  },
  {
    question: "Какво се случва, ако искам да прекратя абонамента?",
    answer:
      "Няма обвързващ договор — може да прекратите по всяко време. Предоставяме пълен достъп до кода и данните на сайта ви.",
  },
  {
    question: "Включена ли е SEO оптимизация?",
    answer:
      "Да. Всеки сайт е оптимизиран за търсачки с мета тагове, структурирани данни (Schema markup), бързо зареждане, мобилна версия и правилна HTML структура.",
  },
];

const serviceSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Service",
      name: "Изработка на уебсайт",
      provider: {
        "@type": "Organization",
        name: "Automation Aid",
        url: "https://automationaid.bg",
      },
      serviceType: "Web development",
      areaServed: "BG",
      url: "https://automationaid.bg/website",
      description:
        "Професионална изработка на уебсайт с месечен абонамент. Дизайн, разработка, хостинг, SEO и поддръжка.",
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
          name: "Изработка на уебсайт",
          item: "https://automationaid.bg/website",
        },
      ],
    },
    {
      "@type": "FAQPage",
      mainEntity: websiteFaqs.map((faq) => ({
        "@type": "Question",
        name: faq.question,
        acceptedAnswer: { "@type": "Answer", text: faq.answer },
      })),
    },
  ],
};

const WebsiteLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Изработка на уебсайт | Automation Aid"
        description="Професионална изработка на уебсайт с месечен абонамент. Дизайн, разработка, хостинг, SEO и поддръжка. Без начална инвестиция. До 14 дни."
        canonical="https://automationaid.bg/website"
        structuredData={serviceSchema}
      />
      <Header />
      <main>
        <LandingHero
          eyebrow="Изработка на уебсайт"
          title={
            <>
              <span className="block">Професионален</span>
              <span className="block text-[#FF6B35]">уебсайт</span>
              <span className="block">без начална</span>
              <span className="block text-[#FF6B35]">инвестиция</span>
            </>
          }
          subtitle="Пълен пакет: дизайн, разработка, хостинг, домейн и поддръжка — всичко в един месечен абонамент. Без скрити такси."
          ctaText="Безплатна консултация"
          secondaryCta={{ text: "Вижте плановете", href: "#pricing" }}
          technologies={[
            "React",
            "Next.js",
            "TailwindCSS",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "Vite",
            "Node.js",
          ]}
        />

        <Proposition />

        <FeatureGrid
          eyebrow="Какво включва"
          title={
            <>
              Всичко необходимо за{" "}
              <span className="text-accent-italic">успешен сайт</span>
            </>
          }
          subtitle="Не просто красив дизайн — изграждаме цялостно решение, което работи за вашия бизнес."
          features={[
            {
              icon: Monitor,
              title: "Респонсив дизайн",
              description:
                "Перфектно визуално изживяване на всяко устройство — компютър, таблет и телефон. Без компромиси.",
            },
            {
              icon: Search,
              title: "SEO оптимизация",
              description:
                "Мета тагове, структурирани данни, бързо зареждане и индексиране — вашият сайт ще бъде видим в Google.",
            },
            {
              icon: Server,
              title: "Хостинг и домейн",
              description:
                "Бърз и сигурен хостинг, SSL сертификат и .com домейн, включени в месечния план.",
            },
            {
              icon: Zap,
              title: "Скорост и стабилност",
              description:
                "Оптимизиран код, кеширане и CDN за максимално бързо зареждане. Време за зареждане под 2 секунди.",
            },
            {
              icon: LayoutDashboard,
              title: "Админ панел",
              description:
                "Лесно управление на съдържанието. Променяйте текстове, снимки и страници без техническо знание.",
            },
            {
              icon: Headset,
              title: "Месечна поддръжка",
              description:
                "Ежедневни бекъпи, обновления и техническа поддръжка. Вие се фокусирате на бизнеса — ние се грижим за сайта.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как работим"
          title={
            <>
              От идея до{" "}
              <span className="text-accent-italic">готов сайт</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Консултация",
              description:
                "Обсъждаме целите, бранда и изискванията ви. Анализираме конкуренцията.",
            },
            {
              number: "02",
              title: "Дизайн",
              description:
                "Създаваме персонализиран дизайн, фокусиран върху конверсии и доверие.",
            },
            {
              number: "03",
              title: "Разработка",
              description:
                "Кодираме с модерни технологии. Бърз, SEO-оптимизиран и адаптивен сайт.",
            },
            {
              number: "04",
              title: "Пускане",
              description:
                "Тестваме, оптимизираме и пускаме сайта. Поддръжка от първия ден.",
            },
          ]}
        />

        <div id="pricing">
          <Pricing />
        </div>

        <SocialProof
          stats={[
            { value: "50+", label: "Доволни клиенти", suffix: "+" },
            { value: "14", label: "Дни до пускане", suffix: "" },
            { value: "99", label: "% Uptime", suffix: "%" },
            { value: "24", label: "Часа отговор", suffix: "ч" },
          ]}
        />

        <Testimonials />

        <FAQSection faqs={websiteFaqs} />

        <RelatedServices
          services={[
            {
              title: "AI интеграция",
              description:
                "Добавете AI чатботове, автоматизация на процеси и предиктивна аналитика към бизнеса си.",
              href: "/ai-integration",
              icon: Brain,
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
                "eCommerce платформа с checkout оптимизация, Speedy и Еконт интеграции.",
              href: "/ecommerce-store",
              icon: ShoppingCart,
            },
          ]}
        />

        <LandingCTA
          title={
            <>
              Готови ли сте за{" "}
              <span className="font-display italic text-white/90">
                професионален сайт?
              </span>
            </>
          }
          subtitle="Разкажете ни за вашия бизнес и ще ви изготвим персонално предложение. Без задължения."
          ctaText="Заявете безплатна консултация"
        />

        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default WebsiteLanding;
