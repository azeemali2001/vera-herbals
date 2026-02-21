import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FeaturedProduct } from "../components/products/FeaturedProduct";
import { ProductGrid } from "../components/products/ProductGrid";
import {
  Sheet,
  SheetContent,
} from "../components/ui/sheet";
import type { Product } from "../components/products/ProductGrid";

const products = [
  {
    id: "moringa-leaf-powder", // Added unique ID
    name: "Moringa Leaf Powder",
    image: ["Moringa Photo 1.png","Moringa Photo 2.png","Moringa Photo 3.png"],
    about: [
      {
        heading: "MULTI-VITAMIN POWERHOUSE",
        bullets: [
          "Nutritionally rich with essential vitamins, minerals, and amino acids.",
          "A rich source of Vitamins A, B1, B2, B3, B6, K, E, and C."
        ]
      },
      {
        heading: "SUPERFOOD FOR PROTEIN",
        bullets: [
          "9× more protein than yoghurt",
          "15× more potassium than bananas",
          "25× more iron than spinach",
          "Helps reduce fatigue and weakness while nourishing hair and skin with anti-inflammatory and antioxidant properties."
        ]
      },
      {
        heading: "IMMUNITY BOOSTER",
        bullets: [
          "7× more Vitamin C than oranges",
          "Boosts immunity and energy levels.",
          "Natural moringa powder has a mild earthy taste."
        ]
      }
    ],
    usage: "Take 1 teaspoon (4g) daily on an empty stomach. Can be consumed with water or mixed into juices, smoothies, vegetables, curries, dal, etc.",
    highlights: "Natural Multi-Vitamin • Immunity Booster • Weight Management Support • Good for Hair & Skin • Plant-Based Protein Source",
    description: "A complete daily superfood packed with plant-based protein, essential vitamins, minerals, and antioxidants. Supports overall wellness, boosts energy, and promotes healthy hair, skin, and immunity—naturally."
  },
  {
    id: "curry-leaf-powder", // Added unique ID
    name: "Curry Leaf Powder",
    image: ["curryLeafPowder.png","curryLeafPowder.png","curryLeafPowder.png"],
    about: [
      {
        heading: "For Cooking",
        bullets: [
          "Curry leaf powder adds a rich, aromatic, and earthy flavor to dishes.",
          "Use sparingly and adjust to taste for authentic Indian cuisine."
        ]
      },
      {
        heading: "For Hair Oil Preparation",
        bullets: [
          "Heat coconut oil and add curry leaf powder according to hair length and thickness.",
          "Fry briefly until the oil begins to boil. Let it cool, then strain using a clean cloth.",
          "The infused oil is ready for use."
        ]
      },
      {
        heading: "For Hair Mask",
        bullets: [
          "Mix one spoon of curry leaf powder with water to form a smooth paste.",
          "Apply to hair, leave for 30 minutes, and rinse with normal water."
        ]
      },
      {
        heading: "Nutritional Benefit",
        bullets: [
          "Curry leaves are a rich source of Vitamin B, essential for strengthening hair roots and promoting healthy hair growth."
        ]
      }
    ],
    usage: "Take 1 teaspoon (4g) daily on an empty stomach. Can be consumed with water or mixed into juices, smoothies, vegetables, curries, dal, etc.",
    highlights: "Rich Aroma • Hair Health • Vitamin B Source • Authentic Indian Flavor",
    description: "Premium curry leaf powder for culinary and wellness use. Adds authentic flavor to dishes and supports healthy hair growth."
  },
  {
    id: "neem-leaf-powder", // Added unique ID
    name: "Neem Leaf Powder",
    image: ["neemLeafPowder.png","neemLeafPowder.png","neemLeafPowder.png"],
    about: [
      {
        heading: "SKIN & IMMUNE SUPPORT",
        bullets: [
          "Ancient remedy for skin health and immune support.",
          "Natural detoxifier with antimicrobial properties."
        ]
      }
    ],
    usage: "Mix with water for tea or apply as paste.",
    highlights: "Detoxifier • Skin Health • Immunity",
    description: "Neem leaf powder supports clear skin and a healthy immune system with natural detoxifying properties."
  },
  {
    id: "tulsi-leaf-powder", // Added unique ID
    name: "Tulsi Leaf Powder",
    image: ["tulsiLeafPowder.png","tulsiLeafPowder.png","tulsiLeafPowder.png"],
    about: [
      {
        heading: "STRESS RELIEF & IMMUNITY",
        bullets: [
          "Holy basil known as the 'Queen of Herbs'.",
          "Promotes stress reduction and respiratory health."
        ]
      }
    ],
    usage: "Brew as tea or add to smoothies.",
    highlights: "Stress Relief • Immune Booster • Respiratory Health",
    description: "Tulsi powder helps manage stress, supports immunity, and promotes respiratory wellness."
  },
  {
    id: "amla-powder", // Added unique ID
    name: "Amla Powder",
    image: ["amlaPowder.png","amlaPowder.png","amlaPowder.png"],
    about: [
      {
        heading: "VITAMIN C POWERHOUSE",
        bullets: [
          "Indian gooseberry, one of the richest sources of Vitamin C.",
          "Supports hair, skin, and digestive health."
        ]
      }
    ],
    usage: "Mix with honey, water, or add to meals.",
    highlights: "Vitamin C • Hair & Skin • Digestion",
    description: "Amla powder is a potent source of Vitamin C, supporting immunity, hair, and skin health."
  },
  {
    id: "papaya-leaf-powder", // Added unique ID
    name: "Papaya Leaf Powder",
    image: ["papayaLeafPowder.png","papayaLeafPowder.png","papayaLeafPowder.png"],
    about: [
      {
        heading: "DIGESTIVE & LIVER SUPPORT",
        bullets: [
          "Supports digestive health and natural detoxification.",
          "Contains digestive enzymes and supports liver function."
        ]
      }
    ],
    usage: "Brew as tea or mix with water.",
    highlights: "Digestive Enzymes • Liver Support • Detox",
    description: "Papaya leaf powder aids digestion and supports liver health with natural enzymes."
  },
  {
    id: "turmeric-powder", // Added unique ID
    name: "Turmeric Powder",
    image: ["turmericPowder.png","turmericPowder.png","turmericPowder.png"],
    about: [
      {
        heading: "ANTI-INFLAMMATORY & JOINT HEALTH",
        bullets: [
          "Golden spice with powerful anti-inflammatory properties.",
          "Supports joint health and antioxidant protection."
        ]
      }
    ],
    usage: "Add to golden milk, curries, or smoothies.",
    highlights: "Anti-inflammatory • Joint Health • Antioxidant",
    description: "Turmeric powder is known for its anti-inflammatory and antioxidant benefits, supporting joint health."
  },
  {
    id: "banana-powder", // Added unique ID
    name: "Banana Powder",
    image: ["bananaPowder.png","bananaPowder.png","bananaPowder.png"],
    about: [
      {
        heading: "ENERGY & ELECTROLYTE BALANCE",
        bullets: [
          "Natural energy source rich in potassium and vitamins.",
          "Supports electrolyte balance and digestive health."
        ]
      }
    ],
    usage: "Add to smoothies, baking, or oatmeal.",
    highlights: "Energy Boost • Potassium • Digestion",
    description: "Banana powder provides natural energy, supports digestion, and helps maintain electrolyte balance."
  },
  {
    id: "hibiscus-powder", // Added unique ID
    name: "Hibiscus Powder",
    image: ["hibiscusPowder.png","hibiscusPowder.png","hibiscusPowder.png"],
    about: [
      {
        heading: "HEART & NATURAL ENERGY",
        bullets: [
          "Beautiful flower known for heart health and natural energy.",
          "Rich in antioxidants and supports healthy blood pressure."
        ]
      }
    ],
    usage: "Brew as tea or add to beverages.",
    highlights: "Heart Health • Antioxidant • Energy",
    description: "Hibiscus powder supports heart health, provides antioxidants, and boosts natural energy."
  }
];

