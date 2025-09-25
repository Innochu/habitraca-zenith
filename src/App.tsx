import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { AppLayout } from "./components/layout/AppLayout";
import Dashboard from "./pages/Dashboard";
import NotFound from "./pages/NotFound";
import PrimaryTasks from "./pages/PrimaryTasks";
import SecondaryTasks from "./pages/SecondaryTasks";
import TertiaryTasks from "./pages/TertiaryTasks";
import UserProfile from "./pages/UserProfile";
import Settings from "./pages/Settings";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <AppLayout>
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/profile" element={<UserProfile />} />
            <Route path="/settings" element={<Settings />} />
            <Route path="/sessions/academics/primary" element={<PrimaryTasks />} />
            <Route path="/sessions/academics/secondary" element={<SecondaryTasks />} />
            <Route path="/sessions/academics/tertiary" element={<TertiaryTasks />} />
            <Route path="/sessions/health" element={<Dashboard />} />
            <Route path="/sessions/career" element={<Dashboard />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </AppLayout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
