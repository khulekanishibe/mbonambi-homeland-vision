
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { TwentyFirstToolbar } from "@21st-extension/toolbar-react";
import { ReactPlugin } from "@21st-extension/react";
import './i18n';
import Index from "./pages/Index";
import TrustOverview from "./pages/TrustOverview";
import CommunityEvents from "./pages/CommunityEvents";
import PhotoGallery from "./pages/PhotoGallery";
import NotFound from "./pages/NotFound";
import CommunityDevelopmentTrust from "./pages/CommunityDevelopmentTrust";
import PublicBenefitTrust from "./pages/PublicBenefitTrust";
import LandTrust from "./pages/LandTrust";
import Stakeholders from "./pages/Stakeholders";
import BusinessWithUs from "./pages/BusinessWithUs";
import Contacts from "./pages/Contacts";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <TwentyFirstToolbar
        config={{
          plugins: [ReactPlugin],
        }}
      />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/trust" element={<TrustOverview />} />
          <Route path="/events" element={<CommunityEvents />} />
          <Route path="/gallery" element={<PhotoGallery />} />
          <Route path="/trust/cdt" element={<CommunityDevelopmentTrust />} />
          <Route path="/trust/pbt" element={<PublicBenefitTrust />} />
          <Route path="/trust/land" element={<LandTrust />} />
          <Route path="/stakeholders" element={<Stakeholders />} />
          <Route path="/business" element={<BusinessWithUs />} />
          <Route path="/contacts" element={<Contacts />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
