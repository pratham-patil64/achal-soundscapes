// src/hooks/use-on-screen.tsx

import { useState, useEffect, RefObject } from 'react';

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin = '0px') {
  const [isIntersecting, setIntersecting] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Continuously update the state based on intersection status
        setIntersecting(entry.isIntersecting); 
      },
      {
        rootMargin,
        // Use a higher threshold (10% visible) for stability
        threshold: 0.1 
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Return cleanup function to stop observing when component unmounts
    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [ref, rootMargin]);

  return isIntersecting;
}