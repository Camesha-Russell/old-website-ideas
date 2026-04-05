const DM = "'DM Sans', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";
const TERRACOTTA = "hsl(11 52% 47%)";

const trendingPosts = [
  {
    category: "Sleep",
    title: "The Snoo vs. Budget Bassinets: Is It Worth $1,695?",
    excerpt: "We put the viral favourite against three budget alternatives. The results surprised even us.",
  },
  {
    category: "Gear",
    title: "Why We Changed Our Mind on This Popular Monitor",
  },
  {
    category: "Feeding",
    title: "Formula Prep Machines Ranked by Actual Parents",
  },
  {
    category: "Gear",
    title: "The Stroller That Replaced Our Entire Collection",
  },
];

const CurrentlyTrending = () => {
  const [featured, ...side] = trendingPosts;

  return (
    <section style={{ padding: "80px 0" }}>
      <div style={{ maxWidth: "1400px", margin: "0 auto", padding: "0 48px" }}>

        {/* Section label — anchored with terracotta rule */}
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

        {/* Two-column grid — generous gap */}
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
          <div
            className="group"
            style={{
              backgroundColor: "#ffffff",
              border: "1px solid hsl(34 15% 90%)",
              overflow: "hidden",
              cursor: "pointer",
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
          </div>

          {/* Stacked side cards */}
          <div style={{ display: "flex", flexDirection: "column", gap: "16px" }}>
            {side.map((post, i) => (
              <div
                key={i}
                className="group"
                style={{
                  backgroundColor: "#ffffff",
                  border: "1px solid hsl(34 15% 90%)",
                  overflow: "hidden",
                  display: "flex",
                  gap: "0",
                  alignItems: "stretch",
                  cursor: "pointer",
                }}
              >
                {/* Thumbnail — taller and wider */}
                <div
                  className="placeholder-img"
                  style={{
                    width: "160px",
                    flexShrink: 0,
                    minHeight: "120px",
                  }}
                />
                {/* Text */}
                <div style={{ padding: "18px 20px", display: "flex", flexDirection: "column", justifyContent: "center" }}>
                  <span
                    style={{
                      fontFamily: DM,
                      fontSize: "11px",
                      fontWeight: 700,
                      letterSpacing: "0.15em",
                      textTransform: "uppercase",
                      color: TERRACOTTA,
                      display: "block",
                      marginBottom: "8px",
                    }}
                  >
                    {post.category}
                  </span>
                  <h4
                    style={{
                      fontFamily: CORMORANT,
                      fontSize: "clamp(17px, 1.6vw, 20px)",
                      fontWeight: 400,
                      lineHeight: 1.3,
                      color: "hsl(0 0% 10%)",
                    }}
                    className="group-hover:opacity-70 transition-opacity"
                  >
                    {post.title}
                  </h4>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default CurrentlyTrending;
