import { useState, useEffect, useRef } from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink, Music2, Play } from "lucide-react";

// Simple SVG icon components
const SpotifyIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M12 0C5.4 0 0 5.4 0 12s5.4 12 12 12 12-5.4 12-12S18.66 0 12 0zm5.521 17.34c-.24.359-.66.48-1.021.24-2.82-1.74-6.36-2.101-10.561-1.141-.418.122-.779-.179-.899-.539-.12-.421.18-.78.54-.9 4.56-1.021 8.52-.6 11.64 1.32.42.18.479.659.301 1.02zm1.44-3.3c-.301.42-.841.6-1.262.3-3.239-1.98-8.159-2.58-11.939-1.38-.479.12-1.02-.12-1.14-.6-.12-.48.12-1.021.6-1.141C9.6 9.9 15 10.561 18.72 12.84c.361.181.54.78.241 1.2zm.12-3.36C15.24 8.4 8.82 8.16 5.16 9.301c-.6.179-1.2-.181-1.38-.721-.18-.601.18-1.2.72-1.381 4.26-1.26 11.28-1.02 15.721 1.621.539.3.719 1.02.419 1.56-.299.421-1.02.599-1.559.3z"/>
  </svg>
);

const YouTubeIcon = ({ className, style }) => (
  <svg viewBox="0 0 24 24" className={className} style={style} fill="currentColor">
    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/>
  </svg>
);

const platforms = [
  {
    name: "Spotify",
    icon: SpotifyIcon,
    url: "https://open.spotify.com/artist/7FHhqAQXMHO4J7Qn9Wivro",
    color: "#1DB954",
    description: "Stream my latest tracks and albums",
    followers: "Follow for updates"
  },
  {
    name: "YouTube",
    icon: YouTubeIcon,
    url: "https://www.youtube.com/@achalpednekar1385",
    color: "#FF0000",
    description: "Watch music videos and behind the scenes",
    followers: "Subscribe to my channel"
  },
];

