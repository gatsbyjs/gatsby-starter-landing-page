import React from "react";
import * as styles from "./testimonial.module.css";
import Section from "../components/section";
import Heading from "../components/heading";
import MarkdownText, { getText } from "../components/markdown-text";
import ContentContainer from "../components/content-container";
import Divider from "../components/divider";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Testimonial({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading>{heading}</Heading>
      <Heading secondary>{secondaryHeading}</Heading>
      <ContentContainer className={styles.contentContainer}>
        {content.map((item) => (
          <TestimonialContent {...item} />
        ))}
      </ContentContainer>
    </Section>
  );
}

function TestimonialContent({ primaryText, secondaryText, avatar }) {
  if (!primaryText) return;

  return (
    <div className={styles.testimonial}>
      <div className={styles.quote}>
        <MarkdownText {...primaryText} />
      </div>
      <Divider />
      <div className={styles.author}>
        {avatar && (
          <div className={styles.avatar}>
            <GatsbyImage
              image={getImage(avatar)}
              alt={avatar.title || getText(primaryText)}
            />
          </div>
        )}
        <MarkdownText className={styles.authorInfo} {...secondaryText} />
      </div>
    </div>
  );
}
