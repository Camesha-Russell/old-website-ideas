import { Link } from "react-router-dom";
import { PostFrontmatter } from "@/lib/blog";

interface PrevNextNavProps {
  prev: PostFrontmatter | null;
  next: PostFrontmatter | null;
}

const PrevNextNav = ({ prev, next }: PrevNextNavProps) => {
  if (!prev && !next) return null;

  return (
    <div
      style={{
        borderTop: "1px solid hsl(34 15% 90%)",
        borderBottom: "1px solid hsl(34 15% 90%)",
      }}
    >
      <div
        className="max-w-[1200px] mx-auto px-6 grid grid-cols-2 gap-4"
        style={{ paddingTop: "30px", paddingBottom: "30px" }}
      >
        {/* Previous */}
        <div>
          {prev && (
            <Link to={`/blog/${prev.slug}`} className="group block">
              <span
                className="block mb-1 uppercase text-muted-foreground"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                }}
              >
                Previous
              </span>
              <span
                className="text-foreground group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
              >
                {prev.title}
              </span>
            </Link>
          )}
        </div>

        {/* Next */}
        <div className="text-right">
          {next && (
            <Link to={`/blog/${next.slug}`} className="group block">
              <span
                className="block mb-1 uppercase text-muted-foreground"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "10px",
                  letterSpacing: "0.1em",
                }}
              >
                Next
              </span>
              <span
                className="text-foreground group-hover:opacity-70 transition-opacity"
                style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "14px" }}
              >
                {next.title}
              </span>
            </Link>
          )}
        </div>
      </div>
    </div>
  );
};

export default PrevNextNav;
