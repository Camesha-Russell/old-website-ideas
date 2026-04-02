const NewsletterBlock = () => {
  return (
    <section className="bg-taupe">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          {/* Left */}
          <div>
            <span className="nav-link text-muted-foreground text-[10px]">
              Subscribe via email
            </span>
            <h2 className="font-display italic text-3xl md:text-4xl mt-2 text-foreground">
              Join Our Community
            </h2>
          </div>

          {/* Right - Form */}
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              placeholder="Name"
              className="flex-1 px-4 py-3 rounded-sm border border-border bg-white font-nav text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <input
              type="email"
              placeholder="Email"
              className="flex-1 px-4 py-3 rounded-sm border border-border bg-white font-nav text-sm placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-foreground"
            />
            <button className="btn-dark text-[10px] whitespace-nowrap">
              Sign Up
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default NewsletterBlock;
