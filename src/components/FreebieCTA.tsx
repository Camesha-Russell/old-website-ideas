const FreebieCTA = () => {
  return (
    <section className="bg-accent">
      <div className="max-w-[1400px] mx-auto px-4 py-16 md:py-24">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-16 items-center">
          {/* Left — Stacked guide covers */}
          <div className="lg:col-span-2 flex justify-center">
            <div className="relative w-[280px] h-[360px] md:w-[320px] md:h-[420px]">
              {/* Back cover */}
              <div className="absolute top-4 left-4 w-[200px] h-[280px] md:w-[230px] md:h-[320px] bg-white rounded-sm shadow-lg -rotate-6 flex flex-col items-center justify-center p-6">
                <span className="font-serif-display text-foreground text-center text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
                  The Ultimate<br />Nursery<br />Checklist
                </span>
                <div className="mt-3 w-10 h-[2px] bg-accent" />
              </div>
              {/* Middle cover */}
              <div className="absolute top-2 left-10 w-[200px] h-[280px] md:w-[230px] md:h-[320px] bg-white rounded-sm shadow-lg rotate-2 flex flex-col items-center justify-center p-6">
                <span className="font-serif-display text-foreground text-center text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
                  Sleep<br />Training<br />Guide
                </span>
                <div className="mt-3 w-10 h-[2px] bg-accent" />
              </div>
              {/* Front cover */}
              <div className="absolute top-0 left-16 w-[200px] h-[280px] md:w-[230px] md:h-[320px] bg-white rounded-sm shadow-xl rotate-6 flex flex-col items-center justify-center p-6">
                <span className="font-serif-display text-foreground text-center text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
                  Feeding<br />Essentials<br />101
                </span>
                <div className="mt-3 w-10 h-[2px] bg-accent" />
              </div>
            </div>
          </div>

          {/* Right — Text + Form */}
          <div className="lg:col-span-3">
            <h2 className="font-serif-display text-foreground text-3xl md:text-4xl lg:text-[42px] font-bold uppercase leading-tight tracking-wide">
              Get Your Free Starter Kit and{" "}
              <em className="not-italic italic">Simplify Your Parenting Journey.</em>
            </h2>
            <p className="mt-6 text-muted-foreground text-base leading-relaxed max-w-lg">
              Get the essential checklists, guides, and tips we use every day to make parenting easier — delivered straight to your inbox.
            </p>

            <div className="mt-8 space-y-4 max-w-md">
              <input
                type="email"
                placeholder="Your E-Mail"
                className="w-full px-4 py-3 border border-border bg-white rounded-sm font-sans-nav text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
              />
              <button className="btn-dark w-full text-[11px]">
                Sign Up
              </button>
              <label className="flex items-start gap-2 cursor-pointer">
                <input type="checkbox" className="mt-1 accent-foreground" />
                <span className="text-muted-foreground text-xs leading-relaxed">
                  I would like to receive news and special offers.
                </span>
              </label>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreebieCTA;
