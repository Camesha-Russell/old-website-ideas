import { useSearchParams } from "react-router-dom";
import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import CurrentlyTrending from "@/components/CurrentlyTrending";
import FeaturedSection from "@/components/FeaturedSection";
import StartHereCTA from "@/components/StartHereCTA";
import ShopThePost from "@/components/ShopThePost";
import FreebieCTA from "@/components/FreebieCTA";
import RecentPosts from "@/components/RecentPosts";
import CategorySleep from "@/components/CategorySleep";
import CategoryFeeding from "@/components/CategoryFeeding";
import SignatureFeatures from "@/components/SignatureFeatures";
import NewsletterBlock from "@/components/NewsletterBlock";
import Footer from "@/components/Footer";

function EditToggle() {
  const [params, setParams] = useSearchParams();
  const isEdit = params.get("edit") === "true";

  function toggle() {
    if (isEdit) {
      params.delete("edit");
    } else {
      params.set("edit", "true");
    }
    setParams(params);
  }

  return (
    <button
      onClick={toggle}
      className="fixed bottom-6 right-6 z-50 flex items-center gap-2 rounded-full px-5 py-3 text-sm font-medium shadow-lg transition-all hover:scale-105"
      style={{
        backgroundColor: isEdit ? "hsl(11 52% 47%)" : "hsl(0 0% 10%)",
        color: "#ffffff",
      }}
      title={isEdit ? "Exit edit mode" : "Edit homepage layout"}
    >
      {isEdit ? (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
          Exit Edit Mode
        </>
      ) : (
        <>
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
            <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z" />
          </svg>
          Edit Homepage
        </>
      )}
    </button>
  );
}

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <MainHeader />
      <HeroSection />
      <CurrentlyTrending />
      <FeaturedSection />
      {/* Mid-page CTA — catches scrollers before they hit Recent Posts */}
      <StartHereCTA />
      <ShopThePost />
      <FreebieCTA />
      <RecentPosts />
      <CategorySleep />
      <CategoryFeeding />
      <SignatureFeatures />
      <NewsletterBlock />
      <Footer />
      <EditToggle />
    </div>
  );
};

export default Index;
