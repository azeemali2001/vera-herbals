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

  const storyBlocks = [
    {
      icon: Heart,
      title: "Vera Means Trust & Truth",
      text: "At Vera, we believe that the purest nutrition comes from nature which is processed with care. Every product is a promise of authenticity and wellness.",
    },
    {
      icon: Leaf,
      title: "Born from the Konkan",
      text: "Based in the fertile Konkan region, Vera was born out of a simple mission to bring the incredible benefits of nature to the community. We partner with local farmers and sustainable sources to ensure quality from the ground up.",
    },
    {
      icon: Sprout,
      title: "Small Batch, Superior Quality",
      text: "We prepare and pack our products in small batches to ensure superior quality, freshness, and complete traceability. This careful approach means you can trust exactly where your wellness comes from and how it was made.",
    },
  ];

  return (
    <section id="vera-story" className="relative overflow-hidden">
      {/* Hero block - full bleed */}
      <div className="relative bg-gradient-to-br from-sage-light via-cream to-background pt-6 pb-16 lg:pt-8 lg:pb-20">
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 w-[500px] h-[500px] rounded-full bg-sage/5 blur-3xl" />
          <div className="absolute -bottom-40 -left-40 w-[400px] h-[400px] rounded-full bg-cream-dark/50 blur-3xl" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] rounded-full bg-sage-light/30 blur-3xl opacity-60" />
        </div>

        <div className="container relative z-10 mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl mx-auto text-center"
          >
            <span className="section-heading mb-4 block">Our Story</span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-serif font-medium text-earth leading-[1.1] tracking-tight">
              The <span className="text-sage italic">"Vera"</span> Story
            </h1>
            <p className="mt-4 text-lg sm:text-xl text-earth-light">From Leaf to Life</p>
          </motion.div>
        </div>
      </div>

      {/* Story content - editorial layout */}
      <div className="relative -mt-8 lg:-mt-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-5xl mx-auto">
            <div className="space-y-10 sm:space-y-12">
              {storyBlocks.map((block, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 24 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-50px" }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className={`flex flex-col gap-6 sm:gap-8 ${
                    index % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"
                  } lg:items-start`}
                >
                  <div className="flex-shrink-0 w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-sage flex items-center justify-center shadow-lg">
                    <block.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h2 className="text-xl sm:text-2xl lg:text-3xl font-serif font-medium text-earth mb-4">
                      {block.title}
                    </h2>
                    <p className="text-base sm:text-lg text-earth-light leading-relaxed">
                      {block.text}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Closing quote - standout block */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-12 sm:mt-14 p-6 sm:p-10 rounded-3xl bg-sage/5 border border-sage/10"
            >
              <p className="text-xl sm:text-2xl font-serif font-medium text-earth italic leading-relaxed text-center">
                "We hope you enjoy our products as much as we do. Because your wellness is our passion."
              </p>
            </motion.div>

            {/* Highlights - bento grid */}
            <div className="mt-12 sm:mt-14 pb-10 lg:pb-14 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
              {highlights.map((highlight, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: 0.2 + index * 0.08 }}
                  className="group relative overflow-hidden rounded-2xl bg-white p-6 sm:p-8 border border-cream-dark/50 shadow-soft hover:shadow-card hover:border-sage/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300">
                    <highlight.icon className="w-6 h-6 text-sage" />
                  </div>
                  <h3 className="text-earth font-semibold mb-2">{highlight.title}</h3>
                  <p className="text-sm text-earth-light leading-relaxed">{highlight.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
