import { motion } from "framer-motion";
import { Leaf, Heart, Sprout, Sparkles } from "lucide-react";

export function VeraStorySection() {
  const highlights = [
    {
      icon: Heart,
      title: "Trust & Truth",
      description: "The meaning behind our name",
    },
    {
      icon: Leaf,
      title: "Nature's Gift",
      description: "Pure nutrition from natural sources",
    },
    {
      icon: Sprout,
      title: "Small Batch",
      description: "Crafted with care for quality & freshness",
    },
    {
      icon: Sparkles,
      title: "Full Traceability",
      description: "Know where your wellness comes from",
    },
  ];

  return (
    <section id="vera-story" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-20 left-0 w-96 h-96 bg-gradient-to-br from-[#F5F1E8] to-transparent rounded-full opacity-40 blur-3xl" />
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-tl from-[#F5F1E8] to-transparent rounded-full opacity-40 blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Main Heading */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16 space-y-6"
          >
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1, duration: 0.4 }}
              className="inline-block px-4 py-2 bg-gradient-to-r from-[#F5F1E8] to-transparent rounded-full text-sm font-semibold text-[#4A7C2C] border border-[#6B9D3E]/20"
            >
              Our Story
            </motion.div>

            <h1 className="text-5xl sm:text-6xl md:text-7xl text-[#2D5016] font-bold leading-tight">
              The{" "}
              <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
                "Vera"
              </span>{" "}
              Story
            </h1>

            <p className="text-xl text-[#4A7C2C]/70 leading-relaxed max-w-2xl mx-auto">
              From Leaf to Life
            </p>
          </motion.div>

          {/* Story Content Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2, duration: 0.6 }}
            className="bg-gradient-to-br from-white via-[#F5F1E8]/30 to-white rounded-3xl border-2 border-[#6B9D3E]/20 p-6 md:p-12 lg:p-16 shadow-2xl hover:shadow-3xl transition-all mb-16"
          >
            <div className="space-y-8">
              {/* Vera Meaning */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Heart className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#2D5016] mb-3">
                    Vera Means Trust & Truth
                  </h2>
                  <p className="text-base md:text-lg text-[#4A7C2C]/80 leading-relaxed">
                    At Vera, we believe that the purest nutrition comes from nature which is processed with care. 
                    Every product is a promise of authenticity and wellness.
                  </p>
                </div>
              </motion.div>

              <div className="h-px bg-gradient-to-r from-[#6B9D3E]/20 via-[#6B9D3E]/40 to-[#6B9D3E]/20" />

              {/* Mission */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Leaf className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#2D5016] mb-3">
                    Born from the Konkan
                  </h2>
                  <p className="text-base md:text-lg text-[#4A7C2C]/80 leading-relaxed">
                    Based in the fertile Konkan region, Vera was born out of a simple mission to bring the 
                    incredible benefits of nature to the community. We partner with local farmers and sustainable 
                    sources to ensure quality from the ground up.
                  </p>
                </div>
              </motion.div>

              <div className="h-px bg-gradient-to-r from-[#6B9D3E]/20 via-[#6B9D3E]/40 to-[#6B9D3E]/20" />

              {/* Process */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5, duration: 0.5 }}
                className="flex flex-col md:flex-row gap-4 md:gap-6 items-start"
              >
                <div className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center flex-shrink-0 shadow-lg">
                  <Sprout className="w-7 h-7 md:w-8 md:h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-xl md:text-3xl font-bold text-[#2D5016] mb-3">
                    Small Batch, Superior Quality
                  </h2>
                  <p className="text-base md:text-lg text-[#4A7C2C]/80 leading-relaxed">
                    We prepare and pack our products in small batches to ensure superior quality, freshness, 
                    and complete traceability. This careful approach means you can trust exactly where your 
                    wellness comes from and how it was made.
                  </p>
                </div>
              </motion.div>

              <div className="h-px bg-gradient-to-r from-[#6B9D3E]/20 via-[#6B9D3E]/40 to-[#6B9D3E]/20" />

              {/* Closing */}
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.5 }}
                className="pt-4"
              >
                <p className="text-xl text-[#2D5016] font-semibold italic leading-relaxed">
                  "We hope you enjoy our products as much as we do. Because your wellness is our passion."
                </p>
              </motion.div>
            </div>
          </motion.div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 + index * 0.1, duration: 0.5 }}
                className="bg-gradient-to-br from-[#F5F1E8] to-white rounded-2xl p-6 border border-[#6B9D3E]/10 hover:border-[#6B9D3E]/30 transition-all group hover:shadow-lg"
              >
                <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                  <highlight.icon className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-[#2D5016] font-bold mb-2">{highlight.title}</h3>
                <p className="text-sm text-[#4A7C2C]/70">{highlight.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
