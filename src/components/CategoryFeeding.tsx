const feedingPosts = [
  { category: "Feeding", title: "Best Bibs for Every Stage of Weaning" },
  { category: "Feeding", title: "Bottle Warmers That Won't Overheat" },
  { category: "Feeding", title: "High Chair Accessories You Didn't Know You Needed" },
];

const CategoryFeeding = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Feeding</h2>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
          {/* Wide Image Left */}
          <div className="group cursor-pointer">
            <div className="placeholder-img aspect-[16/10] rounded-sm" />
          </div>
          {/* Card Right */}
          <div className="group cursor-pointer flex flex-col justify-center">
            <span className="category-label text-muted-foreground">Feeding</span>
            <h3 className="font-display text-xl md:text-2xl mt-2 mb-3 leading-snug group-hover:text-muted-foreground transition-colors">
              The Complete Guide to Baby-Led Weaning in 2026
            </h3>
            <p className="font-body text-muted-foreground text-sm leading-relaxed">
              Everything you need to know about starting solids — from first foods to gagging vs choking, and the gear that actually helps.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
          {feedingPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="placeholder-img aspect-[4/3] rounded-sm mb-3" />
              <span className="category-label text-muted-foreground">{post.category}</span>
              <h3 className="font-display text-sm md:text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CategoryFeeding;
