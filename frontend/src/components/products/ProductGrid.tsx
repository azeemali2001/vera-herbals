import { motion } from "framer-motion";
import { ProductCard } from "./ProductCard";

interface AboutSection {
  heading: string;
  bullets: string[];
}

export interface Product {
  id: string;
  name: string;
  image: string[];
  about: AboutSection[];
  usage: string;
  highlights: string;
  description: string;
}

interface ProductGridProps {
  products: Product[];
  title: string;
  subtitle: string;
  onProductClick?: (product: Product) => void;
}

export function ProductGrid({ products, title, subtitle, onProductClick }: ProductGridProps) {
  return (
    <section className="pt-4 pb-6 lg:pt-8 lg:pb-12 bg-gradient-to-b from-background to-cream/60 -mx-4 px-4 sm:mx-0 sm:px-0">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
          className="text-center max-w-2xl mx-auto mb-8 lg:mb-10"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-serif font-medium text-earth mb-3 tracking-tight">
            {title}
          </h2>
          <p className="text-earth-light text-sm sm:text-base leading-relaxed">
            {subtitle}
          </p>
        </motion.div>

        {/* Equal grid - all products same size */}
        <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 sm:gap-5 lg:gap-6">
          {products.map((product, index) => (
            <ProductCard
              key={product.id}
              product={product}
              index={index}
              onClick={onProductClick ? () => onProductClick(product) : undefined}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
