import * as React from "react";
import * as styles from "./page.module.css";

export default function Page(props) {
  return <div className={styles.root}>{props.children}</div>;
}
