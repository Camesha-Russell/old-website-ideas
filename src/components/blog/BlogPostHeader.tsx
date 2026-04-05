interface BlogPostHeaderProps {
  category: string;
  title: string;
  publishDate: string;
  readTime?: number;
}

const LORA = "'Lora', serif";
const DM = "'DM Sans', sans-serif";

const BlogPostHeader = ({ category, title, publishDate, readTime = 5 }: BlogPostHeaderProps) => {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      style={{
        width: "100%",
        textAlign: "center",
        backgroundColor: "#ffffff",
        padding: "60px 24px 44px",
        borderBottom: "1px solid hsl(34 15% 90%)",
      }}
    >
      {/* Category — terracotta, uppercase */}
      <span
        style={{
          display: "inline-block",
          fontFamily: DM,
          fontSize: "11px",
          fontWeight: 700,
          letterSpacing: "0.18em",
          textTransform: "uppercase",
          color: "hsl(11 52% 47%)",
          marginBottom: "6px",
        }}
      >
        {category}
      </span>

      {/* Terracotta rule under category */}
      <div
        style={{
          width: "32px",
          height: "2px",
          backgroundColor: "hsl(11 52% 47%)",
          margin: "0 auto 20px",
        }}
      />

      {/* Title — Lora, strong but elegant */}
      <h1
        style={{
          fontFamily: LORA,
          fontSize: "clamp(28px, 4.5vw, 50px)",
          fontWeight: 600,
          lineHeight: 1.18,
          color: "hsl(0 0% 10%)",
          maxWidth: "820px",
          margin: "0 auto 22px",
          letterSpacing: "-0.01em",
        }}
      >
        {title}
      </h1>

      {/* Meta — DM Sans, muted */}
      <p
        style={{
          fontFamily: DM,
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "0.1em",
          textTransform: "uppercase",
          color: "hsl(0 0% 50%)",
        }}
      >
        {formattedDate} &bull; {readTime} min read
        </p>
    </div
  );
};

export default BlogPostHeader;
