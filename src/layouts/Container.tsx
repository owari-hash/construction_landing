import React from "react";

type ContainerProps = {
  children: React.ReactNode;
  className?: string;
  as?: React.ElementType;
  fluid?: boolean;
};

/**
 * Container component for consistent layout across pages
 * @param children Content to be rendered inside the container
 * @param className Additional classes to apply to the container
 * @param as Element type to render as (default: div)
 * @param fluid Whether the container should be full-width (default: false)
 */
const Container: React.FC<ContainerProps> = ({
  children,
  className = "",
  as: Component = "div",
  fluid = false,
}) => {
  return (
    <Component
      className={`mx-auto px-4 sm:px-6 md:px-8 ${
        fluid ? "w-full" : "max-w-7xl"
      } ${className}`}
    >
      {children}
    </Component>
  );
};

export default Container;
