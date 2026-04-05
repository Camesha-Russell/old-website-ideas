import { Link } from "react-router-dom";
import { PostFrontmatter } from "@/lib/blog";

interface SimilarPostsProps {
  allPosts: PostFrontmatter[];
  currentSlug: string;
  currentCategory: string;
}

const SimilarPosts = ({ allPosts, currentSlug, currentCategory }: SimilarPostsProps) => {
  // Prefer same-category posts; fill with others if needed
  const sameCategory = allPosts.filter(
    (p) => p.slug !== currentSlug && p.category === currentCategory
  );
  const others = allPosts.filter(
    (p) => p.slug !== currentSlug && p.category !== currentCategory
  );
  const similar = [...sameCategory, ...others].slice(0, 3);

  if (similar.length === 0) return null;

  return (
    <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="max-w-[1200px] mx-auto px-6">
        <h2
          className="text-foreground mb-10"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            fontWeight: 400,
          }}
        >
          Similar Posts
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
          {similar.map((post) => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="group block">
              {/* Portrait container — crops any image to 3:4 portrait */}
              <div
                className="w-full overflow-hidden"
                style={{ aspectRatio: "3/4", position: "relative" }}
              >
                {post.featuredImage && post.featuredImage !== "/placeholder.svg" ? (
                  <img
                    src={post.featuredImage}
                    alt={post.featuredImageAlt || post.title}
                    className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                ) : (
                  <div
                    className="absolute inset-0 w-full h-full"
                    style={{ backgroundColor: "hsl(34 14% 82%)" }}
                  />
                )}
              </div>

              <div className="pt-4">
                <span
                  className="block mb-1.5 uppercase"
                  style={{
                    fontFamily: "'Montserrat', sans-serif",
                    fontSize: "10px",
                    fontWeight: 600,
                    letterSpacing: "0.1em",
                    color: "hsl(var(--terracotta))",
                  }}
                >
                  {post.category}
                </span>
                <h3
                  className="text-foreground group-hover:opacity-70 transition-opacity"
                  style={{
                    fontFamily: "'Cormorant Garamond', serif",
                    fontSize: "18px",
                    fontWeight: 400,
                    lineHeight: 1.3,
                  }}
                >
                  {post.title}
                </h3>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SimilarPosts;
