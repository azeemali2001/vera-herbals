import { motion } from "framer-motion";
import { Link } from "react-router-dom";

export function ProductFeatures() {
  const products = [
    {
      name: "Moringa Leaf Powder",
      benefit: "Rich in vitamins, minerals, and antioxidants",
      image: "🌿"
    },
    {
      name: "Curry Leaf Powder",
      benefit: "Supports digestion and hair health",
      image: "🍃"
    },
    {
      name: "Neem Leaf Powder",
      benefit: "Natural detoxifier and skin health support",
      image: "🌿"
    },
    {
      name: "Tulsi Leaf Powder",
      benefit: "Stress relief and immune boosting",
      image: "🌱"
    },
    {
      name: "Amla Powder",
      benefit: "Vitamin C powerhouse for immunity",
      image: "🫐"
    },
    {
      name: "Papaya Leaf Powder",
      benefit: "Digestive enzymes and liver support",
      image: "🍃"
    },
    {
      name: "Turmeric Powder",
      benefit: "Anti-inflammatory and joint health",
      image: "🌶️"
    },
    {
      name: "Banana Powder",
      benefit: "Natural energy and electrolyte balance",
      image: "🍌"
    },
    {
      name: "Hibiscus Powder",
      benefit: "Heart health and natural energy boost",
      image: "🌺"
    }
  ];

  return (
    <section className="py-24 bg-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16 space-y-4"
        >
          <h2 className="text-4xl sm:text-5xl text-[#2D5016]">
            Our{" "}
            <span className="bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] bg-clip-text text-transparent">
              Organic Products
            </span>
          </h2>
          <p className="text-lg text-[#4A7C2C]/80">
            Discover natural organic powders, carefully sourced and proceessed for your total wellbeing</p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              className="group relative"
            >
              <div className="relative bg-white rounded-3xl p-6 h-full shadow-lg hover:shadow-2xl transition-all duration-300 border border-[#6B9D3E]/10 overflow-hidden">
                {/* Product Image */}
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-2xl mb-4 flex items-center justify-center text-6xl">
                  {product.image}
                </div>

                {/* Content */}
                <div className="space-y-2">
                  <h3 className="text-xl font-semibold text-[#2D5016]">{product.name}</h3>
                  <p className="text-[#4A7C2C]/70 leading-relaxed">
                    {product.benefit}
                  </p>
                </div>

                {/* Decorative corner */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-gradient-to-br from-[#6B9D3E]/5 to-transparent rounded-bl-full" />
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
          <Link
            to="/products"
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] text-white font-medium rounded-full hover:shadow-lg transition-all"
          >
            View All Products
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
