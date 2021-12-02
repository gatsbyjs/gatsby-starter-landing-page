import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./features.module.css";
import MarkdownText from "./markdown-text";

export default function Features({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <h3 className={styles.secondaryHeading}>{secondaryHeading}</h3>
        <div className={styles.featuresContainer}>
          {content.map((item) => {
            <Feature {...item} />;
          })}
        </div>
      </div>
    </section>
  );
}

function Feature({ primaryText, secondaryText, image, links }) {
  return (
    <div className={styles.featureContainer}>
      <div className={styles.copyContainer}>
        <MarkdownText as="h4" inline {...secondaryText} />
        <MarkdownText {...primaryText} />
      </div>
      <div className={styles.imageContainer}>
        <GatsbyImage image={getImage(image)} />
      </div>
    </div>
  );
}
