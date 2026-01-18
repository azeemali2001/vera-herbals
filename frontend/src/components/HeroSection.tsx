import { motion } from "framer-motion";
import { ArrowRight, Leaf } from "lucide-react";
import { Button } from "./ui/button";

export function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-[#F5F1E8] via-white to-[#E8F5E9]">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <motion.div
          className="absolute top-20 left-10 w-72 h-72 bg-[#6B9D3E]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-96 h-96 bg-[#4A7C2C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1.2, 1, 1.2],
            opacity: [0.4, 0.6, 0.4],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-8"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-white/60 backdrop-blur-sm rounded-full border border-[#6B9D3E]/20"
            >
              <Leaf className="w-4 h-4 text-[#4A7C2C]" />
              <span className="text-sm text-[#2D5016]">Ayurvedic Herbal Wellness</span>
            </motion.div>

            <div className="space-y-4">
              <h1 className="text-5xl sm:text-6xl lg:text-7xl text-[#2D5016] leading-tight">
                Nature's Finest{" "}
                <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
                  Organic Farm Fresh Powders
                </span>
              </h1>
              <p className="text-xl text-[#4A7C2C]/80 max-w-xl">
                Explore our ancient organic wisdom which helps to boost immunity, enhance vitality and embrace natural healing.
              </p>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="flex flex-wrap gap-4"
            >
              <Button
                className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] hover:from-[#3D6623] hover:to-[#5A8C2F] text-white px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group"
                onClick={() => window.location.href = '/products'}
              >
                Explore Products
                <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button
                variant="outline"
                className="border-2 border-[#4A7C2C] text-[#4A7C2C] hover:bg-[#4A7C2C] hover:text-white px-8 py-6 rounded-full transition-all"
                onClick={() => window.location.href = '/about-us'}
              >
                Learn More
              </Button>
            </motion.div>

            {/* Trust indicators */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex flex-wrap gap-8 pt-8 border-t border-[#6B9D3E]/20"
            >
              <div>
                <div className="text-3xl text-[#2D5016]">8+</div>
                <div className="text-sm text-[#4A7C2C]/70">Premium Products</div>
              </div>
              <div>
                <div className="text-3xl text-[#2D5016]">100%</div>
                <div className="text-sm text-[#4A7C2C]/70">Organic & Natural</div>
              </div>
              <div>
                <div className="text-3xl text-[#2D5016]">Modern Wellness</div>
                <div className="text-sm text-[#4A7C2C]/70">Traditional Roots</div>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1723208237358-fa3f4dbb28c4?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtb3JpbmdhJTIwcG93ZGVyJTIwbGVhdmVzfGVufDF8fHx8MTc2NzQ3MTQ5MHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Premium Moringa Powder"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5016]/30 to-transparent" />
            </div>
            
            {/* Floating quality badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1, duration: 0.6 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl p-6 shadow-xl backdrop-blur-sm border border-[#6B9D3E]/20"
            >
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 rounded-full bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center">
                  <Leaf className="w-6 h-6 text-white" />
                </div>
                <div>
                  <div className="text-sm text-[#4A7C2C]/70">Certified</div>
                  <div className="text-[#2D5016]">100% Pure & Natural</div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 0.6 }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="w-6 h-10 border-2 border-[#4A7C2C] rounded-full flex justify-center pt-2"
        >
          <div className="w-1 h-2 bg-[#4A7C2C] rounded-full" />
        </motion.div>
      </motion.div>
    </section>
  );
}
