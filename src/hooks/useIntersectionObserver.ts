"use client";

import { useEffect, useState, useRef, RefObject } from "react";

type IntersectionObserverOptions = {
  threshold?: number;
  root?: Element | null;
  rootMargin?: string;
  triggerOnce?: boolean;
};

/**
 * Hook to observe when an element enters the viewport
 * @param options IntersectionObserver options
 * @returns [ref, isIntersecting] - ref to attach to the element, boolean indicating if element is visible
 */
const useIntersectionObserver = <T extends Element>(
  options: IntersectionObserverOptions = {}
): [RefObject<T | null>, boolean] => {
  const {
    threshold = 0.1,
    root = null,
    rootMargin = "0px",
    triggerOnce = false,
  } = options;

  const [isIntersecting, setIsIntersecting] = useState(false);
  const elementRef = useRef<T>(null);
  const observerRef = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const element = elementRef.current;
    if (!element) return;

    // Cleanup previous observer
    if (observerRef.current) {
      observerRef.current.disconnect();
    }

    // Create new observer
    observerRef.current = new IntersectionObserver(
      ([entry]) => {
        const isElementIntersecting = entry.isIntersecting;
        setIsIntersecting(isElementIntersecting);

        if (isElementIntersecting && triggerOnce && observerRef.current) {
          observerRef.current.unobserve(element);
        }
      },
      { threshold, root, rootMargin }
    );

    // Start observing
    observerRef.current.observe(element);

    // Cleanup on unmount
    return () => {
      if (observerRef.current) {
        observerRef.current.disconnect();
      }
    };
  }, [threshold, root, rootMargin, triggerOnce]);

  return [elementRef, isIntersecting];
};

export default useIntersectionObserver;
