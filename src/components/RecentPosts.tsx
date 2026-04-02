const recentPosts = [
  { category: "Sleep", title: "White Noise Machines: Do They Really Help Babies Sleep?", excerpt: "We tested the top five white noise machines to see if the science matches the hype." },
  { category: "Feeding", title: "Introducing Solids at 4 vs 6 Months: What Pediatricians Say", excerpt: "The latest guidance on when to start solids — and why timing matters more than you think." },
  { category: "Play & Development", title: "Screen Time Guidelines for Under-2s Updated", excerpt: "New research shifts the conversation on screens for babies and toddlers." },
  { category: "Carriers & Strollers", title: "Lightweight Strollers for City Living Compared", excerpt: "We pushed eight compact strollers through real city streets. Here's what held up." },
  { category: "Safety", title: "Crib Bumpers Are Still Being Sold — Here's Why That Matters", excerpt: "Despite bans in several states, padded crib bumpers remain widely available online." },
  { category: "Postpartum & Mom", title: "The Nursing Pillow Showdown: Boppy vs My Brest Friend", excerpt: "Two cult-favourite nursing pillows go head-to-head in comfort, support, and value." },
  { category: "Feeding", title: "Sippy Cup Alternatives That Dentists Actually Recommend", excerpt: "Dentists weigh in on the best transition cups for healthy oral development." },
  { category: "Sleep", title: "Swaddle Transition: When and How to Stop", excerpt: "Signs your baby is ready to ditch the swaddle — and the products that make it easier." },
];

const RecentPosts = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Recent Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {recentPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer">
              <div className="placeholder-img aspect-[4/3] rounded-sm mb-3" />
              <span className="category-label text-muted-foreground block mb-1.5">{post.category}</span>
              <h3 className="font-display text-sm md:text-base leading-snug group-hover:text-muted-foreground transition-colors mb-1.5">
                {post.title}
              </h3>
            </div>
          ))}
        </div>

        <div className="text-center mt-14">
          <button className="btn-peach text-[10px]">Explore Older Posts</button>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
