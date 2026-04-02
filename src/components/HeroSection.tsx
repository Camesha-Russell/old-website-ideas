import { Link } from "react-router-dom";

const featuredPost = {
  category: "Sleep",
  title: "The Only Bassinet Guide You Actually Need in 2026",
  excerpt: "We tested 14 bassinets over six months with real families. Here's what actually matters — and what's just marketing.",
  path: "/sleep",
};

const sidePosts = [
  {
    category: "Feeding",
    title: "Best High Chairs That Grow With Your Baby",
    path: "/feeding",
  },
  {
    category: "Safety",
    title: "Car Seat Installation Mistakes Even Careful Parents Make",
    path: "/safety",
  },
  {
    category: "Postpartum & Mom",
    title: "Postpartum Recovery Essentials That Actually Help",
    path: "/postpartum-and-mom",
  },
];

const HeroSection = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-8 md:py-12">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Large Featured Card */}
          <div className="lg:col-span-7">
            <Link to={featuredPost.path} className="group block">
              <div className="placeholder-img aspect-[16/10] rounded-sm mb-4" />
              <span className="category-label text-muted-foreground">
                {featuredPost.category}
              </span>
              <h2 className="font-display text-2xl md:text-3xl lg:text-4xl mt-2 mb-3 leading-tight group-hover:text-muted-foreground transition-colors">
                {featuredPost.title}
              </h2>
              <p className="font-body text-muted-foreground text-sm leading-relaxed max-w-lg">
                {featuredPost.excerpt}
              </p>
            </Link>
          </div>

          {/* Side Cards */}
          <div className="lg:col-span-5 flex flex-col gap-5">
            {sidePosts.map((post, i) => (
              <Link
                key={i}
                to={post.path}
                className="group flex gap-4 items-start"
              >
                <div className="placeholder-img w-28 h-20 md:w-32 md:h-24 flex-shrink-0 rounded-sm" />
                <div className="flex flex-col justify-center">
                  <span className="category-label text-muted-foreground">
                    {post.category}
                  </span>
                  <h3 className="font-display text-sm md:text-base mt-1 leading-snug group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
