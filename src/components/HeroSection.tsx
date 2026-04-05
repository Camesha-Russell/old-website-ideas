import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-center justify-center">
      {/* Placeholder background — swap for real image later */}
      <img src={heroBanner} alt="Mother holding baby in warm sunlight" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-black/20" />

      <div className="relative z-10 text-center px-6 max-w-3xl">
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-6">
          The honest answer for every baby product decision.
        </h1>
        <Link
          to="/top-picks"
          className="inline-block px-8 py-4 bg-terracotta text-white font-body text-sm uppercase tracking-[0.12em] font-medium rounded-lg hover:opacity-90 transition-opacity"
        >
          See Our Top Picks
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
