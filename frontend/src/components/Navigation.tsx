import { motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "./ui/button";

const menuItems = [
  { label: "Home", href: "/" },
  { label: "Products", href: "/products" },
  { label: "About Us", href: "/about-us" },
  { label: "Blog", href: "/blog" },
  { label: "Recipes", href: "/recipes" },
  { label: "Contact Us", href: "/contact-us" },
];

export function Navigation() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  return (
    <>
      <motion.nav
        initial={{ y: -12, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.35 }}
        className="fixed inset-x-0 top-0 z-50 border-b border-[#dbe5d1]/70 bg-white/95 backdrop-blur-md"
      >
        <div className="app-container h-[var(--header-height)] flex items-center justify-between">
          <Link to="/" className="flex items-center gap-3" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="h-11 w-11 rounded-xl bg-[#E6F2D9] shadow-sm flex items-center justify-center overflow-hidden">
              <img src="logo-no-bg.png" alt="Vera Herbal Wellness Logo" className="h-full w-full object-contain scale-110" />
            </div>
            <div className="text-2xl text-[#6BAE3C] tracking-tight font-serif font-semibold">VERA</div>
          </Link>

          <div className="hidden lg:flex items-center gap-7">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                className={`text-sm transition-colors ${
                  location.pathname === item.href ? "text-[#4A7C2C] font-semibold" : "text-[#2D5016] hover:text-[#4A7C2C]"
                }`}
              >
                {item.label}
              </Link>
            ))}
          </div>

          <div className="hidden lg:block">
            <Link to="/contact-us">
              <Button className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] hover:from-[#3D6623] hover:to-[#5A8C2F] text-white px-6 py-5 rounded-full shadow-md hover:shadow-lg transition-all">
                Contact for Bulk Orders
              </Button>
            </Link>
          </div>

          <button
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
            className="lg:hidden h-10 w-10 rounded-xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center text-white shadow-md"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -12,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.25 }}
        className="fixed left-0 right-0 top-[var(--header-height)] z-40 lg:hidden"
      >
        <div className="bg-white border-b border-[#dbe5d1]/80 shadow-xl">
          <div className="app-container py-5 space-y-1">
            {menuItems.map((item) => (
              <Link
                key={item.href}
                to={item.href}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block rounded-xl px-4 py-3 transition-all ${
                  location.pathname === item.href
                    ? "text-[#4A7C2C] bg-[#F5F1E8] font-medium"
                    : "text-[#2D5016] hover:text-[#4A7C2C] hover:bg-[#F5F1E8]"
                }`}
              >
                {item.label}
              </Link>
            ))}
            <Link to="/contact-us" onClick={() => setIsMobileMenuOpen(false)}>
              <Button className="w-full mt-4 bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] text-white rounded-xl py-6">
                Contact for Bulk Orders
              </Button>
            </Link>
          </div>
        </div>
      </motion.div>

      {isMobileMenuOpen && (
        <button
          type="button"
          aria-label="Close navigation"
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 z-30 bg-black/20 lg:hidden"
        />
      )}
    </>
  );
}
