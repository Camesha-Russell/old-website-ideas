import { ArrowLeft, ArrowRight } from "lucide-react";

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
        {/* Left Column — Text + Products */}
        <div className="px-8 md:px-16 lg:px-20 py-12 md:py-16 flex flex-col justify-center">
          <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">
            Our Favorite Nursery Essentials for a Cozy Space
          </h2>
          <p className="font-body text-muted-foreground text-sm leading-relaxed mb-8 max-w-md">
            Handpicked products we genuinely love — tested by real moms, approved for everyday life with little ones.
          </p>

          {/* Product Thumbnails */}
          <div className="flex gap-3 mb-6">
            {products.map((product, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="placeholder-img w-20 h-20 md:w-24 md:h-24 rounded-sm border border-border group-hover:border-foreground transition-colors" />
                <p className="font-body text-[10px] text-muted-foreground mt-1.5 text-center max-w-[96px] leading-tight">
                  {product.name}
                </p>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className="flex gap-2">
            <button className="w-9 h-9 border border-border rounded-sm flex items-center justify-center hover:border-foreground transition-colors">
              <ArrowLeft className="w-4 h-4" />
            </button>
            <button className="w-9 h-9 border border-border rounded-sm flex items-center justify-center hover:border-foreground transition-colors">
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Right Column — Large Image */}
        <div className="placeholder-img aspect-[4/3] lg:aspect-auto lg:min-h-[480px]" />
      </div>
    </section>
  );
};

export default ShopThePost;
