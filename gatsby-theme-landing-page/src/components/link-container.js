import React from "react";
import * as styles from "./link-container.module.css";

export default function LinkContainer({ children, className, ...rest }) {
  if (!children) {
    return null;
  }
  return (
    <div className={`${styles.linkContainer} ${className || ""}`} {...rest}>
      {children}
    </div>
  );
}
