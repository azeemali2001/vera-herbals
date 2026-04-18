export interface Recipe {
  id: string
  title: string
  slug: string
  category: string
  image: string
  description: string
  prepTime: string
  cookTime: string
  servings: number
  difficulty: string
  ingredients: string[]
  instructions: string[]
  nutrition: { label: string; value: string }[]
  benefits: string[]
}

export const recipes: Recipe[] = [
  {
    id: '1',
    title: 'Golden Turmeric Milk',
    slug: 'golden-turmeric-milk',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1618331835717-ae1be6f7a303?w=600&h=400&fit=crop',
    description: 'A warming, healing golden milk latte made with turmeric, ginger, and aromatic spices. Perfect for evening relaxation.',
    prepTime: '5 min',
    cookTime: '10 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '2 cups organic milk (or oat milk)',
      '1 tsp turmeric powder',
      '1/2 tsp cinnamon',
      '1/4 tsp ginger powder',
      'Pinch of black pepper',
      '1 tbsp honey or maple syrup',
      '1/4 tsp vanilla extract'
    ],
    instructions: [
      'Add milk to a saucepan over medium heat.',
      'Whisk in turmeric, cinnamon, ginger, and black pepper.',
      'Heat gently, whisking frequently for 5-7 minutes.',
      'Remove from heat and stir in honey and vanilla.',
      'Pour into mugs and sprinkle with extra cinnamon.'
    ],
    nutrition: [
      { label: 'Calories', value: '150' },
      { label: 'Protein', value: '8g' },
      { label: 'Carbs', value: '12g' }
    ],
    benefits: ['Anti-inflammatory', 'Better sleep', 'Immune support']
  },
  {
    id: '2',
    title: 'Kitchari Detox Bowl',
    slug: 'kitchari-detox-bowl',
    category: 'Meals',
    image: 'https://images.unsplash.com/photo-1512621776951-a57141f2eefd?w=600&h=400&fit=crop',
    description: 'A traditional Ayurvedic one-pot meal combining mung dal, basmati rice, and digestive spices. Perfect for a gentle cleanse.',
    prepTime: '15 min',
    cookTime: '45 min',
    servings: 4,
    difficulty: 'Medium',
    ingredients: [
      '1 cup mung dal (split yellow lentils)',
      '1 cup basmati rice',
      '6 cups water',
      '1 tsp cumin seeds',
      '1/2 tsp turmeric',
      '1 inch fresh ginger, minced',
      '2 tbsp ghee',
      'Salt to taste',
      'Fresh cilantro for garnish'
    ],
    instructions: [
      'Rinse mung dal and rice thoroughly.',
      'Heat ghee in a large pot. Add cumin seeds until they sizzle.',
      'Add ginger and turmeric, sauté for 1 minute.',
      'Add dal and rice, stir to coat with spices.',
      'Add water, bring to boil, then simmer for 40 minutes.',
      'Season with salt and garnish with cilantro.'
    ],
    nutrition: [
      { label: 'Calories', value: '320' },
      { label: 'Protein', value: '14g' },
      { label: 'Fiber', value: '8g' }
    ],
    benefits: ['Easy digestion', 'Gentle detox', 'Balancing']
  },
  {
    id: '3',
    title: 'Tulsi Ginger Immunity Shot',
    slug: 'tulsi-ginger-immunity-shot',
    category: 'Drinks',
    image: 'https://images.unsplash.com/photo-1551884834-bbf422c62d02?w=600&h=400&fit=crop',
    description: 'A potent immunity-boosting shot featuring holy basil and fresh ginger. Start your day with this powerful elixir.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 4,
    difficulty: 'Easy',
    ingredients: [
      '1 cup fresh tulsi leaves',
      '2 inch fresh ginger',
      '1 lemon, juiced',
      '1 tbsp honey',
      '1/4 tsp black pepper',
      '1/2 cup water'
    ],
    instructions: [
      'Blend tulsi leaves, ginger, and water until smooth.',
      'Strain through fine mesh sieve.',
      'Add lemon juice and honey.',
      'Add black pepper and stir well.',
      'Divide into shot glasses and consume immediately.'
    ],
    nutrition: [
      { label: 'Calories', value: '25' },
      { label: 'Vitamin C', value: '40mg' }
    ],
    benefits: ['Immune boost', 'Respiratory health', 'Clean energy']
  },
  {
    id: '4',
    title: 'Chia Pudding Parfait',
    slug: 'chia-pudding-parfait',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1553787499-6f9133860278?w=600&h=400&fit=crop',
    description: 'A nourishing breakfast parfait with omega-rich chia seeds, creamy coconut milk, and fresh seasonal fruits.',
    prepTime: '10 min',
    cookTime: '0 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '4 tbsp chia seeds',
      '1 cup coconut milk',
      '1 tbsp maple syrup',
      '1/2 tsp vanilla extract',
      'Fresh berries',
      'Sliced mango',
      'Granola for topping',
      'Mint leaves'
    ],
    instructions: [
      'Mix chia seeds, coconut milk, maple syrup, and vanilla.',
      'Stir well and refrigerate for at least 4 hours or overnight.',
      'Stir again before serving.',
      'Layer with fresh fruits and granola.',
      'Garnish with mint leaves.'
    ],
    nutrition: [
      { label: 'Calories', value: '280' },
      { label: 'Omega-3', value: '5g' },
      { label: 'Fiber', value: '12g' }
    ],
    benefits: ['Omega-3 boost', 'Digestive health', 'Sustained energy']
  },
  {
    id: '5',
    title: 'Ashwagandha No-Bake Energy Bites',
    slug: 'ashwagandha-energy-bites',
    category: 'Desserts',
    image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f52?w=600&h=400&fit=crop',
    description: 'Energizing no-bake bites packed with adaptogens, nuts, and natural sweetness. Perfect pre-workout snack.',
    prepTime: '15 min',
    cookTime: '0 min',
    servings: 12,
    difficulty: 'Easy',
    ingredients: [
      '1 cup rolled oats',
      '1/2 cup almond butter',
      '1/3 cup honey',
      '1/2 tsp ashwagandha powder',
      '1/4 cup dark chocolate chips',
      '2 tbsp chia seeds',
      '1/4 cup crushed almonds'
    ],
    instructions: [
      'Mix all ingredients in a large bowl until well combined.',
      'Refrigerate for 30 minutes.',
      'Roll into 12 balls.',
      'Roll in crushed almonds.',
      'Store in refrigerator for up to 1 week.'
    ],
    nutrition: [
      { label: 'Calories', value: '120' },
      { label: 'Protein', value: '4g' }
    ],
    benefits: ['Sustained energy', 'Stress support', 'No baking needed']
  },
  {
    id: '6',
    title: 'Spiced Quinoa Breakfast Bowl',
    slug: 'spiced-quinoa-breakfast',
    category: 'Breakfast',
    image: 'https://images.unsplash.com/photo-1546793665-c74683f339c1?w=600&h=400&fit=crop',
    description: 'A warming breakfast bowl with quinoa, spices, and nuts. Inspired by traditional kitchari flavors.',
    prepTime: '10 min',
    cookTime: '20 min',
    servings: 2,
    difficulty: 'Easy',
    ingredients: [
      '1 cup quinoa',
      '2 cups water',
      '1 cup coconut milk',
      '1 tsp cinnamon',
      '1/2 tsp cardamom',
      '2 tbsp maple syrup',
      'Toasted almonds',
      'Fresh pomegranate seeds'
    ],
    instructions: [
      'Rinse quinoa and add to pot with water.',
      'Bring to boil, then simmer for 15 minutes.',
      'Stir in coconut milk and spices.',
      'Cook for another 5 minutes.',
      'Top with almonds, pomegranate, and drizzle maple syrup.'
    ],
    nutrition: [
      { label: 'Calories', value: '340' },
      { label: 'Protein', value: '10g' },
      { label: 'Iron', value: '15%' }
    ],
    benefits: ['Complete protein', 'Sustained energy', 'Warming']
  }
]

export const recipeCategories = ['All', 'Breakfast', 'Meals', 'Drinks', 'Desserts']

export const getRecipesByCategory = (category: string): Recipe[] => {
  if (category === 'All') return recipes
  return recipes.filter(r => r.category === category)
}

export const getRecipeBySlug = (slug: string): Recipe | undefined => {
  return recipes.find(r => r.slug === slug)
}