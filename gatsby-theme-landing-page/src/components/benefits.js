import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./benefits.module.css";
import MarkdownText from "./markdown-text";
import Link, { LinkContainer } from "./link";

export default function Benefits({ heading, secondaryHeading, content }) {
  return (
    <section>
      <div className={styles.container}>
        <h2 className={styles.heading}>{heading}</h2>
        {secondaryHeading && (
          <h3 className={styles.subhead}>{secondaryHeading}</h3>
        )}
        <div className={styles.contentContainer}>
          {content.map((item) => (
            <BenefitContent key={item.id} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
}

function BenefitContent({ primaryText, secondaryText, image, links = [] }) {
  return (
    <div className={styles.contentCard}>
      {image && (
        <GatsbyImage
          image={getImage(image)}
          alt={"TODO get alt text"}
          className={styles.contentImage}
        />
      )}
      <MarkdownText
        as="h3"
        className={styles.contentHeading}
        {...primaryText}
      />
      <MarkdownText {...secondaryText} />
      <LinkContainer>
        {links && links.map((link) => <Link key={link.id} {...link} />)}
      </LinkContainer>
    </div>
  );
}
