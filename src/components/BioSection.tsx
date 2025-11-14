import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Music, Lightbulb } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import TimelineSection from "./TimelineSection"; // Adjust path if necessary

// AnimatedParagraph helper component remains the same
const AnimatedParagraph = ({ text }: { text: string }) => {
  const paragraphs = text.split('. ').filter(p => p).map(p => p.endsWith('.') ? p : p + '.');
  return (
    <div>
      {paragraphs.map((paragraph, index) => (
        <p
          key={index}
          className="text-base md:text-lg leading-relaxed text-card-foreground mb-4 animate-fade-in"
          style={{ animationDelay: `${index * 200}ms` }}
        >
          {paragraph}
        </p>
      ))}
    </div>
  );
};


const BioSection = () => {
  const [activeSection, setActiveSection] = useState(1); // Default to philosophy

  const sections = [
    {
      id: 0,
      type: "timeline", // Add a type property
      title: "Musical Journey",
      icon: Music,
      description: "From passion to profession",
      content: {} // No longer needed here
    },
    {
      id: 1,
      type: "content", // Add a type property
      title: "Musical Philosophy",
      icon: Lightbulb,
      description: "Core beliefs & vision",
      content: {
        heading: "My Musical Philosophy",
        text: "For me, music is a journey of exploration and storytelling. I love honesty in creation, and every note I compose resonates with a genuine feeling. I believe music has the power to heal the soul and connect people beyond words, and through my songs, I hope to inspire, comfort, and move listeners in their own unique way."
      }
    }
  ];
  
  const contentSection = sections.find(s => s.id === activeSection);

  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-center mb-8 md:mb-12 text-foreground px-4">
            About <span className="text-primary">Achal</span>
          </h2>
          
          <Dialog>
            <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-start">
              {/* Interactive Navigation */}
              <div className="space-y-3 md:space-y-4">
                <h3 className="text-xl md:text-2xl font-semibold text-foreground mb-4 md:mb-6 px-2">Discover More</h3>
                {sections.map((section) => {
                  const IconComponent = section.icon;
                  const isCardActive = activeSection === section.id && section.type === 'content';

                  const cardContent = (
                    <Card
                      className={`p-4 md:p-6 cursor-pointer transition-all duration-300 border-2 touch-manipulation group ${
                        isCardActive
                          ? 'border-primary bg-primary/5 shadow-glow'
                          : 'border-primary/20 hover:border-primary/40 bg-card active:bg-primary/5 hover:shadow-lg'
                      }`}
                      onClick={() => {
                        if (section.type === 'content') {
                          setActiveSection(section.id);
                        }
                      }}
                    >
                      <div className="flex items-center gap-3 md:gap-4">
                        <div className={`w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center transition-all duration-300 group-hover:scale-110 ${
                          isCardActive
                            ? 'bg-primary text-primary-foreground'
                            : 'bg-secondary text-foreground'
                        }`}>
                          <IconComponent className="h-5 w-5 md:h-6 md:w-6 transition-transform duration-300 group-hover:rotate-12" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className={`text-sm md:text-base font-semibold transition-colors ${
                            isCardActive ? 'text-primary' : 'text-foreground'
                          }`}>
                            {section.title}
                          </h4>
                          <p className="text-xs md:text-sm text-muted-foreground truncate">
                            {section.description}
                          </p>
                        </div>
                      </div>
                    </Card>
                  );

                  if (section.type === 'timeline') {
                    return <DialogTrigger asChild key={section.id}>{cardContent}</DialogTrigger>;
                  }
                  
                  return cardContent;
                })}
              </div>

              {/* Content Display */}
              <div className="lg:sticky lg:top-8 mt-6 lg:mt-0">
                <Card className="p-6 md:p-8 bg-card border-primary/20 shadow-elegant min-h-[300px] md:min-h-[400px]">
                  {contentSection && (
                    <div key={activeSection} className="animate-fade-in">
                      <h3 className="text-xl md:text-2xl font-bold text-foreground mb-4 md:mb-6">
                        {contentSection.content.heading}
                      </h3>
                      <AnimatedParagraph text={contentSection.content.text} />
                    </div>
                  )}
                </Card>
              </div>
            </div>

            {/* Modal Content for Timeline */}
            <DialogContent className="max-w-4xl h-[90vh] flex flex-col">
              <DialogHeader>
                <DialogTitle className="text-2xl md:text-3xl font-bold text-center text-foreground">
                  My Musical Journey
                </DialogTitle>
              </DialogHeader>
              <div className="flex-grow overflow-y-auto pr-4 -mr-4 custom-scrollbar">
                <TimelineSection />
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </div>
    </section>
  );
};

export default BioSection;