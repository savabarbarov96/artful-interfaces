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
import {
  Monitor,
  Search,
  Server,
  Zap,
  LayoutDashboard,
  Headset,
} from "lucide-react";

const WebsiteLanding = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Изработка на уебсайт | Automation Aid — Месечен план без начална инвестиция"
        description="Професионална изработка на уебсайт с месечен абонамент. Включен дизайн, разработка, хостинг, SEO и поддръжка. Без начална инвестиция. Пускаме сайта ви до 14 дни."
        canonical="https://automationaid.bg/website"
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
