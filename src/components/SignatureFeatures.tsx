const DM = "'DM Sans', sans-serif";
const CORMORANT = "'Cormorant Garamond', serif";
const TERRACOTTA = "hsl(11 52% 47%)";
const NEARBLACK = "hsl(0 0% 10%)";
const MUTED = "hsl(0 0% 38%)";

const trustPillars = [
  {
    number: "01",
    headline: "No Paid Placements. Ever.",
    body: "We don't accept money, free product, or affiliate pressure to recommend anything. If it's on this site, it earned its spot.",
  },
  {
    number: "02",
    headline: "Safety Is the First Filter.",
    body: "Before a product makes our list, we check CPSC recalls, pediatric safety guidelines, and real parent reports. Pretty doesn't cut it.",
  },
  {
    number: "03",
    headline: "We Say No. Publicly.",
    body: "If a product doesn't pass our standards, we publish a We Said No post so you know exactly what to avoid and why we walked away.",
  },
  {
    number: "04",
    headline: "Organized by Your Baby's Age.",
    body: "Every recommendation is sorted by developmental stage. You'll never be steered toward something your baby isn't ready for.",
  },
];

const SignatureFeatures = () => {
  return (
    <section
      style={{
        backgroundColor: "hsl(147 18% 94%)",
        padding: "80px 24px 90px",
      }}
    >
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>

        {/* Section header */}
        <div style={{ textAlign: "center", marginBottom: "60px" }}>
          <p
            style={{
              fontFamily: DM,
              fontSize: "11px",
              fontWeight: 700,
              letterSpacing: "0.18em",
              textTransform: "uppercase",
              color: TERRACOTTA,
              marginBottom: "14px",
            }}
          >
            Why Moms Trust Us
          </p>
          {/* Terracotta rule */}
          <div
            style={{
              width: "32px",
              height: "2px",
              backgroundColor: TERRACOTTA,
              margin: "0 auto 20px",
            }}
          />
          <h2
            style={{
              fontFamily: CORMORANT,
              fontSize: "clamp(28px, 3.5vw, 42px)",
              fontWeight: 400,
              color: NEARBLACK,
              lineHeight: 1.2,
              maxWidth: "800px",
              margin: "0 auto 16px",
            }}
          >
            We do the research so you don't have to.
          </h2>
          <p
            style={{
              fontFamily: DM,
              fontSize: "15px",
              color: MUTED,
              lineHeight: 1.75,
              maxWidth: "620px",
              margin: "0 auto",
            }}
          >
            Every recommendation on this site is vetted against safety standards, pediatric guidelines, and real parent experience. Not a press kit.
          </p>
        </div>

        {/* Trust pillars grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
            gap: "40px 48px",
          }}
        >
          {trustPillars.map((pillar) => (
            <div key={pillar.number}>
              {/* Number */}
              <span
                style={{
                  fontFamily: DM,
                  fontSize: "12px",
                  fontWeight: 700,
                  letterSpacing: "0.12em",
                  color: TERRACOTTA,
                  display: "block",
                  marginBottom: "12px",
                }}
              >
                {pillar.number}
              </span>
              {/* Thin top border */}
              <div
                style={{
                  width: "100%",
                  height: "1px",
                  backgroundColor: "hsl(147 16% 78%)",
                  marginBottom: "16px",
                }}
              />
              {/* Headline */}
              <h3
                style={{
                  fontFamily: DM,
                  fontSize: "15px",
                  fontWeight: 700,
                  color: NEARBLACK,
                  marginBottom: "10px",
                  lineHeight: 1.35,
                  letterSpacing: "-0.01em",
                }}
              >
                {pillar.headline}
              </h3>
              {/* Body */}
              <p
                style={{
                  fontFamily: DM,
                  fontSize: "14px",
                  color: MUTED,
                  lineHeight: 1.75,
                  margin: 0,
                }}
              >
                {pillar.body}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default SignatureFeatures;
