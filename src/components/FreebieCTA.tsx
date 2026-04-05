const FreebieCTA = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="bg-accent rounded-lg overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-5 gap-10 lg:gap-2 items-center px-8 md:px-12 py-12 md:py-16">
            {/* Left — Stacked guide covers */}
            <div className="lg:col-span-2 flex justify-center">
              <div className="relative w-[280px] h-[300px] md:w-[320px] md:h-[360px]">
                {/* Back cover */}
                <div className="absolute top-4 left-4 w-[180px] h-[250px] md:w-[210px] md:h-[290px] bg-white rounded-lg shadow-lg -rotate-6 flex flex-col items-center justify-center p-6">
                  <span className="font-display text-foreground text-center text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
                    The Ultimate<br />Nursery<br />Checklist
                  </span>
                  <div className="mt-3 w-10 h-[2px] bg-terracotta" />
                </div>
                {/* Front cover */}
                <div className="absolute top-0 left-16 w-[180px] h-[250px] md:w-[210px] md:h-[290px] bg-white rounded-lg shadow-xl rotate-6 flex flex-col items-center justify-center p-6">
                  <span className="font-display text-foreground text-center text-sm md:text-base font-bold uppercase tracking-wide leading-tight">
                    Feeding<br />Essentials<br />101
                  </span>
                  <div className="mt-3 w-10 h-[2px] bg-terracotta" />
                </div>
              </div>
            </div>

            {/* Right — Text + Form */}
            <div className="lg:col-span-3">
              <h2 className="font-display text-foreground text-xl md:text-2xl font-bold italic leading-tight">
                Get Your Free Starter Kit and Simplify Your Parenting Journey.
              </h2>
              <p className="mt-3 text-muted-foreground text-sm font-body leading-relaxed max-w-lg">
                Get the essential checklists, guides, and tips we use every day to make parenting easier — delivered straight to your inbox.
              </p>

              <div className="mt-5 space-y-3 max-w-lg">
                <div className="flex gap-0">
                  <input
                    type="email"
                    placeholder="Your E-Mail"
                    className="flex-1 px-4 py-3 border border-border bg-white rounded-lg rounded-r-none font-body text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
                  />
                  <button className="px-6 py-3 bg-terracotta text-white font-body text-sm uppercase tracking-[0.1em] font-medium rounded-lg rounded-l-none whitespace-nowrap hover:opacity-90 transition-opacity">
                    Sign Up
                  </button>
                </div>
                <label className="flex items-start gap-2 cursor-pointer">
                  <input type="checkbox" className="mt-1 accent-foreground" />
                  <span className="text-muted-foreground text-xs font-body leading-relaxed">
                    I would like to receive news and special offers.
                  </span>
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreebieCTA;
