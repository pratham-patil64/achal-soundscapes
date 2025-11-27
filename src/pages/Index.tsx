// src/pages/Index.tsx

import AnimatedBackground from "@/components/AnimatedBackground"; // The new background
import {HeroSection} from "@/components/HeroSection";
import BioSection from "@/components/BioSection";
import ServicesSection from "@/components/ServicesSection";
import AudioShowcase from "@/components/AudioShowcase";
import YouTubeSection from "@/components/YouTubeSection";
import WorkedWithSection from "@/components/WorkedWithSection"; 
import ListenElsewhereSection from "@/components/ListenElsewhereSection"; 
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollFadeIn from "@/components/ScrollFadeIn"; // <-- NEW IMPORT

const Index = () => {
  let scrollDelay = 0;
  // DECREASED DELAY: Changed from 100 to 50
  const DELAY_INCREMENT = 50; 

  // This function finds the element with id="youtube" and scrolls to it
  const handleListenClick = () => {
    const element = document.getElementById('youtube');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    // 'bg-background' was removed here to make the animation visible
    <div className="min-h-screen"> 
      
      <AnimatedBackground />

      {/* This 'main' tag with 'relative z-10' ensures your 
          content sits ON TOP of the background animation */}
      <main className="relative z-10">
        <HeroSection onListenClick={handleListenClick} />
        {/* <BioSection /> */}

        {/* Wrap sections with ScrollFadeIn and apply staggered delay */}
        <ScrollFadeIn delay={scrollDelay += DELAY_INCREMENT}>
          <ServicesSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={scrollDelay += DELAY_INCREMENT}>
          <YouTubeSection /> 
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={scrollDelay += DELAY_INCREMENT}>
          <WorkedWithSection /> 
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={scrollDelay += DELAY_INCREMENT}>
          <ListenElsewhereSection />
        </ScrollFadeIn>
        
        <ScrollFadeIn delay={scrollDelay += DELAY_INCREMENT}>
          <ContactSection />
        </ScrollFadeIn>

        <Footer />
      </main>
      
    </div>
  );
};

export default Index;