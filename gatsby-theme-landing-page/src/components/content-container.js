import * as React from "react";
import * as styles from "./content-container.module.css";

export default function ContentContainer({ children, className, ...rest }) {
  if (!children) {
    return null;
  }

  return (
    <div className={`${className} ${styles.contentContainer} `} {...rest}>
      {children}
    </div>
  );
}
