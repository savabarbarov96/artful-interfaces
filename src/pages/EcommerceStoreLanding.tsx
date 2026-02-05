import Header from "@/components/Header";
import Footer from "@/components/sections/Footer";
import Contact from "@/components/sections/Contact";
import Proposition from "@/components/sections/Proposition";
import SEOHead from "@/components/landing/SEOHead";
import LandingHero from "@/components/landing/LandingHero";
import FeatureGrid from "@/components/landing/FeatureGrid";
import ProcessSteps from "@/components/landing/ProcessSteps";
import SocialProof from "@/components/landing/SocialProof";
import LandingCTA from "@/components/landing/LandingCTA";
import { Helmet } from "react-helmet-async";
import {
  Store,
  Truck,
  Smartphone,
  ShoppingCart,
  CreditCard,
  BarChart3,
  ArrowRight,
  ExternalLink,
  CheckCircle2,
} from "lucide-react";
import { Button } from "@/components/ui/button";

const demoUrl = "https://demo.automationaid.eu";

const featureShowcase = [
  {
    title: "Цялостен eCommerce дизайн",
    description:
      "Модерен storefront с фокус върху продуктите, мобилно пазаруване и висок процент завършени поръчки.",
    image: "/clients/hero_section_website.png",
    alt: "Модерен дизайн за онлайн магазин",
    points: [
      "Категории и филтри за бързо намиране",
      "Визуално силна начална страница",
      "Оптимизиран UX за повече поръчки",
    ],
  },
  {
    title: "Интегрирани доставки в checkout",
    description:
      "Speedy, Еконт, вземане от магазин и куриер по избор директно в процеса на поръчка.",
    image: "/clients/Integrations.png",
    alt: "Опции за доставка в checkout",
    points: [
      "Автоматично изчисляване на доставка",
      "По-малко изоставени колички",
      "Ясен и бърз checkout flow",
    ],
  },
  {
    title: "Админ панел + мобилно пазаруване",
    description:
      "Управлявайте каталог, поръчки и наличности от админ панел, докато клиентите пазаруват удобно от телефон.",
    image: "/clients/smart_shopping_cart_options.png",
    alt: "Админ панел и мобилна количка",
    points: [
      "Лесно добавяне и редакция на продукти",
      "Контрол на поръчки в реално време",
      "Респонсив изживяване за крайния клиент",
    ],
  },
];

