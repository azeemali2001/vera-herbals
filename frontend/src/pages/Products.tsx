import { ProductGrid } from "../components/products/ProductGrid";
import { homeProducts } from "../data/homeProducts";
import type { Product } from "../components/products/ProductGrid";

const products: Product[] = homeProducts;

export default function Products() {
  return (
    <section className="section-block !pt-2 lg:!pt-4 !pb-6 lg:!pb-10">
      <ProductGrid
        products={products}
        title="Our Herbal Collection"
        subtitle="Premium organic powders for wellness, cooking, and natural beauty."
        productLink={(product) => `/products/${product.slug}`}
      />
    </section>
  );
}

