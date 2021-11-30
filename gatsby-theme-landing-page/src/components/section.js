import * as React from 'react'
import * as styles from './section.module.css'

export default function Section ({
  id,
  heading,
}) {
  return (
    <section className={styles.root}>
      <h2>{heading}</h2>
    </section>
  )
}
