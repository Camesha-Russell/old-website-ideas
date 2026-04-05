import { Link } from "react-router-dom";
import { getAllPosts } from "@/lib/blog";
import { RECENT_POSTS_COUNT } from "@/config/homepage";

const RecentPosts = () => {
  const posts = getAllPosts().slice(0, RECENT_POSTS_COUNT);

  if (posts.length === 0) {
    return (
      <section className="bg-white">
        <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
          <h2 className="section-title text-foreground mb-10">Recent Posts</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
            {Array.from({ length: 4 }).map((_, i) => (
              <div key={i} className="opacity-30">
                <div className="placeholder-img aspect-[4/3] rounded-sm mb-3" />
                <span className="category-label text-muted-foreground block mb-1.5">Coming soon</span>
                <h3 className="font-display text-sm md:text-base leading-snug mb-1.5">
                  Your first posts will appear here once published
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Recent Posts</h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-5 gap-y-8">
          {posts.map((post) => (
            <Link
              key={post.slug}
              to={`/blog/${post.slug}`}
              className="group cursor-pointer block"
            >
              {post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
                <img
                  src={post.featuredImage}
                  alt={post.featuredImageAlt || post.title}
                  className="aspect-[4/3] rounded-sm mb-3 w-full object-cover"
                />
              ) : (
                <div className="placeholder-img aspect-[4/3] rounded-sm mb-3" />
              )}
              <span className="category-label text-muted-foreground block mb-1.5">{post.category}</span>
              <h3 className="font-display text-sm md:text-base leading-snug group-hover:text-muted-foreground transition-colors mb-1.5">
                {post.title}
              </h3>
              {post.excerpt && (
                <p className="font-body text-xs text-muted-foreground line-clamp-2 leading-relaxed">
                  {post.excerpt}
                </p>
              )}
            </Link>
          ))}
        </div>

        <div className="text-center mt-14">
          <Link to="/blog" className="btn-peach text-[10px]">Explore All Posts</Link>
        </div>
      </div>
    </section>
  );
};

export default RecentPosts;
