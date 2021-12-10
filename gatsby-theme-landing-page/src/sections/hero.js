import * as React from "react";
import * as styles from "./hero.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
import Button from "../components/button";
import MarkdownText from "../components/markdown-text";
import Heading from "../components/heading";

export default function Hero({ heading, secondaryHeading, content }) {
  const heroContent = content?.[0];
  const image = getImage(heroContent?.image);

  return (
    <Section>
      <div className={styles.root}>
        <div className={styles.content}>
          <Heading as="h2" className={styles.secondaryHeading}>
            {secondaryHeading}
          </Heading>
          <Heading as="h1" className={styles.heading}>
            {heading}
          </Heading>
          <HeroContent {...heroContent} />
        </div>
        <div className={styles.image}>
          <GatsbyImage image={image} alt={image.title || `Hero Image`} />
        </div>
      </div>
    </Section>
  );
}

function HeroContent({ primaryText, secondaryText, links }) {
  return (
    <div>
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
      <div className={styles.buttonContainer}>
        {links.map((link, i) => (
          <Button
            key={link.id}
            {...link}
            variant={i === 0 ? "primary" : "secondary"}
          />
        ))}
      </div>
    </div>
  );
}
