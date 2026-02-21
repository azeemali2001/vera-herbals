import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="bg-gradient-to-br from-[#2D5016] to-[#1F3810] text-white py-16 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#6B9D3E] rounded-full blur-3xl" />
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#4A7C2C] rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid md:grid-cols-3 gap-12 items-center">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-4"
          >
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#6B9D3E] to-[#8CBE60] flex items-center justify-center">
                <img
                  src="logo-no-bg.png"
                  alt="Vera Herbal Wellness Logo"
                  className="w-full h-full object-contain rounded-lg bg-white/90"
                />
              </div>
              <div className="text-3xl text-white">VERA</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Nature's Wisdom. <br />
              Modern Wellness. <br />
              Pure Herbal Solutions.
            </p>
          </motion.div>

          {/* Footer Navigation Menu - Centered */}
          <motion.nav
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center"
          >
            <ul className="flex flex-wrap justify-center items-center gap-x-4 gap-y-2 text-sm">
              <li>
                <Link
                  to="/about-us"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  About Us
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/blog"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Blog
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/contact-us"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Contact Us
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/shipping-policy"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Shipping Policy
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/cancellation-refund"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Cancellation & Refund
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/privacy-policy"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Privacy Policy
                </Link>
              </li>
              <li className="text-white/30">•</li>
              <li>
                <Link
                  to="/terms-conditions"
                  className="text-white/70 hover:text-white transition-colors duration-300 hover:underline underline-offset-4"
                >
                  Terms & Conditions
                </Link>
              </li>
            </ul>
        </motion.nav>

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-right space-y-2"
          >
            <div className="text-white"><a
              href="mailto:support@example.com"
              className="hover:text-sage transition-colors"
            >
              support@example.com
            </a></div>
            <div className="text-white/70 text-sm"><a
              href="https://wa.me/919892320923?text=Hi! I'm interested in your organic products."
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-sage transition-colors"
            >
              Chat on WhatsApp
            </a></div>
          </motion.div>
        </div>
      </div>
    </footer>
  );
}