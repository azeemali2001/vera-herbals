import { motion } from "framer-motion";
import { Leaf } from "lucide-react";

interface AboutSection {
  heading: string;
  bullets: string[];
}

interface Product {
  name: string;
  image: string[];
  about: AboutSection[];
  usage: string;
  highlights: string;
  description: string;
}

interface ProductCardProps {
  product: Product;
  index: number;
}

export function ProductCard({ product, index }: ProductCardProps) {
  const highlightItems = product.highlights.split(" • ").slice(0, 3);

  return (
    <motion.article
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: "easeOut" }}
      className="group"
    >
      <div className="relative bg-background rounded-2xl p-6 shadow-soft hover:shadow-card transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-square mb-6 rounded-xl overflow-hidden bg-sage-light/50">
          <div className="absolute inset-0 bg-gradient-to-br from-sage-light/30 to-transparent" />
          <img
            src={product.image[0]}
            alt={product.name}
            className="w-full h-full object-contain p-6 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content */}
        <div className="space-y-4">
          <h3 className="text-xl font-serif font-medium text-earth group-hover:text-sage transition-colors">
            {product.name}
          </h3>

          <p className="text-sm text-earth-light leading-relaxed line-clamp-2">
            {product.description}
          </p>

          {/* Highlights */}
          <div className="flex flex-wrap gap-2">
            {highlightItems.map((highlight, i) => (
              <span
                key={i}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-muted text-xs font-medium text-earth-light"
              >
                <Leaf className="w-3 h-3 text-sage" />
                {highlight}
              </span>
            ))}
          </div>

          {/* Key Benefit */}
          {product.about[0] && (
            <div className="pt-4 border-t border-border">
              <p className="text-xs font-semibold uppercase tracking-wider text-sage mb-2">
                {product.about[0].heading}
              </p>
              <p className="text-sm text-earth-light leading-relaxed line-clamp-2">
                {product.about[0].bullets[0]}
              </p>
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
