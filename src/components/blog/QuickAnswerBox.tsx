import React from "react";

interface QuickAnswerBoxProps {
  topPickName: string;
  topPickPrice: string;
  budgetPickName: string;
  budgetPickPrice: string;
}

const DM = "'DM Sans', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";
const TERRACOTTA = "hsl(11 52% 47%)";
const TERRACOTTA_BG = "hsl(11 52% 96%)";
const BORDER = "hsl(34 25% 85%)";
const MUTED = "hsl(0 0% 40%)";
const NEARBLACK = "hsl(0 0% 10%)";

const QuickAnswerBox: React.FC<QuickAnswerBoxProps> = ({
  topPickName,
  topPickPrice,
  budgetPickName,
  budgetPickPrice,
}) => {
  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        gap: "1px",
        background: BORDER,
        border: `1px solid ${BORDER}`,
        marginBottom: "40px",
        marginTop: "8px",
      }}
      className="grid-cols-1 sm:grid-cols-2"
    >
      {/* Top Pick */}
      <div
        style={{
          background: TERRACOTTA_BG,
          padding: "24px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: DM,
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: TERRACOTTA,
          }}
        >
          ★ Our Top Pick
        </span>
        <p
          style={{
            fontFamily: CORMORANT,
            fontSize: "clamp(17px, 1.8vw, 22px)",
            fontWeight: 500,
            color: NEARBLACK,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {topPickName}
        </p>
        <p
          style={{
            fontFamily: DM,
            fontSize: "15px",
            fontWeight: 700,
            color: TERRACOTTA,
            margin: 0,
          }}
        >
          {topPickPrice}
        </p>
      </div>

      {/* Budget Pick */}
      <div
        style={{
          background: "#ffffff",
          padding: "24px 28px",
          display: "flex",
          flexDirection: "column",
          gap: "6px",
        }}
      >
        <span
          style={{
            fontFamily: DM,
            fontSize: "10px",
            fontWeight: 700,
            letterSpacing: "0.18em",
            textTransform: "uppercase",
            color: MUTED,
          }}
        >
          Best Budget Option
        </span>
        <p
          style={{
            fontFamily: CORMORANT,
            fontSize: "clamp(17px, 1.8vw, 22px)",
            fontWeight: 500,
            color: NEARBLACK,
            lineHeight: 1.25,
            margin: 0,
          }}
        >
          {budgetPickName}
        </p>
        <p
          style={{
            fontFamily: DM,
            fontSize: "15px",
            fontWeight: 700,
            color: MUTED,
            margin: 0,
          }}
        >
          {budgetPickPrice}
        </p>
      </div>
    </div>
  );
};

export default QuickAnswerBox;
