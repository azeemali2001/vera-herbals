import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { cn } from "../../lib/utils";

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
  href?: string;
}

export function ProductCard({ product, index, onClick, href }: ProductCardProps) {
  const highlightItems = product.highlights.split(" • ").slice(0, 3);
  const isClickable = !!onClick || !!href;

  const cardContent = (
    <div
      className={cn(
        "relative h-full flex flex-col overflow-hidden rounded-2xl bg-white border border-cream-dark/50 transition-all duration-300",
        "shadow-[0_2px_12px_-4px_rgba(0,0,0,0.06),0_4px_24px_-8px_rgba(0,0,0,0.04)]",
        isClickable && "group hover:-translate-y-1 hover:shadow-[0_12px_40px_-12px_rgba(74,124,44,0.12),0_8px_24px_-8px_rgba(0,0,0,0.06)]"
      )}
    >
      <div className="relative overflow-hidden">
        <img
          src={product.image[0]}
          alt={product.name}
          className="w-full h-64 object-cover transition-transform duration-500 group-hover:scale-105"
        />
      </div>

      <div className="flex flex-1 flex-col p-6 min-h-0">
        <h3 className="text-xl font-bold mb-3 text-gray-800 group-hover:text-[#4A7C2C] transition-colors line-clamp-2 leading-tight">
          {product.name}
        </h3>

        <p className="text-sm text-gray-600 leading-relaxed line-clamp-2 flex-1 mb-4">
          {product.description}
        </p>

        <div className="flex items-center justify-between text-sm text-[#4A7C2C] font-medium">
          <span>Explore</span>
          <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
        </div>
      </div>
    </div>
  );

  return (
    <motion.article
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.5, delay: index * 0.06, ease: [0.25, 0.1, 0.25, 1] }}
      className="group"
    >
      {href ? (
        <Link to={href} className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-sage focus-visible:ring-offset-2">
          {cardContent}
        </Link>
      ) : (
        <div
          role={isClickable ? "button" : undefined}
          tabIndex={isClickable ? 0 : undefined}
          onClick={onClick}
          onKeyDown={isClickable ? (e) => e.key === "Enter" && onClick?.() : undefined}
        >
          {cardContent}
        </div>
      )}
    </motion.article>
  );
}
