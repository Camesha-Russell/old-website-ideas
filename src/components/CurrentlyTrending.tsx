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
    <section className="bg-taupe">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between mb-8 gap-4">
          <div>
            <span className="font-display italic text-2xl md:text-3xl text-foreground">
              Currently Trending
            </span>
            <div className="w-24 h-[2px] bg-foreground/30 mt-1" />
          </div>
          <div className="flex gap-2">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => setActiveTab(i)}
                className={`nav-link text-[10px] px-4 py-1.5 rounded-[20px] transition-colors ${
                  activeTab === i
                    ? "bg-nearblack text-white"
                    : "bg-white/60 text-foreground hover:bg-white"
                }`}
              >
                {tab}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-10">
          {/* Featured Post */}
          <div className="lg:col-span-7">
            <div className="placeholder-img aspect-[16/10] rounded-sm mb-4" />
            <h3 className="font-display text-xl md:text-2xl leading-snug mb-3">
              {trendingPosts[0]}
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4 max-w-lg">
              We put the viral favourite against three budget alternatives. The results surprised even us.
            </p>
            <button className="btn-peach text-[10px]">Read More</button>
          </div>

          {/* Numbered List */}
          <div className="lg:col-span-5">
            <ol className="space-y-4">
              {trendingPosts.map((title, i) => (
                <li
                  key={i}
                  className={`flex gap-4 items-start cursor-pointer group ${
                    i === 0 ? "text-foreground" : "text-muted-foreground"
                  }`}
                >
                  <span className="font-display text-2xl font-semibold leading-none mt-0.5 w-6 flex-shrink-0">
                    {i + 1}
                  </span>
                  <span className="font-display text-sm leading-snug group-hover:text-foreground transition-colors">
                    {title}
                  </span>
                </li>
              ))}
            </ol>
          </div>
        </div>

        {/* Product Carousel */}
        <div className="relative">
          <div className="flex gap-4 overflow-x-auto pb-2 scrollbar-hide">
            {Array.from({ length: 6 }).map((_, i) => (
              <div
                key={i}
                className="bg-white rounded-sm flex-shrink-0 w-36 h-36 md:w-44 md:h-44 flex items-center justify-center"
              >
                <div className="w-24 h-24 md:w-32 md:h-32 placeholder-img rounded-sm" />
              </div>
            ))}
          </div>
          <button className="absolute left-0 top-1/2 -translate-y-1/2 -ml-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-muted transition-colors hidden md:flex">
            <ChevronLeft size={16} />
          </button>
          <button className="absolute right-0 top-1/2 -translate-y-1/2 -mr-3 w-8 h-8 bg-white rounded-full shadow flex items-center justify-center hover:bg-muted transition-colors hidden md:flex">
            <ChevronRight size={16} />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
