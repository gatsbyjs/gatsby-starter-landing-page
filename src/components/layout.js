import * as React from "react";
import { Link } from "gatsby";
import { Head } from "gatsby-theme-landing-page";
import "../styles.css";
import * as cssVars from "gatsby-theme-landing-page/src/styles/variables.module.css";
import * as styles from "./layout.module.css";

export default function Layout(props) {
  return (
    <div className={[cssVars.root, styles.root].join(" ")}>
      <Head {...props} />
      <header className={styles.header}>
        <Link to="/">gatsby-starter-landing-page</Link>
      </header>
      <main className={styles.main}>{props.children}</main>
      <footer className={styles.footer}>
        <a href="https://gatsbyjs.com">Built with Gatsby</a>
        <a href="https://github.com/gatsbyjs/gatsby-starter-landing-page">
          View Source on GitHub
        </a>
        <Link to="/demo">Demo</Link>
      </footer>
    </div>
  );
}
