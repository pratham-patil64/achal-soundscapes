// src/components/ScrollFadeIn.tsx

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
}

const ScrollFadeIn = ({ children, className, delay = 0 }: ScrollFadeInProps) => {
  const ref = useRef<HTMLDivElement>(null);
  // Using a negative rootMargin makes the animation start before the section hits the very bottom of the screen.
  const isVisible = useOnScreen(ref, '-100px'); 

  return (
    <div
      ref={ref}
      className={cn(
        // DECREASED DURATION: Changed from duration-1000 to duration-500
        'transition-all duration-500 transform', 
        
        // Apply visible state
        'translate-y-0 opacity-100',
        
        // Apply hidden state UNLESS isVisible is true
        !isVisible && 'translate-y-12 opacity-0', 

        className
      )}
      style={{
        transitionDelay: `${delay}ms`,
      }}
    >
      {children}
    </div>
  );
};

export default ScrollFadeIn;