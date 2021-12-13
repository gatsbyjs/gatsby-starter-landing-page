require("dotenv").config();

// starter config
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
