import * as React from 'react'
import { graphql } from 'gatsby'
import * as Components from '../components'
import * as styles from '../components/base.module.css'

export default function LandingPage (props) {
  const {
    title,
    description,
    sections,
  } = props.data.page

  return (
    <div className={styles.root}>
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
