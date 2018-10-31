module.exports = {
  siteMetadata: {
    title: "Bader Kanawati",
    author: "Hunter Chang",
    description: ""
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        // This path is relative to the root of the site.
        icons: [
          {
          src: `/src/images/abstract.png`,
          sizes: `512x512`,
          type: `image/png`
        ]
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline'
  ],
}
