import { Link } from "react-router-dom";

const trendingTopics = [
  "The Only Baby Monitor That Earned Our Full Trust",
  "Best Formula Prep Machines Ranked by Parents",
  "When to Start Sleep Training (And What Actually Works)",
  "Carrier vs. Stroller — What Nobody Tells You",
  "The 5 Baby Items We Wish We'd Bought First",
];

const categories = [
  { name: "Sleep", path: "/sleep" },
  { name: "Feeding", path: "/feeding" },
  { name: "Carriers & Strollers", path: "/carriers-and-strollers" },
  { name: "Play & Development", path: "/play-and-development" },
  { name: "Postpartum & Mom", path: "/postpartum-and-mom" },
  { name: "Safety", path: "/safety" },
];

const BlogSidebar = () => {
  return (
    <aside className="flex flex-col gap-10">

      {/* Widget 1: Portrait about card */}
      <div>
        <div
          className="w-full overflow-hidden"
          style={{ aspectRatio: "3/4", position: "relative" }}
        >
          <div
            className="absolute inset-0 w-full h-full"
            style={{ backgroundColor: "hsl(34 14% 82%)" }}
          />
        </div>
        <div className="pt-5 text-center">
          <p
            className="text-foreground mb-3"
            style={{
              fontFamily: "'Cormorant Garamond', serif",
              fontSize: "22px",
              fontStyle: "italic",
              fontWeight: 400,
            }}
          >
            Hey, friends!
          </p>
          <p
            className="text-muted-foreground mb-5"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              lineHeight: 1.7,
            }}
          >
            We're so glad you stopped by. Every recommendation here is earned — not paid for. Real research, real moms, real answers.
          </p>
          <Link
            to="/start-here"
            className="inline-block px-6 py-2.5 uppercase tracking-widest text-foreground hover:opacity-70 transition-opacity"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              backgroundColor: "hsl(var(--accent))",
            }}
          >
            Start Here
          </Link>
        </div>
      </div>

      {/* Widget 2: Trending Topics */}
      <div>
        <h3
          className="text-foreground mb-5"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          Trending Topics
        </h3>
        <ol className="flex flex-col">
          {trendingTopics.map((topic, i) => (
            <li
              key={i}
              className="flex gap-4 items-start py-3"
              style={{ borderBottom: "1px solid hsl(34 15% 90%)" }}
            >
              <span
                className="flex-shrink-0 pt-0.5"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "11px",
                  fontWeight: 600,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  color: "hsl(var(--terracotta))",
                  minWidth: "24px",
                }}
              >
                {String(i + 1).padStart(2, "0")}
              </span>
              <span
                className="text-foreground"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "13px",
                  lineHeight: 1.5,
                }}
              >
                {topic}
              </span>
            </li>
          ))}
        </ol>
      </div>

      {/* Widget 3: Subscribe */}
      <div>
        <h3
          className="text-foreground mb-5 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          Subscribe
        </h3>
        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-3">
          <input
            type="text"
            placeholder="Name"
            className="w-full border border-border px-3 py-3 text-foreground focus:outline-none focus:border-foreground/50"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              borderRadius: "8px",
            }}
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full border border-border px-3 py-3 text-foreground focus:outline-none focus:border-foreground/50"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "13px",
              borderRadius: "8px",
            }}
          />
          <button
            type="submit"
            className="w-full bg-foreground text-background py-3 hover:opacity-80 transition-opacity"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "11px",
              fontWeight: 600,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            Sign Up
          </button>
        </form>
      </div>

      {/* Widget 4: Categories */}
      <div>
        <h3
          className="text-foreground mb-5 text-center"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "20px",
            fontWeight: 400,
          }}
        >
          Categories
        </h3>
        <ul className="flex flex-col items-center gap-2.5">
          {categories.map((cat) => (
            <li key={cat.path}>
              <Link
                to={cat.path}
                className="text-foreground hover:text-terracotta transition-colors"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "12px",
                  fontWeight: 500,
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                }}
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
