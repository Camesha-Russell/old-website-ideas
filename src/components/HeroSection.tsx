import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] flex items-end justify-center">
      {/* Hero image */}
      <img
        src={heroBanner}
        alt="Mother holding baby in warm sunlight"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Gradient stronger at bottom so text reads clearly, light at top so baby/mom is visible */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/30 to-transparent" />

      {/* Content anchored to bottom — clear of subject's face */}
      <div className="relative z-10 text-center px-6 max-w-3xl pb-16 md:pb-20">
        <p className="text-white/70 font-body uppercase tracking-[0.15em] text-[11px] mb-3">
          It's Mom Approved
        </p>
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-6xl leading-tight mb-8">
          The honest answer for every baby product decision.
        </h1>
        <Link
          to="/top-picks"
          className="inline-block px-8 py-4 bg-terracotta text-white font-body text-sm uppercase tracking-[0.12em] font-medium hover:opacity-90 transition-opacity"
        >
          See Our Top Picks
        </Link>
      </div>
    </section>
  );
};

export default HeroSection;
