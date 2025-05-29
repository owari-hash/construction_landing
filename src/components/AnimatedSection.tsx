"use client";

import React, { ReactNode } from "react";
import useIntersectionObserver from "@/hooks/useIntersectionObserver";

type AnimationType =
  | "fade-in"
  | "slide-up"
  | "slide-left"
  | "slide-right"
  | "scale-in";

type AnimatedSectionProps = {
  children: ReactNode;
  animation?: AnimationType;
  delay?: number;
  threshold?: number;
  className?: string;
  as?: React.ElementType;
};

/**
 * A component that animates its children when they enter the viewport
 */
const AnimatedSection: React.FC<AnimatedSectionProps> = ({
  children,
  animation = "fade-in",
  delay = 0,
  threshold = 0.1,
  className = "",
  as: Component = "div",
}) => {
  const [ref, isVisible] = useIntersectionObserver<HTMLDivElement>({
    threshold,
    triggerOnce: true,
  });

  // Generate animation classes
  const getAnimationClass = () => {
    switch (animation) {
      case "fade-in":
        return "animate-fade-in";
      case "slide-up":
        return "animate-slide-up";
      case "slide-left":
        return "animate-slide-left";
      case "slide-right":
        return "animate-slide-right";
      case "scale-in":
        return "animate-scale-in";
      default:
        return "animate-fade-in";
    }
  };

  return (
    <Component
      ref={ref}
      className={`transition-all duration-700 ${getAnimationClass()} ${
        isVisible
          ? "opacity-100 scale-100 translate-x-0 translate-y-0"
          : "opacity-0 scale-95 translate-y-8"
      } ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Component>
  );
};

export default AnimatedSection;
