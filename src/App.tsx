import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index";
import Blog from "./pages/Blog";
import BlogPost from "./pages/BlogPost";
import PlaceholderPage from "./pages/PlaceholderPage";
import About from "./pages/About";
import Admin from "./pages/Admin";
import PostEditor from "./pages/PostEditor";
import NotFound from "./pages/NotFound";
import AdminAuthGate from "./components/admin/AdminAuthGate";

const queryClient = new QueryClient();

const placeholderRoutes = [
  "/start-here",
  "/top-picks",
  "/sleep",
  "/feeding",
  "/carriers-and-strollers",
  "/play-and-development",
  "/for-moms",
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
  <HelmetProvider>
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/about" element={<About />} />
            <Route path="/blog" element={<Blog />} />
            <Route path="/blog/:slug" element={<BlogPost />} />
            <Route path="/admin" element={<AdminAuthGate><Admin /></AdminAuthGate>} />
            <Route path="/admin/edit/:slug" element={<AdminAuthGate><PostEditor /></AdminAuthGate>} />
            {placeholderRoutes.map((path) => (
              <Route key={path} path={path} element={<PlaceholderPage />} />
            ))}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </QueryClientProvider>
  </HelmetProvider>
);

export default App;
