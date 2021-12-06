<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Landing Page
</h1>

**This is a work-in-progress and not ready for general use**

Create custom landing pages using Gatsby and Contentful with this starter-theme combo.
This starter demonstrates how to use Contentful to build dynamic and customizable landing pages with Gatsby and can serve as a starting-point for creating your own custom landing page components that match your visual brand.

Deploy now to [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

[<img src="https://www.gatsbyjs.com/deploynow.png" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-landing-page)

[View the Demo][demo]

[demo]: https://landingpagestarter.gatsbyjs.io/

## Quick start

1. **Create a Gatsby site**

   Use the Gatsby CLI to get started locally:

   ```sh
   npx gatsby new my-landing-page-site https://github.com/gatsbyjs/gatsby-starter-landing-page
   ```

2. **Configure your Contentful space**

   Create a new Contentful space or use an existing one, then upload the `data/sample-data.json` file to your space.
   <!-- TODO: update these instructions once the JSON file is created -->

3. **Add environment variables**

   Create a `.env` file in the root directory of your site and add the following environment variables. You can copy the `.env.example` file provided. Find the values for these keys in the Contentful web app under _Settings > API Keys_.

   ```sh
   CONTENTFUL_SPACE_ID="<YOUR_SPACE_ID>"
   CONTENTFUL_DELIVERY_ACCESS_TOKEN="<ACCESS_TOKEN>"
   ```

4. **Start developing**

   Navigate to your new site's directory and start the development server.
   **Note:** this starter uses Yarn Workspaces and requires Yarn for development.

   ```sh
   cs my-landing-page-site
   yarn && yarn start
   ```

5. **Open the source code and start editing!**

   Your site should now be running at <http://localhost:8000>

## What's inside?

A quick look at the files and directories included in this project:

```
.
├── README.md
├── gatsby-config.js
├── gatsby-theme-landing-page
│   ├── README.md
│   ├── gatsby-config.js
│   ├── index.js
│   └── src
│       ├── components
│       ├── pages
│       ├── sections
│       └── styles
├── src
│   ├── components
│   ├── gatsby-theme-landing-page
│   └── styles.css
└── .env.example
```

1. **`gatsby-config.js`**: Gatsby config file for the starter, which includes `gatsby-theme-landing-page` as a plugin.
1. **`gatsby-theme-landing-page`**: The theme that includes the Contentful source plugin and most of the functionality. See the theme's [`README.md`][theme readme] for more information.
1. **`src/`**: The source directory for the starter. This includes an example of using the [Shadowing API][] to customize landing pages provided by the theme.
1. **`.env.example`**: Copy this file, rename it to `.env`, and add your Contentful API keys to connect this data to your Contentful space.

[shadowing api]: https://www.gatsbyjs.com/docs/how-to/plugins-and-themes/shadowing/

### Detailed look into the theme

```
├── gatsby-theme-landing-page
│   ├── gatsby-config.js
│   ├── index.js
│   └── src
│       ├── components
│       ├── pages
│       ├── sections
│       └── styles
```

This starter uses `gatsby-theme-landing-page` to source content from Contentful and create block-based landing pages.
This theme is included in this repo's Yarn Workspace for local development.

1. **`src/sections`**: Each landing page in Contentful determines which components it uses and controls the order of these sections.
   The components rendered by the theme are in `src/sections`. Each component in this directory represents one Contentful `LandingPageSection` node.
1. **`src/components`**: This directory includes shared components, such as buttons, links, head, and other utilities.
1. **`src/styles`**: This directory includes base styles and CSS custom properties.
1. **`src/pages`**: This includes one [File System Routing][] page for rendering each landing page.
1. **`index.js`**: Exports components that can be used independently from the theme.

[file system routing]: https://www.gatsbyjs.com/docs/reference/routing/file-system-route-api/

### Theme updates

You can choose to either leave this directory in your site, or remove it to install and use the published version of the theme from npm.
If you install the theme from npm, your site can receive upstream updates and bug fixes in the future.

## Installing the theme in an existing site

Because this starter is built with a Gatsby theme, you can leverage its functionality in an existing site without cloning this starter.
For more information, see the theme's [README.md][theme readme].

## Adding a layout

By default, the theme's landing pages do not include a wrapping layout. This is to allow you customize the header, footer and other wrapping content to match the rest of your site.
This starter shadows the theme's layout with the `src/gatsby-theme-landing-page/components/layout.js` file, which renders the `src/components/layout.js` file. Edit this file to customize the shared layout for all landing pages.

```js
// example src/gatsby-theme-landing-page/components/layout.js
export { default } from "../../components/custom-layout";
```

## Customizing the typography and colors

To customize the built-in components' typography, colors, and layout, edit the `src/gatsby-theme-landing-page/styles/variables.module.css` file.

```css
/* example src/gatsby-theme-landing-page/styles/variables.module.css */
.root {
  /* typography */
  --font: "Inter", sans-serif;
  --font-heading: "Poppins", sans-serif;
  --line-height: 1.5;
  --font-size-1: 12px;
  --font-size-2: 14px;
  --font-size-3: 16px;
  --font-size-4: 24px;
  --font-size-5: 32px;
  --font-size-6: 48px;
  --letter-spacing-caps: 0.03em;
  --font-weight-light: 300;
  --font-weight-normal: 400;
  --font-weight-bold: 700;
  /* colors */
  --text-color: black;
  --text-color-secondary: #555;
  --background-color: white;
  --link-color: #07c;
  --link-hover-color: #05a;
  --primary-color: #08d;
  --secondary-color: #70c;
  --button-color: white;
  --button-background-color: #07c;
  --button-hover-color: #05a;
  --button-secondary-color: #07c;
  --button-secondary-background-color: white;
  --button-secondary-hover-color: rgb(215, 232, 250);
  /* layout */
  --space-1: 4px;
  --space-2: 8px;
  --space-3: 16px;
  --space-4: 32px;
  --space-5: 64px;
  --space-6: 128px;
  --max-width: 1024px;
  --max-width-narrow: 768px;
  --border-radius: 4px;
  /* shadows */
  --box-shadow-raised: 0px 1px 2px rgba(46, 41, 51, 0.08), 0px 2px 4px rgba(71, 63, 79, 0.08);
  --box-shadow-floating: 0px 2px 4px rgba(46, 41, 51, 0.08), 0px 4px 8px rgba(71, 63, 79, 0.16);
}
```

## Customizing and extending components

To customize a landing page section component, create a file in `src/gatsby-theme-landing-page/sections/` with the same name used in the theme. This will shadow the built-in component to completely override it.

To add more components and extend the functionality, create a `src/gatsby-theme-landing-page/sections/index.js` file that exports the named components that you'd like to use. Be sure to update your Contentful space's content model to reflect these changes by ensuring the LandingPageSection's _Component_ field validation includes all possible options.

```js
// example src/gatsby-theme-landing-page/sections/index.js
export { default as Hero } from "./hero";
export { default as Features } from "./features";
export { default as Copy } from "./copy";
export { default as CallToAction } from "./call-to-action";
export { default as Benefits } from "./benefits";

// custom components
export { default as SuperHero } from "../../components/super-hero.js";
export { default as ContactForm } from "../../components/contact-form.js";
```

### GraphQL page query

Each page in the theme uses the following query for data. Use this as a reference for the props passed into each section component.

```graphql
query ($id: String!) {
  page: contentfulLandingPage(id: { eq: $id }) {
    title
    description
    image {
      gatsbyImageData(layout: CONSTRAINED)
    }
    sections {
      id
      component
      heading
      secondaryHeading
      content {
        id
        primaryText {
          childMarkdownRemark {
            html
          }
        }
        secondaryText {
          childMarkdownRemark {
            html
          }
        }
        image {
          gatsbyImageData(layout: CONSTRAINED)
        }
        links {
          id
          href
          text
        }
      }
    }
  }
}
```

<!-- TODO add screenshot -->

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).**

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

[theme readme]: gatsby-theme-landing-page/README.md
