
import { useState } from "react";

const recipeGroups = [
  {
    product: "Moringa Powder",
    accent: "from-green-50 via-emerald-50 to-green-100",
    tag: "Moringa",
    recipes: [
      {
        title: "Watermelon Moringa Refresher",
        image: "recipes/Watermelon Juice.jpg",
        description: "A refreshing hydrating drink with a nutrient boost.",
        ingredients: [
          "4 cups fresh watermelon",
          "1 tsp Moringa Powder",
          "Lime juice",
          "Black salt",
          "Mint leaves"
        ],
        instructions:
          "Blend all ingredients until smooth. Strain if needed and serve chilled.",
        benefits: "Hydration, vitamins, natural energy"
      },
      {
        title: "Watermelon Moringa Refresher",
        image: "recipes/Watermelon Juice.jpg",
        description: "A refreshing hydrating drink with a nutrient boost.",
        ingredients: [
          "4 cups fresh watermelon",
          "1 tsp Moringa Powder",
          "Lime juice",
          "Black salt",
          "Mint leaves"
        ],
        instructions:
          "Blend all ingredients until smooth. Strain if needed and serve chilled.",
        benefits: "Hydration, vitamins, natural energy"
      },
      {
        title: "Watermelon Moringa Refresher",
        image: "recipes/Watermelon Juice.jpg",
        description: "A refreshing hydrating drink with a nutrient boost.",
        ingredients: [
          "4 cups fresh watermelon",
          "1 tsp Moringa Powder",
          "Lime juice",
          "Black salt",
          "Mint leaves"
        ],
        instructions:
          "Blend all ingredients until smooth. Strain if needed and serve chilled.",
        benefits: "Hydration, vitamins, natural energy"
      },
      {
        title: "Watermelon Moringa Refresher",
        image: "recipes/Watermelon Juice.jpg",
        description: "A refreshing hydrating drink with a nutrient boost.",
        ingredients: [
          "4 cups fresh watermelon",
          "1 tsp Moringa Powder",
          "Lime juice",
          "Black salt",
          "Mint leaves"
        ],
        instructions:
          "Blend all ingredients until smooth. Strain if needed and serve chilled.",
        benefits: "Hydration, vitamins, natural energy"
      },

      {
        title: "Moringa Oatmeal",
        image: "recipes/Oatmeal.jpg",
        description: "A grounding, earthy breakfast bowl.",
        ingredients: [
          "1 tsp Moringa Powder",
          "Cooked oats",
          "Banana slices",
          "Honey"
        ],
        instructions:
          "Stir moringa into warm oats. Top with banana and honey.",
        benefits: "Fiber-rich, iron boost, sustained energy"
      },
      {
        title: "Green Pancakes",
        image: "recipes/Pancake.jpg",
        description: "Fun, vibrant pancakes with added iron.",
        ingredients: ["Pancake batter", "1 tbsp Moringa Powder"],
        instructions:
          "Mix moringa into batter and cook pancakes as usual.",
        benefits: "Kid-friendly, nutrient-dense"
      }
    ]
  },
  {
    product: "Hibiscus Powder",
    accent: "from-rose-50 via-pink-50 to-rose-100",
    tag: "Hibiscus",
    recipes: [
      {
        title: "Radiant Hibiscus Tea",
        image: "hibiscusPowder.png",
        description: "Ruby red antioxidant-rich herbal tea.",
        ingredients: [
          "1/2 tsp Hibiscus Powder",
          "1 cup hot water",
          "Honey (optional)",
          "Lime (optional)"
        ],
        instructions:
          "Mix hibiscus powder in hot water. Sweeten if desired.",
        benefits: "Heart health, antioxidants"
      },
      {
        title: "Hibiscus Glow Face Mask",
        image: "recipes/Hibiscus Face Mask.jpg",
        description: "A natural glow-boosting skincare ritual.",
        ingredients: [
          "1 tsp Hibiscus Powder",
          "Yogurt or aloe vera gel"
        ],
        instructions:
          "Mix into a paste. Apply for 10–15 minutes and rinse.",
        benefits: "Brightening, gentle exfoliation"
      },
      {
        title: "Hibiscus Glow Face Mask",
        image: "recipes/Hibiscus Face Mask.jpg",
        description: "A natural glow-boosting skincare ritual.",
        ingredients: [
          "1 tsp Hibiscus Powder",
          "Yogurt or aloe vera gel"
        ],
        instructions:
          "Mix into a paste. Apply for 10–15 minutes and rinse.",
        benefits: "Brightening, gentle exfoliation"
      },
      {
        title: "Hibiscus Glow Face Mask",
        image: "recipes/Hibiscus Face Mask.jpg",
        description: "A natural glow-boosting skincare ritual.",
        ingredients: [
          "1 tsp Hibiscus Powder",
          "Yogurt or aloe vera gel"
        ],
        instructions:
          "Mix into a paste. Apply for 10–15 minutes and rinse.",
        benefits: "Brightening, gentle exfoliation"
      },
      {
        title: "Hibiscus Glow Face Mask",
        image: "recipes/Hibiscus Face Mask.jpg",
        description: "A natural glow-boosting skincare ritual.",
        ingredients: [
          "1 tsp Hibiscus Powder",
          "Yogurt or aloe vera gel"
        ],
        instructions:
          "Mix into a paste. Apply for 10–15 minutes and rinse.",
        benefits: "Brightening, gentle exfoliation"
      }
    ]
  },
  {
    product: "Curry Leaf Powder",
    accent: "from-amber-50 via-orange-50 to-amber-100",
    tag: "Curry Leaf",
    recipes: [
      {
        title: "Curry Leaf Rice",
        image: "recipes/Curry Leaf Rice.jpg",
        description: "South Indian comfort food with superfood power.",
        ingredients: [
          "Hot steamed rice",
          "1 tbsp Curry Leaf Powder",
          "Ghee or sesame oil",
          "Roasted peanuts"
        ],
        instructions:
          "Mix curry leaf powder into hot rice with ghee. Serve warm.",
        benefits: "Digestion support, iron-rich"
      },
      {
        title: "Curry Leaf Buttermilk",
        image: "recipes/Curry Leaf Buttermilk.jpg",
        description: "Cooling, digestive spiced chaas.",
        ingredients: [
          "Chilled buttermilk",
          "1/2 tsp Curry Leaf Powder",
          "Black salt",
          "Ginger"
        ],
        instructions:
          "Whisk all ingredients and serve chilled.",
        benefits: "Gut health, cooling effect"
      },
      {
        title: "Curry Leaf Buttermilk",
        image: "recipes/Curry Leaf Buttermilk.jpg",
        description: "Cooling, digestive spiced chaas.",
        ingredients: [
          "Chilled buttermilk",
          "1/2 tsp Curry Leaf Powder",
          "Black salt",
          "Ginger"
        ],
        instructions:
          "Whisk all ingredients and serve chilled.",
        benefits: "Gut health, cooling effect"
      },
      {
        title: "Curry Leaf Buttermilk",
        image: "recipes/Curry Leaf Buttermilk.jpg",
        description: "Cooling, digestive spiced chaas.",
        ingredients: [
          "Chilled buttermilk",
          "1/2 tsp Curry Leaf Powder",
          "Black salt",
          "Ginger"
        ],
        instructions:
          "Whisk all ingredients and serve chilled.",
        benefits: "Gut health, cooling effect"
      },
      {
        title: "Curry Leaf Buttermilk",
        image: "recipes/Curry Leaf Buttermilk.jpg",
        description: "Cooling, digestive spiced chaas.",
        ingredients: [
          "Chilled buttermilk",
          "1/2 tsp Curry Leaf Powder",
          "Black salt",
          "Ginger"
        ],
        instructions:
          "Whisk all ingredients and serve chilled.",
        benefits: "Gut health, cooling effect"
      }
    ]
  }
];




