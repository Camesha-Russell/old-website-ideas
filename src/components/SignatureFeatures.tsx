import { Link } from "react-router-dom";

const features = [
  {
    title: "We Said No",
    description: "One product we declined to recommend this week",
    path: "/we-said-no",
  },
  {
    title: "Overhyped vs Actually Worth It",
    description: "The viral pick, honestly assessed",
    path: "/hype-check",
  },
  {
    title: "Know Before You Buy",
    description: "This week's safety check",
    path: "/know-before-you-buy",
  },
  {
    title: "Ask It's Mom Approved",
    description: "Your questions, honestly answered",
    path: "/ask-itsmomapproved",
  },
];

const SignatureFeatures = () => {
  return (
    <section className="py-[100px]">
      <div className="max-w-[1400px] mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {features.map((feature) => (
            <Link
              key={feature.path}
              to={feature.path}
              className="bg-white border border-border rounded-lg p-6 text-center group hover:border-foreground/30 transition-colors"
            >
              <h3 className="font-display text-base md:text-lg mb-2 group-hover:opacity-70 transition-opacity">
                {feature.title}
              </h3>
              <p className="font-body text-muted-foreground text-xs leading-relaxed">
                {feature.description}
              </p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SignatureFeatures;
