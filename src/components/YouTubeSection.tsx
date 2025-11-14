import { useState } from 'react';
import { Card } from "@/components/ui/card";
import { ExternalLink } from 'lucide-react'; // Import the new icon

// --- Your YouTube video details ---
const youtubeVideos = [
     {
    id: "rEC5jOVW1h0",
    title: "Tu Swapnapari",
    description: "A soul stirring melody that captures the dream awake"
  },
  
  {
    id: "mS5gCLxTfB4",
    title: "Gauritanaya",
    description: "A groovy ganpati song filled with emotions and devotion"
  },
  {
    id: "y-dL8Ogs0Tw",
    title: "He mana tu mala sang na",
    description: "A soft whisper of love — where hearts speak louder than words."
  },
  {
    id: "GNRavEC9Azo", // The part of the URL after "v="
    title: "Swami",
    description: "A gentle hymn of devotion — where the soul bows and silence feels divine."
  }
  
];
// -----------------------------------

const YouTubeSection = () => {
  const [hoveredVideoId, setHoveredVideoId] = useState<string | null>(null);

  return (
    <section id="youtube" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
              My Music on <span className="text-primary">YouTube</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Explore a collection of my musical works, from original compositions to sound designs, featured on YouTube.
            </p>
          </div>

          {/* YouTube Videos Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-2 gap-6 md:gap-8">
            {youtubeVideos.map((video, index) => (
              <Card 
                key={video.id}
                className="p-0 bg-card border-primary/20 transition-all duration-300 group overflow-hidden"
                style={{ animationDelay: `${index * 100}ms` }}
                onMouseEnter={() => setHoveredVideoId(video.id)}
                onMouseLeave={() => setHoveredVideoId(null)}
              >
                <div className="relative aspect-video bg-black">
                  {/* Conditionally render iframe or image */}
                  {hoveredVideoId === video.id ? (
                    <iframe
                      src={`https://www.youtube.com/embed/${video.id}?autoplay=1&controls=0&loop=1&playlist=${video.id}`}
                      title={video.title}
                      frameBorder="0"
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      className="w-full h-full absolute inset-0"
                    ></iframe>
                  ) : (
                    <img 
                      src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`} 
                      alt={video.title}
                      className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                  )}
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start gap-2">
                    <h3 className="text-lg font-semibold text-foreground mb-1 flex-1">{video.title}</h3>
                    <a
                      href={`https://www.youtube.com/watch?v=${video.id}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-muted-foreground hover:text-primary transition-colors"
                      onClick={(e) => e.stopPropagation()} // Prevents the hover state from flickering on click
                      aria-label="Watch on YouTube"
                    >
                      <ExternalLink className="h-5 w-5" />
                    </a>
                  </div>
                  <p className="text-sm text-muted-foreground">{video.description}</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YouTubeSection;