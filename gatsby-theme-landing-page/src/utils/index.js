import * as sanitizeHTML from "sanitize-html";

// This set of HTML tags are derived from the resulting output of
// all the possible rich text options in Contentful's rich text editor.
// The intent is to create a 1:1 mapping of what content editors can do
// with that editor and what markup our components will support
const defaultAllowedTags = [
  "a",
  "p",
  "br",
  "em",
  "strong",
  "ul",
  "ol",
  "li",
  "h1",
  "h2",
  "h3",
  "del",
  "table",
  "thead",
  "tbody",
  "td",
  "th",
  "tr",
  "blockquote",
  "hr",
  "code",
];

// Given a Contentful Text Node with a childMarkdownRemark field, returns HTML field
const getHtml = (textNode) => textNode?.childMarkdownRemark?.html;

// Given a Contentful Text Node with a childMarkdownRemark field, returns sanitized HTML
export const getSanitizedHtml = (contentfulTextNode, sanitizeHtmlOptions) => {
  const html = getHtml(contentfulTextNode);
  return sanitizeHTML(html, {
    allowedTags: defaultAllowedTags,
    ...sanitizeHtmlOptions,
  });
};
