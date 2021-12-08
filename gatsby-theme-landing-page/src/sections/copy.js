import React from "react";
import * as styles from "./copy.module.css";
import MarkdownText, { getText } from "../components/markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import Section from "../components/section";
import Heading from "../components/heading";
import ContentContainer from "../components/content-container";

export default function Copy({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Heading secondary>{secondaryHeading}</Heading>
      <ContentContainer className={styles.contentContainer}>
        {content.map((item) => {
          return <CopyContent key={item.id} {...item} />;
        })}
      </ContentContainer>
    </Section>
  );
}

function CopyContent({ primaryText, secondaryText, image }) {
  return (
    <div className={styles.copyContainer}>
      <div>
        <GatsbyImage
          image={getImage(image)}
          alt={image.title || getText(primaryText)}
        />
      </div>
      <MarkdownText {...primaryText} />
      <AsideText {...secondaryText} />
    </div>
  );
}

function AsideText(props) {
  return <MarkdownText className={styles.asideText} {...props} />;
}
