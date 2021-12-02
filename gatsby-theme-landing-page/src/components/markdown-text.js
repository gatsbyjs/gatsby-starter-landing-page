import * as React from 'react'
import * as sanitize from 'sanitize-html'

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
  const sanitized = sanitize(childMarkdownRemark.html, sanitizeOptions)
  return childMarkdownRemark ? (
    <div dangerouslySetInnerHTML={{ __html: sanitized }} />
  ) : null;
}
