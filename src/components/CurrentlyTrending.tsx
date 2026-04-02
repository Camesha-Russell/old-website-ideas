import { useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

const tabData = [
  {
    posts: [
      { title: "The Snoo vs. Budget Bassinets: Is It Worth $1,695?", excerpt: "We put the viral favourite against three budget alternatives. The results surprised even us." },
      { title: "Why We Changed Our Mind on This Popular Monitor", excerpt: "After six months of real-world testing, here's what we actually think now." },
      { title: "Formula Prep Machines Ranked by Actual Parents", excerpt: "Real parents weighed in on the machines that made midnight feeds bearable." },
      { title: "The Stroller That Replaced Our Entire Collection", excerpt: "One stroller to rule them all — and it's not the one you'd expect." },
      { title: "Teething Remedies: What the Research Actually Says", excerpt: "We dug into the science so you don't have to. Some popular picks didn't hold up." },
    ],
  },
  {
    posts: [
      { title: "Best Organic Baby Skincare for Sensitive Skin", excerpt: "Dermatologist-tested picks that are gentle enough for newborns." },
      { title: "Sleep Sacks vs. Swaddles: The Ultimate Comparison", excerpt: "Which one actually helps your baby sleep longer? We tested both." },
      { title: "Our Favourite Montessori Toys for Under $30", excerpt: "Beautiful, educational, and budget-friendly — they do exist." },
      { title: "High Chairs That Grow With Your Toddler", excerpt: "Invest once and use for years. These are the ones worth it." },
      { title: "The Nursery Paint Colors Designers Actually Use", excerpt: "Forget generic pastels — these shades are timeless and soothing." },
    ],
  },
];

const CurrentlyTrending = () => {
  const [activeTab, setActiveTab] = useState(0);
  const [activePost, setActivePost] = useState(0);
  const tabs = ["Mom Approved Picks", "This Week's Finds"];

  const currentPosts = tabData[activeTab].posts;
  const featured = currentPosts[activePost];

  const handleTabChange = (i: number) => {
    setActiveTab(i);
    setActivePost(0);
  };

  return (
    <section className="bg-[hsl(30,15%,96%)]">
      <div className="max-w-[1400px] mx-auto px-8 md:px-16 lg:px-20 py-16 md:py-20">
        {/* Header */}
        <div className="flex items-center gap-6 mb-10">
          <span className="text-3xl md:text-4xl text-foreground whitespace-nowrap font-normal" style={{ fontFamily: "'Satisfy', cursive" }}>
            Currently Trending
          </span>
          <div className="flex-grow h-[1px] bg-foreground/20" />
          <div className="flex gap-6">
            {tabs.map((tab, i) => (
              <button
                key={tab}
                onClick={() => handleTabChange(i)}
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
                  {featured.title}
                </h3>
                <p className="font-body text-muted-foreground text-sm leading-relaxed mb-4">
                  {featured.excerpt}
                </p>
                <button className="btn-peach text-[10px] self-start">Read More</button>
              </div>
            </div>
          </div>

          {/* Numbered List */}
          <div className="lg:col-span-5">
            <ol className="space-y-8">
              {currentPosts.map((post, i) => (
                <li
                  key={i}
                  onClick={() => setActivePost(i)}
                  className="flex gap-4 items-start cursor-pointer group border-b border-border pb-6 last:border-b-0 transition-colors"
                >
                  <span
                    className={`font-display text-6xl font-light leading-none mt-0.5 w-10 flex-shrink-0 transition-colors ${
                      i === activePost ? "text-foreground" : "text-foreground/15"
                    }`}
                  >
                    {i + 1}
                  </span>
                  <span
                    className={`font-display text-base leading-snug transition-colors ${
                      i === activePost
                        ? "text-foreground font-semibold"
                        : "text-foreground/30 font-medium group-hover:text-foreground/50"
                    }`}
                  >
                    {post.title}
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
