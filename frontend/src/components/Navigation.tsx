import { motion } from "framer-motion";
import { useState, useEffect } from "react";
import { Leaf, Menu, X } from "lucide-react";
import Logo from "@/src/assets/Final Logo-  (5000 x 5000 px)- tranparent bg.png";
import { Button } from "./ui/button";
import { Link, useLocation } from "react-router-dom";

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const menuItems = [
    { label: "Home", href: "/" },
    { label: "Products", href: "/products" },
    { label: "About Us", href: "/about-us" },
    { label: "Blog", href: "/blog" },
    { label: "Recipes", href: "/recipes" },
    { label: "Contact Us", href: "/contact-us" },
  ];

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled ? "py-3" : "py-5"
        }`}
        style={{
          backgroundColor: isScrolled
            ? "rgba(255, 255, 255, 0.95)"
            : "transparent",
        }}
      >
        {/* Glassmorphism backdrop blur */}
        <div
          className={`absolute inset-0 backdrop-blur-md transition-all duration-300 ${
            isScrolled
              ? "bg-white/95 shadow-lg border-b border-[#6B9D3E]/10"
              : "bg-transparent"
          }`}
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="flex items-center cursor-pointer group"
            >
              <Link to="/" className="flex items-center">
                <div className="h-16 w-auto rounded-xl bg-white px-3 flex items-center justify-center group-hover:shadow-xl group-hover:scale-105 transition-all overflow-hidden">
                  <img
                    src={Logo}
                    alt="VERA logo"
                    className="h-full w-auto object-contain"
                  />
                </div>
              </Link>
            </motion.div>

            {/* Desktop Menu */}
            <div className="hidden lg:flex items-center gap-8">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1, duration: 0.5 }}
                  className="relative group py-2"
                >
                  <Link
                    to={item.href}
                    className={`text-sm transition-colors ${
                      location.pathname === item.href
                        ? "text-[#4A7C2C] font-medium"
                        : "text-[#2D5016] hover:text-[#4A7C2C]"
                    }`}
                  >
                    {item.label}
                  </Link>
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] group-hover:w-full transition-all duration-300" />
                </motion.div>
              ))}
            </div>

            {/* CTA Button - Desktop */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5 }}
              className="hidden lg:block"
            >
              <Link to="/contact-us">
                <Button className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] hover:from-[#3D6623] hover:to-[#5A8C2F] text-white px-6 py-5 rounded-full shadow-lg hover:shadow-xl transition-all group">
                  <span>Contact for Bulk Orders</span>
                  <motion.span
                    className="ml-2 inline-block"
                    animate={{ x: [0, 5, 0] }}
                    transition={{ duration: 1.5, repeat: Infinity }}
                  >
                    →
                  </motion.span>
                </Button>
              </Link>
            </motion.div>

            {/* Mobile Menu Button */}
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="lg:hidden w-10 h-10 rounded-xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center text-white shadow-lg hover:shadow-xl transition-all"
            >
              {isMobileMenuOpen ? (
                <X className="w-5 h-5" />
              ) : (
                <Menu className="w-5 h-5" />
              )}
            </motion.button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <motion.div
        initial={false}
        animate={{
          opacity: isMobileMenuOpen ? 1 : 0,
          y: isMobileMenuOpen ? 0 : -20,
          pointerEvents: isMobileMenuOpen ? "auto" : "none",
        }}
        transition={{ duration: 0.3 }}
        className="fixed top-[72px] left-0 right-0 z-40 lg:hidden"
      >
        <div className="bg-white/98 backdrop-blur-lg shadow-2xl border-b border-[#6B9D3E]/10">
          <div className="container mx-auto px-4 sm:px-6 py-6">
            <div className="space-y-1">
              {menuItems.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{
                    opacity: isMobileMenuOpen ? 1 : 0,
                    x: isMobileMenuOpen ? 0 : -20,
                  }}
                  transition={{ delay: index * 0.05, duration: 0.3 }}
                  className="group"
                >
                  <Link
                    to={item.href}
                    onClick={closeMobileMenu}
                    className={`block px-4 py-3 rounded-xl transition-all ${
                      location.pathname === item.href
                        ? "text-[#4A7C2C] bg-[#F5F1E8] font-medium"
                        : "text-[#2D5016] hover:text-[#4A7C2C] hover:bg-[#F5F1E8]"
                    }`}
                  >
                    <div className="flex items-center justify-between">
                      <span>{item.label}</span>
                      <motion.span
                        className="opacity-0 group-hover:opacity-100 transition-opacity"
                        animate={{ x: [0, 5, 0] }}
                        transition={{ duration: 1.5, repeat: Infinity }}
                      >
                        →
                      </motion.span>
                    </div>
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Mobile CTA */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{
                opacity: isMobileMenuOpen ? 1 : 0,
                y: isMobileMenuOpen ? 0 : 10,
              }}
              transition={{ delay: 0.3, duration: 0.3 }}
              className="mt-6 pt-6 border-t border-[#6B9D3E]/10"
            >
              <Link to="/contact-us" onClick={closeMobileMenu}>
                <Button className="w-full bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] hover:from-[#3D6623] hover:to-[#5A8C2F] text-white px-6 py-6 rounded-xl shadow-lg hover:shadow-xl transition-all">
                  Contact for Bulk Orders
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </motion.div>

      {/* Mobile Menu Overlay */}
      {isMobileMenuOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={() => setIsMobileMenuOpen(false)}
          className="fixed inset-0 bg-black/20 backdrop-blur-sm z-30 lg:hidden"
        />
      )}
    </>
  );
}
