import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../ui/utils";

interface AboutSection {
  heading: string;
  bullets: string[];
}

interface Product {
  id: string;
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
  onClick?: () => void;
}

export function ProductCard({ product, index, onClick }: ProductCardProps) {
  const highlightItems = product.highlights.split(" • ").slice(0, 3);
  const isClickable = !!onClick;

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      <div
        role={isClickable ? "button" : undefined}
        tabIndex={isClickable ? 0 : undefined}
        onClick={onClick}
        onKeyDown={isClickable ? (e) => e.key === "Enter" && onClick?.() : undefined}
        className={cn(
          "relative h-full flex flex-col overflow-hidden rounded-2xl bg-gradient-to-b from-white to-cream border border-cream-dark/50 transition-all duration-400",
          "shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06),0_4px_24px_-8px_rgba(0,0,0,0.04)]",
          isClickable && [
            "cursor-pointer",
            "hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(74,124,44,0.12),0_8px_24px_-8px_rgba(0,0,0,0.06)]",
            "hover:border-sage/20 hover:from-white hover:to-sage-light/20",
          ]
        )}
      >
        {/* Image - clean, prominent */}
        <div className="relative aspect-[4/5] flex-shrink-0 overflow-hidden flex items-center justify-center bg-white">
          <img
            src={product.image[0]}
            alt={product.name}
            className="h-full w-full object-contain p-3 sm:p-4 group-hover:scale-105 transition-transform duration-500"
          />
        </div>

        {/* Content - heading as main attraction */}
        <div className="flex flex-1 flex-col p-4 sm:p-5 min-h-0">
          <h3 className="text-lg sm:text-xl font-serif font-semibold text-earth mb-2 group-hover:text-sage transition-colors line-clamp-2 leading-tight">
            {product.name}
          </h3>

          <p className="text-xs text-earth-light leading-relaxed line-clamp-2 flex-1 mb-3">
            {product.description}
          </p>

          {/* Highlights as pills */}
          <div className="flex flex-wrap gap-2">
            {highlightItems.map((highlight, i) => (
              <span
                key={i}
                className="inline-flex items-center px-2.5 py-1 rounded-full text-[11px] font-medium bg-sage-light text-sage"
              >
                {highlight}
              </span>
            ))}
          </div>

          {/* CTA */}
          {isClickable && (
            <div className="mt-4 pt-4 border-t border-cream-dark/40 flex items-center gap-2 text-sage text-sm font-medium opacity-80 group-hover:opacity-100 transition-opacity">
              <span>Explore</span>
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </div>
          )}
        </div>
      </div>
    </motion.article>
  );
}
