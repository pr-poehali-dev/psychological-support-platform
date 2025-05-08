import HeroSection from "@/components/HeroSection";
import FeatureSection from "@/components/FeatureSection";
import EmotionalSupportSection from "@/components/EmotionalSupportSection";
import ContactForm from "@/components/ContactForm";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-[#f9f7fe]">
      {/* Hero Section */}
      <HeroSection />

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <FeatureSection />
        <EmotionalSupportSection />
        <ContactForm />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Index;
