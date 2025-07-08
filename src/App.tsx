import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from 'react-helmet-async';
import Index from "./pages/Index";
import ArticleInventoryOptimization from "./pages/ArticleInventoryOptimization";
import ArticleKpisAnalysis from "./pages/ArticleKpisAnalysis";
import ArticleProductManagement from "./pages/ArticleProductManagement";
import ArticleCustomerLoyalty from "./pages/ArticleCustomerLoyalty";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/articulo/optimizar-inventario-reducir-costos" element={<ArticleInventoryOptimization />} />
            <Route path="/articulo/analisis-ventas-kpis-negocio" element={<ArticleKpisAnalysis />} />
            <Route path="/articulo/gestion-productos-caos-control-total" element={<ArticleProductManagement />} />
            <Route path="/articulo/fidelizar-clientes-pos-inteligente" element={<ArticleCustomerLoyalty />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
