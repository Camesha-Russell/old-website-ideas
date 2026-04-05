import { Link } from "react-router-dom";

const StartHereCTA = () => {
  return (
    <section
      className="w-full py-16 px-6"
      style={{ backgroundColor: "hsl(34 20% 93%)" }}
    >
      <div className="max-w-[800px] mx-auto text-center">
        <p
          className="uppercase text-foreground mb-4"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            fontWeight: 600,
            letterSpacing: "0.15em",
          }}
        >
          New here?
        </p>
        <h2
          className="text-foreground mb-4"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "clamp(28px, 4vw, 40px)",
            fontWeight: 400,
            lineHeight: 1.2,
          }}
        >
          Not sure where to start?
        </h2>
        <p
          className="text-muted-foreground mb-8 mx-auto"
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "16px",
            lineHeight: 1.75,
            maxWidth: "560px",
          }}
        >
          We built a 2-minute guide that tells you exactly which products are worth
          researching for your baby's age — and which ones to skip entirely.
        </p>
        <Link
          to="/start-here"
          className="inline-block px-8 py-4 bg-foreground text-background font-body text-sm uppercase tracking-[0.12em] font-medium hover:opacity-80 transition-opacity"
        >
          Take Me to Start Here →
        </Link>
      </div>
    </section>
  );
};

export default StartHereCTA;
