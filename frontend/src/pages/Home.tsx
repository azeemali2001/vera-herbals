import { Navigation } from "../components/Navigation";
import { HeroSection } from "../components/HeroSection";
import { ProductFeatures } from "../components/ProductFeatures";
import { WhyChooseSection } from "../components/WhyChooseSection";
import { RecipesHighlight } from "../components/RecipesHighlight";
import { BlogHighlight } from "../components/BlogHighlight";
import { CTASection } from "../components/CTASection";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

export default function Home() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20"> {/* Account for navbar height */}
        <HeroSection />
        <ProductFeatures />
        <WhyChooseSection />
        <RecipesHighlight />
        <BlogHighlight />
        <CTASection />
      </div>
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}