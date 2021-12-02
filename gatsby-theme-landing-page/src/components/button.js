import * as React from 'react'
import { Link } from "gatsby";
import * as styles from './button.module.css'

export default function Button({ href, text, children, variant = "primary" }) {
  const buttonStyle =
    variant === "primary" ? styles.buttonPrimary : styles.buttonSecondary;
  return (
    <Link className={buttonStyle} to={href}>
      {text || children}
    </Link>
  );
}
