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

    // {
    //   resolve: `gatsby-plugin-prefetch-google-fonts`,
    //   options: {
    //     fonts: [
    //       {
    //         family: "Lato",
    //         unicodeRange: "U+000-5FF",
    //         subsets: [`latin`],
    //         fontDisplay: "swap",
    //       },
    //       {
    //         family: "Raleway",
    //         unicodeRange: "U+000-5FF",
    //         subsets: [`latin`],
    //         variants: [`400`, `800`],
    //         fontDisplay: "swap",
    //       },
    //     ],
    //   },
    // },

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
    "gatsby-plugin-netlify",
  ],
}
