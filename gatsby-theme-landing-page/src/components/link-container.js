import React from "react";
import * as styles from "./link-container.module.css";

export default function LinkContainer({ children, className, ...rest }) {
  return children ? (
    <div className={`${styles.linkContainer} ${className}`} {...rest}>
      {children}
    </div>
  ) : null;
}
