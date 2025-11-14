import AudioPlayer from './AudioPlayer';

// --- Import your song snippets here ---
// Make sure the path and file names match what you added in the `src/assets/audio` folder.
import song1Snippet from '@/assets/audio/song1.mp3'; 
import song2Snippet from '@/assets/audio/song2.mp3';
import song3Snippet from '@/assets/audio/song3.mp3';
// ------------------------------------

const AudioShowcase = () => {
  // --- Customize your track details here ---
  const tracks = [
    {
      title: "Your Song Title 1",
      description: "A short description of your first song.",
      audioSrc: song1Snippet, 
      waveformData: Array.from({ length: 50 }, (_, i) => Math.sin(i * 0.2) * 30 + 50)
    },
    {
      title: "Your Song Title 2", 
      description: "A short description of your second song.",
      audioSrc: song2Snippet,
      waveformData: Array.from({ length: 50 }, (_, i) => Math.cos(i * 0.3) * 40 + 60)
    },
    {
      title: "Your Song Title 3",
      description: "A short description of your third song.",
      audioSrc: song3Snippet,
      waveformData: Array.from({ length: 50 }, (_, i) => Math.random() * 70 + 30)
    }
  ];
  // -----------------------------------------

  return (
    <section id="audio-showcase" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
              Musical <span className="text-primary">Creations</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore a selection of compositions that showcase the depth and versatility 
              of my musical artistry. Each piece tells a unique story through sound.
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
        </div>
      </div>
    </section>
  );
};

export default AudioShowcase;