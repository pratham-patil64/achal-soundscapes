import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Film, Music2, Radio, Users, Clock, CheckCircle } from "lucide-react";
import ServiceModal from "./ServiceModal"; // Import the modal component

const ServicesSection = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedService, setSelectedService] = useState("");

  const handleOpenModal = (serviceTitle: string) => {
    setSelectedService(serviceTitle);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedService("");
  };

  const services = [
      {
      icon: Users,
      title: "Single Composition",
      description: "Original standalone tracks tailored to your vision — perfect for artists, creators, and personal projects.",
      features: ["Custom songwriting & composition", "Genre-flexible production", "Delivery in multiple formats"],
    },
    {
      icon: Film,
      title: "Film & Media Scoring",
      description: "Crafting original music for films, documentaries, ads, and digital storytelling.",
      features: ["Custom orchestration", "Sync-ready compositions", "Multiple format delivery"],
    },
    {
      icon: Music2,
      title: "Music Production",
      description: "Full-service music production from concept to final master.",
      features: ["Recording & mixing", "Arrangement", "Professional mastering"],
    },
    {
      icon: Radio,
      title: "Sound Design",
      description: "Audio branding, ambient soundscapes, and interactive audio experiences.",
      features: ["Brand audio identity", "Environmental sound", "Interactive media"],
    },
  
  ];

  const scrollToContact = () => {
    const element = document.getElementById('contact');
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="services" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Services Header */}
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 md:mb-6 text-foreground px-4">
              My <span className="text-primary">Services</span>
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
                  className="p-4 md:p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group hover:shadow-glow touch-manipulation flex flex-col justify-between"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div>
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
                  </div>

                  <div className="pt-4 border-t border-primary/10 mt-auto">
                    <Button
                      onClick={() => handleOpenModal(service.title)}
                      className="w-full bg-primary/10 text-primary hover:bg-primary/20"
                    >
                      Get a Quote
                    </Button>
                  </div>
                </Card>
              );
            })}
          </div>

          
        </div>
      </div>
      <ServiceModal isOpen={isModalOpen} onClose={handleCloseModal} serviceTitle={selectedService} />
    </section>
  );
};

export default ServicesSection;