export default function ListenElsewhereSection() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [isVisible, setIsVisible] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
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
  };

  // Split text for letter animation
  const animateText = (text: string, baseDelay: number) => {
    const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
    const charDelay = isMobile ? 15 : 25;
    
    return (
      <span className="inline-block whitespace-nowrap">
        {text.split('').map((char, index) => (
          <span
            key={index}
            className={`inline-block transition-all duration-600 ${
              isVisible ? 'opacity-100 translate-x-0 scale-100' : 'opacity-0 -translate-x-6 scale-75'
            }`}
            style={{ 
              transitionDelay: isVisible ? `${baseDelay + (index * charDelay)}ms` : '0ms',
            }}
          >
            {char === ' ' ? '\u00A0' : char}
          </span>
        ))}
      </span>
    );
  };

  return (
    <>
      <style>{`
        @keyframes wave {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          25% { transform: translateY(-8px) rotate(-5deg); }
          75% { transform: translateY(-8px) rotate(5deg); }
        }

        @keyframes spin-slow {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes pulse-ring {
          0% { transform: scale(0.95); opacity: 1; }
          100% { transform: scale(1.3); opacity: 0; }
        }

        @keyframes slide-up-fade {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }

        .icon-wave {
          animation: wave 2s ease-in-out infinite;
        }

        .spin-slow {
          animation: spin-slow 20s linear infinite;
        }

        .platform-card {
          position: relative;
          overflow: hidden;
        }

        .platform-card::before {
          content: '';
          position: absolute;
          top: 0;
          left: -100%;
          width: 100%;
          height: 100%;
          background: linear-gradient(90deg, transparent, rgba(255,255,255,0.05), transparent);
          transition: left 0.6s;
        }

        .platform-card:hover::before {
          left: 100%;
        }

        .pulse-ring {
          position: absolute;
          inset: 0;
          border-radius: inherit;
          border: 2px solid currentColor;
          animation: pulse-ring 2s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes float-rotate {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-15px) rotate(5deg); }
        }

        .float-rotate {
          animation: float-rotate 4s ease-in-out infinite;
        }
      `}</style>

      <section ref={sectionRef} id="listen" className="py-20 bg-background relative overflow-hidden">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className={`absolute top-1/3 right-1/4 w-72 h-72 bg-green-500/5 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} style={{ transitionDelay: '300ms' }} />
          <div className={`absolute bottom-1/3 left-1/4 w-96 h-96 bg-red-500/5 rounded-full blur-3xl transition-all duration-1000 ${
            isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-50'
          }`} style={{ transitionDelay: '500ms' }} />
        </div>

        <div className="container mx-auto px-6 relative z-10">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12 md:mb-16">
              <div className={`inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 relative transition-all duration-700 ${
                isVisible ? 'opacity-100 scale-100 icon-wave' : 'opacity-0 scale-0'
              }`}>
                <Music2 className="w-8 h-8 text-primary relative z-10" />
              </div>
              
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
                {animateText('Listen ', 100)}
                <span className="text-primary">
                  {animateText('Everywhere', 300)}
                </span>
              </h2>
              
              <p className={`text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 transition-all duration-700 ${
                isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`} style={{ transitionDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? '300ms' : '600ms' }}>
                Stream my music on your favorite platforms. Follow, subscribe, and never miss a new release.
              </p>
            </div>

            {/* Platforms Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
              {platforms.map((platform, index) => {
                const IconComponent = platform.icon;
                const isHovered = hoveredIndex === index;
                const isMobile = typeof window !== 'undefined' && window.innerWidth < 768;
                const cardDelay = isMobile ? 400 + (index * 150) : 800 + (index * 200);
                
                return (
                  <div
                    key={platform.name}
                    className={`transition-all duration-700 ${
                      isVisible ? 'opacity-100 scale-100 translate-y-0' : 'opacity-0 scale-90 translate-y-12'
                    }`}
                    style={{ transitionDelay: `${cardDelay}ms` }}
                    onMouseEnter={() => setHoveredIndex(index)}
                    onMouseLeave={() => setHoveredIndex(null)}
                  >
                    <a
                      href={platform.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="group block h-full"
                    >
                      <Card 
                        className="platform-card relative p-6 md:p-8 bg-card border-2 border-primary/20 transition-all duration-500 group-hover:border-primary/50 group-hover:shadow-glow touch-manipulation h-full group-hover:-translate-y-2"
                        onMouseMove={(e) => handleMouseMove(e, index)}
                      >
                        {/* Animated background gradient with mouse tracking */}
                        <div 
                          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-all duration-500 pointer-events-none"
                          style={{
                            background: isHovered 
                              ? `radial-gradient(circle 400px at ${mousePosition.x}% ${mousePosition.y}%, ${platform.color}15 0%, ${platform.color}08 40%, transparent 70%)`
                              : `radial-gradient(circle at 30% 50%, ${platform.color}20 0%, ${platform.color}10 40%, transparent 70%)`
                          }}
                        />

                        {/* Corner accents */}
                        <div className="absolute top-0 right-0 w-20 h-20 border-t-2 border-r-2 border-primary/0 group-hover:border-primary/40 transition-all duration-700 rounded-tr-2xl" 
                          style={{ transitionDelay: '100ms' }} />
                        <div className="absolute bottom-0 left-0 w-20 h-20 border-b-2 border-l-2 border-primary/0 group-hover:border-primary/40 transition-all duration-700 rounded-bl-2xl" 
                          style={{ transitionDelay: '200ms' }} />
                        
                        {/* Content */}
                        <div className="relative z-10">
                          <div className="flex items-start justify-between mb-6">
                            <div className="flex items-center gap-4">
                              <div className="relative float-rotate">
                                {/* Glow effect */}
                                <div 
                                  className="absolute inset-0 rounded-xl blur-2xl opacity-0 group-hover:opacity-70 transition-all duration-700"
                                  style={{ backgroundColor: platform.color }}
                                />
                                
                                {/* Spinning ring */}
                                <div 
                                  className="absolute inset-0 opacity-0 group-hover:opacity-30 transition-opacity duration-500"
                                  style={{
                                    border: `2px solid ${platform.color}`,
                                    borderRadius: '12px',
                                    borderTopColor: 'transparent',
                                    borderRightColor: 'transparent',
                                  }}
                                >
                                  <div className="spin-slow w-full h-full" />
                                </div>
                                
                                {/* Icon container */}
                                <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center bg-primary/5 group-hover:bg-primary/10 transition-all duration-500 group-hover:scale-110 group-hover:rotate-6">
                                  <IconComponent 
                                    className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500 group-hover:scale-110"
                                    style={{ 
                                      color: isHovered ? platform.color : '#888',
                                    }}
                                  />
                                </div>
                              </div>
                              
                              <div className="transition-transform duration-500 group-hover:translate-x-2">
                                <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 transition-all duration-300 group-hover:text-primary">
                                  {platform.name}
                                </h3>
                                <p className="text-sm text-muted-foreground transition-all duration-300 group-hover:text-primary/70">
                                  {platform.followers}
                                </p>
                              </div>
                            </div>
                            
                            <div className="transition-all duration-500 group-hover:translate-x-2 group-hover:-translate-y-2 group-hover:rotate-45">
                              <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                            </div>
                          </div>

                          <p className="text-muted-foreground mb-6 transition-all duration-300 group-hover:text-foreground">
                            {platform.description}
                          </p>

                          {/* Action Button */}
                          <div 
                            className="inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg border-2 border-primary/20 group-hover:border-primary/50 transition-all duration-500 group-hover:px-6" 
                            style={{ color: isHovered ? platform.color : 'inherit' }}
                          >
                            <Play className="w-4 h-4 transition-transform duration-300 group-hover:scale-125" />
                            <span className="transition-all duration-300">Listen Now</span>
                          </div>
                        </div>
                      </Card>
                    </a>
                  </div>
                );
              })}
            </div>

            {/* Call to Action */}
            <div className={`text-center mt-12 transition-all duration-700 ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
            }`} style={{ transitionDelay: typeof window !== 'undefined' && window.innerWidth < 768 ? '700ms' : '1400ms' }}>
              <p className="text-muted-foreground">
                Can't find your preferred platform? Reach out and let me know where you'd like to listen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}