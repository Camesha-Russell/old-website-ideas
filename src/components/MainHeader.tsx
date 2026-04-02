import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "@/assets/its-mom-approved-logo.svg";

const navLinks = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Top Picks", path: "/top-picks" },
  { name: "We Said No", path: "/we-said-no" },
  { name: "Contact", path: "/contact" },
];

const MainHeader = () => {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="bg-white border-b border-border">
      <div className="max-w-[1400px] mx-auto px-4 py-4 flex items-center justify-between">
        {/* Logo */}
        <Link to="/">
          <img src={logo} alt="It's Mom Approved" className="h-16 md:h-20 w-auto" />
        </Link>

        {/* Center Nav - Desktop */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="nav-link text-foreground hover:text-muted-foreground transition-colors text-[11px]"
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* CTA + Mobile Toggle */}
        <div className="flex items-center gap-4">
          <Link to="/starter-kit" className="btn-peach hidden sm:inline-block text-[10px]">
            Get the Starter Kit
          </Link>
          <button
            className="lg:hidden text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="lg:hidden bg-white border-t border-border px-4 pb-4">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className="block py-2.5 nav-link text-foreground text-[11px]"
              onClick={() => setMobileOpen(false)}
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/starter-kit"
            className="btn-peach inline-block mt-2 text-[10px] sm:hidden"
            onClick={() => setMobileOpen(false)}
          >
            Get the Starter Kit
          </Link>
        </div>
      )}
    </header>
  );
};

export default MainHeader;
