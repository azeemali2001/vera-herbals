export interface Product {
  id: string
  name: string
  slug: string
  category: string
  price: number
  originalPrice?: number
  image: string
  images: string[]
  description: string
  shortDescription: string
  benefits: string[]
  ingredients: string
  usage: string
  nutrition?: { label: string; value: string }[]
  inStock: boolean
  rating: number
  reviews: number
}

export const products: Product[] = [
  {
    id: '1',
    name: 'Ashwagandha Supreme',
    slug: 'ashwagandha-supreme',
    category: 'Supplements',
    price: 1299,
    originalPrice: 1599,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad7098?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad7098?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1599940824399-b87987ce0799?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1579684385127-1ef15d508118?w=600&h=600&fit=crop'
    ],
    description: 'Our flagship adaptogenic formula crafted from premium Ashwagandha roots, ethically sourced from sustainable farms in India. This powerful adaptogen helps combat stress, enhance energy, and promote overall well-being.',
    shortDescription: 'Premium adaptogen for stress relief and energy',
    benefits: [
      'Reduces stress and cortisol levels',
      'Enhances mental clarity and focus',
      'Boosts natural energy',
      'Supports healthy sleep cycle',
      'Strengthens immune response'
    ],
    ingredients: 'Ashwagandha Root Extract (Withania somnifera), Organic Finger Millet, Vegetarian Capsules (HPMC)',
    usage: 'Take 1-2 capsules daily with meals. For best results, use consistently for at least 4 weeks.',
    nutrition: [
      { label: 'Ashwagandha Root Extract', value: '600mg' },
      { label: 'Withanolides', value: '5%' }
    ],
    inStock: true,
    rating: 4.9,
    reviews: 234
  },
  {
    id: '2',
    name: 'Turmeric Golden Elixir',
    slug: 'turmeric-golden-elixir',
    category: 'Supplements',
    price: 899,
    image: 'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1615485290382-441e4d049cb5?w=600&h=600&fit=crop',
      'https://images.unsplash.com/photo-1598511726623-d2e9996e1f52?w=600&h=600&fit=crop'
    ],
    description: 'A potent golden formula featuring Farm-to-Table turmeric with enhanced bioavailability through traditional ghee infusion. Our proprietary cold-press method preserves all active compounds.',
    shortDescription: 'Anti-inflammatory golden turmeric formula',
    benefits: [
      'Powerful anti-inflammatory action',
      'Supports joint health and mobility',
      'Enhances skin radiance',
      'Aids digestive function',
      'Boosts antioxidant defense'
    ],
    ingredients: 'Organic Turmeric Root, Ghee, Black Pepper Extract, Ginger Root',
    usage: 'Mix 1 teaspoon in warm milk or water. Use twice daily for optimal benefits.',
    nutrition: [
      { label: 'Curcuminoids', value: '500mg' },
      { label: 'Volatile Oils', value: '3%' }
    ],
    inStock: true,
    rating: 4.8,
    reviews: 189
  },
  {
    id: '3',
    name: 'Triphala Plus',
    slug: 'triphala-plus',
    category: 'Supplements',
    price: 749,
    originalPrice: 899,
    image: 'https://images.unsplash.com/photo-1584308666744-24d5c474f2b1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1584308666744-24d5c474f2b1?w=600&h=600&fit=crop'
    ],
    description: 'An ancient Ayurvedic formula combining three medicinal fruits - Amalaki, Bibhitaki, and Haritaki. Our enhanced formula includes additional fiber for complete digestive support.',
    shortDescription: 'Complete digestive wellness formula',
    benefits: [
      'Gentle internal cleansing',
      'Supports healthy digestion',
      'Natural colon detox support',
      'Rich in antioxidants',
      'Promotes nutrient absorption'
    ],
    ingredients: 'Amalaki (Emblica officinalis), Bibhitaki (Terminalia bellirica), Haritaki (Terminalia chebula), Psyllium Husk',
    usage: 'Take 2 capsules before bedtime with warm water. Start with 1 capsule and gradually increase.',
    inStock: true,
    rating: 4.7,
    reviews: 156
  },
  {
    id: '4',
    name: 'Brahmi Memory Boost',
    slug: 'brahmi-memory-boost',
    category: 'Supplements',
    price: 999,
    image: 'https://images.unsplash.com/photo-1559757148-5c350a0d1b4c?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1559757148-5c350a0d1b4c?w=600&h=600&fit=crop'
    ],
    description: 'A brain-boosting formula featuring the legendary Brahmi herb, known in Ayurveda for enhancing cognitive function and memory. Perfect for students and professionals.',
    shortDescription: 'Cognitive enhancement formula',
    benefits: [
      'Enhances memory and recall',
      'Supports mental clarity',
      'Reduces mental fatigue',
      'Promotes focus and concentration',
      'Nourishes neural pathways'
    ],
    ingredients: 'Brahmi Leaf Extract (Bacopa monnieri), Shankhpushpi, Gotu Kola, Almond Oil',
    usage: 'Take 1 capsule twice daily with meals. Consistent use for 8+ weeks recommended.',
    inStock: true,
    rating: 4.9,
    reviews: 98
  },
  {
    id: '5',
    name: 'Mahanarayan Oil',
    slug: 'mahanarayan-oil',
    category: 'Oils',
    price: 599,
    image: 'https://images.unsplash.com/photo-1611930022073-b7a4d7a1b682?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1611930022073-b7a4d7a1b682?w=600&h=600&fit=crop'
    ],
    description: 'A traditional Ayurvedic massage oil prepared using the ancient DashMula formula. Cold-pressed in small batches to preserve therapeutic properties.',
    shortDescription: 'Traditional therapeutic massage oil',
    benefits: [
      'Relieves muscle tension',
      'Soothes joint discomfort',
      'Promotes deep relaxation',
      'Improves circulation',
      'Nourishes skin deeply'
    ],
    ingredients: 'Sesame Oil, Mahanarayan Ghrita, herbs (Bala, Ashwagandha, Shatavari, etc.)',
    usage: 'Warm slightly and massage into affected areas. Leave for 30 minutes before bathing.',
    inStock: true,
    rating: 4.8,
    reviews: 145
  },
  {
    id: '6',
    name: 'Tulsi Holy Basil Tea',
    slug: 'tulsi-holy-basil-tea',
    category: 'Teas',
    price: 399,
    image: 'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde1?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1564890369478-c89ca6d9cde1?w=600&h=600&fit=crop'
    ],
    description: 'Hand-picked holy basil leaves from our organic gardens, sun-dried using traditional methods. A soothing blend with natural adaptogenic properties.',
    shortDescription: 'Adaptogenic herbal tea blend',
    benefits: [
      'Supports respiratory health',
      'Promotes calm and clarity',
      'Boosts natural immunity',
      'Aids healthy digestion',
      'Antioxidant rich'
    ],
    ingredients: 'Organic Tulsi (Holy Basil), Cardamom, Ginger, Black Pepper',
    usage: 'Steep 1 teabag in hot water for 3-5 minutes. Enjoy 2-3 cups daily.',
    inStock: true,
    rating: 4.9,
    reviews: 267
  },
  {
    id: '7',
    name: 'Chandana Sandalwood Face Serum',
    slug: 'chandana-sandalwood-serum',
    category: 'Skincare',
    price: 1499,
    originalPrice: 1799,
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=600&h=600&fit=crop'
    ],
    description: 'Luxurious face serum featuring authentic sandalwood oil, known for its cooling and soothing properties. Combined with rose water and other botanicals for radiant skin.',
    shortDescription: 'Luxury sandalwood face serum',
    benefits: [
      'Deep skin hydration',
      'Soothes irritation',
      'Even skin tone',
      'Reduces appearance of blemishes',
      'Promotes youthful glow'
    ],
    ingredients: 'Sandalwood Oil, Rose Water, Aloe Vera, Vitamin E, Jojoba Oil',
    usage: 'Apply 3-4 drops to clean face and neck. Use morning and evening.',
    inStock: true,
    rating: 4.7,
    reviews: 112
  },
  {
    id: '8',
    name: 'Digestive Harmony Tea',
    slug: 'digestive-harmony-tea',
    category: 'Teas',
    price: 349,
    image: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1556679343-c7306c1976bc?w=600&h=600&fit=crop'
    ],
    description: 'A carefully crafted digestive blend featuring traditional Ayurvedic herbs. Perfect after meals for supporting healthy digestion.',
    shortDescription: 'Post-meal digestive support tea',
    benefits: [
      'Relieves bloating',
      'Aids healthy digestion',
      'Reduces gas and discomfort',
      'Soothes stomach lining',
      'Fresh breath'
    ],
    ingredients: 'Fennel Seeds, Mint, Licorice Root, Ginger, Cardamom',
    usage: 'Steep 1 teabag after meals for 3-5 minutes. Best consumed warm.',
    inStock: true,
    rating: 4.8,
    reviews: 198
  },
  {
    id: '9',
    name: 'VetiverRoot Calm',
    slug: 'vetiver-root-calm',
    category: 'Oils',
    price: 799,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad7098?w=600&h=600&fit=crop',
    images: [
      'https://images.unsplash.com/photo-1608571423902-eed4a5ad7098?w=600&h=600&fit=crop'
    ],
    description: 'Pure vetiver essential oil, steam-distilled from premium root stock. Known in Ayurveda as a grounding and calming oil.',
    shortDescription: 'Grounding essential oil',
    benefits: [
      'Deep calming effect',
      'Reduces anxiety',
      'Improves sleep quality',
      'Repels insects naturally',
      'Aromatherapy grade'
    ],
    ingredients: '100% Pure Vetiver Essential Oil',
    usage: 'Add 3-5 drops to diffuser or dilute in carrier oil for massage.',
    inStock: true,
    rating: 4.6,
    reviews: 76
  }
]

export const categories = ['All', 'Supplements', 'Oils', 'Teas', 'Skincare']

export const getProductBySlug = (slug: string): Product | undefined => {
  return products.find(p => p.slug === slug)
}

export const getProductsByCategory = (category: string): Product[] => {
  if (category === 'All') return products
  return products.filter(p => p.category === category)
}