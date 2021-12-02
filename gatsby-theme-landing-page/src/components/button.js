import * as React from "react";
import { Link } from "gatsby";
import isAbsoluteURL from "is-absolute-url";
import * as styles from "./button.module.css";

export default function Button({ href, text, children, variant = "primary" }) {
  const buttonStyle =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;

  if (isAbsoluteURL(href)) {
    return (
      <a className={buttonStyle} href={href}>
        {text || children}
      </a>
    );
  }

  return (
    <Link className={buttonStyle} to={href}>
      {text || children}
    </Link>
  );
}
