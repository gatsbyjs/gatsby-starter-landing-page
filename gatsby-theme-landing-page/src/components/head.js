import * as React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title, description, image }) {
  const imageUrl = image ? `https:${image.file.url}` : "";
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-US",
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta property="og:image" content={imageUrl} />
      <meta name="twitter:image" content={imageUrl} />
    </Helmet>
  );
}
