import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ServiceAreaDetails from "./pages/ServiceAreaDetails";
import ContactUs from "./pages/ContactUs";
import AdminContactSubmissions from "./pages/AdminContactSubmissions";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter basename="/inshahajjumrahagency">
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/service-area/:district" element={<ServiceAreaDetails />} />
          <Route path="/about-us/contact-us" element={<ContactUs />} />
          <Route path="/in-sha-admin" element={<AdminContactSubmissions />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
