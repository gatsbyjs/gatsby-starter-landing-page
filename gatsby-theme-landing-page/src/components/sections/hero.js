import * as React from "react";
import * as styles from "./hero.module.css";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Button from "../base/button";
import MarkdownText from "../base/markdown-text";

export default function Hero({ heading, secondaryHeading, content }) {
  const heroContent = content?.[0];
  const image = getImage(heroContent?.image);

  return (
    <section className={styles.root}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2>{secondaryHeading}</h2>
          <h1>{heading}</h1>
          <HeroContent {...heroContent} />
        </div>
        <div className={styles.image}>
          <GatsbyImage image={image} />
        </div>
      </div>
    </section>
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
