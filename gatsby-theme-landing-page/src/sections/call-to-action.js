import * as React from "react";
import * as styles from "./call-to-action.module.css";
import MarkdownText from "../components/markdown-text";
import Button from "../components/button";

export default function CallToAction({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        {secondaryHeading && <h3>{secondaryHeading}</h3>}
        {content.map((c) => (
          <Content key={c.id} {...c} />
        ))}
      </div>
    </section>
  );
}

function Content({ primaryText, secondaryText, links = [] }) {
  return (
    <div className={styles.content}>
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
      <div className={styles.buttons}>
        {links && links.map((link) => <Button key={link.id} {...link} />)}
      </div>
    </div>
  );
}
