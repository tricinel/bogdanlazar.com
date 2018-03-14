module.exports = {
  siteMetadata: {
    title: 'BogdanLazar.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    {
      resolve: 'gatsby-plugin-typography',
      options: {
        pathToConfigModule: 'src/utils/typography.js'
      }
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/content/now`,
        name: 'markdown-content-now'
      }
    },
    'gatsby-transformer-remark'
  ]
};
