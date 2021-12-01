import * as React from 'react'
import * as styles from './layout.module.css'

export default function Layout (props) {
  return (
    <div className={styles.root}>
      <header className={styles.header}>
        <h1>gatsby-starter-landing-page</h1>
      </header>
      <main className={styles.main}>
        {props.children}
      </main>
      <footer className={styles.footer}>
        <a href='https://github.com/gatsbyjs/gatsby-starter-landing-page'>
          View Source on GitHub
        </a>
      </footer>
    </div>
  )
}
