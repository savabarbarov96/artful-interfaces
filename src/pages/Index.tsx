import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Proposition from "@/components/sections/Proposition";
import Testimonials from "@/components/sections/Testimonials";
import ProjectTypes from "@/components/sections/ProjectTypes";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import AIIntegrations from "@/components/sections/AIIntegrations";
import Audience from "@/components/sections/Audience";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";
import SEOHead from "@/components/landing/SEOHead";

const organizationSchema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://automationaid.bg/#organization",
      name: "Automation Aid",
      url: "https://automationaid.bg",
      logo: "https://automationaid.bg/favicon-32x32.png",
      description:
        "Създаваме уебсайтове, AI интеграции и автоматизации, които ускоряват бизнеса ви.",
      areaServed: "BG",
      founder: [
        { "@type": "Person", name: "Сава Барбаров" },
        { "@type": "Person", name: "Слав Астинов" },
      ],
      contactPoint: {
        "@type": "ContactPoint",
        telephone: "+359884323999",
        email: "slav@automationaid.eu",
        contactType: "customer service",
        availableLanguage: ["Bulgarian", "English"],
      },
      sameAs: [
        "https://www.linkedin.com/in/sava-barbarov-79a898232/",
        "https://www.linkedin.com/in/slav-astinov-6b574b20b/",
      ],
    },
    {
      "@type": "WebSite",
      "@id": "https://automationaid.bg/#website",
      url: "https://automationaid.bg",
      name: "Automation Aid",
      publisher: { "@id": "https://automationaid.bg/#organization" },
      inLanguage: "bg",
    },
  ],
};

const Index = () => {
  return (
    <div className="min-h-screen bg-white">
      <SEOHead
        title="Automation Aid — Изработка на уебсайт, AI интеграции и автоматизация"
        description="Изработка на уебсайт, AI интеграции и автоматизации за българския бизнес. Дизайн, разработка, хостинг, SEO и поддръжка в един месечен план — от 99 €/месец, без начална инвестиция."
        canonical="https://automationaid.bg/"
        structuredData={organizationSchema}
      />
      <Header />
      <main>
        <Hero />
        <Proposition />
        <ProjectTypes />
        <Testimonials />
        <Pricing />
        <Services />
        <AIIntegrations />
        <Audience />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
