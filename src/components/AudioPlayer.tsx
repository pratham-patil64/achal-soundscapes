import { useState, useRef, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Play, Pause, Volume2 } from 'lucide-react';

interface AudioPlayerProps {
  title: string;
  description: string;
  audioSrc: string;
  waveformData?: number[];
}

const AudioPlayer = ({ title, description, audioSrc, waveformData = [] }: AudioPlayerProps) => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTime, setCurrentTime] = useState(0);
  const [duration, setDuration] = useState(0);
  const audioRef = useRef<HTMLAudioElement>(null);

  // Generate default waveform data if none provided
  const defaultWaveform = Array.from({ length: 50 }, () => Math.random() * 100 + 20);
  const waveform = waveformData.length > 0 ? waveformData : defaultWaveform;

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;

    const updateTime = () => setCurrentTime(audio.currentTime);
    const updateDuration = () => setDuration(audio.duration);
    const handleEnded = () => setIsPlaying(false);

    audio.addEventListener('timeupdate', updateTime);
    audio.addEventListener('loadedmetadata', updateDuration);
    audio.addEventListener('ended', handleEnded);

    return () => {
      audio.removeEventListener('timeupdate', updateTime);
      audio.removeEventListener('loadedmetadata', updateDuration);
      audio.removeEventListener('ended', handleEnded);
    };
  }, []);

  const togglePlayPause = () => {
    const audio = audioRef.current;
    if (!audio) return;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    setIsPlaying(!isPlaying);
  };

  const formatTime = (time: number) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes}:${seconds.toString().padStart(2, '0')}`;
  };

  const progress = duration > 0 ? (currentTime / duration) * 100 : 0;

  return (
    <Card className="p-6 bg-card border-primary/20 hover:border-primary/40 transition-all duration-300 group">
      <audio ref={audioRef} src={audioSrc} />
      
      <div className="flex items-center gap-4 mb-4">
        <Button
          size="lg"
          onClick={togglePlayPause}
          className="w-12 h-12 rounded-full bg-primary hover:bg-primary/90 shadow-glow"
        >
          {isPlaying ? (
            <Pause className="h-5 w-5" />
          ) : (
            <Play className="h-5 w-5 ml-0.5" />
          )}
        </Button>
        
        <div className="flex-1">
          <h3 className="text-lg font-semibold text-foreground">{title}</h3>
          <p className="text-sm text-muted-foreground">{description}</p>
        </div>
        
        <div className="flex items-center gap-2 text-sm text-muted-foreground">
          <Volume2 className="h-4 w-4" />
          <span>{formatTime(currentTime)} / {formatTime(duration)}</span>
        </div>
      </div>

      {/* Waveform Visualization */}
      <div className="relative mb-4">
        <div className="flex items-end justify-between h-20 bg-secondary/50 rounded-lg p-2 overflow-hidden">
          {waveform.map((height, index) => (
            <div
              key={index}
              className={`bg-waveform rounded-sm transition-all duration-300 ${
                isPlaying ? 'animate-waveform' : ''
              } ${
                progress > (index / waveform.length) * 100 
                  ? 'bg-primary shadow-sm' 
                  : 'bg-waveform/50'
              }`}
              style={{
                height: `${height}%`,
                width: '2px',
                animationDelay: `${index * 50}ms`,
              }}
            />
          ))}
        </div>
        
        {/* Progress overlay */}
        <div 
          className="absolute top-0 left-0 h-full bg-primary/10 rounded-lg transition-all duration-100"
          style={{ width: `${progress}%` }}
        />
      </div>

      {/* Progress bar */}
      <div className="relative">
        <div className="w-full h-1 bg-secondary rounded-full overflow-hidden">
          <div 
            className="h-full bg-primary transition-all duration-100"
            style={{ width: `${progress}%` }}
          />
        </div>
      </div>
    </Card>
  );
};

export default AudioPlayer;