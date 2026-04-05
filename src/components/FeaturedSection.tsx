import { Link } from "react-router-dom";
import { getAllPostsIncludingDrafts, PostFrontmatter } from "@/lib/blog";
import { FEATURED_SLUGS } from "@/config/homepage";

function resolveSlots(): (PostFrontmatter | null)[] {
  const all = getAllPostsIncludingDrafts();
  return FEATURED_SLUGS.map((slug) => {
    if (!slug) return null;
    return all.find((p) => p.slug === slug && p.status === "published") ?? null;
  });
}

function PlaceholderCard({ className = "" }: { className?: string }) {
  return (
    <div className={`border border-dashed border-border rounded-sm overflow-hidden opacity-40 ${className}`}>
      <div className="p-4 md:p-6">
        <span className="tracking-widest uppercase text-xs text-muted-foreground font-body">Coming soon</span>
        <h3 className="font-display text-foreground text-xl md:text-2xl mt-2 leading-snug">
          A new post is on its way
        </h3>
      </div>
      <div className="placeholder-img flex-1 min-h-[200px]" />
    </div>
  );
}

function PostImage({ post, className = "" }: { post: PostFrontmatter; className?: string }) {
  return post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
    <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className={`w-full object-cover ${className}`} />
  ) : (
    <div className={`placeholder-img ${className}`} />
  );
}

function PostMeta({ post }: { post: PostFrontmatter }) {
  return (
    <div className="p-4 md:p-6">
      <span className="tracking-widest uppercase text-xs text-muted-foreground font-body">{post.category}</span>
      <h3 className="font-display text-foreground text-xl md:text-2xl lg:text-3xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">
        {post.title}
      </h3>
    </div>
  );
}

const FeaturedSection = () => {
  const slots = resolveSlots();
  const [s0, s1, s2, s3, s4] = slots;

  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <h2 className="section-title text-foreground mb-10">Featured</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-3 mb-3">

          {/* Slot 0 — text top, image bottom */}
          <div className="md:col-span-3">
            {s0 ? (
              <Link to={`/blog/${s0.slug}`} className="group border border-border rounded-sm overflow-hidden flex flex-col hover:border-foreground/30 transition-colors block h-full">
                <PostMeta post={s0} />
                <PostImage post={s0} className="flex-1 min-h-[200px]" />
              </Link>
            ) : <PlaceholderCard />}
          </div>

          {/* Slot 1 — image top, text bottom (hero) */}
          <div className="md:col-span-5">
            {s1 ? (
              <Link to={`/blog/${s1.slug}`} className="group border border-border rounded-sm overflow-hidden flex flex-col hover:border-foreground/30 transition-colors block h-full">
                <PostImage post={s1} className="flex-1 min-h-[300px]" />
                <PostMeta post={s1} />
              </Link>
            ) : <PlaceholderCard />}
          </div>

          {/* Slot 2 — text top, image bottom */}
          <div className="md:col-span-4">
            {s2 ? (
              <Link to={`/blog/${s2.slug}`} className="group border border-border rounded-sm overflow-hidden flex flex-col hover:border-foreground/30 transition-colors block h-full">
                <PostMeta post={s2} />
                <PostImage post={s2} className="flex-1 min-h-[200px]" />
              </Link>
            ) : <PlaceholderCard />}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">

          {/* Slot 3 — image top, text bottom */}
          {s3 ? (
            <Link to={`/blog/${s3.slug}`} className="group border border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors block">
              <PostImage post={s3} className="aspect-[16/9]" />
              <PostMeta post={s3} />
            </Link>
          ) : <PlaceholderCard />}

          {/* Slot 4 — text top, image bottom */}
          {s4 ? (
            <Link to={`/blog/${s4.slug}`} className="group border border-border rounded-sm overflow-hidden hover:border-foreground/30 transition-colors block">
              <PostMeta post={s4} />
              <PostImage post={s4} className="aspect-[16/9]" />
            </Link>
          ) : <PlaceholderCard />}

        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
