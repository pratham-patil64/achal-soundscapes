import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Music2, Radio, Users, Clock, CheckCircle } from "lucide-react";

const ServicesSection = () => {
  const services = [
    {
      icon: Film,
      title: "Film & Media Scoring",
      description: "Original compositions for films, documentaries, commercials, and digital content.",
      features: ["Custom orchestration", "Sync licensing", "Multiple format delivery"],
      price: "Starting from $500"
    },
    {
      icon: Music2,
      title: "Music Production",
      description: "Full-service music production from concept to final master.",
      features: ["Recording & mixing", "Arrangement", "Professional mastering"],
      price: "Starting from $300"
    },
    {
      icon: Radio,
      title: "Sound Design",
      description: "Audio branding, ambient soundscapes, and interactive audio experiences.",
      features: ["Brand audio identity", "Environmental sound", "Interactive media"],
      price: "Starting from $250"
    },
    {
      icon: Users,
      title: "Live Performance",
      description: "Arrangements for live performances, concerts, and special events.",
      features: ["Live arrangements", "Backing tracks", "Performance direction"],
      price: "Starting from $400"
    }
  ];

  const process = [
    {
      step: "01",
      title: "Discovery & Briefing",
      description: "Understanding your vision, project requirements, and creative goals through detailed consultation."
    },
    {
      step: "02", 
      title: "Concept Development",
      description: "Creating initial musical concepts and mood boards that align with your project's narrative and emotional tone."
    },
    {
      step: "03",
      title: "Composition & Production",
      description: "Crafting the full composition with careful attention to arrangement, instrumentation, and production quality."
    },
    {
      step: "04",
      title: "Refinement & Delivery",
      description: "Collaborative refinement process followed by professional delivery in all required formats and specifications."
    }
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Services Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
              Services & <span className="text-primary">Process</span>
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto px-4">
              Professional music composition services tailored to bring your creative vision to life. 
              From concept to completion, every project receives dedicated attention and artistic excellence.
            </p>
          </div>

          {/* Services Grid */}
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 mb-16 md:mb-20">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <Card 
                  key={service.title}
                  className="p-4 md:p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow touch-manipulation"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="mb-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                      <IconComponent className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                  </div>
                  
                  <div className="space-y-2 mb-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-2">
                        <CheckCircle className="h-4 w-4 text-primary flex-shrink-0" />
                        <span className="text-xs text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                  
                  <div className="pt-4 border-t border-primary/10">
                    <span className="text-sm font-semibold text-primary">{service.price}</span>
                  </div>
                </Card>
              );
            })}
          </div>

          {/* Process Section */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12 text-foreground">
              Creative <span className="text-primary">Process</span>
            </h3>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {process.map((step, index) => (
                <div 
                  key={step.step}
                  className="text-center"
                  style={{ animationDelay: `${index * 200}ms` }}
                >
                  <div className="relative mb-6">
                    <div className="w-16 h-16 bg-gradient-music rounded-full flex items-center justify-center mx-auto shadow-glow">
                      <span className="text-2xl font-bold text-primary-foreground">{step.step}</span>
                    </div>
                    {index < process.length - 1 && (
                      <div className="hidden lg:block absolute top-8 left-1/2 w-full h-0.5 bg-primary/20 -z-10"></div>
                    )}
                  </div>
                  <h4 className="text-lg font-semibold text-foreground mb-3">{step.title}</h4>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center">
            <Card className="p-8 bg-card border-primary/20 max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-2 mb-4">
                <Clock className="h-5 w-5 text-primary" />
                <span className="text-primary font-semibold">Quick Turnaround</span>
              </div>
              <h3 className="text-2xl font-bold text-foreground mb-4">Ready to Start Your Project?</h3>
              <p className="text-muted-foreground mb-6">
                Let's discuss your musical vision and bring it to life. Most projects begin within 48 hours of initial consultation.
              </p>
              <Button 
                size="lg"
                onClick={scrollToContact}
                className="bg-primary hover:bg-primary/90 shadow-glow"
              >
                Start Your Project
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;