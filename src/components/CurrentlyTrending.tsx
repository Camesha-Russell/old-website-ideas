import { Link } from "react-router-dom";
import { getAllPostsIncludingDrafts } from "@/lib/blog";

const DM = "'DM Sans', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";
const TERRACOTTA = "hsl(11 52% 47%)";

// Fallback curated posts shown before enough real content exists
const FALLBACK_POSTS = [
  {
    slug: null,
    category: "Sleep",
    title: "The Snoo vs. Budget Bassinets: Is It Worth $1,695?",
    excerpt: "We put the viral favourite against three budget alternatives. The results surprised even us.",
  },
  {
    slug: null,
    category: "Gear",
    title: "Why We Changed Our Mind on This Popular Monitor",
    excerpt: null,
  },
  {
    slug: null,
    category: "Feeding",
    title: "Formula Prep Machines Ranked by Actual Parents",
    excerpt: null,
  },
  {
    slug: null,
    category: "Gear",
    title: "The Stroller That Replaced Our Entire Collection",
    excerpt: null,
  },
  {
    slug: null,
    category: "Safety",
    title: "Baby Gear That Looks Safe But Isn't",
    excerpt: null,
  },
];

const CurrentlyTrending = () => {
  // Pull real posts (including drafts so content shows during dev)
  const realPosts = getAllPostsIncludingDrafts().slice(0, 5).map((p) => ({
    slug: p.slug,
    category: p.category,
    title: p.title,
    excerpt: p.excerpt ?? null,
  }));

  // Merge: fill any slots not covered by real posts with fallback
  const merged = Array.from({ length: 5 }, (_, i) =>
    realPosts[i] ?? FALLBACK_POSTS[i]
  );

  const [featured, ...side] = merged; // 1 featured + 4 side

  const CardLink = ({
    slug,
    children,
    className,
    style,
  }: {
    slug: string | null;
    children: React.ReactNode;
    className?: string;
    style?: React.CSSProperties;
  }) =>
    slug ? (
      <Link to={`/blog/${slug}`} className={className} style={style}>
        {children}
      </Link>
    ) : (
      <div className={className} style={style}>
        {children}
      </div>
    );

  return (
    <section style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px" }}>

        {/* Section label */}
        <div style={{ textAlign: "center", marginBottom: "48px" }}>
          <p
            style={{
              fontFamily: DM,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.2em",
              textTransform: "uppercase",
              color: "hsl(0 0% 20%)",
              marginBottom: "10px",
            }}
          >
            Currently Trending
          </p>
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: TERRACOTTA,
              margin: "0 auto",
            }}
          />
        </div>

        {/* Two-column grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "40px",
            alignItems: "start",
          }}
          className="grid-cols-1 lg:grid-cols-2"
        >
          {/* Large featured card */}
          <CardLink
            slug={featured.slug}
            className="group"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid hsl(34 15% 90%)",
              overflow: "hidden",
              cursor: featured.slug ? "pointer" : "default",
              display: "block",
              textDecoration: "none",
            }}
          >
            <div
              className="placeholder-img"
              style={{ width: "100%", aspectRatio: "4/3" }}
            />
            <div style={{ padding: "24px 28px 28px" }}>
              <span
                style={{
                  fontFamily: DM,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.15em",
                  textTransform: "uppercase",
                  color: TERRACOTTA,
                  display: "block",
                  marginBottom: "10px",
                }}
              >
                {featured.category}
              </span>
              <h3
                style={{
                  fontFamily: CORMORANT,
                  fontSize: "clamp(20px, 2.2vw, 28px)",
                  fontWeight: 400,
                  lineHeight: 1.25,
                  color: "hsl(0 0% 10%)",
                  marginBottom: "10px",
                }}
                className="group-hover:opacity-70 transition-opacity"
              >
                {featured.title}
              </h3>
              {featured.excerpt && (
                <p
                  style={{
                    fontFamily: DM,
                    fontSize: "14px",
                    color: "hsl(0 0% 38%)",
                    lineHeight: 1.7,
                  }}
                >
                  {featured.excerpt}
                </p>
              )}
            </div>
          </CardLink>

          {/* 4 stacked side cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {side.map((post, i) => (
              <CardLink
                key={i}
                slug={post.slug}
                className="group"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid hsl(34 15% 90%)",
                  overflow: "hidden",
                  display: "flex",
                  gap: "0",
                  alignItems: "stretch",
                  cursor: post.slug ? "pointer" : "default",
                  textDecoration: "none",
                }}
              >
                {/* Thumbnail */}
                <div
                  className="placeholder-img"
                  style={{
                    width: "140px",
                    flexShrink: 0,
                    minHeight: "100px",
                  }}
                />
                {/* Text */}
                <div
                  style={{
                    padding: "14px 18px",
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "center",
                  }}
                >
                  <span
                    style={{
                      fontFamily: DM,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: TERRACOTTA,
                      display: "block",
                      marginBottom: "6px",
                    }}
                  >
                    {post.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: CORMORANT,
                      fontSize: "clamp(15px, 1.4vw, 18px)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "hsl(0 0% 10%)",
                      margin: 0,
                    }}
                    className="group-hover:opacity-70 transition-opacity"
                  >
                    {post.title}
                  </h4>
                </div>
              </CardLink>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
