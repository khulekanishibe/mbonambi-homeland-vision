
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
import GetInvolved from "./pages/GetInvolved";
import NotFound from "./pages/NotFound";

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
          <Route path="/get-involved" element={<GetInvolved />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
