export interface BlogPost {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  image: string
  author: string
  date: string
  category: string
  readTime: string
}

export const blogPosts: BlogPost[] = [
  {
    id: '1',
    title: 'Understanding Ayurvedic Doshas: Your Guide to Balance',
    slug: 'understanding-ayurvedic-doshas',
    excerpt: 'Explore the three doshas—Vata, Pitta, and Kapha—and discover how understanding your unique constitution can transform your health journey.',
    content: `Ayurveda, the ancient science of life, teaches us that every person has a unique constitution composed of three fundamental energies called doshas: Vata, Pitta, and Kapha.

## What Are Doshas?

Doshas are biological energies found throughout the body and mind. They govern all physical and mental processes and create our unique physical characteristics, tendency toward certain health issues, and emotional responses.

### Vata Dosha
Those with dominant Vata tend to be creative, energetic, and quick-minded. When balanced, they are enthusiastic and flexible. When imbalanced, they may experience anxiety, insomnia, and digestive issues.

### Pitta Dosha
Pitta types are typically intelligent, ambitious, and have strong leadership qualities. When balanced, they are warm and friendly. When imbalanced, they may struggle with anger, inflammation, and acidity.

### Kapha Dosha
Kapha individuals are usually calm, steady, and nurturing. When balanced, they are patient and supportive. When imbalanced, they may experience weight gain, congestion, and depression.

## Finding Your Balance

The key to Ayurvedic wellness is understanding your unique dosha composition and living in harmony with your natural tendencies. Simple lifestyle adjustments, diet modifications, and daily routines can help maintain balance.`,
    image: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad7098?w=800&h=500&fit=crop',
    author: 'Dr. Priya Sharma',
    date: 'March 15, 2026',
    category: 'Wellness',
    readTime: '8 min'
  },
  {
    id: '2',
    title: 'The Power of Adaptogens: Ancient Wisdom Meets Modern Science',
    slug: 'power-of-adaptogens',
    excerpt: 'Discover how adaptogenic herbs like Ashwagandha and Tulsi help your body resist stress and restore balance in our fast-paced world.',
    content: `In our modern world of constant connectivity and relentless pace, adaptogens offer a natural solution to stress management. These powerful herbs have been used for thousands of years in Ayurvedic medicine and are now gaining recognition in contemporary wellness circles.

## What Are Adaptogens?

Adaptogens are a unique class of herbs that help the body adapt to physical, environmental, and emotional stressors. Unlike stimulants that give temporary energy, adaptogens work by modulating the stress response system.

### Top Ayurvedic Adaptogens

Ashwagandha (Withania somnifera) stands as the premier adaptogen in Ayurveda. Known as "Indian ginseng," it supports energy, cognitive function, and emotional well-being.

Tulsi (Holy Basil) is another powerful adaptogen, revered in India for over 5,000 years. It promotes calm, mental clarity, and respiratory health.

## How to Incorporate Adaptogens

Start with one adaptogen and observe how your body responds. Typical usage includes:

- Ashwagandha: 300-600mg daily
- Tulsi tea: 1-2 cups daily
- Always consult a healthcare provider before starting any new supplement regimen.`,
    image: 'https://images.unsplash.com/photo-1599940824399-b87987ce0799?w=800&h=500&fit=crop',
    author: 'Dr. Rahul Verma',
    date: 'March 10, 2026',
    category: 'Science',
    readTime: '6 min'
  },
  {
    id: '3',
    title: 'Morning Routines: The Ayurvedic Way to Start Your Day',
    slug: 'morning-routines-ayurvedic-way',
    excerpt: 'Learn the ancient Ayurvedic morning practices that can transform your daily energy, focus, and overall well-being.',
    content: `In Ayurveda, how you begin your day sets the tone for everything that follows. Ancient rishis (sages) developed precise morning routines called Dinacharya to align body, mind, and spirit with natural rhythms.

## The Ayurvedic Morning

### Wake with the Sun

Rise early, ideally before sunrise when Vata energy is dominant in nature. This is considered the most sattvic (pure) time of day.

### Hydrate Mindfully

Drink a glass of room-temperature water first thing. This helps activate internal organs and flush toxins accumulated overnight.

### Oil Pulling

Swish 1 tablespoon of sesame oil in your mouth for 5-10 minutes. This traditional practice supports oral health and draws out impurities.

### Abhyanga (Self-Massage)

Massage your body with warm sesame oil for 5-10 minutes. This nourishes skin, improves circulation, and creates a protective layer.

### Exercise Mindfully

Engage in gentle movement like yoga or walking. Avoid intense exercise in the morning, which can deplete vital energy.

## Making It Work

Start with one or two practices and gradually build your routine. Consistency matters more than perfection.`,
    image: 'https://images.unsplash.com/photo-1544367563-12123d8965cd?w=800&h=500&fit=crop',
    author: 'Maya Patel',
    date: 'March 5, 2026',
    category: 'Lifestyle',
    readTime: '7 min'
  },
  {
    id: '4',
    title: 'Seasonal Eating: A Guide to Ayurvedic Nutrition',
    slug: 'seasonal-eating-ayurvedic-guide',
    excerpt: 'Understand how eating with the seasons can improve digestion, boost immunity, and bring your body into natural balance.',
    content: `Ayurveda teaches that food is medicine, and eating seasonally is one of the most powerful ways to maintain health. Our bodies naturally crave different foods as the seasons change, and honoring these cravings supports optimal well-being.

## The Six Tastes

Ayurveda recognizes six tastes that should be present in each meal:

1. Sweet (earth + water) - grains, sweet fruits
2. Sour (earth + fire) - citrus, fermented foods
3. Salty (water + fire) - salts, seafood
4. Bitter (air + fire) - leafy greens, turmeric
5. Pungent (air + fire) - spices, ginger
6. Astringent (air + earth) - legumes, pomegranate

### Balancing Vata

Vata types benefit from warm, moist, grounding foods. Favor cooked vegetables, grains, and healthy fats.

### Balancing Pitta

Pitta types should favor cooling, less spicy foods. Opt for sweet fruits, coconut water, and mild vegetables.

### Balancing Kapha

Kapha types thrive with light, warm, spicy foods. Emphasize steamed vegetables, legumes, and pungent spices.

## Practical Tips

- Eat locally grown foods when possible
- Include all six tastes in daily meals
- Adjust food choices based on your current constitution and season`,
    image: 'https://images.unsplash.com/photo-1498837167922-ddd27525d352?w=800&h=500&fit=crop',
    author: 'Chef Anjali Rao',
    date: 'February 28, 2026',
    category: 'Nutrition',
    readTime: '5 min'
  },
  {
    id: '5',
    title: 'The Art of Meditation: Finding Stillness in a Busy World',
    slug: 'art-of-meditation-finding-stillness',
    excerpt: 'Explore simple meditation techniques from the Ayurvedic tradition to cultivate inner peace and mental clarity.',
    content: `In the chaos of modern life, meditation offers a sanctuary of stillness. Rooted in Ayurvedic and yogic traditions, meditation has evolved from ancient spiritual practice to mainstream wellness staple.

## Getting Started

Begin with just 5 minutes daily. Consistency matters more than duration.

### Simple Techniques

#### Breath Awareness
Simply observe your natural breath. When minds wanders, gently return attention to breathing. This basic practice builds focus and calm.

#### Mantra Meditation
Chant "Om" or a simple Sanskrit phrase. The vibration creates mental focus and promotes relaxation.

#### Walking Meditation
Walk slowly, fully present to each step. Feel your feet connecting with the earth. This is excellent for active types who struggle with sitting still.

## Benefits Backed by Science

Research shows meditation can:

- Reduce stress hormones
- Improve focus and attention
- Support emotional regulation
- Enhance sleep quality
- Boost immune function

## Making It Practical

Start your practice at the same time each day. Associate meditation with a specific cue like morning coffee. Even brief, consistent practice yields significant benefits.`,
    image: 'https://images.unsplash.com/photo-1508672019048-805c876b67e2?w=800&h=500&fit=crop',
    author: 'Guru Das',
    date: 'February 20, 2026',
    category: 'Wellness',
    readTime: '6 min'
  },
  {
    id: '6',
    title: 'Understanding Gut Health: The Ayurvedic Perspective',
    slug: 'gut-health-ayurvedic-perspective',
    excerpt: 'Discover how Ayurveda has understood digestive health for millennia and why it remains the foundation of overall wellness.',
    content: `In Ayurveda, the digestive system—"Agni" or digestive fire—is considered the cornerstone of health. While modern science is just beginning to understand the gut-brain connection, Ayurveda has prioritized digestive wellness for over 5,000 years.

## What Is Agni?

Agni represents the digestive fire that transforms food into energy and nourishment. Strong Agni means efficient digestion, proper nutrient absorption, and effective elimination.

### Types of Agni

- Mand Agni (weak): Slow digestion, bloating
- Tikshna Agni (excessive): Strong appetite, acidity
- Sam Agni (balanced): Optimal digestion

## Signs of Healthy Digestion

- Regular hunger at meal times
- No bloating after eating
- Energy sustained between meals
- Clear elimination
- Mental clarity after meals

## Supporting Digestive Health

### Eat According to Your Hunger
Don't force meals when not hungry. Wait until Agni awakens naturally.

### favor Warm Foods
Cold foods and drinks extinguish digestive fire. Choose room temperature or warm options.

### Don't Overeat
Leave 1/4 of your stomach empty to allow space for digestion.

### Eat Without Distraction
Give your full attention to meals. Eating while distracted impairs digestion.

### Include Digestive Spices
Ginger, fennel, cumin, and cardamom naturally support digestive fire.`,
    image: 'https://images.unsplash.com/photo-1481070555726-e2bf835bad5f?w=800&h=500&fit=crop',
    author: 'Dr. Priya Sharma',
    date: 'February 15, 2026',
    category: 'Health',
    readTime: '7 min'
  }
]

export const blogCategories = ['All', 'Wellness', 'Lifestyle', 'Nutrition', 'Science', 'Health']

export const getPostsByCategory = (category: string): BlogPost[] => {
  if (category === 'All') return blogPosts
  return blogPosts.filter(p => p.category === category)
}

export const getPostBySlug = (slug: string): BlogPost | undefined => {
  return blogPosts.find(p => p.slug === slug)
}