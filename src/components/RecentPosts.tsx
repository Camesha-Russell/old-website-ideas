const recentPosts = [
  { category: "Sleep", title: "White Noise Machines: Do They Really Help Babies Sleep?" },
  { category: "Feeding", title: "Introducing Solids at 4 vs 6 Months: What Pediatricians Say" },
  { category: "Play & Development", title: "Screen Time Guidelines for Under-2s Updated" },
  { category: "Carriers & Strollers", title: "Lightweight Strollers for City Living Compared" },
  { category: "Safety", title: "Crib Bumpers Are Still Being Sold — Here's Why That Matters" },
  { category: "Postpartum & Mom", title: "The Nursing Pillow Showdown: Boppy vs My Brest Friend" },
  { category: "Feeding", title: "Sippy Cup Alternatives That Dentists Actually Recommend" },
  { category: "Sleep", title: "Swaddle Transition: When and How to Stop" },
];

const RecentPosts = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Recent Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {recentPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="placeholder-img aspect-[4/3] rounded-sm mb-3" />
              <span className="category-label text-muted-foreground">{post.category}</span>
              <h3 className="font-display text-sm md:text-base mt-1.5 leading-snug group-hover:text-muted-foreground transition-colors">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-10">
          <button className="btn-peach text-[10px]">Explore Older Posts</button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
