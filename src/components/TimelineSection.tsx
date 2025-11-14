import {
  Music,
  GraduationCap,
  Sparkles,
  Film,
  Mic,
  InfinityIcon,
} from "lucide-react";
import React from "react";

const timelineEvents = [
  {
    icon: Sparkles,
    title: "The Spark",
    period: "Childhood",
    description:
      "A natural fascination for music, playing songs by ear long before any formal training.",
  },
  {
    icon: Music,
    title: "Formal Training",
    period: "Age 7",
    description:
      "Began the journey into Hindustani Classical Music under the guidance of my guru, with strong support from my parents.",
  },
  {
    icon: GraduationCap,
    title: "Mastering the Craft",
    period: "Visharad",
    description:
      "Completed my Visharad in Hindustani Classical Music, building a strong foundation as a vocalist and composer.",
  },
  {
    icon: Film,
    title: "Expanding Horizons",
    period: "Creative Exploration",
    description:
      "Discovered a love for storytelling through music, composing background scores for plays and short films.",
  },
  {
    icon: Mic,
    title: "Finding My Voice",
    period: "Singer-Songwriter",
    description:
      "Began writing, composing, and singing my own original songs, blending classical roots with modern sounds.",
  },
  {
    icon: InfinityIcon,
    title: "The Journey Continues",
    period: "Today",
    description:
      "Continuously exploring and evolving, striving to create music that connects with hearts and brings stories to life.",
  },
];

const TimelineSection = () => {
  return (
    <div className="w-full max-w-4xl mx-auto p-4 md:p-6">
      <div className="relative">
        {/* The vertical line - ADJUSTED for better mobile alignment */}
        <div className="absolute left-3 md:left-1/2 w-0.5 h-full bg-primary/20 transform -translate-x-1/2"></div>

        {timelineEvents.map((event, index) => {
          const Icon = event.icon;
          const isLeft = index % 2 === 0;
          
          const positionClasses = `md:w-1/2 ${isLeft ? 'md:pr-8 md:text-right' : 'md:pl-8 md:text-left'} md:flex ${isLeft ? 'md:justify-end' : 'md:justify-start'}`;
          const orderClasses = isLeft ? '' : 'md:ml-[50%]';

          return (
            <div
              key={index}
              className={`mb-12 flex items-center w-full animate-fade-in opacity-0`}
              style={{ animationDelay: `${index * 200}ms`, animationFillMode: 'forwards' }}
            >
              <div className="hidden md:block w-1/2"></div>
              {/* Dot on the timeline - ADJUSTED for better mobile alignment */}
              <div className="absolute left-3 md:left-1/2 w-4 h-4 bg-primary rounded-full z-10 transform -translate-x-1/2 border-4 border-background"></div>

              {/* Content Card - ADJUSTED for better mobile alignment */}
              <div className={`w-full ml-6 md:ml-0 ${positionClasses} ${orderClasses}`}>
                <div className="max-w-sm">
                  <div className={`flex items-center gap-4 ${isLeft ? 'md:flex-row-reverse' : ''}`}>
                    <div className="bg-secondary p-3 rounded-full">
                      <Icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-foreground">
                        {event.title}
                      </h3>
                      <p className="text-sm font-semibold text-primary">{event.period}</p>
                    </div>
                  </div>
                  <p className="mt-2 text-muted-foreground">{event.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default TimelineSection;