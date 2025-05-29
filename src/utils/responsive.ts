/**
 * Responsive utility functions for the construction landing page
 */

// Breakpoint values that match Tailwind's default breakpoints
export const breakpoints = {
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
};

/**
 * Hook to check if the current viewport matches a media query
 * @param query Media query string
 * @returns Boolean indicating if the media query matches
 */
export const getBreakpointValue = (
  breakpoint: keyof typeof breakpoints
): number => {
  return breakpoints[breakpoint];
};

/**
 * Get a media query string for a minimum width
 * @param breakpoint Breakpoint name (sm, md, lg, xl, 2xl)
 * @returns Media query string
 */
export const getMinWidthQuery = (
  breakpoint: keyof typeof breakpoints
): string => {
  return `(min-width: ${breakpoints[breakpoint]}px)`;
};

/**
 * Get a media query string for a maximum width
 * @param breakpoint Breakpoint name (sm, md, lg, xl, 2xl)
 * @returns Media query string
 */
export const getMaxWidthQuery = (
  breakpoint: keyof typeof breakpoints
): string => {
  return `(max-width: ${breakpoints[breakpoint] - 1}px)`;
};
