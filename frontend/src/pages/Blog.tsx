import { PageHeader } from "../components/layout/PageHeader";

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
    <section className="section-block">
      <PageHeader
        eyebrow="Insights"
        title="Wellness Blog"
        description="Discover insights into Ayurvedic wisdom, herbal benefits, and natural wellness practices to support your journey toward optimal health."
      />

      <div className="app-container pb-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {blogPosts.map((post, index) => (
            <article key={index} className="rounded-2xl border border-[#dbe5d1] bg-white p-6 shadow-soft transition-all hover:-translate-y-1 hover:shadow-card">
              <div className="mb-4 flex h-44 w-full items-center justify-center rounded-xl bg-gradient-to-br from-green-100 to-green-200">
                <span className="text-6xl">📖</span>
              </div>
              <div className="mb-2 flex items-center text-sm text-earth-light">
                <span>{post.date}</span>
                <span className="mx-2">•</span>
                <span>{post.readTime}</span>
              </div>
              <h3 className="mb-3 text-xl font-semibold text-earth">{post.title}</h3>
              <p className="mb-4 text-earth-light">{post.excerpt}</p>
              <button className="text-sage hover:text-[#3D6623] font-medium transition-colors">
                Read More →
              </button>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
