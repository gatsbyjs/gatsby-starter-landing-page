import React from "react";
import * as styles from "./testimonial.module.css";
import Section from "../components/section";
import Heading from "../components/heading";
import MarkdownText, { getText } from "../components/markdown-text";
import { GatsbyImage, getImage } from "gatsby-plugin-image";

export default function Testimonial({ heading, secondaryHeading, content }) {
  return (
    <Section>
      <Heading center>{heading}</Heading>
      <Heading secondary center>
        {secondaryHeading}
      </Heading>
      <div className={styles.content}>
        {content.map((item) => (
          <TestimonialContent {...item} />
        ))}
      </div>
    </Section>
  );
}

function TestimonialContent({ primaryText, secondaryText, avatar }) {
  if (!primaryText) return;

  return (
    <div className={styles.testimonial}>
      <MarkdownText as="blockquote" className={styles.quote} {...primaryText} />
      <div className={styles.author}>
        {avatar && (
          <div className={styles.avatar}>
            <GatsbyImage
              image={getImage(avatar)}
              alt={avatar.title || getText(primaryText)}
            />
          </div>
        )}
        <MarkdownText
          as="cite"
          className={styles.authorInfo}
          {...secondaryText}
        />
      </div>
    </div>
  );
}
