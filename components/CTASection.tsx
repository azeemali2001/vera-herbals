import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { Button } from "./ui/button";

export function CTASection() {
  const benefits = [
    "Premium organic herbal products",
    "Traditional Ayurvedic formulations",
    "Sustainable and ethical sourcing",
    "Expert wellness consultation",
  ];

  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-[#F5F1E8] via-transparent to-[#E8F5E9] opacity-60" />
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-br from-[#6B9D3E]/10 to-[#4A7C2C]/10 rounded-full blur-3xl"
          animate={{
            scale: [1, 1.1, 1],
            rotate: [0, 90, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        />
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto"
        >
          <div className="bg-gradient-to-br from-[#2D5016] to-[#4A7C2C] rounded-3xl overflow-hidden shadow-2xl">
            <div className="grid lg:grid-cols-2 gap-0">
              {/* Left Content */}
              <div className="p-8 md:p-12 flex flex-col justify-center">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="space-y-6"
                >
                  <div className="inline-block px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm text-white border border-white/30">
                    Start Your Partnership
                  </div>
                  
                  <h2 className="text-4xl sm:text-5xl text-white">
                    Ready to Experience{" "}
                    <span className="bg-gradient-to-r from-[#B4D88C] to-[#8CBE60] bg-clip-text text-transparent">
                      Nature's Healing Power?
                    </span>
                  </h2>
                  
                  <p className="text-lg text-white/80 leading-relaxed">
                    Discover how our premium herbal products can enhance your wellness journey.
                    Get in touch to learn more about our authentic, organic offerings.
                  </p>

                  <div className="space-y-3">
                    {benefits.map((benefit, index) => (
                      <motion.div
                        key={index}
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.3 + index * 0.1, duration: 0.5 }}
                        className="flex items-center gap-3"
                      >
                        <div className="w-6 h-6 rounded-full bg-[#8CBE60] flex items-center justify-center flex-shrink-0">
                          <CheckCircle2 className="w-4 h-4 text-[#2D5016]" />
                        </div>
                        <span className="text-white/90">{benefit}</span>
                      </motion.div>
                    ))}
                  </div>

                  <Button
                    className="bg-white text-[#2D5016] hover:bg-[#F5F1E8] px-8 py-6 rounded-full shadow-lg hover:shadow-xl transition-all group mt-4"
                    onClick={() => window.location.href = '/contact-us'}
                  >
                    Get in Touch with VERA
                    <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </motion.div>
              </div>

              {/* Right Image */}
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="relative h-full min-h-[400px] lg:min-h-0"
              >
                <img
                  src="https://images.unsplash.com/photo-1767281076175-e52ca45cb2d9?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHx3ZWxsbmVzcyUyMGhlcmJhbCUyMG5hdHVyYWx8ZW58MXx8fHwxNzY3NDc3NzA5fDA&ixlib=rb-4.1.0&q=80&w=1080"
                  alt="Natural Wellness"
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-l from-transparent to-[#2D5016]/50" />
                
                {/* Floating stats */}
                <div className="absolute top-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl text-[#4A7C2C] mb-1">9</div>
                  <div className="text-sm text-[#2D5016]">Premium Herbs</div>
                </div>
                
                <div className="absolute bottom-8 right-8 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
                  <div className="text-4xl text-[#4A7C2C] mb-1">100%</div>
                  <div className="text-sm text-[#2D5016]">Organic & Natural</div>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
