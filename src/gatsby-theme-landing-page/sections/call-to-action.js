// This is a shadow file to demonstrate how to customize
// built in components.
import * as React from "react";
import * as styles from "./call-to-action.module.css";
import { MarkdownText, Button, Heading } from "gatsby-theme-landing-page";

export default function CallToAction({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <div>
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
      <div className={styles.buttons}>
        {links && links.map((link) => <Button key={link.id} {...link} />)}
      </div>
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
    </div>
  );
}
