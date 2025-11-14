import React from 'react';
import { Button } from "@/components/ui/button";

export function HeroSection({ 
  name = "ACHAL PEDNEKAR", 
  title = "Music Composer & Producer",
  onListenClick = () => console.log("Listen Clicked")
}) {
  return (
    <section className="relative w-full h-screen overflow-hidden bg-black">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat animate-fade-in"
        style={{ 
          // Using a direct path to the image in the 'public' folder.
          backgroundImage: `url(/achalfinal.jpg)`, 
        }}
      >
        {/* Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col items-start justify-end h-full p-6 md:p-12 lg:p-20 max-w-7xl mx-auto">
        
        {/* Navigation Buttons - Top Right */}
        <div 
          className="absolute top-6 right-6 md:top-8 md:right-12 flex gap-3 md:gap-4 animate-fade-in"
          style={{ animationDelay: '0.7s', animationFillMode: 'forwards' }}
        >
          <Button 
            variant="outline" 
            onClick={onListenClick}
            className="text-sm md:text-base bg-black/30 border-white/20 hover:bg-white/10 text-white backdrop-blur-sm"
          >
            Listen to my work
          </Button>
        </div>

        {/* Main Text Content - Bottom Left */}
        <div className="text-left">
           <p 
            className="text-base md:text-lg text-white/80 mb-2 animate-fade-in"
            style={{ animationDelay: '0.5s', animationFillMode: 'forwards' }}
           >
            {title}
          </p>
          <h1 
            className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-widest uppercase animate-fade-in"
            style={{ 
              animationDelay: '0.3s', 
              animationFillMode: 'forwards',
              fontFamily: '"Montserrat", sans-serif'
            }}
          >
            <span className="text-white">ACHAL</span>{' '}
            <span style={{ color: '#d9cd94' }}>PEDNEKAR</span>
          </h1>
        </div>
      </div>
    </section>
  );
};

// You can use a default export if you prefer, like this:
// export default Hero;

