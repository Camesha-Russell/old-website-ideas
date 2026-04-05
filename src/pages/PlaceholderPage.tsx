import { useLocation } from "react-router-dom";
import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import Footer from "@/components/Footer";

const pageTitles: Record<string, string> = {
  "/about": "About",
  "/start-here": "Start Here",
  "/top-picks": "Top Picks",
  "/sleep": "Sleep",
  "/feeding": "Feeding",
  "/carriers-and-strollers": "Carriers & Strollers",
  "/play-and-development": "Play & Development",
  "/postpartum-and-mom": "Postpartum & Mom",
  "/safety": "Safety",
  "/we-said-no": "We Said No",
  "/hype-check": "Overhyped vs Actually Worth It",
  "/know-before-you-buy": "Know Before You Buy",
  "/ask-itsmomapproved": "Ask It's Mom Approved",
  "/starter-kit": "The No-Regrets Baby Gear Guide",
  "/contact": "Contact",
  "/disclosure": "Disclosure",
  "/privacy-policy": "Privacy Policy",
};

const PlaceholderPage = () => {
  const location = useLocation();
  const title = pageTitles[location.pathname] || "Page";

  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <MainHeader />
      <div className="max-w-[1400px] mx-auto px-4 py-20 md:py-32 text-center">
        <h1 className="font-display text-3xl md:text-5xl mb-4">{title}</h1>
        <p className="font-body text-muted-foreground text-base">
          Coming soon — we're working on something great.
        </p>
      </div>
      <Footer />
    </div>
  );
};

export default PlaceholderPage;
