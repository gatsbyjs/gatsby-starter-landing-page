import * as React from "react";
import * as styles from "./features.module.css";

export default function Features({ id, heading }) {
  return (
    <section className={styles.root}>
      <h2>{heading}</h2>
    </section>
  );
}
