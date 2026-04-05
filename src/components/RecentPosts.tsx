import { useState } from "react";
import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";
import { RECENT_POSTS_COUNT } from "@/config/homepage";

const CATEGORIES = ["All", "Sleep", "Feeding", "Carriers and Strollers", "Play and Development", "For Moms", "Safety"];

const RecentPosts = () => {
  const allPublished = getAllPosts();
  const [activeCategory, setActiveCategory] = useState("All");

  const filtered = activeCategory === "All"
    ? allPublished.slice(0, RECENT_POSTS_COUNT)
    : allPublished.filter((p) => p.category === activeCategory).slice(0, RECENT_POSTS_COUNT);

  if (allPublished.length === 0) {
    return (
      <section className="py-[100px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="section-title text-foreground mb-10">Recent Posts</h2>
          <p className="text-center text-muted-foreground font-body">Posts will appear here once published.</p>
        </div>
      </section>
    );
  }

  // Only show categories that actually have posts
  const activeCats = new Set(allPublished.map((p) => p.category));
  const visibleCategories = CATEGORIES.filter((c) => c === "All" || activeCats.has(c));

  // Single post: full-width hero only
  if (filtered.length === 1) {
    const [hero] = filtered;
    return (
      <section className="py-[100px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="section-title text-foreground mb-6">Recent Posts</h2>

          {/* Category filter strip */}
          {visibleCategories.length > 2 && (
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {visibleCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-nav uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-foreground/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <Link to={`/blog/${hero.slug}`} className="group bg-white border border-border rounded-lg overflow-hidden block max-w-2xl mx-auto">
            {hero.featuredImage && hero.featuredImage !== "/placeholder.svg" ? (
              <img src={hero.featuredImage} alt={hero.featuredImageAlt || hero.title} className="w-full aspect-[16/9] object-cover" />
            ) : (
              <div className="placeholder-img aspect-[16/9]" />
            )}
            <div className="p-5">
              <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{hero.category}</span>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">{hero.title}</h3>
              {hero.excerpt && <p className="font-body text-muted-foreground text-sm mt-2 line-clamp-2">{hero.excerpt}</p>}
            </div>
          </Link>
          <div className="text-center mt-14">
            <Link to="/blog" className="btn-peach text-[10px]">Explore All Posts</Link>
          </div>
        </div>
      </section>
    );
  }

  if (filtered.length === 0) {
    return (
      <section className="py-[100px]">
        <div className="max-w-[1400px] mx-auto px-4">
          <h2 className="section-title text-foreground mb-6">Recent Posts</h2>

          {visibleCategories.length > 2 && (
            <div className="flex flex-wrap gap-2 justify-center mb-10">
              {visibleCategories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={`px-4 py-1.5 rounded-full text-xs font-nav uppercase tracking-wider transition-colors ${
                    activeCategory === cat
                      ? "bg-foreground text-background"
                      : "bg-muted text-muted-foreground hover:bg-foreground/10"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          )}

          <p className="text-center text-muted-foreground font-body">No posts in this category yet.</p>
        </div>
      </section>
    );
  }

  const [hero, ...rest] = filtered;
  const gridPosts = rest.slice(0, 4);
  const gridCols = gridPosts.length <= 2 ? "grid-cols-1 sm:grid-cols-2" : "grid-cols-1 sm:grid-cols-2";

  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="section-title text-foreground mb-6">Recent Posts</h2>

        {/* Category filter strip */}
        {visibleCategories.length > 2 && (
          <div className="flex flex-wrap gap-2 justify-center mb-10">
            {visibleCategories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActiveCategory(cat)}
                className={`px-4 py-1.5 rounded-full text-xs font-nav uppercase tracking-wider transition-colors ${
                  activeCategory === cat
                    ? "bg-foreground text-background"
                    : "bg-muted text-muted-foreground hover:bg-foreground/10"
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        )}

        <div className={`grid grid-cols-1 ${gridPosts.length >= 2 ? "lg:grid-cols-[40%_60%]" : "lg:grid-cols-1 max-w-2xl mx-auto"} gap-6`}>
          {/* Large left hero post */}
          <Link to={`/blog/${hero.slug}`} className="group bg-white border border-border rounded-lg overflow-hidden block">
            {hero.featuredImage && hero.featuredImage !== "/placeholder.svg" ? (
              <img src={hero.featuredImage} alt={hero.featuredImageAlt || hero.title} className="w-full aspect-[3/4] object-cover" />
            ) : (
              <div className="placeholder-img aspect-[3/4]" />
            )}
            <div className="p-5">
              <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{hero.category}</span>
              <h3 className="font-display text-xl md:text-2xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">{hero.title}</h3>
              {hero.excerpt && <p className="font-body text-muted-foreground text-sm mt-2 line-clamp-2">{hero.excerpt}</p>}
            </div>
          </Link>

          {/* Right grid */}
          {gridPosts.length > 0 && (
            <div className={`grid ${gridCols} gap-5 content-start`}>
              {gridPosts.map((post) => (
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
                    <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{post.category}</span>
                    <h3 className="font-display text-lg md:text-xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">{post.title}</h3>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>

        <div className="text-center mt-14">
          <Link to="/blog" className="btn-peach text-[10px]">Explore All Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
