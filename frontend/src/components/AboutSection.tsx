import { motion } from "framer-motion";
import { Sprout, Award, Globe2, Users } from "lucide-react";

export function AboutSection() {
  const values = [
    {
      icon: Sprout,
      title: "Ayurvedic Heritage",
      description: "Rooted in 5,000 years of traditional healing wisdom",
    },
    {
      icon: Globe2,
      title: "Sustainable Harvesting",
      description: "Ethical sourcing that preserves biodiversity and communities",
    },
    {
      icon: Award,
      title: "Pure & Natural",
      description: "No chemicals, additives, or artificial processing",
    },
    {
      icon: Users,
      title: "Holistic Wellness",
      description: "Supporting complete health through natural herbal solutions",
    },
  ];

  return (
    <section id="about" className="py-24 bg-white relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-[#F5F1E8] to-transparent opacity-50" />
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left - Image */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1591104955069-1634dd952a90?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxvcmdhbmljJTIwZmFybSUyMHN1c3RhaW5hYmlsaXR5fGVufDF8fHx8MTc2NzQ3NzcwOXww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Sustainable Moringa Farming"
                className="w-full h-[600px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-[#2D5016]/40 to-transparent" />
            </div>
            
            {/* Floating stat card */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="absolute -bottom-8 -right-8 bg-white rounded-2xl p-8 shadow-2xl backdrop-blur-sm border border-[#6B9D3E]/20"
            >
              <div className="text-5xl text-[#4A7C2C] mb-2">5000+</div>
              <div className="text-[#2D5016]">Years of Tradition</div>
              <div className="text-sm text-[#4A7C2C]/70 mt-1">Ayurvedic Wisdom</div>
            </motion.div>
          </motion.div>

          {/* Right - Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div className="space-y-4">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-block px-4 py-2 bg-[#F5F1E8] rounded-full text-sm text-[#4A7C2C]"
              >
                About VERA
              </motion.div>
              
              <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
                Bridging Ancient Wisdom with{" "}
                <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
                  Modern Wellness
                </span>
              </h2>
              
              <p className="text-lg text-[#4A7C2C]/80 leading-relaxed">
                VERA is dedicated to bringing the healing power of nature's finest herbs to modern wellness.
                We honor the 5,000-year-old tradition of Ayurveda while maintaining the highest standards
                of quality, purity, and sustainability in our processing methods.
              </p>
              
              <p className="text-lg text-[#4A7C2C]/80 leading-relaxed">
                Our mission is to provide authentic, organic herbal products that support holistic health
                and wellness. From traditional Ayurvedic herbs to innovative wellness solutions, we ensure
                that every product maintains the natural potency and healing properties that nature intended.
              </p>
            </div>

            {/* Values Grid */}
            <div className="grid sm:grid-cols-2 gap-6 pt-8">
              {values.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.1 * index, duration: 0.5 }}
                  className="bg-gradient-to-br from-white to-[#F5F1E8] p-6 rounded-2xl border border-[#6B9D3E]/20 hover:shadow-lg transition-all group"
                >
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-[#4A7C2C] to-[#6B9D3E] flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                    <value.icon className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-[#2D5016] mb-2">{value.title}</h3>
                  <p className="text-sm text-[#4A7C2C]/70">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}