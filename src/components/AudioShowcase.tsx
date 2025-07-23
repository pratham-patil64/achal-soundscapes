import AudioPlayer from './AudioPlayer';

const AudioShowcase = () => {
  // Sample audio tracks with descriptions
  const tracks = [
    {
      title: "Midnight Dreams",
      description: "A contemplative piano piece with gentle strings",
      audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      waveformData: Array.from({ length: 50 }, (_, i) => Math.sin(i * 0.2) * 30 + 50)
    },
    {
      title: "Urban Symphony", 
      description: "Electronic fusion with orchestral elements",
      audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      waveformData: Array.from({ length: 50 }, (_, i) => Math.cos(i * 0.3) * 40 + 60)
    },
    {
      title: "Ethereal Waves",
      description: "Ambient soundscape for meditation and focus",
      audioSrc: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav", // Placeholder
      waveformData: Array.from({ length: 50 }, (_, i) => Math.random() * 70 + 30)
    }
  ];

  return (
    <section id="audio-showcase" className="py-20 bg-secondary/20">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Musical <span className="text-primary">Creations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of compositions that showcase the depth and versatility 
              of Achal's musical artistry. Each piece tells a unique story through sound.
            </p>
          </div>

          <div className="grid gap-8 md:gap-12">
            {tracks.map((track, index) => (
              <div 
                key={track.title}
                className="animate-fade-in"
                style={{ animationDelay: `${index * 200}ms` }}
              >
                <AudioPlayer
                  title={track.title}
                  description={track.description}
                  audioSrc={track.audioSrc}
                  waveformData={track.waveformData}
                />
              </div>
            ))}
          </div>

          {/* Note about audio samples */}
          <div className="text-center mt-12">
            <p className="text-sm text-muted-foreground italic">
              * Audio samples are representative. Full compositions available upon request.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AudioShowcase;