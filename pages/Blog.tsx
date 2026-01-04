import { Navigation } from "../components/Navigation";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

const blogPosts = [
  {
    title: "The Ancient Wisdom of Ayurveda: Modern Applications",
    excerpt: "Explore how traditional Ayurvedic practices continue to benefit modern wellness routines.",
    date: "January 4, 2026",
    readTime: "5 min read"
  },
  {
    title: "Moringa: Nature's Superfood for Daily Health",
    excerpt: "Discover the nutritional powerhouse that is Moringa and its role in supporting overall wellness.",
    date: "December 28, 2025",
    readTime: "4 min read"
  },
  {
    title: "Herbal Teas for Stress Relief and Relaxation",
    excerpt: "Learn about calming herbal combinations that promote mental clarity and peace.",
    date: "December 20, 2025",
    readTime: "6 min read"
  },
  {
    title: "Sustainable Sourcing: Our Commitment to Quality",
    excerpt: "How we ensure our herbal products are ethically sourced and environmentally friendly.",
    date: "December 15, 2025",
    readTime: "3 min read"
  },
  {
    title: "Turmeric and Golden Milk: A Traditional Remedy",
    excerpt: "The science behind this ancient drink and its modern health applications.",
    date: "December 10, 2025",
    readTime: "5 min read"
  },
  {
    title: "Building Immunity with Herbal Nutrition",
    excerpt: "Natural ways to support your immune system through traditional herbal wisdom.",
    date: "December 5, 2025",
    readTime: "4 min read"
  }
];

export default function Blog() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <div className="container mx-auto px-4 py-16">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">Wellness Blog</h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Discover insights into Ayurvedic wisdom, herbal benefits, and natural wellness practices
              to support your journey toward optimal health.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post, index) => (
              <article key={index} className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow">
                <div className="w-full h-48 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-6xl">📖</span>
                </div>
                <div className="flex items-center text-sm text-gray-500 mb-2">
                  <span>{post.date}</span>
                  <span className="mx-2">•</span>
                  <span>{post.readTime}</span>
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-3">{post.title}</h3>
                <p className="text-gray-600 mb-4">{post.excerpt}</p>
                <button className="text-green-600 hover:text-green-700 font-medium">
                  Read More →
                </button>
              </article>
            ))}
          </div>
        </div>
      </div>
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}