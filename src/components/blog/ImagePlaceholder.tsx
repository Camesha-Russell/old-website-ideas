import React from "react";

interface ImagePlaceholderProps {
  /** What the image should show — used to generate the AI prompt reminder */
  label: string;
  /** Dimensions hint shown on the placeholder, e.g. "1200×630 px" */
  dimensions?: string;
  /** Aspect ratio class — "featured" (16:9), "product" (4:3 default), "portrait" (3:4) */
  aspect?: "featured" | "product" | "portrait";
}

const aspectMap = {
  featured: "aspect-[16/9]",
  product: "aspect-[4/3]",
  portrait: "aspect-[3/4]",
};

const ImagePlaceholder: React.FC<ImagePlaceholderProps> = ({
  label,
  dimensions,
  aspect = "product",
}) => {
  const DM = "'DM Sans', sans-serif";
  const CORMORANT = "'Cormorant Garamond', serif";

  return (
    <div
      className={`w-full ${aspectMap[aspect]} my-8`}
      style={{
        background: "hsl(34 33% 96%)",
        border: "2px dashed hsl(34 25% 75%)",
        borderRadius: "4px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        gap: "10px",
        padding: "24px",
      }}
    >
      {/* Camera icon */}
      <svg
        width="36"
        height="36"
        viewBox="0 0 24 24"
        fill="none"
        stroke="hsl(34 25% 65%)"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
        <circle cx="12" cy="13" r="4" />
      </svg>

      {/* Label */}
      <p
        style={{
          fontFamily: CORMORANT,
          fontSize: "15px",
          fontWeight: 500,
          color: "hsl(34 20% 45%)",
          textAlign: "center",
          lineHeight: 1.4,
          margin: 0,
        }}
      >
        {label}
      </p>

      {/* Dimensions hint */}
      {dimensions && (
        <p
          style={{
            fontFamily: DM,
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            color: "hsl(34 20% 60%)",
            margin: 0,
          }}
        >
          {dimensions}
        </p>
      )}
    </div>
  );
};

export default ImagePlaceholder;
