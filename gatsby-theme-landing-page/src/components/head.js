import * as React from "react";
import { Helmet } from "react-helmet";

export default function Head({
  title = "",
  description = "",
  image = "",
  noIndex = false,
}) {
  const imageUrl = image ? `https:${image.file.url}` : "";
  const robots = noIndex ? `noindex, nofollow` : `index`;

  return (
    <Helmet
      htmlAttributes={{
        lang: "en-US",
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="robots" content={robots} />
      <meta property="og:title" name="title" content={title} />
      <meta
        property="og:description"
        name="description"
        content={description}
      />
      <meta property="og:image" name="image" content={imageUrl} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
