import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface AboutSection {
  heading: string;
  bullets: string[];
}

interface Product {
  name: string;
  image: string;
  about: AboutSection[];
  usage: string;
  highlights: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle: string;
}

export function ProductGrid({ products, title, subtitle }: ProductGridProps) {
  return (
    <section className="py-20 lg:py-28 bg-cream">
      <div className="container mx-auto px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <span className="section-heading mb-4 block">Complete Collection</span>
          <h2 className="text-3xl lg:text-4xl font-serif font-medium text-earth mb-4">
            {title}
          </h2>
          <p className="text-earth-light text-lg leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Products Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 lg:gap-8">
          {products.map((product, index) => (
            <ProductCard key={product.name} product={product} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
