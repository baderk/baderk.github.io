module.exports = {
  siteMetadata: {
    title: "Bader Kanawati",
    author: "",
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
        icon: "src/images/abstract.png",
      },
    },
    {
      resolve: `gatsby-source-instagram`,
      options: {
        username: `baderkanawati`,
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-88049161-2",
        // Puts tracking script in the head instead of the body
        head: true,
        // Setting this parameter is optional
        anonymize: false,
        // Setting this parameter is also optional
        respectDNT: true,
        // Avoids sending pageview hits from custom paths
        exclude: ["/preview/**", "/do-not-track/me/too/"],
        // Enables Google Optimize using your container Id
        optimizeId: "YOUR_GOOGLE_OPTIMIZE_TRACKING_ID",
        // Any additional create only fields (optional)
        sampleRate: 5,
        siteSpeedSampleRate: 10,
        cookieDomain: "baderkanawati.com",
      },
    },
    {
      resolve: `gatsby-transformer-sharp`
    },
    {
      resolve: `gatsby-source-filesystem`,
        options: {
          name: `image`,
          path: `${__dirname}/src/images/`,
        }
    },
  //   {
  //   resolve: `gatsby-plugin-google-tagmanager`,
  //   options: {
  //     id: "GTM-MZ2CQ8Z",

  //     // Include GTM in development.
  //     // Defaults to false meaning GTM will only be loaded in production.
  //     includeInDevelopment: false,

  //     // Specify optional GTM environment details.
  //     gtmAuth: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_AUTH_STRING",
  //     gtmPreview: "YOUR_GOOGLE_TAGMANAGER_ENVIROMENT_PREVIEW_NAME",
  //   },
  // },


    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    // 'gatsby-plugin-sharp',
    'gatsby-transformer-sharp'

  ],
}
