module.exports = {
  siteMetadata: {
    title: 'BogdanLazar.com'
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-catch-links',
    'gatsby-plugin-styled-components',
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
    'gatsby-transformer-remark',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'BogdanLazar.com',
        short_name: 'BogdanLazar',
        start_url: '/',
        background_color: '#efda5a',
        theme_color: '#383d3d',
        display: 'minimal-ui',
        icons: [
          {
            src: '/favicons/icon-72x72.png',
            sizes: '72x72',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-96x96.png',
            sizes: '96x96',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-128x128.png',
            sizes: '128x128',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-144x144.png',
            sizes: '144x144',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-152x152.png',
            sizes: '152x152',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-192x192.png',
            sizes: '192x192',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-384x384.png',
            sizes: '384x384',
            type: 'image/png'
          },
          {
            src: '/favicons/icon-512x512.png',
            sizes: '512x512',
            type: 'image/png'
          }
        ]
      }
    }
  ]
};
