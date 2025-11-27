// src/hooks/use-on-screen.tsx

import { useState, useEffect, RefObject, useRef } from 'react';

// Define the state structure to hold both intersection status and direction
interface IntersectionState {
  isVisible: boolean;
  direction: 'up' | 'down' | null;
}

export function useOnScreen(ref: RefObject<HTMLElement>, rootMargin = '0px', threshold = 0.1) {
  const [state, setState] = useState<IntersectionState>({
    isVisible: false,
    direction: null,
  });
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      // Determine the direction
      const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
      lastScrollY.current = currentScrollY;
      
      // We don't need to re-render constantly on scroll, but we need to track the last direction
      // This is primarily for the Intersection Observer callback below
    };

    // Add scroll event listener to track global direction
    window.addEventListener('scroll', handleScroll);
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        // Get the direction inside the observer callback, right before we decide to set visibility
        const currentScrollY = window.scrollY;
        const scrollDirection = currentScrollY > lastScrollY.current ? 'down' : 'up';
        
        // Set the state based on whether the element is entering or leaving
        if (entry.isIntersecting) {
          setState({
            isVisible: true,
            direction: scrollDirection,
          });
        } else {
            // When leaving the screen, set isVisible to false, but keep the scroll direction
            // so the next animation knows where to start from.
            setState(prevState => ({
                isVisible: false,
                direction: scrollDirection,
            }));
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    // Cleanup: remove both the observer and the scroll listener
    return () => {
      const currentRef = ref.current;
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
    };
  }, [ref, rootMargin, threshold]);

  // Ensure initial direction is set on load
  if (state.direction === null && typeof window !== 'undefined') {
      state.direction = window.scrollY > 0 ? 'up' : 'down'; 
  }

  return state;
}