import * as React from "react";
import { graphql } from "gatsby";
import * as Components from "../sections";
import * as styles from "../styles/base.module.css";
import Head from "../components/head";
import Layout from "../components/layout";
import DevDebug from "../components/dev-debug";

export default function LandingPage(props) {
  const { sections } = props.data.page;

  return (
    <Layout>
      <div className={styles.root}>
        <Head {...props.data.page} />
        {sections.map((section) => {
          const Component = Components[section.component] || DevDebug;
          return Component ? <Component key={section.id} {...section} /> : null;
        })}
      </div>
    </Layout>
  );
}

export const query = graphql`
  query ($id: String!) {
    page: contentfulLandingPage(id: { eq: $id }) {
      title
      description
      image {
        file {
          url
        }
      }
      sections {
        id
        component
        heading
        secondaryHeading
        content {
          id
          primaryText {
            childMarkdownRemark {
              html
            }
          }
          secondaryText {
            childMarkdownRemark {
              html
            }
          }
          image {
            gatsbyImageData(layout: CONSTRAINED)
            title
          }
          avatar: image {
            gatsbyImageData(layout: FIXED, width: 96, height: 96)
            title
          }
          links {
            id
            href
            text
          }
        }
      }
    }
  }
`;
