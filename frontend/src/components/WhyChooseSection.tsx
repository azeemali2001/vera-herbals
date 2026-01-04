import { motion } from "framer-motion";
import { Leaf, Shield, Recycle, Heart } from "lucide-react";

export function WhyChooseSection() {
  const benefits = [
    {
      icon: Leaf,
      title: "Natural & Organic",
      description: "All our herbs are sourced from certified organic farms, ensuring pure, natural ingredients free from synthetic pesticides and fertilizers.",
    },
    {
      icon: Shield,
      title: "No Chemicals",
      description: "We maintain the integrity of nature's healing power by avoiding all chemical additives, preservatives, and artificial processing.",
    },
    {
      icon: Recycle,
      title: "Sustainably Sourced",
      description: "Our commitment to sustainability ensures responsible harvesting practices that protect biodiversity and support local farming communities.",
    },
    {
      icon: Heart,
      title: "Traditional Ayurvedic Roots",
      description: "Drawing from 5,000 years of Ayurvedic wisdom, we combine ancient knowledge with modern quality standards for optimal wellness.",
    },
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-[#2D5016] via-[#3D6623] to-[#2D5016] relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <motion.div
          className="absolute top-0 left-0 w-full h-full"
          style={{
            backgroundImage: "radial-gradient(circle, #6B9D3E 1px, transparent 1px)",
            backgroundSize: "50px 50px",
          }}
          animate={{
            backgroundPosition: ["0px 0px", "50px 50px"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-white/10 backdrop-blur-sm rounded-full text-sm text-white border border-white/20">
            Why Choose Us
          </div>
          <h2 className="text-4xl sm:text-5xl text-white">
            Nature's Purest{" "}
            <span className="bg-gradient-to-r from-[#8CBE60] to-[#B4D88C] bg-clip-text text-transparent">
              Healing Herbs
            </span>
          </h2>
          <p className="text-lg text-white/80">
            Experience the difference of authentic, sustainably sourced herbal products rooted in Ayurvedic tradition
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group"
            >
              <div className="relative bg-white/10 backdrop-blur-md rounded-3xl p-8 h-full border border-white/20 hover:bg-white/15 hover:border-white/30 transition-all duration-300">
                {/* Icon */}
                <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#8CBE60] to-[#B4D88C] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                  <benefit.icon className="w-7 h-7 text-[#2D5016]" />
                </div>

                {/* Content */}
                <div className="space-y-3">
                  <h3 className="text-xl text-white">{benefit.title}</h3>
                  <p className="text-white/70 leading-relaxed text-sm">
                    {benefit.description}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="max-w-4xl mx-auto bg-white/10 backdrop-blur-md rounded-3xl p-8 border border-white/20">
            <p className="text-xl text-white/90 leading-relaxed">
              "Through our commitment to purity and tradition, we bring you the authentic healing power of nature's finest herbs."
            </p>
            <div className="mt-4 text-[#8CBE60]">
              — Rooted in Ayurvedic Wisdom
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
