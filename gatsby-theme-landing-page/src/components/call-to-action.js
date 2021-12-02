import * as React from 'react'
import * as styles from './call-to-action.module.css'
import Button from './button'

export default function CallToAction ({
  heading,
  secondaryHeading,
  content,
  ...props
}) {
  console.log({ heading, secondaryHeading, content, props })
  return (
    <div className={styles.root}>
      <div className={styles.container}>
        <h2>{heading}</h2>
        {secondaryHeading && <h2>{secondaryHeading}</h2>}
        {content.map(c => (
          <Content key={c.id} {...c} />
        ))}
      </div>
    </div>
  )
}

function Content ({
  primaryText,
  secondaryText,
  links = [],
}) {
  return (
    <div>
      {links.map(link => (
        <Button
          key={link.id}
          {...link}
        />
      ))}
    </div>
  )
}
