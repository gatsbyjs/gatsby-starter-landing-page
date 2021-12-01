// theme config
module.exports = (opts = {}) => {
  return {
    plugins: [
      'gatsby-plugin-image',
      {
        resolve: 'gatsby-source-contentful',
        options: {
          ...opts
        }
      },
    ]
  }
}
