import * as React from "react";
import * as styles from "./call-to-action.module.css";
import MarkdownText from "../components/markdown-text";
import Button from "../components/button";
import Section from "../components/section";
import Heading from "../components/heading";
export default function CallToAction({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Heading secondary>{secondaryHeading}</Heading>
      {content.map((c) => (
        <Content key={c.id} {...c} />
      ))}
    </Section>
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
