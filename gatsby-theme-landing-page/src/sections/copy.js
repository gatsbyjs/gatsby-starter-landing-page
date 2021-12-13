import React from "react";
import * as styles from "./copy.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
import Heading from "../components/heading";
import Container from "../components/container";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <Container className={styles.container}>
        {content.map((item) => {
          return <CopyContent key={item.id} {...item} />;
        })}
      </Container>
    </Section>
  );
}

function CopyContent({ primaryText, secondaryText, image }) {
  return (
    <Container className={styles.copyContainer}>
      <GatsbyImage
        image={getImage(image)}
        alt={image.title || getText(primaryText)}
      />
      <MarkdownText {...primaryText} />
      <AsideText {...secondaryText} />
    </Container>
  );
}

function AsideText(props) {
  return <MarkdownText className={styles.asideText} {...props} />;
}
