// src/hooks/use-on-screen.tsx

import { useState, useEffect, RefObject, useRef } from 'react';

interface IntersectionState {
  isVisible: boolean;
  direction: 'up' | 'down' | null;
}

export function useOnScreen(
  ref: RefObject<HTMLElement>, 
  rootMargin = '0px', 
  threshold = 0.1
) {
  const [state, setState] = useState<IntersectionState>({
    isVisible: false,
    direction: null,
  });
  const lastScrollY = useRef(0);
  const scrollDirection = useRef<'up' | 'down'>('down');
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Initialize lastScrollY
    lastScrollY.current = window.scrollY;

    const handleScroll = () => {
      // Cancel previous RAF if it exists
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }

      // Use requestAnimationFrame for smoother updates
      rafId.current = requestAnimationFrame(() => {
        const currentScrollY = window.scrollY;
        
        // Update scroll direction with a threshold to avoid jitter
        if (Math.abs(currentScrollY - lastScrollY.current) > 5) {
          scrollDirection.current = currentScrollY > lastScrollY.current ? 'down' : 'up';
          lastScrollY.current = currentScrollY;
        }
      });
    };

    // Use passive listener for better performance
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          // Element is entering viewport
          setState({
            isVisible: true,
            direction: scrollDirection.current,
          });
        } else {
          // Element is leaving viewport
          setState({
            isVisible: false,
            direction: scrollDirection.current,
          });
        }
      },
      {
        rootMargin,
        threshold,
      }
    );

    const currentRef = ref.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    // Cleanup
    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      window.removeEventListener('scroll', handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [ref, rootMargin, threshold]);

  // Set initial direction on mount
  useEffect(() => {
    if (state.direction === null && typeof window !== 'undefined') {
      scrollDirection.current = window.scrollY > 0 ? 'up' : 'down';
      setState(prev => ({
        ...prev,
        direction: scrollDirection.current
      }));
    }
  }, [state.direction]);

  return state;
}