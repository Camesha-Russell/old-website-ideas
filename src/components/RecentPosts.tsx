import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";
import { RECENT_POSTS_COUNT } from "@/config/homepage";

const RecentPosts = () => {
  const posts = getAllPosts().slice(0, Math.max(RECENT_POSTS_COUNT, 5));

  if (posts.length === 0) {
    return (
      <section className="py-[100px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="section-title text-foreground mb-10">Recent Posts</h2>
          <p className="text-center text-muted-foreground font-body">Posts will appear here once published.</p>
        </div>
      </section>
    );
  }

  const [hero, ...rest] = posts;
  const grid = rest.slice(0, 4);

  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="section-title text-foreground mb-10">Recent Posts</h2>

        <div className="grid grid-cols-1 lg:grid-cols-[40%_60%] gap-6">
          {/* Large left post */}
          <Link to={`/blog/${hero.slug}`} className="group bg-white border border-border rounded-lg overflow-hidden block">
            {hero.featuredImage && hero.featuredImage !== "/placeholder.svg" ? (
              <img src={hero.featuredImage} alt={hero.featuredImageAlt || hero.title} className="w-full aspect-[3/4] object-cover" />
            ) : (
              <div className="placeholder-img aspect-[3/4]" />
            )}
            <div className="p-5">
              <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{hero.category}</span>
              <h3 className="font-display text-lg md:text-xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">
                {hero.title}
              </h3>
              {hero.excerpt && (
                <p className="font-body text-muted-foreground text-sm mt-2 line-clamp-2">{hero.excerpt}</p>
              )}
            </div>
          </Link>

          {/* 2x2 grid right */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
            {grid.map((post) => (
              <Link
                key={post.slug}
                to={`/blog/${post.slug}`}
                className="group bg-white border border-border rounded-lg overflow-hidden block"
              >
                {post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
                  <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className="w-full aspect-[4/3] object-cover" />
                ) : (
                  <div className="placeholder-img aspect-[4/3]" />
                )}
                <div className="p-4">
                  <span className="text-terracotta uppercase text-[10px] tracking-[2px] font-body font-semibold">{post.category}</span>
                  <h3 className="font-display text-sm md:text-base mt-1.5 leading-snug group-hover:opacity-70 transition-opacity">
                    {post.title}
                  </h3>
                </div>
              </Link>
            ))}
          </div>
        </div>

        <div className="text-center mt-14">
          <Link to="/blog" className="btn-peach text-[10px]">Explore All Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
