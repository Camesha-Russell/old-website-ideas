const featuredPosts = [
  { category: "Play & Development", title: "Montessori Toys That Are Actually Worth the Price" },
  { category: "Sleep", title: "Sleep Training Methods Compared: A Research Review" },
  { category: "Feeding", title: "The Bottle-to-Cup Transition Nobody Talks About" },
  { category: "Safety", title: "Baby-Proofing Your Home: Room-by-Room Checklist" },
  { category: "Postpartum & Mom", title: "Recovery Products That Made a Real Difference" },
  { category: "Play & Development", title: "Fun Ideas for an Unforgettable Playdate" },
];

const FeaturedSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Featured</h2>

        {/* Mosaic Grid - matching reference collage */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">
          {/* Left tall card */}
          <div className="md:col-span-3 group cursor-pointer relative overflow-hidden rounded-sm">
            <div className="placeholder-img aspect-[3/4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="category-label text-white/70">{featuredPosts[0].category}</span>
              <h3 className="font-display text-white text-sm mt-1 leading-snug">
                {featuredPosts[0].title}
              </h3>
            </div>
          </div>

          {/* Center column - stacked */}
          <div className="md:col-span-5 flex flex-col gap-3">
            {/* Wide landscape */}
            <div className="group cursor-pointer relative overflow-hidden rounded-sm">
              <div className="placeholder-img aspect-[16/9]" />
              <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="category-label text-white/70">{featuredPosts[1].category}</span>
                <h3 className="font-display text-white text-base md:text-lg mt-1 leading-snug">
                  {featuredPosts[1].title}
                </h3>
              </div>
            </div>
            {/* Small card below */}
            <div className="group cursor-pointer relative overflow-hidden rounded-sm">
              <div className="placeholder-img aspect-[16/9]" />
              <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <span className="category-label text-white/70">{featuredPosts[5].category}</span>
                <h3 className="font-display text-white text-base md:text-lg mt-1 leading-snug">
                  {featuredPosts[5].title}
                </h3>
              </div>
            </div>
          </div>

          {/* Right tall card */}
          <div className="md:col-span-4 group cursor-pointer relative overflow-hidden rounded-sm">
            <div className="placeholder-img aspect-[3/4]" />
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="category-label text-white/70">{featuredPosts[2].category}</span>
              <h3 className="font-display text-white text-base md:text-lg mt-1 leading-snug">
                {featuredPosts[2].title}
              </h3>
            </div>
          </div>
        </div>

        {/* Bottom row: 2 wide cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          <div className="group cursor-pointer relative overflow-hidden rounded-sm">
            <div className="placeholder-img aspect-[16/9]" />
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="category-label text-white/70">{featuredPosts[3].category}</span>
              <h3 className="font-display text-white text-base md:text-lg mt-1 leading-snug">
                {featuredPosts[3].title}
              </h3>
            </div>
          </div>
          <div className="group cursor-pointer relative overflow-hidden rounded-sm">
            <div className="placeholder-img aspect-[16/9]" />
            <div className="absolute inset-0 bg-gradient-to-t from-nearblack/70 via-nearblack/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-4">
              <span className="category-label text-white/70">{featuredPosts[4].category}</span>
              <h3 className="font-display text-white text-sm mt-1 leading-snug">
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
