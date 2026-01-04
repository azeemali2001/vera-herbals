import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

const products = [
  {
    name: "Moringa Leaf Powder",
    description: "Rich in vitamins, minerals, and antioxidants. Supports immune health and energy levels.",
    benefits: ["High in Vitamin C", "Antioxidant properties", "Supports digestion"],
    usage: "Mix 1 tsp with water, smoothies, or food daily."
  },
  {
    name: "Curry Leaf Powder",
    description: "Traditional herb known for its culinary and medicinal properties.",
    benefits: ["Supports hair health", "Aids digestion", "Rich in antioxidants"],
    usage: "Add to curries, teas, or sprinkle on meals."
  },
  {
    name: "Neem Leaf Powder",
    description: "Ancient remedy for skin health and immune support.",
    benefits: ["Natural detoxifier", "Skin health support", "Antimicrobial properties"],
    usage: "Mix with water for tea or apply as paste."
  },
  {
    name: "Tulsi Leaf Powder",
    description: "Holy basil known as the 'Queen of Herbs' for stress relief and immunity.",
    benefits: ["Stress reduction", "Immune booster", "Respiratory health"],
    usage: "Brew as tea or add to smoothies."
  },
  {
    name: "Amla Powder",
    description: "Indian gooseberry, one of the richest sources of Vitamin C.",
    benefits: ["Immune support", "Hair and skin health", "Digestive health"],
    usage: "Mix with honey, water, or add to meals."
  },
  {
    name: "Papaya Leaf Powder",
    description: "Supports digestive health and natural detoxification.",
    benefits: ["Digestive enzymes", "Liver support", "Platelet health"],
    usage: "Brew as tea or mix with water."
  },
  {
    name: "Turmeric Powder",
    description: "Golden spice with powerful anti-inflammatory properties.",
    benefits: ["Anti-inflammatory", "Joint health", "Antioxidant"],
    usage: "Add to golden milk, curries, or smoothies."
  },
  {
    name: "Banana Powder",
    description: "Natural energy source rich in potassium and vitamins.",
    benefits: ["Energy boost", "Electrolyte balance", "Digestive health"],
    usage: "Add to smoothies, baking, or oatmeal."
  },
  {
    name: "Hibiscus Powder",
    description: "Beautiful flower known for heart health and natural energy.",
    benefits: ["Blood pressure support", "Antioxidant rich", "Natural diuretic"],
    usage: "Brew as tea or add to beverages."
  }
];

export default function Products() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Our Herbal Products</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover our range of premium, organic herbal powders sourced from nature's finest.
              Each product is carefully processed to maintain maximum nutritional value.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🌿</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{product.name}</h3>
                <p className="text-gray-600 mb-4">{product.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Key Benefits:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {product.benefits.map((benefit, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Suggested Usage:</h4>
                  <p className="text-sm text-gray-600">{product.usage}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}