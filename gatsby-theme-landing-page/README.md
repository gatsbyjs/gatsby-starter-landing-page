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

   const contentfulConfig = {
     spaceId: process.env.CONTENTFUL_SPACE_ID,
     accessToken: process.env.CONTENTFUL_DELIVERY_ACCESS_TOKEN,
   };

   // Use preview env vars in development
   if (
     process.env.NODE_ENV === "development" &&
     !!process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN
   ) {
     contentfulConfig.accessToken = process.env.CONTENTFUL_PREVIEW_ACCESS_TOKEN;
     contentfulConfig.host = process.env.CONTENTFUL_HOST;
   }

   module.exports = {
     plugins: [
       {
         resolve: "gatsby-theme-landing-page",
         options: contentfulConfig,
       },
     ],
   };
   ```

3. **Create a `.env` file with your Contentful space ID and API keys.**

   ```sh
   # .env
   CONTENTFUL_SPACE_ID="<SPACE_ID>"
   CONTENTFUL_DELIVERY_ACCESS_TOKEN="<ACCESS_TOKEN>"
   # Optional env vars for use with Contentful Preview API
   CONTENTFUL_PREVIEW_ACCESS_TOKEN="<ACCESS_TOKEN>"
   CONTENTFUL_HOST="preview.contentful.com"
   ```

4. **Import the content model to your Contentful space**

   - Install the [Contentful CLI (installation instructions)](https://www.contentful.com/developers/docs/tutorials/cli/installation/)

   - Download [the Landing Page content model JSON](https://github.com/gatsbyjs/gatsby-starter-landing-page/blob/import-script/.contentful/landing-page-model-and-content.json) to a local directory

   - From that directory, run the following command:

   ```sh
   contentful space import --content-model-only --config landing-page-model-and-content.json
   ```

   Your Contentful space will now contain the content model used by the starter. You can begin creating landing pages in Contentful!

## Content model

![content model diagram](https://user-images.githubusercontent.com/1227297/145318779-4b2cca42-4ae9-407c-b8f6-db934628c51c.png)

Each landing page is represented by a hierarchical content model:

**Landing Page**: Represents a single page and its metadata. Landing pages contain a list of content **Sections**.

**Section**: Represents a distinct section of the landing page, its layout and the content it contains. The layout of the section is determined by the **component** field. The components available as drop down options map to the components available in `src/gatsby-theme-landing-pages/src/sections` .

Each section contains up to two headings, and at least one **Content** block*.*

**Content**: which represents the content in a given section. Content blocks contain _primary text, secondary text, an image, and up to two links._ How these content fields are rendered depends on the type of Section (e.g. which component) they belong to.

## Components

### Section Components

There are 6 built-in section components available:

- **Hero**: A two-column component with headings, an image, and CTA links. Intended to state the purpose of the landing page.
- **Copy**: Long form text with blockquotes and full-column images, best for articles and instructions.
- **CallToAction**: Centered text with CTA links
- **Features**: large section with image and text side-by-side, often used to list features of a product offering
- **Benefits**: Tiled cards, often used to list the benefits of a given offering.
- **Testimonial** Centered text with separate sections for quote and author, often used for social proof.

Content authors can choose any one of these components to render a content _Section_ when creating and editing landing pages.

### Shared Components

These section components use several shared components internally for a consistent look and feel. These components are also exported for use when creating custom section components, custom layouts, or for general use.

#### `MarkdownText` Component

```jsx
// example usage
import { MarkdownText } from "gatsby-theme-landing-page";

<MarkdownText {...primaryText} />;
```

Use the `MarkdownText` component to sanitize and render rich text fields from Contentful.

**Props:**

- `childMarkdownRemark`: HTML returned from `gatsby-source-contentful`
- `as`: renders this component as a different HTML element and removes block level elements from HTML
- `className`: pass an additional HTML class attribute, which can be used for styling
- All other props are passed directly to the root element

#### `Head` Component

```jsx
// example usage
import { Head } from "gatsby-theme-landing-page";

<Head>
  <title>Example</title>
</Head>;
```

The `Head` component is a wrapper around [React Helmet][] to add page-level metadata to your pages in your site.

[react helmet]: https://www.gatsbyjs.com/docs/add-page-metadata/

**Props:**

- `title`: sets the page title, as well as Open Graph metadata
- `description`: sets the page description, as well as Open Graph metadata
- `image`: sets the Open Graph image
- `noIndex` (boolean): set this as `true` to prevent search engine indexing

#### `Link` Component

```jsx
// example usage
import { Link } from "gatsby-theme-landing-page";

<Link href="/">Home</Link>;
```

The `Link` component is a wrapper around [Gatsby Link][] with minimal styling.

[gatsby link]: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-link/

**Props:**

- `href`: URL for the link, which can handle absolute or relative links
- `children` or `text`: text or React node to render as a link

#### `Button` Component

```jsx
// example usage
import { Button } from "gatsby-theme-landing-page";

<Button href="/sign-up">Get Started</Button>;
```

The `Button` component is similar to the `Link` component, but styled to look like a call-to-action button.

**Props:**

- `href`: URL for the link, which can handle absolute or relative links
- `children` or `text`: text or React node to render as a link
- `variant`: string for button style variant, either `primary` or `secondary`

#### `Container` Component

```jsx
// example usage
import { Container } from "gatsby-theme-landing-page";

<Container>Centered content</Container>;
```

The `Container` component is used to set a max-width and center content on the page. It's used internally by the `Section` component that wraps all _Section_ components.

**Props:**

- `className`: pass an additional HTML class attribute, which can be used for styling
- All other props are passed directly to the root element.

#### `Section` Component

```jsx
// example usage
import { Section } from "gatsby-theme-landing-page";

<Section>Hello</Section>;
```

The `Section` component is used as the root element in all built-in section components, adding vertical padding and using the `Container` component to control max-width.

**Props:**

- `className`: pass an additional HTML class attribute, which can be used for styling
- All other props are passed directly to the root element.

#### `Heading` Component

```jsx
import { Heading } from "gatsby-theme-landing-page";

<Heading>Hello</Heading>;
```

The `Heading` component is used to render styled heading elements.

**Props:**

- `as`: renders this component as a different HTML element
- `secondary` (boolean): renders the heading with styles for subheadings
- `center` (boolean): sets text-align center
- `className`: pass an additional HTML class attribute, which can be used for styling
- All other props are passed directly to the root element.

## Customization

### Typography, colors, and layout

To customize the built-in components' typography, colors, and layout, shadow the `variables.module.css` file by creating a file in your site with this path:

```sh
src/gatsby-theme-landing-page/styles/variables.module.css
```

The components use [CSS Modules][] with CSS custom properties that can be customized.

[css modules]: https://www.gatsbyjs.com/docs/how-to/styling/css-modules/

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

You can read more about querying data in the [Gatsby docs](https://www.gatsbyjs.com/docs/how-to/querying-data/page-query/).

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
