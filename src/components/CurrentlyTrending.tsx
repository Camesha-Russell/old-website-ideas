import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const trendingPosts = [
  "The Snoo vs. Budget Bassinets: Is It Worth $1,695?",
  "Why We Changed Our Mind on This Popular Monitor",
  "Formula Prep Machines Ranked by Actual Parents",
  "The Stroller That Replaced Our Entire Collection",
  "Teething Remedies: What the Research Actually Says",
];

const CurrentlyTrending = () => {
  const [activeTab, setActiveTab] = useState(0);
  const tabs = ["Mom Approved Picks", "This Week's Finds"];

  return (
    <section className="bg-[hsl(30,15%,96%)]">
      <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-20">
        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <span className="font-display italic text-4xl md:text-5xl text-foreground whitespace-nowrap">
            Currently Trending
          </span>
          <div className="flex-grow h-[1px] bg-foreground/20" />
          <div className="flex gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`nav-link text-[12px] pb-1 transition-colors border-b-2 ${
                  activeTab === i
                    ? "border-foreground text-foreground"
                    : "border-transparent text-muted-foreground hover:text-foreground"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          {/* Featured Post — side by side */}
          <div className="lg:col-span-7">
            <div className="flex flex-col md:flex-row gap-6">
              <div className="md:w-[55%] flex-shrink-0">
                <div className="placeholder-img aspect-[4/5] rounded-sm" />
              </div>
              <div className="flex flex-col justify-center">
                <h3 className="font-display text-xl md:text-2xl leading-snug mb-3">
                  {trendingPosts[0]}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  We put the viral favourite against three budget alternatives. The results surprised even us.
                </p>
                <button className="btn-peach text-[10px] self-start">Read More</button>
              </div>
            </div>
          </div>

          {/* Numbered List */}
          <div className="lg:col-span-5">
            <ol className="space-y-6">
              {trendingPosts.map((title, i) => (
                <li
                  key={i}
                  className="flex gap-4 items-start cursor-pointer group border-b border-border pb-6 last:border-b-0"
                >
                  <span className="font-display text-5xl font-light leading-none mt-0.5 w-10 flex-shrink-0 text-foreground/15">
                    {i + 1}
                  </span>
                  <span className="font-display text-base font-medium leading-snug group-hover:text-foreground transition-colors text-muted-foreground">
                    {title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative z-10">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="flex-shrink-0 w-36 h-36 md:w-44 md:h-44 placeholder-img rounded-sm"
              />
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 w-8 h-8 bg-white rounded-full shadow items-center justify-center hover:bg-muted transition-colors hidden md:flex">
            <ChevronLeft size={16} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 w-8 h-8 bg-white rounded-full shadow items-center justify-center hover:bg-muted transition-colors hidden md:flex">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
