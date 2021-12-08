import * as React from "react";
import * as styles from "../styles/variables.module.css";
import Head from "./head";

// Layout component for shadowing
// replace this component with a custom layout component
// in src/gatsby-theme-landing-page/components/layout.js
export default function Layout(props) {
  return (
    <div className={styles.root}>
      <Head {...props} />
      {props.children}
    </div>
  );
}
