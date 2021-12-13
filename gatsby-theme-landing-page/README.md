<h1 align="center">
  Gatsby Theme Landing Page
</h1>

The official Contentful-backed dynamic landing page theme for Gatsby sites

## Getting Started

1. **Install the theme in your Gatsby site.**

   ```sh
   npm install gatsby-theme-landing-page
   ```

2. **Add the theme to your `gatsby-config.js`.**

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

3. **Create a `.env` file with your Contentful space ID and API keys.**

   ```sh
   # .env
   CONTENTFUL_SPACE_ID="<SPACE_ID>"
   CONTENTFUL_DELIVERY_ACCESS_TOKEN="<ACCESS_TOKEN>"
   ```

4. **Import the content model and demo data to your Contentful space**

   - Install the [Contentful CLI (installation instructions)](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

   - Add your space ID to `contentful/import-demo-config.json` and `contentful/import-model-only-config.json`

     ```json
     {
       "spaceId": "SPACE_ID",
       "contentFile": "./contentful/landing-page-model-and-content.json"
     }
     ```

   - Import the demo (content model and sample data):
     `yarn import:contentful:demo`

   - (Optional) If you only want to import the content model and not the demo data, use the command: `yarn import:contentful:model`

   Your Contentful space will now contain the content model used by the starter, along with demo content that demonstrates how to use the various content types and landing page components.

## Content model

![content model diagram](https://user-images.githubusercontent.com/1227297/145318779-4b2cca42-4ae9-407c-b8f6-db934628c51c.png)

Each landing page is represented by a hierarchical content model:

**Landing Page**: Represents a single page and its metadata. Landing pages contain a list of content **Sections**.

**Section**: Represents a distinct section of the landing page, its layout and the content it contains. The layout of the section is determined by the **component** field. The components available as drop down options map to the components available in `src/gatsby-theme-landing-pages/src/sections` .

Each section contains up to two headings, and at least one **Content** block*.*

**Content**: which represents the content in a given section. Content blocks contain _primary text, secondary text, an image, and up to two links._ How these content fields are rendered depends on the type of Section (e.g. which component) they belong to.

## Customization

### Typography, colors, and layout

To customize the built-in components' typography, colors, and layout, shadow the `variables.module.css` file by creating a file in your site with this path:

```sh
src/gatsby-theme-landing-page/styles/variables.module.css
```

The components use CSS Modules with CSS custom properties that can be customized.

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

**Note:** when shadowing files, you may need to clear cache by running `gatsby clean` and restart your Gatsby development server to see new shadow files.

These custom properties are scoped to the pages created by the theme and should not leak out to existing pages on your site.
To reuse the same CSS custom properties across your site, add a file similar to the one above to your site with a selector on an HTML element that will wrap the theme, such as your site's layout component.

To completely ignore the default CSS custom properties defined in the theme, add a blank CSS rule with the `.root` selector to your shadowed file.

```css
/* example src/gatsby-theme-landing-page/styles/variables.module.css */
/* this will disable all built-in custom properties */
.root {
}
```

### Section components

There are 6 components available:

- **Hero**: A two-column component with headings, an image, and CTA links. Intended to state the purpose of the landing page.
- **Copy**: Long form text with blockquotes and full-column images, best for articles and instructions.
- **CallToAction**: Centered text with CTA links
- **Features**: large section with image and text side-by-side, often used to list features of a product offering
- **Benefits**: Tiled cards, often used to list the benefits of a given offering.
- **Testimonial** Centered text with separate sections for quote and author, often used for social proof.

To customize any of the built-in section components, add components to your site's `src/gatsby-theme-landing-page/sections` directory. For example, to create a custom Hero section component, create a file at the following path:

```sh
src/gatsby-theme-landing-page/sections/hero.js
```

```js
// example src/gatsby-theme-landing-page/sections/hero.js
import * as React from "react";
import { Link } from "gatsby";
import { MarkdownText } from "gatsby-theme-landing-page";

export default function MyHero(props) {
  return (
    <section>
      <h1>{props.heading}</h1>
      <h2>{props.secondaryHeading}</h2>
      {props.content.map((item) => (
        <div key={item.id}>
          <MarkdownText {...item.primaryText} />
          <MarkdownText {...item.secondaryText} />
          <div>
            {item.links.map((link) => (
              <Link key={link.id} to={link.href}>
                {link.text}
              </Link>
            ))}
          </div>
        </div>
      ))}
    </section>
  );
}
```

### Adding new section components

To add new section components, you can shadow the main section component `index.js` file by creating a file at the following path:

```sh
src/gatsby-theme-landing/page/components/index.js
```

```js
// example src/gatsby-theme-landing/page/components/index.js
export {
  Hero,
  Features,
  Copy,
  CallToAction,
  Benefits,
  Testimonials,
  NewsletterForm, // example new section component
} from "../../components/custom-landing-page-components";
```

When adding new custom components, be sure to update your Contentful space's content model to reflect these changes by ensuring the LandingPageSection's _Component_ filed validation includes all possible options.

![contentful component validation](https://user-images.githubusercontent.com/1227297/145876531-b0658f9c-b6ed-428a-be99-1cd29029f0a6.png)

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

### Buttons, links, and other components

To custom any of the built-in components used within sections, including headings, links, and buttons, add components to your site's `src/gatsby-theme-landing-page/components` directory.
For example, to create a custom Button component, create a file at the following path:

```sh
src/gatsby-theme-landing-page/components/button.js
```

```js
// example src/gatsby-theme-landing-page/components/button.js
import * as React from "react";
import { Link } from "gatsby";

export default function Button(props) {
  return <Link to={props.href}>{props.text}</Link>;
}
```

### Using other styling libraries

If you'd like to use another styling library instead of CSS Modules, shadow the components as shown above and ensure your site is configured to use whatever styling solution you choose.
Be sure to shadow `src/gatsby-theme-landing-page/styles/variables.module.css` with a blank CSS rule as well to disable the top-level styles of the landing pages created by the theme.

<!-- TODO add Emotion/etc. example -->
<!-- TODO consider simpler way to disable default styles -->
