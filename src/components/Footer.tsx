import { Link } from "react-router-dom";
import logo from "@/assets/its-mom-approved-logo.svg";

const siteLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Start Here", path: "/start-here" },
  { name: "Top Picks", path: "/top-picks" },
  { name: "Contact", path: "/contact" },
];

const categoryLinks = [
  { name: "Sleep", path: "/sleep" },
  { name: "Feeding", path: "/feeding" },
  { name: "Carriers & Strollers", path: "/carriers-and-strollers" },
  { name: "Play & Development", path: "/play-and-development" },
  { name: "Postpartum & Mom", path: "/postpartum-and-mom" },
  { name: "Safety", path: "/safety" },
];

const featureLinks = [
  { name: "We Said No", path: "/we-said-no" },
  { name: "Hype Check", path: "/hype-check" },
  { name: "Know Before You Buy", path: "/know-before-you-buy" },
  { name: "Ask Moms Approved", path: "/ask-itsmomapproved" },
];

const legalLinks = [
  { name: "Disclosure", path: "/disclosure" },
  { name: "Privacy Policy", path: "/privacy-policy" },
];

const Footer = () => {
  return (
    <footer className="bg-nearblack text-white">
      <div className="max-w-[1400px] mx-auto px-4 py-12 md:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-block mb-4">
              <img src={logo} alt="It's Mom Approved" className="h-14 w-auto brightness-0 invert" />
            </Link>
            <p className="font-body text-white/50 text-xs leading-relaxed">
              Research-backed product recommendations for moms of babies and toddlers aged 0–4. Honest reviews you can trust.
            </p>
            <div className="flex gap-4 mt-4">
              {["Instagram", "Pinterest", "Facebook"].map((social) => (
                <span key={social} className="text-white/40 hover:text-white/70 transition-colors text-xs font-nav cursor-pointer">
                  {social.charAt(0)}
                </span>
              ))}
            </div>
          </div>

          {/* The Site */}
          <div>
            <h4 className="nav-link text-white/60 text-[10px] mb-3 pb-2 border-b border-white/10">The Site</h4>
            {siteLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block font-body text-white/50 hover:text-white/80 text-xs py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Categories */}
          <div>
            <h4 className="nav-link text-white/60 text-[10px] mb-3 pb-2 border-b border-white/10">Categories</h4>
            {categoryLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block font-body text-white/50 hover:text-white/80 text-xs py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Features */}
          <div>
            <h4 className="nav-link text-white/60 text-[10px] mb-3 pb-2 border-b border-white/10">Features</h4>
            {featureLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block font-body text-white/50 hover:text-white/80 text-xs py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>

          {/* Legal */}
          <div>
            <h4 className="nav-link text-white/60 text-[10px] mb-3 pb-2 border-b border-white/10">Legal</h4>
            {legalLinks.map((link) => (
              <Link key={link.path} to={link.path} className="block font-body text-white/50 hover:text-white/80 text-xs py-1 transition-colors">
                {link.name}
              </Link>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="max-w-[1400px] mx-auto px-4 py-4 flex flex-col sm:flex-row items-center justify-between gap-2">
          <div className="flex gap-4">
            <Link to="/disclosure" className="font-nav text-white/40 hover:text-white/60 text-[10px] transition-colors">Disclosure</Link>
            <Link to="/privacy-policy" className="font-nav text-white/40 hover:text-white/60 text-[10px] transition-colors">Terms of Use</Link>
            <Link to="/privacy-policy" className="font-nav text-white/40 hover:text-white/60 text-[10px] transition-colors">Privacy Policy</Link>
          </div>
          <span className="font-nav text-white/30 text-[10px]">
            © 2026 It's Mom Approved. All rights reserved.
          </span>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
