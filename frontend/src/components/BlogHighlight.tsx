import { Link } from "react-router-dom";

export function BlogHighlight() {
  const posts = [
    {
      title: "The Ancient Wisdom of Ayurveda",
      excerpt: "Modern applications of traditional healing practices"
    },
    {
      title: "Moringa: Nature's Superfood",
      excerpt: "Nutritional benefits and daily health support"
    },
    {
      title: "Building Immunity Naturally",
      excerpt: "Herbal approaches to wellness and prevention"
    }
  ];

  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">Wellness Blog</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Educational articles on Ayurveda, herbal benefits, and natural wellness practices.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          {posts.map((post, index) => (
            <div key={index} className="bg-gray-50 rounded-lg p-6 hover:shadow-md transition-shadow">
              <div className="w-full h-32 bg-gradient-to-br from-green-100 to-green-200 rounded-lg mb-4 flex items-center justify-center">
                <span className="text-4xl">📖</span>
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">{post.title}</h3>
              <p className="text-gray-600">{post.excerpt}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Link
            to="/blog"
            className="inline-flex items-center px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition-colors"
          >
            Read More Articles
          </Link>
        </div>
      </div>
    </section>
  );
}