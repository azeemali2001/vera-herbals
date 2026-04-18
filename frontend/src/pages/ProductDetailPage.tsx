import { useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { Star, Minus, Plus, Check, Heart, Share2, Truck, Shield, RotateCcw, ChevronRight, ChevronLeft } from 'lucide-react'
import { Button, Section, Container, Card, Badge, Heading } from '../components/ui.tsx'
import { getProductBySlug, products } from '../data/products'
import { getHomeProductBySlug } from '../data/homeProducts'

export function ProductDetailPage() {
  const { slug } = useParams()
  const product = getProductBySlug(slug || '') || getHomeProductBySlug(slug || '')
  const [selectedImage, setSelectedImage] = useState(0)
  const [quantity, setQuantity] = useState(1)
  const [activeTab, setActiveTab] = useState('benefits')
  const [expandedSection, setExpandedSection] = useState<number | null>(0)

  if (!product) {
    return (
      <div className="pt-32 text-center">
        <Heading level={2}>Product not found</Heading>
        <Link to="/products">
          <Button className="mt-4">Back to Products</Button>
        </Link>
      </div>
    )
  }

  const isHomeProduct = 'about' in product && !('category' in product)

  if (isHomeProduct) {
    return (
      <div className="bg-white">
        {/* Breadcrumb - minimal padding */}
        <div className="bg-gray-50 py-2 border-b">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-gray-600">
              <Link to="/" className="hover:text-gray-900">Home</Link>
              <span>/</span>
              <Link to="/products" className="hover:text-gray-900">Products</Link>
              <span>/</span>
              <span className="text-gray-900 font-medium">{product.name}</span>
            </div>
          </div>
        </div>

        {/* Product Detail */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="grid lg:grid-cols-2 gap-8">
            {/* Image Section with Carousel */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col"
            >
              {/* Main Image */}
              <div className="w-full h-80 bg-gradient-to-br from-gray-50 to-gray-100 rounded-lg overflow-hidden mb-4">
                <img
                  src={product.image[selectedImage]}
                  alt={product.name}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* Image Thumbnails with Blur & Slide Navigation */}
              {product.image.length > 1 && (
                <div className="flex items-center gap-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setSelectedImage(Math.max(0, selectedImage - 1))}
                    disabled={selectedImage === 0}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  >
                    <ChevronLeft className="w-5 h-5 text-gray-700" />
                  </button>

                  {/* Carousel Container */}
                  <div className="flex-1 overflow-x-auto scrollbar-hide">
                    <div className="flex gap-3 pb-2">
                      {product.image.map((img, idx) => (
                        <motion.button
                          key={idx}
                          onClick={() => setSelectedImage(idx)}
                          whileHover={{ scale: 1.05 }}
                          whileTap={{ scale: 0.95 }}
                          className={`w-24 h-24 rounded-lg overflow-hidden border-2 transition-all flex-shrink-0 ${
                            selectedImage === idx
                              ? 'border-green-600 shadow-md'
                              : 'border-gray-200 hover:border-gray-300'
                          }`}
                        >
                          <img
                            src={img}
                            alt={`${product.name} ${idx + 1}`}
                            className={`w-full h-full object-cover transition-all duration-300 ${
                              selectedImage === idx ? 'opacity-100' : 'opacity-75'
                            }`}
                          />
                        </motion.button>
                      ))}
                    </div>
                  </div>

                  {/* Next Button */}
                  <button
                    onClick={() => setSelectedImage(Math.min(product.image.length - 1, selectedImage + 1))}
                    disabled={selectedImage === product.image.length - 1}
                    className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200 disabled:opacity-40 disabled:cursor-not-allowed transition-colors flex-shrink-0"
                  >
                    <ChevronRight className="w-5 h-5 text-gray-700" />
                  </button>
                </div>
              )}
            </motion.div>

            {/* Content Section */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex flex-col"
            >
              <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
                Featured Product
              </span>
              <h1 className="text-3xl lg:text-4xl font-serif font-medium text-gray-900 mb-3">
                {product.name}
              </h1>
              <p className="text-base text-gray-600 leading-relaxed mb-6">
                {product.description}
              </p>

              {/* Collapsible About Sections */}
              <div className="space-y-2 mb-6">
                {product.about.map((section, i) => (
                  <div key={i} className="border border-gray-200 rounded-lg overflow-hidden">
                    <button
                      onClick={() => setExpandedSection(expandedSection === i ? null : i)}
                      className="w-full px-4 py-3 flex items-center justify-between bg-gray-50 hover:bg-gray-100 transition-colors"
                    >
                      <h3 className="font-semibold text-gray-900 text-sm">{section.heading}</h3>
                      <span
                        className={`transition-transform duration-300 ${
                          expandedSection === i ? 'rotate-180' : ''
                        }`}
                      >
                        ▼
                      </span>
                    </button>
                    {expandedSection === i && (
                      <div className="px-4 py-3 bg-white border-t border-gray-200">
                        <ul className="space-y-2">
                          {section.bullets.map((bullet, j) => (
                            <li key={j} className="flex items-start gap-2 text-sm text-gray-700">
                              <span className="w-1.5 h-1.5 rounded-full bg-green-600 mt-1.5 flex-shrink-0" />
                              <span>{bullet}</span>
                            </li>
                          ))}
                        </ul>
                      </div>
                    )}
                  </div>
                ))}
              </div>

              {/* Usage Box */}
              <div className="p-4 bg-green-50 border border-green-200 rounded-lg">
                <h4 className="font-semibold text-gray-900 mb-2 text-sm">Suggested Usage</h4>
                <p className="text-sm text-gray-700 leading-relaxed">{product.usage}</p>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    )
  }

  const relatedProducts = products
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 3)

  const tabs = [
    { id: 'benefits', label: 'Benefits' },
    { id: 'ingredients', label: 'Ingredients' },
    { id: 'usage', label: 'How to Use' },
  ]

  if (product.nutrition) tabs.push({ id: 'nutrition', label: 'Nutrition' })

  return (
    <div className="pt-20">
      {/* Breadcrumb */}
      <div className="bg-secondary py-4">
        <Container>
          <div className="flex items-center gap-2 text-sm text-text-light">
            <Link to="/" className="hover:text-primary">Home</Link>
            <ChevronRight className="w-4 h-4" />
            <Link to="/products" className="hover:text-primary">Products</Link>
            <ChevronRight className="w-4 h-4" />
            <span className="text-text-dark">{product.name}</span>
          </div>
        </Container>
      </div>

      {/* Product Detail */}
      <Section>
        <Container>
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <div className="mb-4">
                <img
                  src={product.images[selectedImage]}
                  alt={product.name}
                  className="w-full h-96 lg:h-[500px] object-cover rounded-2xl"
                />
              </div>
              <div className="flex gap-4">
                {product.images.map((image, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedImage(index)}
                    className={`w-20 h-20 rounded-lg overflow-hidden border-2 transition-all ${
                      selectedImage === index
                        ? 'border-primary'
                        : 'border-transparent hover:border-primary/50'
                    }`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </motion.div>

            {/* Product Info */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <Badge variant="green" className="mb-4">{product.category}</Badge>
              
              <Heading level={2} className="text-primary mb-4">
                {product.name}
              </Heading>
              
              <div className="flex items-center gap-4 mb-6">
                <div className="flex items-center gap-1">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`w-5 h-5 ${
                        i < Math.floor(product.rating)
                          ? 'text-accent fill-accent'
                          : 'text-gray-300'
                      }`}
                    />
                  ))}
                  <span className="ml-2 text-text-medium font-medium">
                    {product.rating}
                  </span>
                </div>
                <span className="text-text-light">({product.reviews} reviews)</span>
              </div>
              
              <p className="text-text-medium text-lg mb-6">
                {product.description}
              </p>
              
              <div className="flex items-center gap-6 mb-8">
                <span className="text-4xl font-bold text-primary">
                  ₹{product.price}
                </span>
                {product.originalPrice && (
                  <>
                    <span className="text-2xl text-text-light line-through">
                      ₹{product.originalPrice}
                    </span>
                    <Badge variant="gold">
                      {Math.round((1 - product.price / product.originalPrice) * 100)}% OFF
                    </Badge>
                  </>
                )}
              </div>
              
              {/* Quantity Selector */}
              <div className="flex items-center gap-4 mb-8">
                <span className="text-text-dark font-medium">Quantity:</span>
                <div className="flex items-center border-2 border-primary/20 rounded-lg">
                  <button
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    <Minus className="w-4 h-4" />
                  </button>
                  <span className="px-6 py-2 font-medium">{quantity}</span>
                  <button
                    onClick={() => setQuantity(quantity + 1)}
                    className="px-4 py-2 hover:bg-secondary transition-colors"
                  >
                    <Plus className="w-4 h-4" />
                  </button>
                </div>
              </div>
              
              {/* Action Buttons */}
              <div className="flex flex-wrap gap-4 mb-8">
                <Button size="lg" className="flex-1 min-w-[200px]">
                  Add to Cart
                </Button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-primary/20 rounded-lg hover:bg-secondary transition-colors">
                  <Heart className="w-5 h-5 text-primary" />
                </button>
                <button className="w-12 h-12 flex items-center justify-center border-2 border-primary/20 rounded-lg hover:bg-secondary transition-colors">
                  <Share2 className="w-5 h-5 text-primary" />
                </button>
              </div>
              
              {/* Trust Indicators */}
              <div className="grid grid-cols-3 gap-4 p-4 bg-secondary rounded-xl">
                <div className="text-center">
                  <Truck className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-text-medium">Free Shipping</span>
                </div>
                <div className="text-center border-x border-primary/10">
                  <Shield className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-text-medium">Quality Assured</span>
                </div>
                <div className="text-center border-l border-primary/10">
                  <RotateCcw className="w-6 h-6 mx-auto mb-2 text-primary" />
                  <span className="text-xs text-text-medium">Easy Returns</span>
                </div>
              </div>
            </motion.div>
          </div>

          {/* Tabs Section */}
          <div className="mt-16">
            <div className="border-b border-gray-200 mb-8">
              <div className="flex gap-8">
                {tabs.map((tab) => (
                  <button
                    key={tab.id}
                    onClick={() => setActiveTab(tab.id)}
                    className={`pb-4 font-medium transition-colors relative ${
                      activeTab === tab.id
                        ? 'text-primary'
                        : 'text-text-light hover:text-text-dark'
                    }`}
                  >
                    {tab.label}
                    {activeTab === tab.id && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                      />
                    )}
                  </button>
                ))}
              </div>
            </div>

            <motion.div
              key={activeTab}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
            >
              {activeTab === 'benefits' && (
                <div className="grid sm:grid-cols-2 gap-4">
                  {product.benefits.map((benefit, index) => (
                    <div key={index} className="flex items-center gap-3 p-4 bg-secondary rounded-lg">
                      <Check className="w-5 h-5 text-primary flex-shrink-0" />
                      <span className="text-text-dark">{benefit}</span>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'ingredients' && (
                <div className="p-6 bg-secondary rounded-xl">
                  <p className="text-text-dark">{product.ingredients}</p>
                </div>
              )}

              {activeTab === 'usage' && (
                <div className="p-6 bg-secondary rounded-xl">
                  <p className="text-text-dark">{product.usage}</p>
                </div>
              )}

              {activeTab === 'nutrition' && product.nutrition && (
                <div className="overflow-hidden rounded-xl border border-gray-200">
                  <table className="w-full">
                    <thead className="bg-secondary">
                      <tr>
                        <th className="px-6 py-3 text-left text-text-dark font-semibold">nutrient</th>
                        <th className="px-6 py-3 text-right text-text-dark font-semibold">Amount per serving</th>
                      </tr>
                    </thead>
                    <tbody>
                      {product.nutrition.map((item, index) => (
                        <tr key={index} className={index % 2 === 0 ? 'bg-white' : 'bg-secondary/50'}>
                          <td className="px-6 py-4 text-text-medium">{item.label}</td>
                          <td className="px-6 py-4 text-text-dark text-right font-medium">{item.value}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              )}
            </motion.div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-16">
              <Heading level={3} className="mb-8">Related Products</Heading>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-8">
                {relatedProducts.map((relProduct) => (
                  <Link key={relProduct.id} to={`/products/${relProduct.slug}`}>
                    <Card hover>
                      <img
                        src={relProduct.image}
                        alt={relProduct.name}
                        className="w-full h-48 object-cover"
                      />
                      <div className="p-4">
                        <h4 className="font-heading font-semibold text-text-dark">
                          {relProduct.name}
                        </h4>
                        <span className="text-primary font-bold">₹{relProduct.price}</span>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            </div>
          )}
        </Container>
      </Section>
    </div>
  )
}