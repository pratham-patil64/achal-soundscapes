import { useState } from 'react';
import { Card } from "@/components/ui/card"; // This import is no longer strictly needed but is harmless
import { Briefcase, Sparkles } from "lucide-react";

// --- Import your local logos ---
import jioHotstarLogo from "@/assets/logo/jiohotstar.jpg";
import phonepeLogo from "@/assets/logo/phonepe.jpg";
import zee5Logo from "@/assets/logo/zee5.jpg";
// --------------------------------

const clients = [
  {
    name: "Jio Hotstar",
    logoUrl: jioHotstarLogo,
    alt: "Jio Hotstar Logo",
    isPng: true,
    color: "#0f1014",
    description: "Streaming Platform"
  },
  {
    name: "PhonePe",
    logoUrl: phonepeLogo,
    alt: "PhonePe Logo",
    isPng: true, // Use true for JPGs too, to avoid SVG filters
    color: "#5f259f",
    description: "Digital Payments"
  },
  {
    name: "Zee5",
    logoUrl: zee5Logo,
    alt: "Zee5 Logo",
    isPng: true, // Use true for JPGs too, to avoid SVG filters
    color: "#8e31fb",
    description: "Entertainment"
  }
];

export default function WorkedWithSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent, index: number) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = ((e.clientX - rect.left) / rect.width) * 100;
    const y = ((e.clientY - rect.top) / rect.height) * 100;
    setMousePosition({ x, y });
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };

  return (
    <section id="clients" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <Briefcase className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4 animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Trusted By <span className="text-primary">Leading Brands</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              I've had the privilege of composing and designing sound for some of the industry's leading companies.
            </p>
          </div>

          {/* Logo Grid - Adjusted grid for 3 items */}
          <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto">
            {clients.map((client, index) => {
              const isHovered = hoveredIndex === index;
              
              return (
                <div 
                  key={client.name}
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: `${300 + index * 100}ms`, animationFillMode: 'forwards' }}
                >
                  {/* This is the new logo-button wrapper */}
                  <div 
                    className="relative aspect-square bg-card border-primary/20 transition-all duration-500 group hover:border-primary/40 hover:shadow-glow hover:-translate-y-2 overflow-hidden touch-manipulation cursor-pointer rounded-lg"
                    onMouseMove={(e) => handleMouseMove(e, index)}
                    onMouseLeave={handleMouseLeave}
                  >
                    {/* The image is now the background, filling the div */}
                    <img
                      src={client.logoUrl}
                      alt={client.alt}
                      className={`absolute inset-0 h-full w-full object-cover transition-all duration-500 ${
                        client.isPng 
                          ? 'opacity-70 group-hover:opacity-100' 
                          : 'filter grayscale brightness-150 opacity-60 group-hover:filter-none group-hover:opacity-100'
                      } group-hover:scale-110`} // The scale will make it zoom
                    />
                    
                    {/* Dynamic gradient that follows mouse (on top) */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                      style={{
                        background: isHovered 
                          ? `radial-gradient(circle 200px at ${mousePosition.x}% ${mousePosition.y}%, ${client.color}25 0%, ${client.color}10 50%, transparent 100%)`
                          : 'none'
                      }}
                    />

                    {/* Animated border glow (on top) */}
                    <div 
                      className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                      style={{
                        background: `linear-gradient(135deg, ${client.color}30, transparent 60%)`,
                        filter: 'blur(20px)'
                      }}
                    />
                  </div>
                </div>
              );
            })}
          </div>

          {/* Additional Info */}
          <div className="text-center mt-12 md:mt-16 animate-fade-in opacity-0" style={{ animationDelay: '700ms', animationFillMode: 'forwards' }}>
            <p className="text-muted-foreground mb-4">
              From telecommunications to entertainment, my work spans diverse industries
            </p>
            <div className="flex items-center justify-center gap-2 text-sm text-primary">
              <Sparkles className="w-4 h-4" />
              <span>Creating memorable sonic experiences for millions</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}