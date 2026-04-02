import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import PlaceholderPage from "./pages/PlaceholderPage";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const placeholderRoutes = [
  "/about",
  "/start-here",
  "/top-picks",
  "/sleep",
  "/feeding",
  "/carriers-and-strollers",
  "/play-and-development",
  "/postpartum-and-mom",
  "/safety",
  "/we-said-no",
  "/hype-check",
  "/know-before-you-buy",
  "/ask-itsmomapproved",
  "/starter-kit",
  "/contact",
  "/disclosure",
  "/privacy-policy",
];

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          {placeholderRoutes.map((path) => (
            <Route key={path} path={path} element={<PlaceholderPage />} />
          ))}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
