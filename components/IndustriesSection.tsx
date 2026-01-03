import { motion } from "framer-motion";
import { Pill, Flower2, Blend, Store, Globe, Building2 } from "lucide-react";

export function IndustriesSection() {
  const industries = [
    {
      icon: Pill,
      title: "Nutraceutical Companies",
      description: "High-purity moringa for supplements and functional foods",
      color: "from-[#4A7C2C] to-[#6B9D3E]",
    },
    {
      icon: Flower2,
      title: "Ayurvedic & Herbal Brands",
      description: "Traditional wellness products with authentic moringa",
      color: "from-[#5B8C3D] to-[#7CAD4F]",
    },
    {
      icon: Blend,
      title: "Health Supplement Manufacturers",
      description: "Consistent quality for your formulation needs",
      color: "from-[#6B9D3E] to-[#8CBE60]",
    },
    {
      icon: Store,
      title: "FMCG Wellness Brands",
      description: "Bulk supply for consumer wellness products",
      color: "from-[#4A7C2C] to-[#5B8C3D]",
    },
    {
      icon: Globe,
      title: "Exporters & Wholesalers",
      description: "Large-scale orders with export-ready packaging",
      color: "from-[#5B8C3D] to-[#6B9D3E]",
    },
    {
      icon: Building2,
      title: "Pharma Companies",
      description: "Pharmaceutical-grade moringa for medicinal use",
      color: "from-[#4A7C2C] to-[#7CAD4F]",
    },
  ];

  return (
    <section id="industries" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#F5F1E8]/50 via-white to-[#F5F1E8]/50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <div className="inline-block px-4 py-2 bg-[#F5F1E8] rounded-full text-sm text-[#4A7C2C] border border-[#6B9D3E]/20">
            Industries We Serve
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
            Trusted Across{" "}
            <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
              Multiple Industries
            </span>
          </h2>
          <p className="text-lg text-[#4A7C2C]/80">
            From nutraceuticals to pharma, we power businesses in the wellness ecosystem
          </p>
        </motion.div>

        {/* Industries Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {industries.map((industry, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group cursor-pointer"
            >
              <div className="relative bg-white rounded-3xl p-8 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6B9D3E]/10 overflow-hidden">
                {/* Gradient overlay on hover */}
                <div className={`absolute inset-0 bg-gradient-to-br ${industry.color} opacity-0 group-hover:opacity-10 transition-opacity duration-300`} />
                
                <div className="relative z-10 space-y-4">
                  {/* Icon */}
                  <div className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${industry.color} flex items-center justify-center transform group-hover:scale-110 group-hover:-rotate-6 transition-all duration-300`}>
                    <industry.icon className="w-8 h-8 text-white" />
                  </div>

                  {/* Content */}
                  <div className="space-y-2">
                    <h3 className="text-xl text-[#2D5016] group-hover:text-[#4A7C2C] transition-colors">
                      {industry.title}
                    </h3>
                    <p className="text-[#4A7C2C]/70 leading-relaxed text-sm">
                      {industry.description}
                    </p>
                  </div>

                  {/* Hover indicator */}
                  <div className="flex items-center gap-2 text-sm text-[#4A7C2C] opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <span>Learn more</span>
                    <motion.div
                      animate={{ x: [0, 5, 0] }}
                      transition={{ duration: 1.5, repeat: Infinity }}
                    >
                      →
                    </motion.div>
                  </div>
                </div>

                {/* Decorative element */}
                <div className="absolute -top-8 -right-8 w-32 h-32 bg-gradient-to-br from-[#6B9D3E]/5 to-transparent rounded-full blur-2xl group-hover:scale-150 transition-transform duration-500" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Use Cases Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#F5F1E8] to-white rounded-3xl p-8 md:p-12 border border-[#6B9D3E]/20"
        >
          <div className="text-center mb-8">
            <h3 className="text-3xl text-[#2D5016] mb-3">Common Applications</h3>
            <p className="text-[#4A7C2C]/80">
              Our moringa powder is versatile and suitable for various product formulations
            </p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "Dietary Supplements",
              "Protein Powders",
              "Green Superfood Blends",
              "Herbal Formulations",
              "Tea & Beverages",
              "Functional Foods",
              "Cosmetic Products",
              "Animal Nutrition",
            ].map((useCase, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05, duration: 0.4 }}
                className="bg-white rounded-2xl px-4 py-3 text-center border border-[#6B9D3E]/10 hover:border-[#6B9D3E]/30 hover:shadow-md transition-all group"
              >
                <div className="flex items-center justify-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-[#4A7C2C] group-hover:scale-125 transition-transform" />
                  <span className="text-sm text-[#2D5016]">{useCase}</span>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
