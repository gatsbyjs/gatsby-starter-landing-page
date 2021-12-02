import React from "react";
import * as styles from "./copy.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { getSanitizedHtml } from "../utils";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        <h3 className={styles.secondaryHeading}>{secondaryHeading}</h3>
        {content.map((item, i) => {
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
      <MarkdownText className={styles.primaryText} text={primaryText} />
      <AsideText text={secondaryText} />
    </div>
  );
}

// Placeholder, as we'll extract these types of base components to a common file
function MarkdownText({ text, ...rest }) {
  const sanitizedHtml = getSanitizedHtml(text);
  return <div {...rest} dangerouslySetInnerHTML={{ __html: sanitizedHtml }} />;
}

function AsideText(props) {
  return <MarkdownText className={styles.asideText} {...props} />;
}