type Recipe = typeof recipeGroups[number]["recipes"][number];

export default function Recipes() {
  const [activeRecipe, setActiveRecipe] = useState<Recipe | null>(null);

  

  return (
    <section className="section-block">

      {/* HERO */}
      <section className="pt-6 pb-14 text-center max-w-4xl mx-auto px-6">
        <h1 className="text-5xl font-bold text-gray-900">
          Herbal Recipes
        </h1>
        <p className="mt-5 text-lg text-gray-600">
          Thoughtfully curated ways to enjoy our herbal powders — food,
          drinks, and rituals.
        </p>
      </section>

      {/* PRODUCT SECTIONS */}


      <div className="space-y-36">
        {recipeGroups.map((group, idx) => {
          return (
            <section
              key={idx}
              className={`relative bg-gradient-to-br ${group.accent} rounded-3xl shadow-xl mx-2 md:mx-0`}
            >
              <div className="absolute inset-0 opacity-30 blur-2xl pointer-events-none" style={{background: 'radial-gradient(circle at 60% 40%, #fff 0%, transparent 70%)'}}></div>
              <div className="max-w-7xl mx-auto px-6 py-24 relative z-10">
                {/* Section Header */}
                <div className="mb-14 max-w-xl">
                  <span className="inline-block text-xs uppercase tracking-wider bg-black/70 text-white px-3 py-1 rounded-full mb-4 shadow">
                    Recipes with
                  </span>
                  <h2 className="text-4xl md:text-5xl font-extrabold text-gray-900 drop-shadow-lg">
                    {group.product}
                  </h2>
                  <p className="text-gray-600 mt-4 text-lg">
                    Simple, nourishing ideas designed to fit effortlessly into your daily routine.
                  </p>
                </div>

                {/* Multi-card Carousel */}
                <div className="relative">
                  {/* Gradient fade left */}
                  <div className="pointer-events-none absolute left-0 top-0 h-full w-10 z-10 bg-gradient-to-r from-white/90 to-transparent" />
                  {/* Gradient fade right */}
                  <div className="pointer-events-none absolute right-0 top-0 h-full w-10 z-10 bg-gradient-to-l from-white/90 to-transparent" />
                  <div
                    className="flex gap-8 overflow-x-auto pb-4 snap-x snap-mandatory scrollbar-thin scrollbar-thumb-emerald-200 scrollbar-track-transparent hide-scrollbar"
                    style={{scrollbarWidth: 'none'}}
                  >
                    {group.recipes.map((recipe, i) => (
                      <div
                        key={i}
                        onClick={() => setActiveRecipe(recipe)}
                        className="min-w-[320px] max-w-xs bg-white/80 backdrop-blur-lg rounded-3xl shadow-lg hover:shadow-2xl transition-all cursor-pointer snap-center border border-gray-100 hover:scale-105 duration-300 group relative"
                      >
                        <div className="aspect-[4/3] overflow-hidden rounded-t-3xl relative">
                          <img
                            src={recipe.image}
                            alt={recipe.title}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                          />
                          <div className="absolute bottom-2 right-2 bg-white/70 px-3 py-1 rounded-full text-xs font-semibold text-gray-700 shadow">
                            {group.tag}
                          </div>
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-gray-900 mb-1">
                            {recipe.title}
                          </h3>
                          <p className="text-sm text-gray-600 mb-2 min-h-[40px]">
                            {recipe.description}
                          </p>
                          <div className="flex items-center gap-2 mt-4">
                            <span className="inline-block bg-emerald-100 text-emerald-700 text-xs px-2 py-1 rounded-full font-medium">
                              View recipe
                            </span>
                            <span className="text-emerald-400 text-lg">→</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}
      </div>


      {/* MODAL */}
      {/* MODAL */}
      {activeRecipe && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
          {/* Backdrop */}
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" 
            onClick={() => setActiveRecipe(null)}
          />

          {/* Modal Card Structure */}
          <div className="relative w-full max-w-lg bg-white rounded-3xl shadow-2xl overflow-hidden flex flex-col max-h-[90vh] animate-fadeInUp font-sans">
            
            {/* Close Button */}
            <button
              onClick={() => setActiveRecipe(null)}
              className="absolute top-4 right-4 z-20 bg-white/90 hover:bg-rose-50 text-gray-500 hover:text-rose-600 rounded-full p-2 shadow-sm border border-gray-100 transition-all backdrop-blur-md"
              aria-label="Close"
            >
              <svg width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>

            {/* Injecting styles to hide scrollbar for Webkit (Chrome, Safari, newer Edge). 
               The 'hide-scrollbar' class is used below.
            */}
            <style>{`
              .hide-scrollbar::-webkit-scrollbar {
                display: none;
              }
            `}</style>

            {/* Scrollable Content Container 
               We use inline styles for Firefox/IE support to hide the bar,
               and the 'hide-scrollbar' class for others.
            */}
            <div 
              className="overflow-y-auto flex-1 bg-white hide-scrollbar"
              style={{ 
                scrollbarWidth: 'none',  /* Firefox */
                msOverflowStyle: 'none'  /* IE and Edge */
              }}
            >
              
              {/* Image Header with Title Overlay */}
              <div className="relative h-64 sm:h-72 w-full shrink-0">
                <img
                  src={activeRecipe.image}
                  alt={activeRecipe.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent pointer-events-none" />
                
                <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                   <h3 className="text-3xl font-extrabold drop-shadow-lg leading-tight tracking-tight">
                    {activeRecipe.title}
                  </h3>
                </div>
              </div>

              {/* Text Content */}
              <div className="p-6 sm:p-8 space-y-8 bg-white">
                
                {/* Ingredients */}
                <div>
                  <h4 className="flex items-center gap-2 text-lg font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2 uppercase tracking-wider text-sm">
                    <span className="text-xl">🌿</span> Ingredients
                  </h4>
                  <ul className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-3">
                    {activeRecipe.ingredients.map((ing, i) => (
                      <li key={i} className="flex items-start text-gray-700 font-medium">
                        <svg className="w-5 h-5 text-emerald-500 mr-2 mt-0.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path></svg>
                        <span>{ing}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Instructions */}
                <div>
                   <h4 className="flex items-center gap-2 text-lg font-bold text-emerald-800 mb-4 border-b border-emerald-100 pb-2 uppercase tracking-wider text-sm">
                    <span className="text-xl">🥣</span> Instructions
                  </h4>
                  <p className="text-gray-600 leading-relaxed text-base whitespace-pre-line">
                    {activeRecipe.instructions}
                  </p>
                </div>

                {/* Benefits Bubble */}
                <div className="bg-gradient-to-br from-emerald-50 to-green-50 rounded-2xl p-5 border border-emerald-100 shadow-sm">
                  <h4 className="flex items-center gap-2 text-sm font-bold text-emerald-800 uppercase tracking-wider mb-3">
                    <span className="text-lg">✨</span> The Benefits
                  </h4>
                  <p className="text-emerald-900 font-medium leading-relaxed">
                    {activeRecipe.benefits}
                  </p>
                </div>

                {/* Extra space at bottom for easier scrolling */}
                <div className="h-4"></div>
              </div>
            </div>
            
          </div>
        </div>
      )}

    </section>
  );
}