const EcommerceStoreLanding = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: "Изработка на онлайн магазин",
    provider: {
      "@type": "Organization",
      name: "Automation Aid",
      url: "https://automationaid.bg",
    },
    serviceType: "E-commerce development",
    areaServed: "BG",
    url: "https://automationaid.bg/ecommerce-store",
    offers: {
      "@type": "Offer",
      url: demoUrl,
      description:
        "Демо на e-commerce платформа с checkout и куриерски интеграции",
    },
  };

  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Изработка на онлайн магазин | Automation Aid — eCommerce платформа с демо"
        description="Изработка на онлайн магазин с модерен дизайн, мобилна версия, checkout, интеграции със Speedy и Еконт, SEO и поддръжка. Вижте live демо на demo.automationaid.eu."
        canonical="https://automationaid.bg/ecommerce-store"
        ogImage="/clients/smart_shopping_cart_options.png"
      />

      <Helmet>
        <meta
          name="keywords"
          content="изработка на онлайн магазин, ecommerce сайт, онлайн магазин с Еконт, онлайн магазин със Speedy, checkout оптимизация, web shop development"
        />
        <script type="application/ld+json">{JSON.stringify(structuredData)}</script>
      </Helmet>

      <Header />

      <main>
        <LandingHero
          eyebrow="eCommerce решения"
          title={
            <>
              <span className="block">Онлайн магазин, който</span>
              <span className="block text-[#FF6B35]">конвертира повече</span>
              <span className="block">и се управлява</span>
              <span className="block text-[#FF6B35]">лесно всеки ден</span>
            </>
          }
          subtitle="Проектираме и разработваме e-commerce платформи с фокус върху реални поръчки: бърз checkout, куриерски интеграции и отлично мобилно изживяване."
          ctaText="Вижте live демо"
          ctaHref={demoUrl}
          secondaryCta={{ text: "Разгледайте функционалностите", href: "#features" }}
          technologies={[
            "React",
            "TypeScript",
            "Supabase",
            "PostgreSQL",
            "TailwindCSS",
            "Payments API",
            "Speedy API",
            "Econt API",
          ]}
        />

        <section className="section-padding relative overflow-hidden bg-[hsl(220,30%,99%)]">
          <div className="absolute inset-0 bg-geometric-grid opacity-25" />
          <div className="container relative z-10">
            <div className="max-w-4xl mx-auto text-center mb-12">
              <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
                Централно демо
              </span>
              <h2 className="text-display-lg text-foreground font-display mb-5">
                Тествайте платформата в реална среда
              </h2>
              <p className="text-foreground text-xl md:text-2xl font-display font-medium italic">
                Демото е ключовата част от тази услуга: виждате работеща версия,
                преминавате през клиентския flow и оценявате UX преди старт.
              </p>
            </div>

            <div className="max-w-5xl mx-auto rounded-2xl border border-border bg-white p-4 md:p-6 shadow-lg">
              <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-2 border border-primary/20">
                  <ExternalLink className="w-4 h-4 text-primary" />
                  <span className="font-body text-sm text-primary font-medium">
                    Live Demo: demo.automationaid.eu
                  </span>
                </div>
                <Button className="bg-blue-gradient text-white hover:shadow-blue" asChild>
                  <a href={demoUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2">
                    Отвори демото
                    <ArrowRight className="w-4 h-4" />
                  </a>
                </Button>
              </div>

              <div className="rounded-xl overflow-hidden border border-border">
                <iframe
                  src={demoUrl}
                  title="Automation Aid Ecommerce Demo"
                  className="w-full h-[560px] bg-white"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                />
              </div>

              <p className="text-sm text-muted-foreground mt-4 font-body">
                Ако браузърът блокира визуализацията, използвайте бутона "Отвори демото".
              </p>
            </div>
          </div>
        </section>

        <Proposition />

        <section id="features" className="section-padding relative overflow-hidden bg-[hsl(220,30%,98%)]">
          <div className="absolute inset-0 bg-mesh opacity-40" />
          <div className="container relative z-10 space-y-8">
            <div className="max-w-2xl">
              <span className="text-label text-primary mb-4 block font-body font-medium tracking-[0.2em]">
                Ключови функционалности
              </span>
              <h2 className="text-display-lg text-foreground font-display">
                Реални възможности за
                <span className="text-accent-italic"> e-commerce растеж</span>
              </h2>
            </div>

            <div className="grid gap-7">
              {featureShowcase.map((item) => (
                <article
                  key={item.title}
                  className="grid lg:grid-cols-2 gap-8 bg-white rounded-2xl border border-border p-6 md:p-8 shadow-sm"
                >
                  <div className="order-2 lg:order-1">
                    <h3 className="text-2xl md:text-3xl font-display text-foreground mb-4">
                      {item.title}
                    </h3>
                    <p className="text-muted-foreground text-lg leading-relaxed font-body mb-6">
                      {item.description}
                    </p>
                    <ul className="space-y-3">
                      {item.points.map((point) => (
                        <li key={point} className="flex items-start gap-3">
                          <CheckCircle2 className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                          <span className="font-body text-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="order-1 lg:order-2">
                    <img
                      src={item.image}
                      alt={item.alt}
                      className="w-full h-full max-h-[360px] object-cover rounded-xl border border-border"
                      loading="lazy"
                    />
                  </div>
                </article>
              ))}
            </div>
          </div>
        </section>

        <FeatureGrid
          eyebrow="Защо този тип платформа"
          title={
            <>
              Изградена за скорост, продажби и
              <span className="text-accent-italic"> мащабиране</span>
            </>
          }
          subtitle="Получавате не само дизайн, а e-commerce система, която поддържа растежа на бизнеса ви."
          features={[
            {
              icon: Store,
              title: "Пълен продуктов каталог",
              description:
                "Категории, вариации, цени и наличности в ясна структура за клиента и екипа ви.",
            },
            {
              icon: ShoppingCart,
              title: "Checkout оптимизация",
              description:
                "Съкратени стъпки за поръчка и ясна информация за доставка и плащане.",
            },
            {
              icon: Truck,
              title: "Куриерски интеграции",
              description:
                "Свързване със Speedy и Еконт за по-бърза обработка и по-малко ръчни грешки.",
            },
            {
              icon: Smartphone,
              title: "Mobile-first изживяване",
              description:
                "Оптимизирана мобилна версия за клиенти, които пазаруват основно през телефон.",
            },
            {
              icon: CreditCard,
              title: "Гъвкави методи за плащане",
              description:
                "Интеграция на подходящи payment решения според бизнес модела ви.",
            },
            {
              icon: BarChart3,
              title: "Аналитика и решения",
              description:
                "Проследявате продажби, средна поръчка и ключови стъпки във funnel-а.",
            },
          ]}
        />

        <ProcessSteps
          eyebrow="Как стартираме"
          title={
            <>
              От demo до
              <span className="text-accent-italic"> работещ магазин</span>
            </>
          }
          steps={[
            {
              number: "01",
              title: "Демо и консултация",
              description:
                "Минаваме през live демото и уточняваме каталога, доставките и нужните интеграции.",
            },
            {
              number: "02",
              title: "UX и структура",
              description:
                "Планираме навигация, продуктови страници, checkout процес и основни conversion точки.",
            },
            {
              number: "03",
              title: "Разработка",
              description:
                "Изграждаме магазина, свързваме плащания и куриери, и настройваме SEO основите.",
            },
            {
              number: "04",
              title: "Пускане и оптимизация",
              description:
                "Стартираме, следим данните и подобряваме ключови елементи за повече поръчки.",
            },
          ]}
        />

        <SocialProof
          stats={[
            { value: "2", label: "сек. целево зареждане", suffix: "с" },
            { value: "4", label: "основни checkout стъпки", suffix: "" },
            { value: "24", label: "ч. отговор от екипа", suffix: "ч" },
            { value: "100", label: "% custom workflow", suffix: "%" },
          ]}
        />

        <LandingCTA
          title={
            <>
              Прегледайте демото и стартирайте
              <span className="font-display italic text-white/90"> eCommerce проекта си</span>
            </>
          }
          subtitle="Вижте как работи платформата в реално време и получете персонална оферта според вашия каталог и обем поръчки."
          ctaText="Отвори demo.automationaid.eu"
          ctaHref={demoUrl}
        />

        <Contact />
      </main>

      <Footer />
    </div>
  );
};

export default EcommerceStoreLanding;
