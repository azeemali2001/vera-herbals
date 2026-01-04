import { Navigation } from "../components/Navigation";
import { AboutSection } from "../components/AboutSection";
import { QualitySection } from "../components/QualitySection";
import { Footer } from "../components/Footer";
import { Toaster } from "../components/ui/sonner";

export default function AboutUs() {
  return (
    <main className="min-h-screen bg-white">
      <Navigation />
      <div className="pt-20">
        <AboutSection />
        <QualitySection />
      </div>
      <Footer />
      <Toaster position="top-right" />
    </main>
  );
}