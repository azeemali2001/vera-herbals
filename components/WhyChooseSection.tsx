import { motion } from "framer-motion";
import { CheckCircle2, TrendingUp, Boxes, Tag, Clock, Headphones } from "lucide-react";

export function WhyChooseSection() {
  const benefits = [
    {
      icon: CheckCircle2,
      title: "Consistent Quality",
      description: "Rigorous quality control ensures every batch meets the same high standards",
      stats: "99.9% consistency rate",
    },
    {
      icon: TrendingUp,
      title: "Competitive Bulk Pricing",
      description: "Volume-based pricing that grows with your business",
      stats: "Up to 30% savings on bulk",
    },
    {
      icon: Boxes,
      title: "Flexible MOQ Options",
      description: "Minimum order quantities designed for businesses of all sizes",
      stats: "MOQ from 100kg",
    },
    {
      icon: Tag,
      title: "Custom Branding",
      description: "Complete private label and white label packaging solutions",
      stats: "Your brand, our quality",
    },
    {
      icon: Clock,
      title: "Reliable Logistics",
      description: "On-time delivery with complete shipment tracking and support",
      stats: "98% on-time delivery",
    },
    {
      icon: Headphones,
      title: "Dedicated B2B Support",
      description: "Expert team to handle your queries, orders, and special requirements",
      stats: "24/7 support available",
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
            B2B Value Proposition
          </div>
          <h2 className="text-4xl sm:text-5xl text-white">
            Why Leading Brands{" "}
            <span className="bg-gradient-to-r from-[#8CBE60] to-[#B4D88C] bg-clip-text text-transparent">
              Choose VERA
            </span>
          </h2>
          <p className="text-lg text-white/80">
            We're not just a supplier – we're your growth partner in the wellness industry
          </p>
        </motion.div>

        {/* Benefits Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
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
                  <div className="pt-3 border-t border-white/10">
                    <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/10 rounded-full">
                      <div className="w-1.5 h-1.5 bg-[#8CBE60] rounded-full animate-pulse" />
                      <span className="text-xs text-white/90">{benefit.stats}</span>
                    </div>
                  </div>
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
              "VERA has been our trusted partner for over 3 years. Their consistency in quality 
              and professionalism in service makes them stand out in the industry."
            </p>
            <div className="mt-4 text-[#8CBE60]">
              — Leading Nutraceutical Brand, USA
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
