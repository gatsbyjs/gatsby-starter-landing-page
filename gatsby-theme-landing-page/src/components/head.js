import * as React from "react";
import { Helmet } from "react-helmet";

export default function Head({ title, description }) {
  return (
    <Helmet
      htmlAttributes={{
        lang: "en-US",
      }}
    >
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
}
