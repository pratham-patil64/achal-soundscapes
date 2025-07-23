import HeroSection from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import AudioShowcase from "@/components/AudioShowcase";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <HeroSection />
      <BioSection />
      <AudioShowcase />
      <ContactSection />
      <Footer />
    </div>
  );
};

export default Index;
