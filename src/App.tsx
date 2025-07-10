
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import ArticleInventoryOptimization from "./pages/ArticleInventoryOptimization";
import ArticleKpisAnalysis from "./pages/ArticleKpisAnalysis";
import ArticleProductManagement from "./pages/ArticleProductManagement";
import ArticleCustomerLoyalty from "./pages/ArticleCustomerLoyalty";
import ArticleMarketingPOS from "./pages/ArticleMarketingPOS";
import ArticlePOSSecurity from "./pages/ArticlePOSSecurity";
import ArticleSeasonalInventory from "./pages/ArticleSeasonalInventory";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const App = () => (
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
          <Route path="/articulo/marketing-punto-venta-convierte-visitas-ventas" element={<ArticleMarketingPOS />} />
          <Route path="/articulo/seguridad-sistemas-pos-protege-negocio-clientes" element={<ArticlePOSSecurity />} />
          <Route path="/articulo/inventario-estacional-planifica-grandes-retailers" element={<ArticleSeasonalInventory />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
