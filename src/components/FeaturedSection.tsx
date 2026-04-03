const featuredPosts = [
  { category: "Play & Development", title: "Montessori Toys That Are Actually Worth the Price" },
  { category: "Sleep", title: "Sleep Training Methods Compared: A Research Review" },
  { category: "Feeding", title: "The Bottle-to-Cup Transition Nobody Talks About" },
  { category: "Safety", title: "Baby-Proofing Your Home: Room-by-Room Checklist" },
  { category: "Postpartum & Mom", title: "Recovery Products That Made a Real Difference" },
];

const CardTextBlock = ({ category, title }: { category: string; title: string }) => (
  <div className="p-4 md:p-6">
    <span className="tracking-widest uppercase text-xs text-muted-foreground font-body">
      {category}
    </span>
    <h3 className="font-display text-foreground text-xl md:text-2xl lg:text-3xl mt-2 leading-snug">
      {title}
    </h3>
  </div>
);

const FeaturedSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Featured</h2>

        {/* Row 1: 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
          {/* Left — text above, image fills remaining height */}
          <div className="md:col-span-3 group cursor-pointer border border-border rounded-sm overflow-hidden flex flex-col">
            <CardTextBlock category={featuredPosts[0].category} title={featuredPosts[0].title} />
            <div className="placeholder-img flex-1 min-h-[200px]" />
          </div>

          {/* Center — single tall card: image above, text below */}
          <div className="md:col-span-5 group cursor-pointer border border-border rounded-sm overflow-hidden flex flex-col">
            <div className="placeholder-img flex-1 min-h-[300px]" />
            <CardTextBlock category={featuredPosts[1].category} title={featuredPosts[1].title} />
          </div>

          {/* Right — text above, image fills remaining height */}
          <div className="md:col-span-4 group cursor-pointer border border-border rounded-sm overflow-hidden flex flex-col">
            <CardTextBlock category={featuredPosts[2].category} title={featuredPosts[2].title} />
            <div className="placeholder-img flex-1 min-h-[200px]" />
          </div>
        </div>

        {/* Row 2: 2 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="group cursor-pointer border border-border rounded-sm overflow-hidden">
            <div className="placeholder-img aspect-[16/9]" />
            <CardTextBlock category={featuredPosts[3].category} title={featuredPosts[3].title} />
          </div>
          <div className="group cursor-pointer border border-border rounded-sm overflow-hidden">
            <CardTextBlock category={featuredPosts[4].category} title={featuredPosts[4].title} />
            <div className="placeholder-img aspect-[16/9]" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
