import { Link } from "react-router-dom";

const sleepPosts = [
  { title: "Best Sound Machines for Nurseries" },
  { title: "Blackout Curtains That Actually Work" },
  { title: "Sleep Sack Size Guide by Age" },
  { title: "Building the Perfect Sleep Environment" },
];

const CategorySleep = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <h2 className="uppercase text-[11px] tracking-[3px] font-body font-semibold text-foreground mb-10">
          Sleep
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {sleepPosts.map((post, i) => (
            <div key={i} className="group cursor-pointer bg-white border border-border rounded-lg overflow-hidden">
              <div className="placeholder-img aspect-[4/3]" />
              <div className="p-4">
                <span className="text-terracotta uppercase text-[10px] tracking-[2px] font-body font-semibold">Sleep</span>
                <h3 className="font-display text-sm md:text-base mt-1.5 leading-snug group-hover:opacity-70 transition-opacity">
                  {post.title}
                </h3>
              </div>
            </div>
          ))}
        </div>

        <div className="text-right mt-8">
          <Link to="/sleep" className="text-terracotta font-body text-sm font-medium hover:opacity-70 transition-opacity">
            Browse all Sleep posts →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CategorySleep;
