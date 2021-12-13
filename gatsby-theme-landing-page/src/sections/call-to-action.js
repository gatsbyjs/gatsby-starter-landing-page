import * as React from "react";
import * as styles from "./call-to-action.module.css";
import MarkdownText from "../components/markdown-text";
import Button from "../components/button";
import Section from "../components/section";
import Heading from "../components/heading";

export default function CallToAction({ heading, secondaryHeading, content }) {
  return (
    <Section className={styles.root}>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <div>
        {content.map((c) => (
          <Content key={c.id} {...c} />
        ))}
      </div>
    </Section>
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
