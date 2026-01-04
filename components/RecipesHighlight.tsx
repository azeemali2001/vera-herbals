import { Link } from "react-router-dom";

export function RecipesHighlight() {
  const recipes = [
    {
      title: "Moringa Green Smoothie",
      description: "Nutrient-packed morning boost"
    },
    {
      title: "Golden Turmeric Latte",
      description: "Anti-inflammatory wellness drink"
    },
    {
      title: "Tulsi Herbal Tea",
      description: "Stress-relieving calming tea"
    }
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Herbal Recipes</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Discover delicious ways to incorporate our herbal powders into your daily wellness routine.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {recipes.map((recipe, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">🥤</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{recipe.title}</h3>
              <p className="text-gray-600">{recipe.description}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/recipes"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            View All Recipes
          </Link>
        </div>
      </div>
    </section>
  );
}