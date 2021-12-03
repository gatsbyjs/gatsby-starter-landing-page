# gatsby-theme-landing-page

A Contentful-backed dynamic landing page theme for Gatsby

## Usage

Install the theme in your Gatsby site.

```sh
npm install gatsby-theme-landing-page
```

Add the theme to your `gatsby-config.js`.

```js
// gatsby-config.js
require("dotenv").config();

module.exports = {
  plugins: [
    {
      resolve: "gatsby-theme-landing-page",
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
        environment: process.env.CONTENTFUL_ENVIRONMENT_ID || "master",
      },
    },
  ],
};
```

Create a `.env` file with your Contentful space ID and API keys.

```sh
# .env
CONTENTFUL_SPACE_ID="<SPACE_ID>"
CONTENTFUL_DELIVERY_ACCESS_TOKEN="<ACCESS_TOKEN>"
```

<!-- TODO: update these instructions once the JSON file is created -->

Upload the `data/sample-data.json` to your Contentful space to set up the content model. Then, create your first landing page in Contentful.

## Customizing typography, colors, and layout

TK

## Customizing section components

TK

## Customizing buttons, links, and other components

TK

## Adding custom section components

TK
