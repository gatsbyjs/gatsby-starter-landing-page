import * as React from "react";
import { graphql } from "gatsby";
import * as Components from "../sections";
import Layout from "../components/layout";
import Page from "../components/page";
import DevDebug from "../components/dev-debug";

export default function LandingPage(props) {
  const { sections } = props.data.page;

  return (
    <Layout {...props.data.page}>
      <Page>
        {sections.map((section) => {
          const Component = Components[section.component] || DevDebug;
          return Component ? <Component key={section.id} {...section} /> : null;
        })}
      </Page>
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
            gatsbyImageData(layout: FIXED, width: 48, height: 48)
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
