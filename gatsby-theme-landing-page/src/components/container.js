import * as React from "react";
import * as styles from "./container.module.css";

export default function Container({ className = "", ...props }) {
  return <div {...props} className={[styles.root, className].join(" ")} />;
}
