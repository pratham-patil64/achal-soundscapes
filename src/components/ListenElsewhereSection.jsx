import { useState } from 'react';
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

  return (
    <section id="listen" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 animate-fade-in opacity-0" style={{ animationDelay: '0ms', animationFillMode: 'forwards' }}>
              <Music2 className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4 animate-fade-in opacity-0" style={{ animationDelay: '100ms', animationFillMode: 'forwards' }}>
              Listen <span className="text-primary">Everywhere</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4 animate-fade-in opacity-0" style={{ animationDelay: '200ms', animationFillMode: 'forwards' }}>
              Stream my music on your favorite platforms. Follow, subscribe, and never miss a new release.
            </p>
          </div>

          {/* Platforms Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {platforms.map((platform, index) => {
              const IconComponent = platform.icon;
              const isHovered = hoveredIndex === index;
              
              return (
                <div
                  key={platform.name}
                  className="animate-fade-in opacity-0"
                  style={{ animationDelay: `${300 + index * 150}ms`, animationFillMode: 'forwards' }}
                  onMouseEnter={() => setHoveredIndex(index)}
                  onMouseLeave={() => setHoveredIndex(null)}
                >
                  <a
                    href={platform.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group block h-full"
                  >
                    <Card className="relative p-6 md:p-8 bg-card border-primary/20 transition-all duration-500 group-hover:border-primary/40 group-hover:shadow-glow touch-manipulation overflow-hidden h-full">
                      {/* Animated background gradient */}
                      <div 
                        className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                        style={{
                          background: `radial-gradient(circle at 30% 50%, ${platform.color}20 0%, ${platform.color}10 40%, transparent 70%)`
                        }}
                      />
                      
                      {/* Content */}
                      <div className="relative z-10">
                        <div className="flex items-start justify-between mb-6">
                          <div className="flex items-center gap-4">
                            <div className="relative">
                              <div 
                                className="absolute inset-0 rounded-xl blur-xl opacity-0 group-hover:opacity-60 transition-opacity duration-500"
                                style={{ backgroundColor: platform.color }}
                              />
                              <div className="relative w-16 h-16 md:w-20 md:h-20 rounded-xl flex items-center justify-center transition-all duration-500 group-hover:scale-110">
                                <IconComponent 
                                  className="w-8 h-8 md:w-10 md:h-10 transition-all duration-500"
                                  style={{ 
                                    color: isHovered ? platform.color : '#888',
                                  }}
                                />
                              </div>
                            </div>
                            <div>
                              <h3 className="text-xl md:text-2xl font-bold text-foreground mb-1 transition-colors duration-300 group-hover:text-primary">
                                {platform.name}
                              </h3>
                              <p className="text-sm text-muted-foreground">
                                {platform.followers}
                              </p>
                            </div>
                          </div>
                          
                          <div className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1">
                            <ExternalLink className="w-5 h-5 text-muted-foreground group-hover:text-primary transition-colors duration-300" />
                          </div>
                        </div>

                        <p className="text-muted-foreground mb-6">
                          {platform.description}
                        </p>

                        {/* Action Button */}
                        <div className="flex items-center gap-2 text-sm font-medium transition-colors duration-300" style={{ color: isHovered ? platform.color : 'inherit' }}>
                          <Play className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
                          <span>Listen Now</span>
                        </div>
                      </div>
                    </Card>
                  </a>
                </div>
              );
            })}
          </div>

          {/* Call to Action */}
          <div className="text-center mt-12 animate-fade-in opacity-0" style={{ animationDelay: '600ms', animationFillMode: 'forwards' }}>
            <p className="text-muted-foreground">
              Can't find your preferred platform? Reach out and let me know where you'd like to listen.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}