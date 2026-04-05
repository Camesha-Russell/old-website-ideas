interface BlogPostHeaderProps {
  category: string;
  title: string;
  publishDate: string;
  readTime?: number;
}

const BlogPostHeader = ({ category, title, publishDate, readTime = 5 }: BlogPostHeaderProps) => {
  const formattedDate = new Date(publishDate).toLocaleDateString("en-US", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <div
      className="w-full text-center px-6"
      style={{ backgroundColor: "hsl(var(--background))", paddingTop: "56px", paddingBottom: "40px" }}
    >
      {/* Category */}
      <span
        className="block mb-4 uppercase text-foreground"
        style={{
          fontFamily: "'Montserrat', sans-serif",
          fontSize: "11px",
          fontWeight: 600,
          letterSpacing: "1.1px",
        }}
      >
        {category}
      </span>

      {/* Title */}
      <h1
        className="mx-auto text-foreground"
        style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(30px, 4.5vw, 48px)",
          fontWeight: 400,
          lineHeight: 1.15,
          maxWidth: "800px",
          marginBottom: "20px",
        }}
      >
        {title}
      </h1>

      {/* Meta: author • date • read time */}
      <p
        className="uppercase text-foreground"
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px",
          fontWeight: 400,
          letterSpacing: "1.1px",
        }}
      >
        By Its Mom Approved &bull; {formattedDate} &bull; {readTime} min read
      </p>
    </div>
  );
};

export default BlogPostHeader;
