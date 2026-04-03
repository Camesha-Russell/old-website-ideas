import { Link } from "react-router-dom";

const sleepPosts = [
  { title: "Best Sound Machines for Nurseries" },
  { title: "Blackout Curtains That Actually Work" },
  { title: "Sleep Sack Size Guide by Age" },
];

const CategorySleep = () => {
  return (
    <section className="bg-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column */}
          <div>
            <span className="category-label text-muted-foreground">Category</span>
            <h2 className="font-display text-3xl md:text-4xl mt-2 mb-4">Sleep</h2>
            <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
              Evidence-based guides and honest product reviews to help your little one (and you) get the rest you deserve.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {sleepPosts.map((post, i) => (
                <div key={i} className="group cursor-pointer">
                  <div className="placeholder-img aspect-square rounded-sm mb-2" />
                  <h4 className="font-display text-xs leading-snug group-hover:text-muted-foreground transition-colors">
                    {post.title}
                  </h4>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column - Large Image with Overlay */}
          <div className="relative rounded-sm overflow-hidden">
            <div className="placeholder-img aspect-[3/4] lg:aspect-auto lg:h-full lg:min-h-[420px]" />
            <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-nearblack/80 to-transparent">
              <span className="category-label text-white/70">Sleep Essentials</span>
              <h3 className="font-display text-white text-lg md:text-xl mt-1 mb-3 leading-snug">
                Building the Perfect Sleep Environment
              </h3>
              <Link to="/sleep" className="btn-peach text-[10px]">
                Read More
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CategorySleep;
