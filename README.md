<p align="center">
  <a href="https://www.gatsbyjs.com">
    <img alt="Gatsby" src="https://www.gatsbyjs.com/Gatsby-Monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Gatsby Starter Landing Page
</h1>

Create custom landing pages using Gatsby and Contentful with this starter-theme combo.
This starter demonstrates how to use Contentful to build dynamic and customizable landing pages with Gatsby and can serve as a starting-point for creating your own custom landing page components that match your visual brand.

[View the Demo][demo]

[demo]: https://landingpagestarter.gatsbyjs.com/

## Quick start

### Prerequisites

You will need a [new or existing Contentful space](https://www.contentful.com/help/contentful-101/#step-2-create-a-space) to use this Starter. During installation, you will be asked for the following:

- Contentful Space ID
  - [Directions to find your Space ID](https://www.contentful.com/help/find-space-id/)
- Contentful Management API Token
  - [Directions to generate a Personal Access Token](https://www.contentful.com/faq/personal-access-tokens/)
- Contentful Delivery API Key and (optional) Preview API Key
  - In your Contentful space, go to Settings > API Keys.
  - On the Content delivery / preview tokens tab, click the Add API Key button.
  - Give the API Key an appropriate name and description.

When you have these available, you will be ready to begin installation

## Installation

You can choose to get going with this starter immediately by deploying to Gatsby Cloud or begin locally on your machine and deploy later.

### Gatsby Cloud

Use Deploy Now to get started in [Gatsby Cloud](https://gatsbyjs.com/products/cloud):

[<img src="https://www.gatsbyjs.com/deploynow.png" alt="Deploy to Gatsby Cloud">](https://www.gatsbyjs.com/dashboard/deploynow?url=https://github.com/gatsbyjs/gatsby-starter-landing-page)

This repository uses the `gatsby-provision` convention to allow for automatic CMS content provisioning during the Deploy Now flow in Gatsby Cloud. After you Quick Connect Contentful to your site, you will be given the option to run the `gatsby-provision` script to populate the selected Contentful space with the site's associated content model and content.

### Locally

1. **Create a Gatsby site**

   Use the Gatsby CLI to get started locally:

   ```sh
   npx gatsby new my-landing-page-site https://github.com/gatsbyjs/gatsby-starter-landing-page
   ```

2. **Run the `gatsby-provision` command**

   Go to your site's root directory, and run the following command:

   ```sh
   cd my-landing-page-site
   yarn
   yarn gatsby-provision
   ```

   This will run the `gatsby-provision` script. The script requests your Contentful Space ID, Management Token, and Delivery/Preview API Keys, sets up your local environment variables, and imports the Landing Page content model and demo data to your Contentful space.

   Your Contentful space will now contain the content model used by the starter, along with demo content that demonstrates how to use the various content types and landing page components.

3. **Start developing**

   Navigate to your new site's directory and start the development server.
   **Note:** this starter uses Yarn Workspaces and requires Yarn for development.

   ```sh
   yarn start
   ```

4. **Open the source code and start editing!**

   Your site should now be running at <http://localhost:8000>

## What's inside?

A quick look at the files and directories included in this project:

```
.
├── README.md
├── gatsby-config.js
├── gatsby-node.js
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

1. **`gatsby-config.js`**: [Gatsby config][] file for the starter, which includes `gatsby-theme-landing-page` as a plugin.
1. **`gatsby-node.js`**: [Gatsby Node][] config file for the starter, which includes GraphQL type definitions for the Contentful content model.
1. **`gatsby-theme-landing-page`**: The [theme][theme docs] that includes the Contentful source plugin and most of the functionality. See the theme's [`README.md`][theme readme] for more information.
1. **`src/`**: The source directory for the starter. This includes an example of using the [Shadowing API][] to customize landing pages provided by the theme.

[gatsby config]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
[gatsby node]: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-node/
[theme docs]: https://www.gatsbyjs.com/docs/themes/
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
The theme is included in this repo's Yarn Workspace for local development.

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

If you decide to use a different webfont, be sure to also update `gatsby-browser.js` to load the font files you need and remove any you don't need.

## Customizing section components

To customize a landing page section component, create a file in `src/gatsby-theme-landing-page/sections/` with the same name used in the theme. This will shadow the built-in component to completely override it.

As an example to get you started, see `src/gatsby-theme-landing-page/sections/call-to-action.js`, which is a customized version of the CallToAction component built into the theme.
Feel free to edit this component directly or follow this pattern to customize other section components.

## Adding new section components

To add more components and extend the functionality, follow these steps:

1. Edit the `src/gatsby-theme-landing-page/sections/index.js` file
   and add named exports for the additional components you'd like to use. In the below example, we add a new hero component called SuperHero

   ```js
   // src/gatsby-theme-landing-page/sections/index.js
   // This file shadows gatsby-theme-landing-page's sections index.
   export { default as Hero } from "gatsby-theme-landing-page/src/sections/hero";
   export { default as Features } from "gatsby-theme-landing-page/src/sections/features";
   export { default as Copy } from "gatsby-theme-landing-page/src/sections/copy";
   export { default as CallToAction } from "gatsby-theme-landing-page/src/sections/call-to-action";
   export { default as Benefits } from "gatsby-theme-landing-page/src/sections/benefits";
   export { default as Testimonial } from "gatsby-theme-landing-page/src/sections/testimonial";

   // This is a new section component that extends the functionality of the theme.
   export { default as SuperHero } from "../../components/super-hero";
   ```

2. Create your component in `src/components`

   ```js
   // src/components/super-hero.js
   export default function SuperHero({ heading, secondaryHeading, content }) {
     return (
       // {Component code}
     );
   }
   ```

3. Update your Contentful space's content model to reflect these changes by ensuring the LandingPageSection's _Component_ field validation includes the new component name.

   ![contentful component validation](https://user-images.githubusercontent.com/1227297/145876531-b0658f9c-b6ed-428a-be99-1cd29029f0a6.png)

This starter includes an example section component in `src/components/super-hero.js`. Feel free to edit, rename, or use this as an reference when creating other custom section components.

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

### Schema Customization API

To prevent errors from occurring when changes are made to the Contentful content model, this starter includes GraphQL type definitions in its [`gatsby-node.js`](gatsby-node.js) file.
If you decide to make changes to your content model, be sure to update the type definitions in this file, otherwise the starter might not be able to query new or renamed fields.

To read more about customizing, see the theme's [README.md][theme readme].

## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://www.gatsbyjs.com/). Here are some places to start:

- **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://www.gatsbyjs.com/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.
- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).**

## 💫 Deploy

[Build, Deploy, and Host On The Only Cloud Built For Gatsby](https://www.gatsbyjs.com/cloud/)

Gatsby Cloud is an end-to-end cloud platform specifically built for the Gatsby framework that combines a modern developer experience with an optimized, global edge network.

[theme readme]: gatsby-theme-landing-page/README.md
