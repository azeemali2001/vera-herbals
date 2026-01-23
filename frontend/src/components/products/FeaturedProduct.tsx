import { motion, AnimatePresence } from "framer-motion";
import { Leaf, Sparkles, Heart, ChevronLeft, ChevronRight } from "lucide-react";
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
}

const icons = [Leaf, Sparkles, Heart];

export function FeaturedProduct({ product, index, reversed = false }: FeaturedProductProps) {
  const [expandedSection, setExpandedSection] = useState<number | null>(0);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  // Normalize images to always be an array
  const allImages = product.image;

  const nextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % allImages.length);
  };

  const prevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + allImages.length) % allImages.length);
  };

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
      "py-20 lg:py-28",
      index % 2 === 0 ? "bg-background" : "bg-cream"
    )}>
      <div className="container mx-auto px-6 lg:px-8">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className={cn(
            "grid lg:grid-cols-2 gap-12 lg:gap-20 items-center",
            reversed && "lg:grid-flow-dense"
          )}
        >
          {/* Image Section with Carousel */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "relative",
              reversed && "lg:col-start-2"
            )}
          >
            <div className="relative aspect-square max-w-lg mx-auto">
              <div className="absolute inset-4 rounded-3xl bg-sage-light rotate-3 transform" />
              <div className="absolute inset-4 rounded-3xl bg-cream-dark -rotate-2 transform" />
              
              <div className="relative h-full rounded-3xl overflow-hidden shadow-elevated bg-background group">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={currentImageIndex}
                    src={allImages[currentImageIndex]}
                    alt={`${product.name} ${currentImageIndex + 1}`}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    className="w-full h-full object-contain p-8 lg:p-12"
                  />
                </AnimatePresence>

                {/* Carousel Controls */}
                {allImages.length > 1 && (
                  <>
                    <button
                      onClick={prevImage}
                      className="absolute left-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-earth shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <ChevronLeft className="w-5 h-5" />
                    </button>
                    <button
                      onClick={nextImage}
                      className="absolute right-4 top-1/2 -translate-y-1/2 p-2 rounded-full bg-white/80 text-earth shadow-md opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    >
                      <ChevronRight className="w-5 h-5" />
                    </button>
                    
                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
                      {allImages.map((_, i) => (
                        <button
                          key={i}
                          onClick={() => setCurrentImageIndex(i)}
                          className={cn(
                            "w-2 h-2 rounded-full transition-all",
                            currentImageIndex === i ? "bg-sage w-4" : "bg-sage/30"
                          )}
                        />
                      ))}
                    </div>
                  </>
                )}
              </div>

              <div className="absolute -bottom-4 -right-4 lg:-right-8 bg-sage text-primary-foreground px-6 py-3 rounded-2xl shadow-card z-20">
                <span className="text-sm font-medium">100% Natural</span>
              </div>
            </div>
          </motion.div>

          {/* Content Section */}
          <motion.div
            variants={itemVariants}
            className={cn(
              "space-y-8",
              reversed && "lg:col-start-1 lg:row-start-1"
            )}
          >
            <div className="space-y-4">
              <span className="section-heading">Featured Product</span>
              <h2 className="text-3xl lg:text-4xl xl:text-5xl font-serif font-medium text-earth leading-tight">
                {product.name}
              </h2>
              <p className="text-lg text-earth-light leading-relaxed">
                {product.description}
              </p>
            </div>

            <div className="flex flex-wrap gap-3">
              {highlightItems.map((highlight, i) => {
                const Icon = icons[i % icons.length];
                return (
                  <span
                    key={i}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage-light text-sage text-sm font-medium"
                  >
                    <Icon className="w-4 h-4" />
                    {highlight}
                  </span>
                );
              })}
            </div>

            <div className="space-y-3">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-earth mb-4">
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
                        <path d="M5 7.5L10 12.5L15 7.5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
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

            <div className="p-5 rounded-xl bg-sage-light border border-sage/10">
              <h4 className="text-sm font-semibold uppercase tracking-wider text-sage mb-2">
                Suggested Usage
              </h4>
              <p className="text-sm text-earth-light leading-relaxed">
                {product.usage}
              </p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}