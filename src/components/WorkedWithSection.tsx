import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
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
    isPng: true,
    color: "#5f259f",
    description: "Digital Payments"
  },
  {
    name: "Zee5",
    logoUrl: zee5Logo,
    alt: "Zee5 Logo",
    isPng: true,
    color: "#8e31fb",
    description: "Entertainment"
  }
];

export default function WorkedWithSection() {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          } else {
            setIsVisible(false);
          }
        });
      },
      { threshold: 0.2 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

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

  // Split text for letter animation
  const animateText = (text: string, baseDelay: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const charDelay = isMobile ? 15 : 30;
    
    return text.split('').map((char, index) => (
      <span
        key={index}
        className={`inline-block transition-all duration-500 ${
          isVisible ? 'opacity-100 translate-y-0 rotate-0' : 'opacity-0 translate-y-4 -rotate-12'
        }`}
        style={{ 
          transitionDelay: isVisible ? `${baseDelay + (index * charDelay)}ms` : '0ms',
        }}
      >
        {char === ' ' ? '\u00A0' : char}
      </span>
    ));
  };

  return (
    <>
      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-10px); }
        }

        @keyframes pulse-glow {
          0%, 100% { box-shadow: 0 0 20px rgba(var(--primary-rgb), 0.3); }
          50% { box-shadow: 0 0 40px rgba(var(--primary-rgb), 0.6); }
        }

        @keyframes rotate-border {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }

        @keyframes shimmer {
          0% { background-position: -200% center; }
          100% { background-position: 200% center; }
        }

        .icon-float {
          animation: float 3s ease-in-out infinite;
        }

        .logo-card {
          position: relative;
          overflow: hidden;
        }

        .logo-card::before {
          content: '';
          position: absolute;
          top: -2px;
          left: -2px;
          right: -2px;
          bottom: -2px;
          background: linear-gradient(45deg, transparent, rgba(var(--primary-rgb), 0.4), transparent);
          border-radius: inherit;
          opacity: 0;
          transition: opacity 0.5s;
          z-index: -1;
          animation: rotate-border 3s linear infinite;
        }

        .logo-card:hover::before {
          opacity: 1;
        }

        .shimmer-effect {
          background: linear-gradient(
            90deg,
            transparent 0%,
            rgba(255, 255, 255, 0.1) 50%,
            transparent 100%
          );
          background-size: 200% 100%;
          animation: shimmer 3s infinite;
        }

        .text-gradient {
          background: linear-gradient(135deg, currentColor 0%, rgba(var(--primary-rgb), 1) 100%);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        @keyframes scale-in {
          0% {
            opacity: 0;
            transform: scale(0.5) rotate(-10deg);
          }
          100% {
            opacity: 1;
            transform: scale(1) rotate(0deg);
          }
        }

        .scale-in-animation {
          animation: scale-in 0.8s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }
      `}</style>

      <section ref={sectionRef} id="clients" className="py-20 bg-background relative overflow-hidden">
        {/* Animated background particles */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/4 left-1/4 w-64 h-64 bg-primary/5 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} style={{ transitionDelay: '200ms' }} />
          <div className={`absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} style={{ transitionDelay: '400ms' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 icon-float' : 'opacity-0 scale-0'
              }`}>
                <Briefcase className="w-8 h-8 text-primary" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
                {animateText('Trusted By ', 100)}
                <span className="text-primary">
                  {animateText('Leading Brands', 400)}
                </span>
              </h2>
              
              <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`} style={{ transitionDelay: '700ms' }}>
                I've had the privilege of composing and designing sound for some of the industry's leading companies.
              </p>
            </div>

            {/* Logo Grid */}
            <div className="grid grid-cols-3 gap-4 md:gap-6 max-w-lg mx-auto">
              {clients.map((client, index) => {
                const isHovered = hoveredIndex === index;
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                const cardDelay = isMobile ? 300 + (index * 100) : 900 + (index * 150);
                
                return (
                  <div 
                    key={client.name}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-75 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${cardDelay}ms` }}
                  >
                    <div 
                      className="logo-card relative aspect-square bg-card border-2 border-primary/20 transition-all duration-500 group hover:border-primary/60 hover:shadow-glow hover:-translate-y-3 overflow-hidden touch-manipulation cursor-pointer rounded-xl"
                      onMouseMove={(e) => handleMouseMove(e, index)}
                      onMouseLeave={handleMouseLeave}
                      style={{
                        transformStyle: 'preserve-3d',
                        transform: isHovered ? 'perspective(1000px) rotateX(5deg) rotateY(5deg)' : 'none'
                      }}
                    >
                      {/* Shimmer overlay */}
                      <div className="absolute inset-0 shimmer-effect opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-20 pointer-events-none" />
                      
                      {/* The image background */}
                      <img
                        src={client.logoUrl}
                        alt={client.alt}
                        className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${
                          client.isPng 
                            ? 'opacity-70 group-hover:opacity-100' 
                            : 'filter grayscale brightness-150 opacity-60 group-hover:filter-none group-hover:opacity-100'
                        } group-hover:scale-125 group-hover:rotate-2`}
                      />
                      
                      {/* Dynamic gradient following mouse */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none z-10"
                        style={{
                          background: isHovered 
                            ? `radial-gradient(circle 180px at ${mousePosition.x}% ${mousePosition.y}%, ${client.color}40 0%, ${client.color}20 40%, transparent 100%)`
                            : 'none'
                        }}
                      />

                      {/* Animated corner accents */}
                      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 rounded-tl-xl" />
                      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-primary/0 group-hover:border-primary/60 transition-all duration-500 rounded-br-xl" />

                      {/* Glow effect on hover */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none z-10"
                        style={{
                          background: `linear-gradient(135deg, ${client.color}25, transparent 50%)`,
                          filter: 'blur(25px)'
                        }}
                      />

                      {/* Brand name overlay on hover */}
                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-500 z-30 bg-black/40 backdrop-blur-sm">
                        <div className="text-center transform scale-75 group-hover:scale-100 transition-transform duration-500">
                          <p className="text-white font-bold text-sm mb-1">{client.name}</p>
                          <p className="text-white/70 text-xs">{client.description}</p>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Additional Info */}
            <div className={`text-center mt-12 md:mt-16 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? '600ms' : '1400ms' }}>
              <p className="text-muted-foreground mb-4">
                From telecommunications to entertainment, my work spans diverse industries
              </p>
              <div className={`flex items-center justify-center gap-2 text-sm text-primary transition-all duration-500 ${
                isVisible ? 'scale-100' : 'scale-0'
              }`} style={{ transitionDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? '700ms' : '1600ms' }}>
                <Sparkles className="w-4 h-4 animate-pulse" />
                <span className="font-medium">Creating memorable sonic experiences for millions</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}