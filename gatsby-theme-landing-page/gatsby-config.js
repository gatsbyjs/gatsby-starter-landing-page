// theme config
module.exports = (opts = {}) => {
  return {
    plugins: [
      {
        resolve: 'gatsby-source-contentful',
        options: {
          ...opts
        }
      },
    ]
  }
}
