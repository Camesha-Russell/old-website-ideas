const featuredPosts = [
  { category: "Play & Development", title: "Montessori Toys That Are Actually Worth the Price" },
  { category: "Sleep", title: "Sleep Training Methods Compared: A Research Review" },
  { category: "Feeding", title: "The Bottle-to-Cup Transition Nobody Talks About" },
  { category: "Safety", title: "Baby-Proofing Your Home: Room-by-Room Checklist" },
  { category: "Postpartum & Mom", title: "Recovery Products That Made a Real Difference" },
];

const FeaturedSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Featured</h2>

        {/* Asymmetric Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {/* Top left - medium */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[4/3]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[0].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[0].title}
              </h3>
            </div>
          </div>

          {/* Center - tall */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer md:row-span-2">
            <div className="placeholder-img aspect-[3/4] md:h-full md:aspect-auto md:min-h-[400px]" />
            <div className="p-4 md:absolute md:bottom-0 md:left-0 md:right-0 md:bg-white/90 md:backdrop-blur-sm relative">
              <span className="category-label text-muted-foreground">{featuredPosts[1].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[1].title}
              </h3>
            </div>
          </div>

          {/* Top right - medium */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[4/3]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[2].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[2].title}
              </h3>
            </div>
          </div>

          {/* Bottom left - wide */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer lg:col-span-1">
            <div className="placeholder-img aspect-[16/9]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[3].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[3].title}
              </h3>
            </div>
          </div>

          {/* Bottom right - tall */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[4/3]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[4].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[4].title}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