export default function Products() {
  const location = useLocation();
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [sheetOpen, setSheetOpen] = useState(false);

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace('#', '');
      const element = document.getElementById(id);
      const product = products.find((p) => p.id === id);
      if (product) {
        setSelectedProduct(product);
        setSheetOpen(true);
      } else if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'center' });
        }, 0);
      }
    }
  }, [location]);

  const handleProductClick = (product: Product) => {
    setSelectedProduct(product);
    setSheetOpen(true);
  };

  return (
    <section className="section-block !pt-2 lg:!pt-4 !pb-6 lg:!pb-10">
      {/* Dense Product Grid */}
      <ProductGrid
        products={products}
        title="Our Herbal Collection"
        subtitle="Premium organic powders for wellness, cooking, and natural beauty."
        onProductClick={handleProductClick}
      />

      {/* Product Detail Sheet */}
      <Sheet open={sheetOpen} onOpenChange={setSheetOpen}>
        <SheetContent side="right" className="w-full sm:max-w-xl overflow-y-auto p-0">
          {selectedProduct && (
            <div className="p-6">
              <FeaturedProduct
                product={selectedProduct}
                index={0}
                reversed={false}
                compact
              />
            </div>
          )}
        </SheetContent>
      </Sheet>
    </section>
  );
}
