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
      description: "Various testing for purity, safety, and potency",
    },
    {
      step: "04",
      title: "Premium Packaging",
      description: "Food-grade premium packaging for freshness",
    },
  ];

  return (
    <section id="quality" className="relative overflow-hidden bg-cream/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">

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
