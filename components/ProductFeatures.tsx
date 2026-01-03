import { motion } from "framer-motion";
import { Leaf, FlaskConical, ShieldCheck, Package, Sparkles, Truck } from "lucide-react";

export function ProductFeatures() {
  const features = [
    {
      icon: Leaf,
      title: "100% Pure & Natural",
      description: "No additives, fillers, or artificial ingredients. Just pure moringa powder.",
      gradient: "from-[#4A7C2C] to-[#6B9D3E]",
    },
    {
      icon: FlaskConical,
      title: "Lab Tested Quality",
      description: "Every batch undergoes rigorous testing for purity, safety, and potency.",
      gradient: "from-[#5B8C3D] to-[#7CAD4F]",
    },
    {
      icon: ShieldCheck,
      title: "Hygienic Processing",
      description: "Processed in certified facilities following international standards.",
      gradient: "from-[#4A7C2C] to-[#5B8C3D]",
    },
    {
      icon: Package,
      title: "Bulk Supply Capability",
      description: "From small batches to large-scale orders, we scale with your needs.",
      gradient: "from-[#6B9D3E] to-[#8CBE60]",
    },
    {
      icon: Sparkles,
      title: "Private & White Label",
      description: "Custom packaging and branding solutions for your business identity.",
      gradient: "from-[#5B8C3D] to-[#6B9D3E]",
    },
    {
      icon: Truck,
      title: "Export-Ready Packaging",
      description: "Compliant packaging designed for safe international shipping.",
      gradient: "from-[#4A7C2C] to-[#7CAD4F]",
    },
  ];

  return (
    <section id="features" className="py-24 bg-gradient-to-b from-white via-[#F5F1E8] to-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#6B9D3E]/10 rounded-full blur-3xl" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#4A7C2C]/10 rounded-full blur-3xl" />
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
          <div className="inline-block px-4 py-2 bg-white rounded-full text-sm text-[#4A7C2C] border border-[#6B9D3E]/20">
            Product Excellence
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
            Premium Features That Set{" "}
            <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
              Us Apart
            </span>
          </h2>
          <p className="text-lg text-[#4A7C2C]/80">
            Every aspect of our moringa powder is designed for businesses that demand excellence
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6B9D3E]/10 overflow-hidden">
                {/* Gradient background on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${feature.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center transform group-hover:scale-110 group-hover:rotate-3 transition-all duration-300`}>
                    <feature.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl text-[#2D5016]">{feature.title}</h3>
                    <p className="text-[#4A7C2C]/70 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-[#6B9D3E]/5 to-transparent rounded-bl-full" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Bottom CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.6, duration: 0.6 }}
          className="text-center mt-16"
        >
          <div className="inline-flex items-center gap-2 px-6 py-3 bg-white rounded-full border border-[#6B9D3E]/20 shadow-lg">
            <div className="w-2 h-2 bg-[#4A7C2C] rounded-full animate-pulse" />
            <span className="text-sm text-[#2D5016]">All features backed by certifications and quality guarantees</span>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
