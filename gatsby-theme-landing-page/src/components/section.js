import React from "react";
import * as styles from "./section.module.css";

export default function Section({ children, className, ...rest }) {
  if (!children) {
    return null;
  }
  return (
    <section className={`${styles.root} ${className}`} {...rest}>
      <div className={styles.container}>{children}</div>
    </section>
  );
}
