import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import PostProperty from "./pages/PostProperty";
import SearchResults from "./pages/SearchResults";
import PropertyDetails from "./pages/PropertyDetails";
import DealersPage from "./pages/DealersPage";
import InsightsPage from "./pages/InsightsPage";
import SavedPropertiesPage from "./pages/SavedPropertiesPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/post-property" element={<PostProperty />} />
          <Route path="/search" element={<SearchResults />} />
          <Route path="/property/:id" element={<PropertyDetails />} />
          <Route path="/buy" element={<SearchResults />} />
          <Route path="/rent" element={<SearchResults />} />
          <Route path="/dealers" element={<DealersPage />} />
          <Route path="/insights" element={<InsightsPage />} />
          <Route path="/saved" element={<SavedPropertiesPage />} />
          <Route path="/requirements" element={<SavedPropertiesPage />} />
          <Route path="/activity" element={<SavedPropertiesPage />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
