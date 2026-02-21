import { motion } from "framer-motion";
import {
  ShieldCheck,
  FileCheck,
  Microscope,
  Award,
  ClipboardCheck,
  Layers,
  ArrowRight,
} from "lucide-react";

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
    <section id="quality" className="relative overflow-hidden bg-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-10 lg:mb-12"
        >
          <span className="section-heading mb-4 block">Quality Assurance</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-medium text-earth leading-tight mb-4">
            Certified Quality &{" "}
            <span className="text-sage">Safety Compliance</span>
          </h2>
          <p className="text-lg text-earth-light">
            Every step of our process is designed to deliver the highest quality moringa powder
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-start max-w-6xl mx-auto">
          {/* Left - Certifications */}
          <div className="lg:col-span-7 space-y-6">
            <h3 className="text-xl font-semibold text-earth mb-6">Certifications & Standards</h3>
            <div className="grid sm:grid-cols-2 gap-4">
              {qualityFeatures.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.06 }}
                  className="group flex gap-4 p-5 rounded-2xl bg-white border border-cream-dark/50 shadow-soft hover:shadow-card hover:border-sage/15 transition-all duration-300"
                >
                  <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-sage-light flex items-center justify-center group-hover:bg-sage group-hover:scale-105 transition-all duration-300">
                    <feature.icon className="w-6 h-6 text-sage group-hover:text-white transition-colors" />
                  </div>
                  <div className="min-w-0">
                    <h4 className="font-semibold text-earth mb-1">{feature.title}</h4>
                    <p className="text-sm text-earth-light leading-relaxed">{feature.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Right - Image */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-elevated">
              <img
                src="https://images.unsplash.com/photo-1700727448542-50531bc60211?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxsYWJvcmF0b3J5JTIwcXVhbGl0eSUyMHRlc3Rpbmd8ZW58MXx8fHwxNzY3NDc3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Quality Testing Laboratory"
                className="w-full aspect-[4/5] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-earth/50 via-transparent to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-6">
                <div className="flex items-center gap-4 bg-white/95 backdrop-blur-md rounded-2xl p-5 border border-cream-dark/50 shadow-lg">
                  <div className="w-14 h-14 rounded-2xl bg-sage flex items-center justify-center flex-shrink-0">
                    <Award className="w-7 h-7 text-white" />
                  </div>
                  <div>
                    <p className="text-xs font-medium text-sage uppercase tracking-wider">Quality Guarantee</p>
                    <p className="text-lg font-semibold text-earth">100% Tested & Certified</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Quality Process - horizontal steps */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-14 lg:mt-16"
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl sm:text-3xl font-serif font-medium text-earth mb-3">
              Our Quality Control Process
            </h3>
            <p className="text-earth-light">A rigorous 4-step process ensures excellence in every batch</p>
          </div>

          <div className="relative max-w-5xl mx-auto">
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {qualityProcess.map((process, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative group"
                >
                  <div className="h-full flex flex-col rounded-2xl bg-sage p-6 sm:p-8 border border-sage/80 shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300">
                    <span className="text-4xl sm:text-5xl font-bold text-white/30 mb-4">
                      {process.step}
                    </span>
                    <h4 className="text-xl font-semibold text-white mb-3">{process.title}</h4>
                    <p className="text-sm text-white/80 leading-relaxed flex-1">{process.description}</p>
                  </div>
                  {index < qualityProcess.length - 1 && (
                    <div className="hidden lg:flex absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                      <ArrowRight className="w-6 h-6 text-sage-muted" />
                    </div>
                  )}
                </motion.div>
              ))}
            </div>

            <div className="mt-10 flex justify-center">
              <motion.div
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="inline-flex items-center gap-3 px-6 py-4 rounded-full bg-white border border-cream-dark/60 shadow-soft"
              >
                <ShieldCheck className="w-5 h-5 text-sage" />
                <span className="text-earth font-medium">Every batch comes with complete documentation</span>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
