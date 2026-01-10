import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Index from "./pages/Index";
import Project from "./pages/Project";
import AllProjects from "./pages/AllProjects";
import Reviews from "./pages/Reviews";
import NotFound from "./pages/NotFound";
import ScrollToTop from "./components/ScrollToTop";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
      <ScrollToTop />
      <Navbar />
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/project/:id" element={<Project />} />
          <Route path="/projects" element={<AllProjects />} />
          <Route path="/reviews" element={<Reviews />} />    
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      <Footer />  
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
