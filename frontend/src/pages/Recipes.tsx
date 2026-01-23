import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

const recipes = [
  {
    title: "Watermelon Moringa Refresher",
    image: "recipes/Watermelon Juice.jpg",
    description: "A refreshing and hydrating fruit drink with a nutrient-packed boost.",
    ingredients: [
      "4 cups fresh watermelon cubes",
      "1 tsp Moringa Powder",
      "Squeeze of lime",
      "Pinch of black salt",
      "Fresh mint leaves"
    ],
    instructions:
      "Blend ingredients until smooth. For a cleaner texture, strain the juice. Serve immediately over ice.",
    benefits: "High hydration, essential vitamins, and natural energy boost."
  },
  {
    title: "Moringa Buttermilk (Spiced Chaas)",
    image: "recipes/Buttermilk 2.jpg",
    description: "A savory, traditional yogurt drink to aid digestion and cool the body.",
    ingredients: [
      "1 cup plain yogurt",
      "2 cups water",
      "1/2 tsp Moringa Powder",
      "Roasted cumin powder",
      "Black salt",
      "Finely chopped ginger",
      "Fresh cilantro leaves"
    ],
    instructions:
      "Whisk yogurt, water, and powder until frothy. Season with spices and ginger. Stir in cilantro and serve chilled.",
    benefits: "Aids digestion, probiotic support, and energy boosting."
  },
  {
    title: "Moringa Hummus",
    image: "recipes/Humus.jpg",
    description: "Elevate your favorite dip with a superfood twist.",
    ingredients: [
      "1 tsp Moringa Powder",
      "1 cup hummus (store-bought or homemade)",
      "Carrot sticks",
      "Pita bread"
    ],
    instructions:
      "Mix the moringa powder into the hummus until well combined. Serve with carrot sticks or pita bread.",
    benefits: "Rich in plant-based protein and added micronutrients."
  },
  {
    title: "Moringa Oatmeal",
    image: "recipes/Oatmeal.jpg",
    description: "A balanced, earthy breakfast to kickstart your morning routine.",
    ingredients: [
      "1 tsp Moringa Powder",
      "1 serving cooked or overnight oats",
      "1 sliced banana",
      "Drizzle of honey"
    ],
    instructions:
      "Stir moringa powder into your oats. Top with sliced bananas and honey to balance the earthy flavor.",
    benefits: "High in fiber, iron, and sustained energy release."
  },
  {
    title: "Green Pancakes",
    image: "recipes/Pancake.jpg",
    description: "A fun and healthy way to enjoy a classic breakfast with an iron boost.",
    ingredients: [
      "1 tbsp Moringa Powder",
      "Pancake or waffle batter"
    ],
    instructions:
      "Add moringa powder to your favorite batter. Mix well until bright green and cook as usual.",
    benefits: "Nutrient-dense, iron-rich, and kid-friendly."
  },
  {
    title: "Moringa Pesto Pasta",
    image: "recipes/Pasta.jpg",
    description: "A nutrient-dense take on a classic Italian favorite.",
    ingredients: [
      "1 tbsp Moringa Powder",
      "Fresh basil",
      "Garlic",
      "Pine nuts",
      "Olive oil",
      "Parmesan cheese",
      "Pasta"
    ],
    instructions:
      "Blend pesto ingredients with moringa powder. Toss with hot, freshly cooked pasta.",
    benefits: "Superfood dinner packed with antioxidants and healthy fats."
  },
  {
    title: "Popcorn Seasoning",
    image: "recipes/Popcorn.jpg",
    description: "A guilt-free savory snack with a nutritional superfood dusting.",
    ingredients: [
      "Moringa Powder",
      "Freshly popped popcorn",
      "Olive oil",
      "Nutritional yeast",
      "Pinch of salt"
    ],
    instructions:
      "Toss popcorn with olive oil, nutritional yeast, salt, and moringa powder.",
    benefits: "Healthy snacking with vitamins and minerals."
  },

  {
    title: "Radiant Hibiscus Tea",
    image: "hibiscusPowder.png",
    description: "A vibrant antioxidant-rich tea that supports digestion and blood pressure.",
    ingredients: [
      "1/2 tsp Hibiscus Powder",
      "1 cup hot water",
      "1 tsp honey (optional)",
      "Squeeze of lime (optional)"
    ],
    instructions:
      "Mix hibiscus powder into hot water. Stir well. Add honey and lime if desired. Notice the color shift to ruby red.",
    benefits: "Powerful antioxidants, digestion support, and heart health."
  },
  {
    title: "Hibiscus Glow Face Mask",
    image: "recipes/Hibiscus Face Mask.jpg",
    description: "A natural glow-boosting mask for hydrated, radiant skin.",
    ingredients: [
      "1 tsp Hibiscus Powder",
      "1 tbsp yogurt or aloe vera gel"
    ],
    instructions:
      "Mix into a smooth paste. Apply on clean face for 10–15 minutes. Rinse with lukewarm water.",
    benefits: "Gentle exfoliation, hydration, brighter and firmer skin."
  },
  {
    title: "Hibiscus Hair Conditioning Mask",
    image: "recipes/Hibiscus Hair Mask.jpg",
    description: "A strengthening hair mask for shine, root health, and scalp nourishment.",
    ingredients: [
      "2 tbsp Hibiscus Powder",
      "Water or coconut milk (as needed)"
    ],
    instructions:
      "Mix into a thick paste. Apply to scalp and hair length. Leave for 30 minutes, then wash with mild shampoo.",
    benefits: "Stronger roots, reduced premature greying, natural shine."
  },
  {
    title: "Curry Leaf Rice (Karivepaku Annam)",
    image: "recipes/Curry Leaf Rice.jpg",
    description: "A quick South Indian-style rice dish packed with flavor and nutrients.",
    ingredients: [
      "1 tbsp Curry Leaf Powder",
      "Hot steamed rice",
      "1 tsp ghee or sesame oil",
      "Roasted peanuts"
    ],
    instructions:
      "Mix curry leaf powder into hot rice with ghee or oil. Top with roasted peanuts and serve warm.",
    benefits: "Supports digestion, rich in iron and antioxidants."
  },
  {
    title: "Curry Leaf Spiced Buttermilk",
    image: "recipes/Curry Leaf Buttermilk.jpg",
    description: "A refreshing digestive drink with cooling properties.",
    ingredients: [
      "1 glass chilled buttermilk",
      "1/2 tsp Curry Leaf Powder",
      "Pinch of black salt",
      "Grated ginger"
    ],
    instructions:
      "Whisk all ingredients together and serve chilled.",
    benefits: "Improves digestion and gut health."
  },
  {
    title: "Curry Leaf Savory Popcorn",
    image: "recipes/Curry Leaf Popcorn.jpg",
    description: "An Indian-style savory snack with a superfood twist.",
    ingredients: [
      "Freshly popped popcorn",
      "Olive oil",
      "Salt",
      "Curry Leaf Powder"
    ],
    instructions:
      "Toss popcorn with olive oil, salt, and a generous dusting of curry leaf powder.",
    benefits: "Healthy snacking with added minerals."
  },
  {
    title: "Curry Leaf Roasted Vegetables",
    image: "recipes/Roasted Veggies.jpg",
    description: "Flavorful roasted veggies enhanced with curry leaf goodness.",
    ingredients: [
      "Potatoes, cauliflower, or carrots",
      "Curry Leaf Powder",
      "Turmeric",
      "Cumin",
      "Olive oil"
    ],
    instructions:
      "Toss vegetables with oil, spices, and curry leaf powder. Roast until golden and tender.",
    benefits: "Antioxidant-rich and metabolism-friendly."
  },
  {
    title: "Curry Leaf Tadka Boost",
    image: "recipes/Tadka.jpg",
    description: "Enhance dal or sambar with a fragrant curry leaf tempering.",
    ingredients: [
      "1 tsp Curry Leaf Powder",
      "Oil",
      "Mustard seeds",
      "Dried red chilies"
    ],
    instructions:
      "Add curry leaf powder to hot oil tempering just before pouring over dal or sambar.",
    benefits: "Boosts aroma, digestion, and nutrient absorption."
  }
];

