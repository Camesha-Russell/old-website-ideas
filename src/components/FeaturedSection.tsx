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

        {/* Row 1: 3 cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 mb-5">
          {/* Medium card */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[4/3]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[0].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[0].title}
              </h3>
            </div>
          </div>

          {/* Tall center card */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[3/4]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[1].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[1].title}
              </h3>
            </div>
          </div>

          {/* Medium card */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[4/3]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[2].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[2].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Row 2: 2 cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {/* Wide card */}
          <div className="border border-border rounded-sm overflow-hidden group cursor-pointer">
            <div className="placeholder-img aspect-[16/9]" />
            <div className="p-4">
              <span className="category-label text-muted-foreground">{featuredPosts[3].category}</span>
              <h3 className="font-display text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {featuredPosts[3].title}
              </h3>
            </div>
          </div>

          {/* Tall card */}
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
