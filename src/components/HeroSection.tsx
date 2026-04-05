import { Link } from "react-router-dom";
import heroBanner from "@/assets/hero-banner.png";

const HeroSection = () => {
  return (
    <section className="relative min-h-[600px] md:min-h-[700px] flex items-end justify-start">
      {/* Hero image */}
      <img
        src={heroBanner}
        alt="Mother holding baby in warm sunlight"
        className="absolute inset-0 w-full h-full object-cover object-top"
      />
      {/* Left-to-right gradient: dark on left for text legibility, fades out toward the subject */}
      <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
      {/* Subtle bottom fade so the floor doesn't blow out */}
      <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Content anchored bottom-left */}
      <div className="relative z-10 text-left px-10 md:px-16 lg:px-20 pb-16 md:pb-24 max-w-xl lg:max-w-2xl">
        <p className="text-white/65 font-body uppercase tracking-[0.18em] text-[10px] mb-4">
          It's Mom Approved
        </p>
        <h1 className="font-display text-white text-4xl md:text-5xl lg:text-[58px] leading-[1.1] mb-8">
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
