const trendingPosts = [
  {
    category: "Sleep",
    title: "The Snoo vs. Budget Bassinets: Is It Worth $1,695?",
    excerpt: "We put the viral favourite against three budget alternatives. The results surprised even us.",
  },
  {
    category: "Gear",
    title: "Why We Changed Our Mind on This Popular Monitor",
  },
  {
    category: "Feeding",
    title: "Formula Prep Machines Ranked by Actual Parents",
  },
  {
    category: "Gear",
    title: "The Stroller That Replaced Our Entire Collection",
  },
];

const CurrentlyTrending = () => {
  const [featured, ...side] = trendingPosts;

  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        {/* Section label — 50% larger than original 11px → 17px */}
        <p className="text-center uppercase text-[17px] tracking-[3px] font-body font-semibold text-foreground mb-12">
          Currently Trending
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-[60%_40%] gap-6">
          {/* Large featured card */}
          <div className="bg-white border border-border rounded-lg overflow-hidden cursor-pointer group">
            <div className="placeholder-img aspect-[16/10]" />
            <div className="p-6">
              <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">
                {featured.category}
              </span>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">
                {featured.title}
              </h3>
              {featured.excerpt && (
                <p className="font-body text-foreground text-sm mt-2 line-clamp-1">
                  {featured.excerpt}
                </p>
              )}
            </div>
          </div>

          {/* Stacked side cards */}
          <div className="flex flex-col gap-4">
            {side.map((post, i) => (
              <div
                key={i}
                className="bg-white border border-border rounded-lg overflow-hidden flex gap-4 items-center cursor-pointer group p-4"
              >
                <div className="placeholder-img w-28 h-24 flex-shrink-0 rounded" />
                <div>
                  <span className="text-terracotta uppercase text-[10px] tracking-[2px] font-body font-semibold">
                    {post.category}
                  </span>
                  <h4 className="font-display text-base md:text-lg mt-1 leading-snug group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
