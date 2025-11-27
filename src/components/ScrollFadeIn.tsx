// src/components/ScrollFadeIn.tsx

import React, { useRef } from 'react';
import { useOnScreen } from '@/hooks/use-on-screen';
import { cn } from '@/lib/utils';

interface ScrollFadeInProps {
  children: React.ReactNode;
  className?: string;
  delay?: number;
  // Added optional props for customization
  rootMargin?: string; 
  threshold?: number;
}

const ScrollFadeIn = ({ 
  children, 
  className, 
  delay = 0,
  // Use props, falling back to original defaults
  rootMargin = '150px', 
  threshold = 0.1 
}: ScrollFadeInProps) => { // Updated props destructuring
  const ref = useRef<HTMLDivElement>(null);
  // Use the passed props in the hook call
  const { isVisible, direction } = useOnScreen(ref, rootMargin, threshold); 

  // 1. Determine the HIDDEN state class based on the scroll direction:
  //    - 'down': Hidden below (`translate-y-12`) -> moves UP to 0
  //    - 'up': Hidden above (`-translate-y-12`) -> moves DOWN to 0
  const hiddenClass = direction === 'down' 
    ? 'translate-y-12' 
    : direction === 'up' 
    ? '-translate-y-12'
    : 'translate-y-0 opacity-100'; // Default: visible on initial load if direction is null

  // 2. Determine the VISIBLE state class
  const visibleClass = 'translate-y-0 opacity-100';

  return (
    <div
      ref={ref}
      className={cn(
        // Base transition styles and fast speed (0.5s)
        'transition-all duration-500 transform', 
        
        // Apply the appropriate state based on visibility
        isVisible ? visibleClass : hiddenClass,
        
        // Ensure opacity is applied in the hidden state
        !isVisible && 'opacity-0',

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