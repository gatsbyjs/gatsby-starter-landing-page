import * as React from 'react'
import * as styles from './hero.module.css'

export default function Hero ({
  id,
  heading,
}) {
  return (
    <section className={styles.root}>
      <h1>{heading}</h1>
    </section>
  )
}
