import { Button } from "@/components/ui/button";
import achalPortrait from "@/assets/achal-portrait.jpg";

const HeroSection = () => {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-hero relative overflow-hidden">
      {/* Animated background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-primary rounded-full animate-pulse"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-accent rounded-full animate-pulse delay-1000"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-waveform rounded-full animate-pulse delay-500"></div>
      </div>
      
      <div className="container mx-auto px-6 text-center relative z-10">
        <div className="max-w-4xl mx-auto">
          {/* Profile Image */}
          <div className="mb-6 md:mb-8 flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-music rounded-full opacity-20 animate-pulse-glow"></div>
              <img 
                src={achalPortrait} 
                alt="Achal Pednekar" 
                className="w-32 h-32 sm:w-40 sm:h-40 md:w-48 md:h-48 lg:w-64 lg:h-64 object-cover rounded-full border-4 border-primary/20 shadow-glow relative z-10"
              />
            </div>
          </div>

          {/* Name and Title */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-bold mb-3 md:mb-4 text-foreground animate-fade-in px-4">
            Achal <span className="text-primary">Pednekar</span>
          </h1>
          
          <p className="text-lg sm:text-xl md:text-2xl text-muted-foreground mb-6 md:mb-8 animate-fade-in delay-200 px-4">
            Music Composer & Sound Designer
          </p>

          {/* Call to Action */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in delay-500">
            <Button 
              size="lg" 
              className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow"
              onClick={() => scrollToSection('audio-showcase')}
            >
              Listen to My Work
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              className="border-primary text-primary hover:bg-primary/10"
              onClick={() => scrollToSection('contact')}
            >
              Get in Touch
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;