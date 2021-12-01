import * as React from 'react'
import { graphql } from 'gatsby'
import * as Components from '../components'
import * as styles from '../components/base.module.css'
import Head from '../components/head'
import Layout from '../components/layout'

export default function LandingPage (props) {
  const { sections } = props.data.page

  return (
    <Layout>
      <div className={styles.root}>
        <Head {...props.data.page} />
        {sections.map(section => {
          const Component = Components[section.component] || Components.Section
          return (
            <Component
              key={section.id}
              {...section}
            />
          )
        })}
      </div>
    </Layout>
  )
}

export const query = graphql`
  query($id: String!) {
    page: contentfulLandingPage(id: { eq: $id }) {
      id
      title
      description
      sections: landingPageSection {
        id
        component
        heading
      }
    }
  }
`
