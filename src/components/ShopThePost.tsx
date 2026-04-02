import { ChevronLeft, ChevronRight } from "lucide-react";

const products = [
  { name: "Organic Swaddle Set" },
  { name: "White Noise Machine" },
  { name: "Bamboo Crib Sheet" },
  { name: "Nursery Night Light" },
];

const ShopThePost = () => {
  return (
    <section className="bg-warm">
      <div className="grid grid-cols-1 lg:grid-cols-2">
        {/* Left Column — Large Image */}
        <div className="placeholder-img aspect-[4/3] lg:aspect-auto lg:min-h-[520px]" />

        {/* Right Column — Text + Products */}
        <div className="px-12 md:px-16 py-12 md:py-16 flex flex-col justify-center">
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
            Our Favorite Nursery Essentials for a Cozy Space
          </h2>
          <p className="font-body text-muted-foreground text-base leading-relaxed mb-10 max-w-md">
            Handpicked products we genuinely love — tested by real moms, approved for everyday life with little ones.
          </p>

          {/* Product Thumbnails */}
          <div className="flex gap-4 mb-8">
            {products.map((_, i) => (
              <div key={i} className="cursor-pointer">
                <div className="placeholder-img w-24 h-24 md:w-28 md:h-28 bg-white border border-border hover:border-foreground transition-colors" />
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-4">
            <button className="hover:opacity-70 transition-opacity">
              <ChevronLeft className="w-5 h-5" />
            </button>
            <button className="hover:opacity-70 transition-opacity">
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ShopThePost;
