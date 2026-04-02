import TopNavBar from "@/components/TopNavBar";
import MainHeader from "@/components/MainHeader";
import HeroSection from "@/components/HeroSection";
import CurrentlyTrending from "@/components/CurrentlyTrending";

import FeaturedSection from "@/components/FeaturedSection";
import RecentPosts from "@/components/RecentPosts";
import ShopThePost from "@/components/ShopThePost";
import CategorySleep from "@/components/CategorySleep";
import CategoryFeeding from "@/components/CategoryFeeding";
import SignatureFeatures from "@/components/SignatureFeatures";
import NewsletterBlock from "@/components/NewsletterBlock";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <TopNavBar />
      <MainHeader />
      <HeroSection />
      <CurrentlyTrending />
      <FeaturedSection />
      <RecentPosts />
      <CategorySleep />
      <CategoryFeeding />
      <SignatureFeatures />
      <NewsletterBlock />
      <Footer />
    </div>
  );
};

export default Index;
