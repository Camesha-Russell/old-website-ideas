import { Link } from "react-router-dom";

const trendingTopics = [
  { title: "The Only Baby Monitor That Earned Our Full Trust", path: "/blog/nanit-vs-owlet" },
  { title: "Best Formula Prep Machines Ranked by Parents", path: "/blog/feeding-essentials-guide" },
  { title: "When to Start Sleep Training (And What Actually Works)", path: "/blog/best-sleep-products-2026" },
  { title: "Carrier vs. Stroller — What Nobody Tells You", path: "/blog/ergobaby-vs-solly-baby-wrap" },
  { title: "The 5 Baby Items We Wish We'd Bought First", path: "/blog/hatch-rest-vs-hatch-rest-plus" },
];

const categories = [
  { name: "Sleep", path: "/sleep" },
  { name: "Feeding", path: "/feeding" },
  { name: "Carriers & Strollers", path: "/carriers-and-strollers" },
  { name: "Play & Development", path: "/play-and-development" },
  { name: "Safety", path: "/safety" },
  { name: "We Said No", path: "/we-said-no" },
];

const LORA = "'Lora', serif";
const DM = "'DM Sans', sans-serif";

const BlogSidebar = () => {
  return (
    <aside
      style={{
        backgroundColor: "hsl(147 18% 94%)",
        borderLeft: "3px solid hsl(11 52% 47%)",
        padding: "28px 24px",
        display: "flex",
        flexDirection: "column",
        gap: "36px",
      }}
    >

      {/* Widget 1: About card */}
      <div>
        {/* Portrait placeholder */}
        <div
          style={{
            width: "100%",
            aspectRatio: "3/4",
            position: "relative",
            overflow: "hidden",
            backgroundColor: "hsl(147 16% 72%)",
            marginBottom: "20px",
          }}
        >
          {/* subtle IMA text overlay */}
          <div
            style={{
              position: "absolute",
              inset: 0,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <span
              style={{
                fontFamily: LORA,
                fontSize: "13px",
                fontStyle: "italic",
                color: "rgba(255,255,255,0.7)",
                letterSpacing: "0.05em",
              }}
            >
              It's Mom Approved
            </span>
          </div>
        </div>

        <p
          style={{
            fontFamily: LORA,
            fontSize: "21px",
            fontStyle: "italic",
            fontWeight: 400,
            color: "hsl(0 0% 11%)",
            textAlign: "center",
            marginBottom: "10px",
          }}
        >
          Hey, friends!
        </p>
        <p
          style={{
            fontFamily: DM,
            fontSize: "13px",
            lineHeight: 1.75,
            color: "hsl(0 0% 35%)",
            textAlign: "center",
            marginBottom: "18px",
          }}
        >
          Every recommendation here is earned — not paid for. Real research, real moms, real answers.
        </p>
        <div style={{ textAlign: "center" }}>
          <Link
            to="/start-here"
            style={{
              display: "inline-block",
              padding: "10px 24px",
              backgroundColor: "hsl(11 52% 47%)",
              color: "#ffffff",
              fontFamily: DM,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              textDecoration: "none",
              transition: "opacity 0.2s",
            }}
            onMouseEnter={(e) => (e.currentTarget.style.opacity = "0.85")}
            onMouseLeave={(e) => (e.currentTarget.style.opacity = "1")}
          >
            Start Here
          </Link>
        </div>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "hsl(147 16% 82%)" }} />

      {/* Widget 2: Trending Topics */}
      <div>
        <h3
          style={{
            fontFamily: LORA,
            fontSize: "19px",
            fontWeight: 600,
            color: "hsl(0 0% 11%)",
            marginBottom: "16px",
            letterSpacing: "-0.01em",
          }}
        >
          Trending Topics
        </h3>
        <ol style={{ display: "flex", flexDirection: "column", margin: 0, padding: 0, listStyle: "none" }}>
          {trendingTopics.map((topic, i) => (
            <li
              key={i}
              style={{
                display: "flex",
                gap: "14px",
                alignItems: "flex-start",
                padding: "12px 0",
                borderBottom: i < trendingTopics.length - 1 ? "1px solid hsl(147 16% 82%)" : "none",
              }}
            >
              <span
                style={{
                  fontFamily: DM,
                  fontSize: "11px",
                  fontWeight: 700,
                  letterSpacing: "0.08em",
                  color: "hsl(11 52% 47%)",
                  flexShrink: 0,
                  paddingTop: "2px",
                  minWidth: "22px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <Link
                to={topic.path}
                style={{
                  fontFamily: DM,
                  fontSize: "13px",
                  lineHeight: 1.5,
                  color: "hsl(0 0% 15%)",
                  textDecoration: "none",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(11 52% 47%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 15%)")}
              >
                {topic.title}
              </Link>
            </li>
          ))}
        </ol>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "hsl(147 16% 82%)" }} />

      {/* Widget 3: Free Guide CTA */}
      <div
        style={{
          backgroundColor: "hsl(0 0% 11%)",
          padding: "24px 20px",
          textAlign: "center",
        }}
      >
        <p
          style={{
            fontFamily: DM,
            fontSize: "10px",
            fontWeight: 600,
            letterSpacing: "0.15em",
            textTransform: "uppercase",
            color: "hsl(11 52% 47%)",
            marginBottom: "10px",
          }}
        >
          Free Download
        </p>
        <p
          style={{
            fontFamily: LORA,
            fontSize: "17px",
            fontStyle: "italic",
            color: "#ffffff",
            lineHeight: 1.4,
            marginBottom: "8px",
          }}
        >
          The No-Regrets Baby Gear Guide
        </p>
        <p
          style={{
            fontFamily: DM,
            fontSize: "12px",
            color: "rgba(255,255,255,0.6)",
            lineHeight: 1.6,
            marginBottom: "18px",
          }}
        >
          What to buy, what to skip, and when — sorted by your baby's age.
        </p>
        <Link
          to="/starter-kit"
          style={{
            display: "inline-block",
            padding: "10px 20px",
            backgroundColor: "hsl(11 52% 47%)",
            color: "#ffffff",
            fontFamily: DM,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.12em",
            textTransform: "uppercase",
            textDecoration: "none",
          }}
        >
          Get It Free
        </Link>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "hsl(147 16% 82%)" }} />

      {/* Widget 4: Subscribe */}
      <div>
        <h3
          style={{
            fontFamily: LORA,
            fontSize: "19px",
            fontWeight: 600,
            color: "hsl(0 0% 11%)",
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          Stay in the Loop
        </h3>
        <p
          style={{
            fontFamily: DM,
            fontSize: "12px",
            color: "hsl(0 0% 35%)",
            lineHeight: 1.65,
            textAlign: "center",
            marginBottom: "16px",
          }}
        >
          Research drops, honest reviews, and zero spam.
        </p>
        <form onSubmit={(e) => e.preventDefault()} style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
          <input
            type="text"
            placeholder="First Name"
            style={{
              width: "100%",
              border: "1px solid hsl(147 16% 78%)",
              padding: "11px 14px",
              fontFamily: DM,
              fontSize: "13px",
              borderRadius: "6px",
              backgroundColor: "#ffffff",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <input
            type="email"
            placeholder="Email Address"
            style={{
              width: "100%",
              border: "1px solid hsl(147 16% 78%)",
              padding: "11px 14px",
              fontFamily: DM,
              fontSize: "13px",
              borderRadius: "6px",
              backgroundColor: "#ffffff",
              outline: "none",
              boxSizing: "border-box",
            }}
          />
          <button
            type="submit"
            style={{
              width: "100%",
              padding: "12px",
              backgroundColor: "hsl(11 52% 47%)",
              color: "#ffffff",
              fontFamily: DM,
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.12em",
              textTransform: "uppercase",
              border: "none",
              cursor: "pointer",
              borderRadius: "6px",
            }}
          >
            Send It to Me
          </button>
        </form>
      </div>

      {/* Divider */}
      <div style={{ height: "1px", backgroundColor: "hsl(147 16% 82%)" }} />

      {/* Widget 5: Categories */}
      <div>
        <h3
          style={{
            fontFamily: LORA,
            fontSize: "19px",
            fontWeight: 600,
            color: "hsl(0 0% 11%)",
            marginBottom: "14px",
            textAlign: "center",
          }}
        >
          Browse by Category
        </h3>
        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "10px",
            listStyle: "none",
            padding: 0,
            margin: 0,
          }}
        >
          {categories.map((cat) => (
            <li key={cat.path}>
              <Link
                to={cat.path}
                style={{
                  fontFamily: DM,
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.12em",
                  textTransform: "uppercase",
                  color: "hsl(0 0% 22%)",
                  textDecoration: "none",
                  transition: "color 0.2s",
                }}
                onMouseEnter={(e) => (e.currentTarget.style.color = "hsl(11 52% 47%)")}
                onMouseLeave={(e) => (e.currentTarget.style.color = "hsl(0 0% 22%)")}
              >
                {cat.name}
              </Link>
            </li>
          ))}
        </ul>
      </div>

    </aside>
  );
};

export default BlogSidebar;
