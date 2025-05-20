
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Helmet } from 'react-helmet';
import Home from "./pages/Home";
import Services from "./pages/Services";
import Contact from "./pages/Contact";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Helmet>
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <meta charSet="UTF-8" />
        <meta name="description" content="Marka-gency - Agence de marketing digital proposant des solutions sur mesure pour votre croissance en ligne." />
        <meta name="keywords" content="marketing digital, agence web, SEO, UX/UI design, développement web" />
        <link rel="canonical" href="https://marka-gency.com" />
        
        {/* Robots */}
        <meta name="robots" content="index, follow" />
        
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://marka-gency.com/" />
        <meta property="og:title" content="Marka-gency | Agence de Marketing Digital" />
        <meta property="og:description" content="Des solutions de marketing digital sur mesure pour propulser votre croissance en ligne." />
        <meta property="og:image" content="/images/marketing-banner.jpg" />
        
        {/* Twitter */}
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://marka-gency.com/" />
        <meta property="twitter:title" content="Marka-gency | Agence de Marketing Digital" />
        <meta property="twitter:description" content="Des solutions de marketing digital sur mesure pour propulser votre croissance en ligne." />
        <meta property="twitter:image" content="/images/marketing-banner.jpg" />
      </Helmet>
      
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
