/**
 * Application routes
 * Centralized route definitions for the construction landing page
 */

export const ROUTES = {
  HOME: "/",
  PRODUCTS: "/products",
  PROJECTS: "/projects",
  ABOUT: "/about",
  BLOG: "/blog",
  CONTACT: "/contact",
};

/**
 * Section anchors for the homepage
 */
export const ANCHORS = {
  PRODUCTS: "#products",
  PROJECTS: "#projects",
  ABOUT: "#about",
  BLOG: "#blog",
  CONTACT: "#contact",
};

/**
 * Get a route with optional query parameters
 * @param route Base route
 * @param params Query parameters
 * @returns Route with query parameters
 */
export const getRoute = (
  route: string,
  params?: Record<string, string>
): string => {
  if (!params) return route;

  const queryString = Object.entries(params)
    .map(
      ([key, value]) =>
        `${encodeURIComponent(key)}=${encodeURIComponent(value)}`
    )
    .join("&");

  return `${route}?${queryString}`;
};
