import * as React from 'react'
import * as sanitize from 'sanitize-html'
import * as styles from './markdown-text.module.css'

const sanitizeOptions = {
  allowedTags: [
    'p',
    'a',
    'b',
    'strong',
    'em',
    'i',
    'pre',
    'code',
    'ul',
    'ol',
    'li',
    'span',
    'div',
  ],
  selfClosing: [
    'img',
    'hr',
  ]
}

export default function MarkdownText({ childMarkdownRemark }) {
  if (!childMarkdownRemark) return null

  const sanitized = sanitize(childMarkdownRemark.html, sanitizeOptions)

  return (
    <div
      className={styles.root}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
