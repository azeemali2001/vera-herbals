import { Toaster } from "./components/ui/sonner";
import { Navigation } from "./components/Navigation";
import { HeroSection } from "./components/HeroSection";
import { AboutSection } from "./components/AboutSection";
import { ProductFeatures } from "./components/ProductFeatures";
import { WhyChooseSection } from "./components/WhyChooseSection";
import { IndustriesSection } from "./components/IndustriesSection";
import { QualitySection } from "./components/QualitySection";
import { CTASection } from "./components/CTASection";
import { ContactForm } from "./components/ContactForm";
import { Footer } from "./components/Footer";

export default function App() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <ProductFeatures />
      <WhyChooseSection />
      <IndustriesSection />
      <QualitySection />
      <CTASection />
      <ContactForm />
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}
