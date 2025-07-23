import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Music, Heart, Trophy, Lightbulb } from "lucide-react";

const BioSection = () => {
  const [activeSection, setActiveSection] = useState(0);

  const sections = [
    {
      id: 0,
      title: "Musical Journey",
      icon: Music,
      content: {
        heading: "The Story Behind the Music",
        text: "Achal's journey in music began with a simple love for storytelling through sound. From childhood piano lessons to mastering digital composition, his path has been one of constant discovery. What started as casual experimentation with melodies has evolved into a professional pursuit of creating memorable musical moments that resonate with audiences worldwide."
      }
    },
    {
      id: 1,
      title: "Creative Approach",
      icon: Heart,
      content: {
        heading: "Emotion-Driven Composition",
        text: "Every composition begins with an emotion, a story, or a vision. Achal believes that technical prowess means nothing without emotional authenticity. His approach combines classical training with modern production techniques, creating a unique sound that bridges traditional orchestration with contemporary innovation. Each project is approached as a collaborative journey to find the perfect sonic expression."
      }
    },
    {
      id: 2,
      title: "Experience & Credits",
      icon: Trophy,
      content: {
        heading: "Professional Achievements",
        text: "With experience spanning film scoring, commercial music production, and live performance arrangements, Achal has worked across diverse genres and formats. His versatility shines through projects ranging from intimate acoustic arrangements to grand orchestral compositions, always maintaining his signature blend of technical expertise and creative intuition."
      }
    },
    {
      id: 3,
      title: "Musical Philosophy",
      icon: Lightbulb,
      content: {
        heading: "Art Meets Innovation",
        text: "Music is the universal language that transcends barriers and connects souls. Achal's philosophy centers on creating compositions that not only sound beautiful but also serve their intended purpose perfectly. Whether it's enhancing a film's narrative, elevating a brand's message, or providing the perfect ambiance, every note is crafted with intention and care."
      }
    }
  ];

  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About <span className="text-primary">Achal</span>
          </h2>
          
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Interactive Navigation */}
            <div className="space-y-4">
              <h3 className="text-2xl font-semibold text-foreground mb-6">Discover More</h3>
              {sections.map((section) => {
                const IconComponent = section.icon;
                return (
                  <Card
                    key={section.id}
                    className={`p-6 cursor-pointer transition-all duration-300 border-2 ${
                      activeSection === section.id
                        ? 'border-primary bg-primary/5 shadow-glow'
                        : 'border-primary/20 hover:border-primary/40 bg-card'
                    }`}
                    onClick={() => setActiveSection(section.id)}
                  >
                    <div className="flex items-center gap-4">
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-colors ${
                        activeSection === section.id
                          ? 'bg-primary text-primary-foreground'
                          : 'bg-secondary text-foreground'
                      }`}>
                        <IconComponent className="h-6 w-6" />
                      </div>
                      <div>
                        <h4 className={`font-semibold transition-colors ${
                          activeSection === section.id ? 'text-primary' : 'text-foreground'
                        }`}>
                          {section.title}
                        </h4>
                        <p className="text-sm text-muted-foreground">
                          {section.id === 0 && "From passion to profession"}
                          {section.id === 1 && "Heart-centered composition"}
                          {section.id === 2 && "Portfolio highlights"}
                          {section.id === 3 && "Core beliefs & vision"}
                        </p>
                      </div>
                    </div>
                  </Card>
                );
              })}
            </div>

            {/* Content Display */}
            <div className="lg:sticky lg:top-8">
              <Card className="p-8 bg-card border-primary/20 shadow-elegant min-h-[400px]">
                <div key={activeSection} className="animate-fade-in">
                  <h3 className="text-2xl font-bold text-foreground mb-6">
                    {sections[activeSection].content.heading}
                  </h3>
                  <p className="text-lg leading-relaxed text-card-foreground mb-6">
                    {sections[activeSection].content.text}
                  </p>
                  
                  {activeSection === 2 && (
                    <div className="grid grid-cols-2 gap-4 mt-8">
                      {[
                        "Film Scoring",
                        "Orchestration", 
                        "Sound Design",
                        "Music Production"
                      ].map((skill, index) => (
                        <div 
                          key={skill}
                          className="text-center p-4 bg-secondary rounded-lg border border-primary/10"
                          style={{ animationDelay: `${index * 100}ms` }}
                        >
                          <span className="text-primary font-semibold">{skill}</span>
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </Card>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BioSection;