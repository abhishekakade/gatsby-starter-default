module.exports = {
  siteMetadata: {
    title: `Sai India Gypsum`,
    description: `Sai India Gypsum`,
    author: `Abhishek K.`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: "Sai India Gypsum",
        short_name: "Sai India Gypsum",
        start_url: `/`,
        background_color: "#191970",
        theme_color: "#191970",
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
        // An optional attribute which provides support for CORS check.
        // If you do not provide a crossOrigin option, it will skip CORS for manifest.
        // Any invalid keyword or empty string defaults to `anonymous`
        crossOrigin: `use-credentials`,
      },
    },

    "gatsby-plugin-offline",

    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline

    {
      resolve: `gatsby-plugin-purgecss`,
      options: {
        printRejected: false,
        develop: false,
      },
    },
    {
      resolve: `gatsby-plugin-csp`,
      options: {
        disableOnDev: false,
        reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
        mergeScriptHashes: true, // you can disable scripts sha256 hashes
        mergeStyleHashes: true, // you can disable styles sha256 hashes
        mergeDefaultDirectives: true,
        directives: {
          "script-src":
            "'self' https://www.google-analytics.com https://ssl.google-analytics.com",
          "style-src": "'self' 'unsafe-inline'",
          "img-src": "'self' https://www.google-analytics.com",
          "connect-src":
            "http://localhost:8000/ https://nifty-northcutt-76b275.netlify.com https://www.google-analytics.com",
          // you can add your directives or override defaults
        },
      },
    },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-150903998-1",
        head: false,
      },
    },
    "gatsby-plugin-netlify",
  ],
}
