import { useEffect } from 'react';
import { Button } from "@/components/ui/button";
import achalPortrait from "@/assets/final-acahl.jpg";
import { Music } from 'lucide-react';

interface LandingProps {
  onEnter: () => void;
}

const Landing = ({ onEnter }: LandingProps) => {
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Enter') {
        onEnter();
      }
    };

    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onEnter]);

  return (
    <div
      className="min-h-screen bg-cover bg-center flex flex-col items-center justify-center p-8 relative overflow-hidden"
      style={{ backgroundImage: `url(${achalPortrait})` }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 w-full h-full bg-background/80 backdrop-blur-sm z-0" />

      {/* Content */}
      <div className="text-center relative z-10 animate-fade-in">
        <h1 className="text-5xl md:text-7xl font-bold mb-4 text-foreground">
          Achal <span className="text-primary">Pednekar</span>
        </h1>
        <p className="text-xl md:text-2xl text-muted-foreground mb-8">
          Music Composer & Sound Designer
        </p>
        <Button
          onClick={onEnter}
          size="lg"
          className="bg-primary hover:bg-primary/90 text-primary-foreground shadow-glow animate-fade-in delay-500"
        >
          <Music className="w-5 h-5 mr-2" />
          Enter Site
        </Button>
      </div>
    </div>
  );
};

export default Landing;