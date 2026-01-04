import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

const recipes = [
  {
    title: "Moringa Green Smoothie",
    description: "A refreshing morning boost packed with nutrients.",
    ingredients: ["1 tsp Moringa Powder", "1 banana", "1 cup spinach", "1 cup almond milk", "1 tbsp honey"],
    instructions: "Blend all ingredients until smooth. Serve chilled.",
    benefits: "High in vitamins, supports energy and immunity."
  },
  {
    title: "Golden Turmeric Latte",
    description: "Warm, comforting drink with anti-inflammatory benefits.",
    ingredients: ["1 tsp Turmeric Powder", "1 cup milk", "1/2 tsp cinnamon", "1 tsp honey", "Pinch of black pepper"],
    instructions: "Heat milk, whisk in spices, simmer for 5 minutes. Sweeten to taste.",
    benefits: "Anti-inflammatory, joint support, immune boosting."
  },
  {
    title: "Tulsi Herbal Tea",
    description: "Calming tea for stress relief and respiratory health.",
    ingredients: ["1 tsp Tulsi Powder", "1 cup hot water", "1 tsp honey", "Lemon slice"],
    instructions: "Steep Tulsi powder in hot water for 5 minutes. Add honey and lemon.",
    benefits: "Stress reduction, respiratory support, antioxidant rich."
  },
  {
    title: "Amla Immunity Shot",
    description: "Concentrated vitamin C boost for daily wellness.",
    ingredients: ["1 tsp Amla Powder", "1/2 cup water", "1 tsp honey", "Pinch of cinnamon"],
    instructions: "Mix Amla powder with water, add honey and cinnamon. Drink daily.",
    benefits: "Immune support, vitamin C rich, digestive health."
  },
  {
    title: "Neem Detox Water",
    description: "Natural cleansing drink for skin and digestive health.",
    ingredients: ["1/2 tsp Neem Powder", "1 liter water", "Lemon slices", "Mint leaves"],
    instructions: "Mix Neem powder in water, add lemon and mint. Refrigerate overnight.",
    benefits: "Detoxification, skin health, digestive support."
  },
  {
    title: "Papaya Leaf Digestive Tea",
    description: "Gentle tea for digestive comfort and enzyme support.",
    ingredients: ["1 tsp Papaya Leaf Powder", "1 cup hot water", "1 tsp honey"],
    instructions: "Steep powder in hot water for 3-5 minutes. Sweeten with honey.",
    benefits: "Digestive enzymes, liver support, gentle detoxification."
  }
];

export default function Recipes() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Herbal Recipes</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover delicious ways to incorporate our herbal powders into your daily routine.
              Each recipe highlights the natural benefits of our premium ingredients.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {recipes.map((recipe, index) => (
              <div key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">🥤</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
                <p className="text-gray-600 mb-4">{recipe.description}</p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Ingredients:</h4>
                  <ul className="text-sm text-gray-600 space-y-1">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-center">
                        <span className="w-2 h-2 bg-green-500 rounded-full mr-2"></span>
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Instructions:</h4>
                  <p className="text-sm text-gray-600">{recipe.instructions}</p>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2">Benefits:</h4>
                  <p className="text-sm text-gray-600">{recipe.benefits}</p>
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