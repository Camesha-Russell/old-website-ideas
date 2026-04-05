const NewsletterBlock = () => {
  return (
    <section className="bg-nearblack py-[80px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <h2 className="font-display italic text-3xl md:text-4xl text-white leading-tight">
              Be the first to know what's worth it, and what to skip.
            </h2>
          </div>

          {/* Right - Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-lg border border-white/20 bg-white/10 font-body text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-1 focus:ring-white/40"
            />
            <button className="inline-block px-6 py-3 bg-terracotta text-white font-body text-sm uppercase tracking-[0.1em] font-medium rounded-lg hover:opacity-90 transition-opacity whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBlock;
