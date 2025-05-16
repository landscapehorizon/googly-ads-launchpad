
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import CreateAd from "./pages/CreateAd";
import UploadAssets from "./pages/UploadAssets";
import BusinessDetails from "./pages/BusinessDetails";
import KeywordTargeting from "./pages/KeywordTargeting";
import BudgetSetup from "./pages/BudgetSetup";
import Checkout from "./pages/Checkout";
import Dashboard from "./pages/Dashboard";
import AdminDashboard from "./pages/AdminDashboard";
import Login from "./pages/Login";
import NotFound from "./pages/NotFound";
import AddOns from "./pages/AddOns";
import PixelPerfect from "./pages/PixelPerfect";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/create" element={<CreateAd />} />
          <Route path="/create/upload" element={<UploadAssets />} />
          <Route path="/create/business" element={<BusinessDetails />} />
          <Route path="/create/keywords" element={<KeywordTargeting />} />
          <Route path="/create/budget" element={<BudgetSetup />} />
          <Route path="/create/checkout" element={<Checkout />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/admin" element={<AdminDashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
          <Route path="/add-ons" element={<AddOns />} />
          <Route path="/pixel-perfect" element={<PixelPerfect />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
