import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";

export function ProductFeatures() {
  const [showAll, setShowAll] = useState(false);

  const products = [
    {
      id: "moringa-leaf-powder", // Added matching ID
      name: "Moringa Leaf Powder",
      benefit: "Rich in vitamins, minerals, and antioxidants",
      image: "moringaLeafPowder.png",
    },
    {
      id: "curry-leaf-powder", // Added matching ID
      name: "Curry Leaf Powder",
      benefit: "Supports digestion and hair health",
      image: "curryLeafPowder.png",
    },
    {
      id: "neem-leaf-powder", // Added matching ID
      name: "Neem Leaf Powder",
      benefit: "Natural detoxifier and skin health support",
      image: "neemLeafPowder.png",
    },
    {
      id: "tulsi-leaf-powder", // Added matching ID
      name: "Tulsi Leaf Powder",
      benefit: "Stress relief and immune boosting",
      image: "tulsiLeafPowder.png",
    },
    {
      id: "amla-powder", // Added matching ID
      name: "Amla Powder",
      benefit: "Vitamin C powerhouse for immunity",
      image: "amlaPowder.png",
    },
    {
      id: "papaya-leaf-powder", // Added matching ID
      name: "Papaya Leaf Powder",
      benefit: "Digestive enzymes and liver support",
      image: "papayaLeafPowder.png",
    },
    {
      id: "turmeric-powder", // Added matching ID
      name: "Turmeric Powder",
      benefit: "Anti-inflammatory and joint health",
      image: "turmericPowder.png",
    },
    {
      id: "banana-powder", // Added matching ID
      name: "Banana Powder",
      benefit: "Natural energy and electrolyte balance",
      image: "bananaPowder.png",
    },
    {
      id: "hibiscus-powder", // Added matching ID
      name: "Hibiscus Powder",
      benefit: "Heart health and natural energy boost",
      image: "hibiscusPowder.png",
    },
  ];

  // Logic to determine which products to display
  const visibleProducts = showAll ? products : products.slice(0, 3);

  return (
    <section className="py-20 bg-gradient-to-b from-white to-[#F5F8F2]">
      <div className="container mx-auto px-6">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            Our{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E]">
              Organic Products
            </span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Discover natural organic powders, carefully sourced and processed for your total wellbeing
          </p>
        </motion.div>

        {/* Products Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12"
        >
          <AnimatePresence>
            {visibleProducts.map((product, index) => (
              <motion.div
                key={product.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                {/* Wrap card in Link to redirect on click with hash */}
                <Link
                  to={`/products#${product.id}`}
                  className="group block bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 relative"
                >
                  {/* Product Image */}
                  <div className="aspect-square overflow-hidden bg-gradient-to-br from-[#F5F8F2] to-white">
                    <img
                      src={product.image}
                      alt={product.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  </div>

                  {/* Content */}
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-gray-800 group-hover:text-[#4A7C2C] transition-colors">
                      {product.name}
                    </h3>
                    <p className="text-gray-600 text-sm leading-relaxed">
                      {product.benefit}
                    </p>
                  </div>

                  {/* Decorative corner */}
                  <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-br from-[#4A7C2C]/10 to-transparent rounded-bl-full" />
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Bottom CTA / Toggle Button */}
        <div className="text-center">
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setShowAll(!showAll)}
            className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-[#4A7C2C] to-[#6B9D3E] text-white font-medium rounded-full hover:shadow-lg hover:scale-105 active:scale-95 transition-all"
          >
            {showAll ? "Show Less Products" : "View All Products"}
          </motion.button>
        </div>
      </div>
    </section>
  );
}