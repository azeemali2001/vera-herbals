import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sparkles, Heart } from "lucide-react";
import { useState } from "react";
import { cn } from "../../lib/utils";

interface AboutSection {
  heading: string;
  bullets: string[];
}

interface Product {
  name: string;
  image: string[]; // Support for old single image
  about: AboutSection[];
  usage: string;
  highlights: string;
  description: string;
}

interface FeaturedProductProps {
  product: Product;
  index: number;
  reversed?: boolean;
  compact?: boolean;
}

const icons = [Leaf, Sparkles, Heart];

export function FeaturedProduct({ product, index, reversed = false, compact = false }: FeaturedProductProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalize images to always be an array
  const allImages = product.image;

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.15, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.25, 0.1, 0.25, 1] as const } }
  };

  const highlightItems = product.highlights.split(" • ");

  return (
    <section className={cn(
      compact ? "py-0" : "py-12 lg:py-16",
      !compact && (index % 2 === 0 ? "bg-background" : "bg-cream")
    )}>
      <div className={cn("mx-auto", compact ? "px-0" : "container px-6 lg:px-8")}>
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: compact ? "0px" : "-100px" }}
          className={cn(
            "grid items-start",
            compact ? "grid-cols-1 gap-6" : "lg:grid-cols-2 gap-12 lg:gap-20 lg:items-center",
            !compact && reversed && "lg:grid-flow-dense"
          )}
        >

          {/* Image Section with Vertical Thumbnail Carousel */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "relative",
              !compact && reversed && "lg:col-start-2"
            )}
          >
            <div className="relative w-full">
              <div className={cn("flex", compact ? "gap-3" : "gap-4")}>
                {/* Vertical Thumbnail Column */}
                {allImages.length > 1 && (
                  <div className={cn("flex flex-col flex-shrink-0", compact ? "gap-2 w-16" : "gap-3 w-24")}>
                    {allImages.map((img, i) => (
                      <motion.button
                        key={i}
                        onClick={() => setCurrentImageIndex(i)}
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={cn(
                          "relative aspect-square rounded-xl overflow-hidden border-2 transition-all duration-300",
                          currentImageIndex === i
                            ? "border-sage shadow-lg"
                            : "border-border/40 hover:border-sage/40 opacity-70 hover:opacity-100"
                        )}
                      >
                        <img src={img} alt={`${product.name} thumbnail ${i + 1}`} className="w-full h-full object-cover" />
                        {currentImageIndex === i && (
                          <motion.div
                            layoutId="thumbnail-indicator"
                            className="absolute inset-0 border-2 border-sage rounded-xl"
                            transition={{ type: "spring", stiffness: 300, damping: 30 }}
                          />
                        )}
                      </motion.button>
                    ))}
                  </div>
                )}

                {/* Main Image Display */}
                <div className="flex-1 relative w-full">
                  <div className="relative h-full rounded-3xl overflow-hidden bg-sage-light/30 shadow-[0_20px_60px_rgba(0,0,0,0.12)] border border-border/40">

                    <AnimatePresence mode="wait">
                      <motion.img
                        key={currentImageIndex}
                        src={allImages[currentImageIndex]}
                        alt={`${product.name} ${currentImageIndex + 1}`}
                        initial={{ opacity: 0, scale: 1.05 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.98 }}
                        transition={{ duration: 0.45, ease: "easeOut" }}
                        className="w-full h-full object-contain object-center"
                      />
                    </AnimatePresence>

                    <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-transparent pointer-events-none" />

                    {allImages.length > 1 && (
                      <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-3 py-1 rounded-full shadow-md">
                        <span className="text-xs font-semibold text-earth">
                          {currentImageIndex + 1} / {allImages.length}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className={cn(
              compact ? "space-y-4" : "space-y-8",
              !compact && reversed && "lg:col-start-1 lg:row-start-1"
            )}
          >
            <div className={cn(compact ? "space-y-2" : "space-y-4")}>
              {!compact && <span className="section-heading">Featured Product</span>}
              <h2 className={cn(
                "font-serif font-medium text-earth leading-tight",
                compact ? "text-2xl" : "text-3xl lg:text-4xl xl:text-5xl"
              )}>
                {product.name}
              </h2>
              <p className={cn("text-earth-light leading-relaxed", compact ? "text-sm" : "text-lg")}>
                {product.description}
              </p>
            </div>

            <div className={cn("flex flex-wrap", compact ? "gap-2" : "gap-3")}>
              {highlightItems.map((highlight, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <span
                    key={i}
                    className={cn(
                      "inline-flex items-center rounded-full bg-sage-light text-sage font-medium",
                      compact ? "gap-1.5 px-3 py-1.5 text-xs" : "gap-2 px-4 py-2 text-sm"
                    )}
                  >
                    <Icon className="w-4 h-4" />
                    {highlight}
                  </span>
                );
              })}
            </div>

            <div className={cn(compact ? "space-y-2" : "space-y-3")}>
              <h3 className={cn("font-semibold uppercase tracking-wider text-earth", compact ? "text-xs mb-2" : "text-sm mb-4")}>
                About This Product
              </h3>
              {product.about.map((section, i) => (
                <div
                  key={i}
                  className="border border-border rounded-xl overflow-hidden bg-background"
                >
                  <button
                    onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                    className="w-full px-5 py-4 flex items-center justify-between text-left hover:bg-muted/50 transition-colors"
                  >
                    <span className="font-medium text-earth">{section.heading}</span>
                    <span className={cn(
                      "text-sage transition-transform duration-300",
                      expandedSection === i && "rotate-180"
                    )}>
                      <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                      </svg>
                    </span>
                  </button>
                  <motion.div
                    initial={false}
                    animate={{ height: expandedSection === i ? "auto" : 0 }}
                    transition={{ duration: 0.3, ease: "easeInOut" }}
                    className="overflow-hidden"
                  >
                    <ul className="px-5 pb-4 space-y-2">
                      {section.bullets.map((bullet, j) => (
                        <li key={j} className="flex items-start gap-3 text-earth-light">
                          <span className="w-1.5 h-1.5 rounded-full bg-sage mt-2 flex-shrink-0" />
                          <span className="text-sm leading-relaxed">{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                </div>
              ))}
            </div>

            <div className={cn("rounded-xl bg-sage-light border border-sage/10", compact ? "p-3" : "p-5")}>
              <h4 className={cn("font-semibold uppercase tracking-wider text-sage", compact ? "text-xs mb-1" : "text-sm mb-2")}>
                Suggested Usage
              </h4>
              <p className={cn("text-earth-light leading-relaxed", compact ? "text-xs" : "text-sm")}>
                {product.usage}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}