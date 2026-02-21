import { HeroSection } from "../components/HeroSection";
import { ProductFeatures } from "../components/ProductFeatures";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { RecipesHighlight } from "../components/RecipesHighlight";
import { BlogHighlight } from "../components/BlogHighlight";
import { CTASection } from "../components/CTASection";

export default function Home() {
  return (
    <>
      <HeroSection />
      <ProductFeatures />
      <WhyChooseSection />
      <RecipesHighlight />
      <BlogHighlight />
      <CTASection />
    </>
  );
}
