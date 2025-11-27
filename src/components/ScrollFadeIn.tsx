// src/components/ScrollFadeIn.tsx

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  rootMargin?: string; 
  threshold?: number;
  // New props for enhanced effects
  animation?: 'fade' | 'slide' | 'scale' | 'blur';
  duration?: number; // in milliseconds
}

const ScrollFadeIn = ({ 
  children, 
  className, 
  delay = 0,
  rootMargin = '150px', 
  threshold = 0.1,
  animation = 'slide', // default animation
  duration = 800 // default duration
}: ScrollFadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  const { isVisible, direction } = useOnScreen(ref, rootMargin, threshold);

  // Animation variants based on scroll direction and type
  const getAnimationClasses = () => {
    const baseClasses = 'transition-all ease-out';
    
    // Visible state (always the same)
    const visibleClasses = 'translate-y-0 translate-x-0 opacity-100 scale-100 blur-0';
    
    // Hidden state varies by animation type and direction
    let hiddenClasses = '';
    
    switch (animation) {
      case 'fade':
        hiddenClasses = 'opacity-0';
        break;
        
      case 'slide':
        hiddenClasses = direction === 'down' 
          ? 'translate-y-16 opacity-0' 
          : direction === 'up' 
          ? '-translate-y-16 opacity-0'
          : 'translate-y-0 opacity-100';
        break;
        
      case 'scale':
        hiddenClasses = direction === 'down'
          ? 'translate-y-8 opacity-0 scale-95'
          : direction === 'up'
          ? '-translate-y-8 opacity-0 scale-95'
          : 'translate-y-0 opacity-100 scale-100';
        break;
        
      case 'blur':
        hiddenClasses = direction === 'down'
          ? 'translate-y-12 opacity-0 blur-sm'
          : direction === 'up'
          ? '-translate-y-12 opacity-0 blur-sm'
          : 'translate-y-0 opacity-100 blur-0';
        break;
        
      default:
        hiddenClasses = 'translate-y-12 opacity-0';
    }

    return {
      base: baseClasses,
      visible: visibleClasses,
      hidden: hiddenClasses
    };
  };

  const animationClasses = getAnimationClasses();

  return (
    <div
      ref={ref}
      className={cn(
        animationClasses.base,
        isVisible ? animationClasses.visible : animationClasses.hidden,
        className
      )}
      style={{
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;