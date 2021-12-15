// This is a custom section component created for this starter.
// Edit and rename this component as needed or use this as a reference
// for creating more custom section components
import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import {
  Container,
  Heading,
  MarkdownText,
  Button,
} from "gatsby-theme-landing-page";
import * as styles from "./super-hero.module.css";

export default function SuperHero({ heading, secondaryHeading, content }) {
  return (
    <section className={styles.root}>
      <Container>
        <Heading as="h1">{heading}</Heading>
        <Heading as="h2" secondary>
          {secondaryHeading}
        </Heading>
        {content.map((item) => (
          <Content key={item.id} {...item} />
        ))}
      </Container>
    </section>
  );
}

function Content({ primaryText, secondaryText, image, links }) {
  return (
    <div>
      {image && <GatsbyImage alt={image.title} image={getImage(image)} />}
      <MarkdownText {...primaryText} />
      <MarkdownText {...secondaryText} />
      {links && links.map((link) => <Button key={link.id} {...link} />)}
    </div>
  );
}
