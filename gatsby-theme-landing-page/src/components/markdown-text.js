import * as React from "react";
import * as sanitize from "sanitize-html";
import * as styles from "./markdown-text.module.css";

const blockOptions = {
  allowedTags: [
    "p",
    "a",
    "b",
    "strong",
    "em",
    "i",
    "pre",
    "code",
    "ul",
    "ol",
    "li",
    "span",
    "div",
  ],
  selfClosing: ["img", "hr"],
};

const inlineOptions = {
  allowedTags: ["strong", "b", "i", "em", "a", "span"],
  selfClosing: [],
};

export default function MarkdownText({
  childMarkdownRemark,
  as = "div",
  className = "",
  inline = false,
}) {
  if (!childMarkdownRemark) return null;
  const sanitizeOptions = inline ? inlineOptions : blockOptions;

  const sanitized = sanitize(childMarkdownRemark.html, sanitizeOptions);
  const Component = as;

  return (
    <Component
      className={[styles.root, className].join(" ")}
      dangerouslySetInnerHTML={{ __html: sanitized }}
    />
  );
}
