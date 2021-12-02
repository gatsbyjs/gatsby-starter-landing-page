// theme config
module.exports = (opts = {}) => {
  return {
    plugins: [
      "gatsby-plugin-image",
      {
        resolve: "gatsby-source-contentful",
        options: {
          ...opts,
        },
      },
      `gatsby-plugin-image`,
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`, // Needed for dynamic images
      {
        resolve: `gatsby-transformer-remark`,
        options: {
          footnotes: true,
          gfm: true,
          plugins: [],
        },
      },
    ],
  };
};
