import { Card } from "@/components/ui/card";

const BioSection = () => {
  return (
    <section id="bio" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-foreground">
            About <span className="text-primary">Achal</span>
          </h2>
          
          <Card className="p-8 md:p-12 bg-card border-primary/20 shadow-elegant">
            <div className="prose prose-lg max-w-none text-card-foreground">
              <p className="text-xl leading-relaxed mb-6">
                Meet Achal Pednekar, a passionate music composer who transforms emotions into symphonies and stories into soundscapes. With an innate ability to weave melodies that speak to the soul, Achal has been crafting musical experiences that resonate with audiences across genres.
              </p>
              
              <p className="text-lg leading-relaxed mb-6 text-muted-foreground">
                From intimate acoustic arrangements to grand orchestral compositions, his versatility shines through every piece. Achal's journey in music began with a simple love for storytelling through sound, which has evolved into a professional pursuit of creating memorable musical moments.
              </p>
              
              <p className="text-lg leading-relaxed text-muted-foreground">
                Whether it's composing for films, creating ambient soundscapes, or producing contemporary tracks, Achal brings a unique blend of technical expertise and creative intuition to every project. His work is characterized by rich harmonies, innovative arrangements, and an unwavering commitment to emotional authenticity.
              </p>
            </div>
            
            {/* Musical Skills */}
            <div className="mt-10 grid grid-cols-2 md:grid-cols-4 gap-4">
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
          </Card>
        </div>
      </div>
    </section>
  );
};

export default BioSection;