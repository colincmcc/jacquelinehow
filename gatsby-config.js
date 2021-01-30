/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/gatsby-config/
 */

module.exports = {
  /* Your site config here */
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        path: `${__dirname}/cards`,
        name: 'cards'
      }
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 512
            }
          },
          'gatsby-remark-smartypants'
        ]
      }
    },
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-styled-component',
    'gatsby-plugin-remove-trailing-slashes'
  ],
}
