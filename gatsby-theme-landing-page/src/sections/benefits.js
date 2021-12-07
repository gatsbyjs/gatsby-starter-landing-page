import * as React from "react";
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import * as styles from "./benefits.module.css";
import MarkdownText from "../components/markdown-text";
import Link from "../components/link";
import LinkContainer from "../components/link-container";
import Section from "../components/section";
import Heading from "../components/heading";
import ContentContainer from "../components/content-container";

export default function Benefits({ heading, secondaryHeading, content }) {
  return (
    <section>
      <Section>
        <Heading>{heading}</Heading>
        <Heading secondary>{secondaryHeading}</Heading>
        {/* <div className={styles.contentContainer}> */}
        <ContentContainer className={styles.contentContainer}>
          {content.map((item) => (
            <BenefitContent key={item.id} {...item} />
          ))}
        </ContentContainer>
        {/* </div> */}
      </Section>
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
