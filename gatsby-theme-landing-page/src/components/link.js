import * as React from "react";
import { Link } from "gatsby";
import isAbsoluteURL from "is-absolute-url";
import * as styles from "./link.module.css";

export default function ({ href, text, children }) {
  if (isAbsoluteURL(href)) {
    return (
      <a className={styles.link} href={href}>
        {text || children}
      </a>
    );
  }

  return (
    <Link className={styles.link} to={href}>
      {text || children}
    </Link>
  );
}
