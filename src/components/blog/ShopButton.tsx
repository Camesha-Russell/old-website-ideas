import React from "react";

interface ShopButtonProps {
  /** Product name displayed in the button */
  product: string;
  /** Price displayed as a badge, e.g. "$90" */
  price?: string;
  /** Affiliate href — use INSERT_AFFILIATE_LINK_[PRODUCT] until real link is added */
  href: string;
}

const DM = "'DM Sans', sans-serif";

const ShopButton: React.FC<ShopButtonProps> = ({ product, price, href }) => {
  const isPlaceholder = href.startsWith("INSERT_");

  return (
    <div style={{ margin: "20px 0 28px" }}>
      <a
        href={isPlaceholder ? "#" : href}
        target={isPlaceholder ? undefined : "_blank"}
        rel={isPlaceholder ? undefined : "noopener noreferrer sponsored"}
        onClick={isPlaceholder ? (e) => e.preventDefault() : undefined}
        style={{
          display: "inline-flex",
          alignItems: "center",
          gap: "12px",
          backgroundColor: isPlaceholder ? "hsl(0 0% 82%)" : "hsl(11 52% 47%)",
          color: "#ffffff",
          fontFamily: DM,
          fontSize: "13px",
          fontWeight: 700,
          letterSpacing: "0.06em",
          textTransform: "uppercase",
          textDecoration: "none",
          padding: "14px 24px",
          cursor: isPlaceholder ? "not-allowed" : "pointer",
          transition: "opacity 0.15s ease",
        }}
        className={isPlaceholder ? "" : "hover:opacity-85"}
        title={isPlaceholder ? "Affiliate link coming soon" : `Shop ${product}`}
      >
        {/* Cart icon */}
        <svg
          width="16"
          height="16"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0 }}
        >
          <circle cx="9" cy="21" r="1" />
          <circle cx="20" cy="21" r="1" />
          <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
        </svg>

        <span>Shop {product}</span>

        {price && (
          <span
            style={{
              backgroundColor: "rgba(255,255,255,0.22)",
              padding: "2px 8px",
              fontSize: "12px",
              fontWeight: 800,
              letterSpacing: "0.04em",
            }}
          >
            {price}
          </span>
        )}

        {/* Arrow */}
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
          style={{ flexShrink: 0, marginLeft: "2px" }}
        >
          <line x1="5" y1="12" x2="19" y2="12" />
          <polyline points="12 5 19 12 12 19" />
        </svg>
      </a>

      {isPlaceholder && (
        <p
          style={{
            fontFamily: DM,
            fontSize: "11px",
            color: "hsl(0 0% 55%)",
            marginTop: "6px",
            marginBottom: 0,
            fontStyle: "italic",
          }}
        >
          Affiliate link will be added before publishing.
        </p>
      )}
    </div>
  );
};

export default ShopButton;
