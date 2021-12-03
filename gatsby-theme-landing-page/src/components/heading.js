import React from "react";
import * as styles from "./heading.module.css";

export default function Heading({
  children,
  as,
  secondary,
  className,
  ...rest
}) {
  const baseStyle = !secondary ? styles.heading : styles.secondaryHeading;

  /*
   Uses `as` prop for heading element. If not provided, defaults to 
   h2 for standard and h3 for secondary
  */
  const Component = as || secondary ? "h3" : "h2";
  return children ? (
    <Component className={`${baseStyle} ${className}`} {...rest}>
      {children}
    </Component>
  ) : null;
}
