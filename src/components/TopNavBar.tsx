import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Menu, X } from "lucide-react";

const categories = [
  { name: "Sleep", path: "/sleep" },
  { name: "Feeding", path: "/feeding" },
  { name: "Carriers & Strollers", path: "/carriers-and-strollers" },
  { name: "Play & Development", path: "/play-and-development" },
  { name: "For Mom", path: "/for-mom" },
  { name: "Safety", path: "/safety" },
];

const TopNavBar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div className="bg-nearblack">
      <div className="max-w-[1400px] mx-auto px-4 flex items-center justify-between h-[38px]">
        <div className="hidden md:flex items-center gap-6">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="nav-link text-white/80 hover:text-white transition-colors text-[10px]"
            >
              {cat.name}
            </Link>
          ))}
        </div>
        <button
          className="md:hidden text-white"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={18} /> : <Menu size={18} />}
        </button>
        <button className="text-white/80 hover:text-white transition-colors">
          <Search size={15} />
        </button>
      </div>
      {mobileOpen && (
        <div className="md:hidden bg-nearblack border-t border-white/10 px-4 pb-3">
          {categories.map((cat) => (
            <Link
              key={cat.path}
              to={cat.path}
              className="block py-2 nav-link text-white/80 hover:text-white text-[10px]"
              onClick={() => setMobileOpen(false)}
            >
              {cat.name}
            </Link>
          ))}
        </div>
      )}
    </div>
  );
};

export default TopNavBar;
