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
  // MODIFIED: Changed from '-100px' to '150px' to trigger the animation 150px *before* the element reaches the screen edge.
  const isVisible = useOnScreen(ref, '150px'); 

  return (
    <div
      ref={ref}
      className={cn(
        // Animation speed remains fast at 0.5 seconds
        'transition-all duration-500 transform', 
        
        // Visible state (default)
        'translate-y-0 opacity-100',
        
        // Hidden state, applied when element is out of the expanded viewport
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