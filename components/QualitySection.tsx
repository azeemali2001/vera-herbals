import { motion } from "framer-motion";
import { ShieldCheck, FileCheck, Microscope, Award, ClipboardCheck, Layers } from "lucide-react";

export function QualitySection() {
  const qualityFeatures = [
    {
      icon: ShieldCheck,
      title: "FSSAI Certified",
      description: "Food Safety and Standards Authority of India approved",
    },
    {
      icon: FileCheck,
      title: "ISO Compliant",
      description: "International Organization for Standardization certified",
    },
    {
      icon: Award,
      title: "GMP Standards",
      description: "Good Manufacturing Practices implemented",
    },
    {
      icon: Microscope,
      title: "Lab Tested",
      description: "Third-party laboratory testing for every batch",
    },
    {
      icon: ClipboardCheck,
      title: "Complete Traceability",
      description: "Farm-to-factory tracking for transparency",
    },
    {
      icon: Layers,
      title: "Quality Documentation",
      description: "COA, MSDS, and specification sheets provided",
    },
  ];

  const qualityProcess = [
    {
      step: "01",
      title: "Source Selection",
      description: "Only premium-grade moringa from certified organic farms",
    },
    {
      step: "02",
      title: "Hygiene Processing",
      description: "Clean rooms and sanitized equipment for processing",
    },
    {
      step: "03",
      title: "Quality Testing",
      description: "Multi-stage testing for purity, safety, and potency",
    },
    {
      step: "04",
      title: "Certified Packaging",
      description: "Food-grade packaging in controlled environments",
    },
  ];

  return (
    <section id="quality" className="py-24 bg-gradient-to-b from-white via-[#F5F1E8] to-white relative overflow-hidden">
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
            Quality Assurance
          </div>
          <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
            Certified Quality &{" "}
            <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
              Safety Compliance
            </span>
          </h2>
          <p className="text-lg text-[#4A7C2C]/80">
            Every step of our process is designed to deliver the highest quality moringa powder
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-start mb-16">
          {/* Left - Certifications */}
          <div className="space-y-6">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              <h3 className="text-2xl text-[#2D5016] mb-6">Certifications & Standards</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {qualityFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1, duration: 0.5 }}
                    className="bg-white rounded-2xl p-6 border border-[#6B9D3E]/20 hover:shadow-lg transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <h4 className="text-[#2D5016] mb-2">{feature.title}</h4>
                    <p className="text-sm text-[#4A7C2C]/70">{feature.description}</p>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcXVhbGl0eSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY3NDc3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Testing Laboratory"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#2D5016]/60 via-transparent to-transparent" />
              
              {/* Overlay badge */}
              <div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm rounded-2xl p-6 border border-[#6B9D3E]/20">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <div className="text-sm text-[#4A7C2C]/70">Quality Guarantee</div>
                    <div className="text-lg text-[#2D5016]">100% Tested & Certified</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Process Timeline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-[#2D5016] to-[#3D6623] rounded-3xl p-8 md:p-12"
        >
          <div className="text-center mb-12">
            <h3 className="text-3xl text-white mb-3">Our Quality Control Process</h3>
            <p className="text-white/80">
              A rigorous 4-step process ensures excellence in every batch
            </p>
          </div>

          <div className="grid md:grid-cols-4 gap-6">
            {qualityProcess.map((process, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15, duration: 0.5 }}
                className="relative"
              >
                <div className="bg-white/10 backdrop-blur-md rounded-2xl p-6 border border-white/20 h-full">
                  <div className="text-5xl font-bold bg-gradient-to-br from-[#8CBE60] to-[#B4D88C] bg-clip-text text-transparent mb-4">
                    {process.step}
                  </div>
                  <h4 className="text-xl text-white mb-2">{process.title}</h4>
                  <p className="text-sm text-white/70 leading-relaxed">
                    {process.description}
                  </p>
                </div>
                
                {/* Connector line */}
                {index < qualityProcess.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-3 w-6 h-0.5 bg-white/20">
                    <div className="absolute right-0 top-1/2 transform -translate-y-1/2 w-2 h-2 bg-[#8CBE60] rounded-full" />
                  </div>
                )}
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-8">
            <div className="inline-flex items-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm rounded-full border border-white/20">
              <ShieldCheck className="w-5 h-5 text-[#8CBE60]" />
              <span className="text-white">Every batch comes with complete documentation</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
