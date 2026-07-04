import { Suspense, lazy } from "react";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import ScrollToTop from "./components/ScrollToTop";
import Analytics from "./components/Analytics";
import { ProjectWizardProvider } from "./components/wizard/ProjectWizard";

const Index = lazy(() => import("./pages/Index"));
const NotFound = lazy(() => import("./pages/NotFound"));
const PrivacyPolicy = lazy(() => import("./pages/PrivacyPolicy"));
const AboutUs = lazy(() => import("./pages/AboutUs"));
const WebsiteLanding = lazy(() => import("./pages/WebsiteLanding"));
const AIIntegrationLanding = lazy(() => import("./pages/AIIntegrationLanding"));
const HousingSoftwareLanding = lazy(() => import("./pages/HousingSoftwareLanding"));
const EcommerceStoreLanding = lazy(() => import("./pages/EcommerceStoreLanding"));
const LaunchBusinessLanding = lazy(() => import("./pages/LaunchBusinessLanding"));
const AutomationForBusinessLanding = lazy(() => import("./pages/AutomationForBusinessLanding"));
const AIAgentsLanding = lazy(() => import("./pages/AIAgentsLanding"));

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <Analytics />
        <BrowserRouter>
          <ScrollToTop />
          <ProjectWizardProvider>
            <Suspense fallback={<div className="min-h-screen bg-background" />}>
              <Routes>
                <Route path="/" element={<Index />} />
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                <Route path="/about" element={<AboutUs />} />
                <Route path="/website" element={<WebsiteLanding />} />
                <Route path="/ai-integration" element={<AIIntegrationLanding />} />
                <Route path="/housing-software" element={<HousingSoftwareLanding />} />
                <Route path="/ecommerce-store" element={<EcommerceStoreLanding />} />
                <Route path="/launch-your-business" element={<LaunchBusinessLanding />} />
                <Route path="/automation-for-business" element={<AutomationForBusinessLanding />} />
                <Route path="/ai-agents" element={<AIAgentsLanding />} />
                {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
                <Route path="*" element={<NotFound />} />
              </Routes>
            </Suspense>
          </ProjectWizardProvider>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
