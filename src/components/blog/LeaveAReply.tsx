const LeaveAReply = () => {
  return (
    <section className="bg-white" style={{ paddingTop: "80px", paddingBottom: "80px" }}>
      <div className="max-w-[780px] mx-auto px-6">
        <h2
          className="text-foreground mb-3"
          style={{
            fontFamily: "'Cormorant Garamond', serif",
            fontSize: "28px",
            fontWeight: 400,
          }}
        >
          Leave a Reply
        </h2>
        <p
          className="text-muted-foreground mb-8"
          style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px" }}
        >
          Your email address will not be published. Required fields are marked *
        </p>

        <form onSubmit={(e) => e.preventDefault()} className="flex flex-col gap-5">
          {/* Comment textarea */}
          <textarea
            placeholder="Comment *"
            rows={7}
            className="w-full border border-border px-4 py-3 text-foreground resize-none focus:outline-none focus:border-foreground/50"
            style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "14px",
              borderRadius: "4px",
              backgroundColor: "hsl(var(--background))",
            }}
          />

          {/* Name / Email / Website row */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {["Name *", "Email *", "Website"].map((label) => (
              <input
                key={label}
                type="text"
                placeholder={label}
                className="w-full border border-border px-4 py-3 text-foreground focus:outline-none focus:border-foreground/50"
                style={{
                  fontFamily: "'DM Sans', sans-serif",
                  fontSize: "14px",
                  borderRadius: "4px",
                  backgroundColor: "hsl(var(--background))",
                }}
              />
            ))}
          </div>

          {/* Save checkbox */}
          <div className="flex items-start gap-3">
            <input type="checkbox" className="mt-1 cursor-pointer flex-shrink-0" />
            <span
              className="text-muted-foreground"
              style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px" }}
            >
              Save my name, email, and website in this browser for the next time I comment.
            </span>
          </div>

          {/* Submit */}
          <div>
            <button
              type="submit"
              className="bg-foreground text-background hover:opacity-80 transition-opacity"
              style={{
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "11px",
                fontWeight: 600,
                letterSpacing: "0.12em",
                textTransform: "uppercase",
                padding: "12px 24px",
              }}
            >
              Post Comment
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default LeaveAReply;
