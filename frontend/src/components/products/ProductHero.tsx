import { motion } from "framer-motion";

export function ProductHero() {
  return (
    <section className="relative overflow-hidden gradient-hero py-24 lg:py-32">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-1/2 -right-1/4 w-[600px] h-[600px] rounded-full bg-sage-light opacity-40 blur-3xl" />
        <div className="absolute -bottom-1/4 -left-1/4 w-[500px] h-[500px] rounded-full bg-cream-dark opacity-50 blur-3xl" />
      </div>

      <div className="container relative mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="max-w-3xl mx-auto text-center"
        >
          <span className="section-heading mb-6 block">Pure & Natural</span>
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-medium text-earth leading-tight mb-6 text-balance">
            Nature's Finest
            <span className="block text-sage italic">Herbal Wellness</span>
          </h1>
          <p className="text-lg lg:text-xl text-earth-light leading-relaxed max-w-2xl mx-auto">
            Discover our curated collection of premium organic herbal powders, 
            thoughtfully sourced and carefully processed to preserve nature's wisdom.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: "easeOut" }}
          className="flex justify-center gap-8 mt-12"
        >
          <div className="text-center">
            <span className="block text-3xl font-serif text-sage font-medium">8+</span>
            <span className="text-sm text-earth-light">Herbal Products</span>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <span className="block text-3xl font-serif text-sage font-medium">100%</span>
            <span className="text-sm text-earth-light">Organic & Natural</span>
          </div>
          <div className="w-px bg-border" />
          <div className="text-center">
            <span className="block text-3xl font-serif text-sage font-medium">Lab</span>
            <span className="text-sm text-earth-light">Tested Quality</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
