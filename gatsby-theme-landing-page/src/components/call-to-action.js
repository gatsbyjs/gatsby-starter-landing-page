import * as React from "react";
import * as styles from "./call-to-action.module.css";
import MarkdownText from "./markdown-text";
import Button from "./button";

export default function CallToAction({
  heading,
  secondaryHeading,
  content,
  ...props
}) {
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        {secondaryHeading && <h3>{secondaryHeading}</h3>}
        {content.map((c) => (
          <Content key={c.id} {...c} />
        ))}
      </div>
    </div>
  );
}

function Content({ primaryText, secondaryText, links = [] }) {
  return (
    <div className={styles.content}>
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
      <div className={styles.buttons}>
        {links.map((link) => (
          <Button key={link.id} {...link} />
        ))}
      </div>
    </div>
  );
}
