/**
 * Animation utility functions for the construction landing page
 */

/**
 * Fade in animation properties
 * @param delay Delay in seconds before animation starts
 * @param duration Duration of the animation in seconds
 * @returns CSS properties for fade in animation
 */
export const fadeIn = (delay: number = 0, duration: number = 0.5) => {
  return {
    opacity: 0,
    transition: `opacity ${duration}s ease-in-out ${delay}s`,
    "&.visible": {
      opacity: 1,
    },
  };
};

/**
 * Slide up animation properties
 * @param delay Delay in seconds before animation starts
 * @param duration Duration of the animation in seconds
 * @returns CSS properties for slide up animation
 */
export const slideUp = (delay: number = 0, duration: number = 0.5) => {
  return {
    opacity: 0,
    transform: "translateY(20px)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    "&.visible": {
      opacity: 1,
      transform: "translateY(0)",
    },
  };
};

/**
 * Slide in from left animation properties
 * @param delay Delay in seconds before animation starts
 * @param duration Duration of the animation in seconds
 * @returns CSS properties for slide in from left animation
 */
export const slideInLeft = (delay: number = 0, duration: number = 0.5) => {
  return {
    opacity: 0,
    transform: "translateX(-20px)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    "&.visible": {
      opacity: 1,
      transform: "translateX(0)",
    },
  };
};

/**
 * Slide in from right animation properties
 * @param delay Delay in seconds before animation starts
 * @param duration Duration of the animation in seconds
 * @returns CSS properties for slide in from right animation
 */
export const slideInRight = (delay: number = 0, duration: number = 0.5) => {
  return {
    opacity: 0,
    transform: "translateX(20px)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    "&.visible": {
      opacity: 1,
      transform: "translateX(0)",
    },
  };
};

/**
 * Scale in animation properties
 * @param delay Delay in seconds before animation starts
 * @param duration Duration of the animation in seconds
 * @returns CSS properties for scale in animation
 */
export const scaleIn = (delay: number = 0, duration: number = 0.5) => {
  return {
    opacity: 0,
    transform: "scale(0.95)",
    transition: `opacity ${duration}s ease-out ${delay}s, transform ${duration}s ease-out ${delay}s`,
    "&.visible": {
      opacity: 1,
      transform: "scale(1)",
    },
  };
};
