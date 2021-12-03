import React from "react";
import * as styles from "./copy.module.css";
import MarkdownText from "./markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <h3 className={styles.secondaryHeading}>{secondaryHeading}</h3>
        {content.map((item) => {
          return <CopyContent key={item.id} {...item} />;
        })}
      </div>
    </section>
  );
}

function CopyContent({ primaryText, secondaryText, image }) {
  return (
    <div className={styles.contentContainer}>
      <div className={styles.imageContainer}>
        <GatsbyImage image={getImage(image)} />
      </div>
      <MarkdownText {...primaryText} />
      <AsideText {...secondaryText} />
    </div>
  );
}

function AsideText(props) {
  return <MarkdownText className={styles.asideText} {...props} />;
}
