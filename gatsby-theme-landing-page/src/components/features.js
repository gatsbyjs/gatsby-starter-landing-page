import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as React from "react";
import * as styles from "./features.module.css";
import MarkdownText from "./markdown-text";
import Link, { LinkContainer } from "./link";

export default function Features({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <h3 className={styles.secondaryHeading}>{secondaryHeading}</h3>
        <div>
          {content.map((item, i) => (
            <Feature
              {...item}
              orientation={i % 2 === 0 ? "default" : "reverse"}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

function Feature({
  primaryText,
  secondaryText,
  image,
  links,
  orientation = "default",
}) {
  const orientationStyle =
    orientation === "default" ? "" : styles.featureReverse;
  return (
    <div className={`${styles.featureContainer} ${orientationStyle}`}>
      <div className={styles.copyContainer}>
        <MarkdownText
          as="h4"
          className={styles.secondaryText}
          {...secondaryText}
        />
        <MarkdownText className={styles.primaryText} {...primaryText} />
        <LinkContainer>
          {links && links.map((link) => <Link key={link.id} {...link} />)}
        </LinkContainer>
      </div>
      <div className={styles.imageContainer}>
        <div className={styles.imageWrapper}>
          <GatsbyImage image={getImage(image)} />
        </div>
      </div>
    </div>
  );
}