export default function Recipes() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />

      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12 max-w-3xl mx-auto">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">
              Herbal Recipes
            </h1>
            <p className="text-lg text-gray-600">
              Discover delicious ways to incorporate our herbal powders into
              your daily routine.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-7xl mx-auto">
            {recipes.map((recipe, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl p-4 hover:shadow-md transition-shadow"
              >
                <div className="w-full aspect-[4/3] bg-gray-100 rounded-lg mb-4 overflow-hidden">
                  <img
                    src={recipe.image}
                    alt={recipe.title}
                    className="w-full h-full object-cover"
                  />
                </div>

                <h3 className="text-lg font-semibold text-gray-900 mb-2">
                  {recipe.title}
                </h3>

                <p className="text-sm text-gray-600 mb-4">
                  {recipe.description}
                </p>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-2 text-sm">
                    Ingredients
                  </h4>
                  <ul className="text-xs text-gray-600 space-y-1">
                    {recipe.ingredients.map((ingredient, i) => (
                      <li key={i} className="flex items-start">
                        <span className="w-1.5 h-1.5 bg-green-500 rounded-full mr-2 mt-1.5" />
                        {ingredient}
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="mb-4">
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">
                    Instructions
                  </h4>
                  <p className="text-xs text-gray-600">
                    {recipe.instructions}
                  </p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-1 text-sm">
                    Benefits
                  </h4>
                  <p className="text-xs text-gray-600">
                    {recipe.benefits}
                  </p>
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
