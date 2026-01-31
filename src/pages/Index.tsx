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

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SEOHead
        title="Automation Aid — AI интеграции, уебсайтове и автоматизация за бизнес"
        description="Създаваме уебсайтове, AI интеграции и автоматизации, които ускоряват бизнеса ви. Дизайн, разработка, SEO и поддръжка на едно място."
        canonical="https://automationaid.bg/"
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
