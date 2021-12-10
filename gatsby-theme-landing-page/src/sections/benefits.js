import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./benefits.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import Link from "../components/link";
import LinkContainer from "../components/link-container";
import Section from "../components/section";
import Heading from "../components/heading";

export default function Benefits({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center className={styles.secondaryHeading}>
        {secondaryHeading}
      </Heading>
      <div className={styles.content}>
        {content.map((item) => (
          <BenefitContent key={item.id} {...item} />
        ))}
      </div>
    </Section>
  );
}

function BenefitContent({ primaryText, secondaryText, image, links = [] }) {
  return (
    <div className={styles.contentCard}>
      {image && (
        <GatsbyImage
          image={getImage(image)}
          alt={image.title || getText(primaryText)}
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
