import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import EvidenceGraph from "./pages/EvidenceGraph";
import ControlChecks from "./pages/ControlChecks";
import Reconciliation from "./pages/Reconciliation";
import Remediation from "./pages/Remediation";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/evidence-graph" element={<EvidenceGraph />} />
          <Route path="/control-checks" element={<ControlChecks />} />
          <Route path="/reconciliation" element={<Reconciliation />} />
          <Route path="/remediation" element={<Remediation />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
