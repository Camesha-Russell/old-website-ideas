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
    <div className={`border border-border rounded-lg overflow-hidden opacity-40 ${className}`}>
      <div className="placeholder-img h-[240px]" />
      <div className="p-4 md:p-6">
        <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">Coming soon</span>
        <h3 className="font-display text-foreground text-xl md:text-2xl mt-2 leading-snug">
          A new post is on its way
        </h3>
      </div>
    </div>
  );
}

function PostCard({ post, imageFirst = true }: { post: PostFrontmatter; imageFirst?: boolean }) {
  const image = post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
    <img src={post.featuredImage} alt={post.featuredImageAlt || post.title} className="w-full h-[240px] object-cover" />
  ) : (
    <div className="placeholder-img h-[240px]" />
  );

  const meta = (
    <div className="p-4 md:p-6">
      <span className="text-terracotta uppercase text-[11px] tracking-[2px] font-body font-semibold">{post.category}</span>
      <h3 className="font-display text-foreground text-xl md:text-2xl mt-2 leading-snug group-hover:opacity-70 transition-opacity">
        {post.title}
      </h3>
    </div>
  );

  return (
    <Link
      to={`/blog/${post.slug}`}
      className="group border border-border rounded-lg overflow-hidden flex flex-col hover:border-foreground/30 transition-colors block h-full"
    >
      {imageFirst ? <>{image}{meta}</> : <>{meta}{image}</>}
    </Link>
  );
}

const FeaturedSection = () => {
  const slots = resolveSlots();
  const [s0, s1, s2, s3, s4] = slots;

  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="section-title text-foreground mb-10">Featured</h2>

        {/* Row 1 */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-4 mb-4">
          <div className="md:col-span-3">
            {s0 ? <PostCard post={s0} imageFirst={false} /> : <PlaceholderCard />}
          </div>
          <div className="md:col-span-5">
            {s1 ? <PostCard post={s1} /> : <PlaceholderCard />}
          </div>
          <div className="md:col-span-4">
            {s2 ? <PostCard post={s2} imageFirst={false} /> : <PlaceholderCard />}
          </div>
        </div>

        {/* Row 2 */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {s3 ? <PostCard post={s3} /> : <PlaceholderCard />}
          {s4 ? <PostCard post={s4} imageFirst={false} /> : <PlaceholderCard />}
        </div>
      </div>
    </section>
  );
};

export default FeaturedSection;
