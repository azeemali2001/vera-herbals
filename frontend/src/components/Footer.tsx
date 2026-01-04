import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

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
                <Leaf className="w-7 h-7 text-white" />
              </div>
              <div className="text-3xl text-white">VERA</div>
            </div>
            <p className="text-white/70 text-sm leading-relaxed">
              Pure Moringa. Trusted Supply.
            </p>
          </motion.div>

          {/* Tagline Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="text-center space-y-3"
          >
            <p className="text-lg text-white/90">
              Your Premium B2B Moringa Partner
            </p>
            <div className="flex items-center justify-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#8CBE60] animate-pulse" />
              <span className="text-sm text-white/70">Serving businesses worldwide</span>
            </div>
          </motion.div>

          {/* Contact Placeholder */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="text-right space-y-2"
          >
            <div className="text-sm text-white/70">Get in Touch</div>
            <div className="text-white">contact@veramoringa.com</div>
            <div className="text-white/70 text-sm">+91 XXXXX XXXXX</div>
          </motion.div>
        </div>

        {/* Divider */}
        <div className="my-8 border-t border-white/10" />

        {/* Bottom Section */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center space-y-4"
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-white/60">
            <div>FSSAI Certified</div>
            <div>•</div>
            <div>ISO Compliant</div>
            <div>•</div>
            <div>GMP Standards</div>
            <div>•</div>
            <div>Export Ready</div>
          </div>
          
          <p className="text-sm text-white/50">
            © {new Date().getFullYear()} VERA. All rights reserved. Crafted for B2B Excellence.
          </p>
        </motion.div>
      </div>
    </footer>
  );
}
