import Header from "@/components/Header";
import Hero from "@/components/sections/Hero";
import Proposition from "@/components/sections/Proposition";
import Testimonials from "@/components/sections/Testimonials";
import ProjectTypes from "@/components/sections/ProjectTypes";
import Pricing from "@/components/sections/Pricing";
import Services from "@/components/sections/Services";
import Audience from "@/components/sections/Audience";
import Portfolio from "@/components/sections/Portfolio";
import MobileSection from "@/components/sections/MobileSection";
import WhyUs from "@/components/sections/WhyUs";
import Contact from "@/components/sections/Contact";
import Footer from "@/components/sections/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Proposition />
        <MobileSection />
        <ProjectTypes />
        <Testimonials />
        <Pricing />
        <Services />
        <Audience />
        <Portfolio />
        <WhyUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
