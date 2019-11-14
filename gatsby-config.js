module.exports = {
  siteMetadata: {
    lang: "en",
    title: `Sai India Gypsum Products Private Limited`,
    titleTemplate: "%s | Sai India Gypsum",
    description: `Sai India Gypsum is a trusted supplier of best quality gypsum boards, gypsum powder, drywall & other gypsum products in India.`,
    image: "/images/gatsby-icon.png",
    url: "https://www.saiindiagypsum.com", // no trailing slash!
    author: "Abhishek K.",
    siteUrl: "https://www.saiindiagypsum.com",
    owner: "Sai India Gypsum Private Limited",
    socialLinks: {
      facebook: "https://www.facebook.com/saiindiagypsum/",
      linkedin:
        "https://www.linkedin.com/in/sai-india-gypsum-pvt-ltd-9652a128/",
    },
    keywords: [""],
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
        name: "Sai India Gypsum Private Limited",
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
    // {
    //   resolve: `gatsby-plugin-csp`,
    //   options: {
    //     disableOnDev: false,
    //     reportOnly: false, // Changes header to Content-Security-Policy-Report-Only for csp testing purposes
    //     mergeScriptHashes: true, // you can disable scripts sha256 hashes
    //     mergeStyleHashes: true, // you can disable styles sha256 hashes
    //     mergeDefaultDirectives: true,
    //     directives: {
    //       "script-src":
    //         "'self' https://www.google-analytics.com https://ssl.google-analytics.com",
    //       "style-src": "'self' 'unsafe-inline'",
    //       "img-src": "'self' https://www.google-analytics.com",
    //       "connect-src":
    //         "http://localhost:8000/ https://nifty-northcutt-76b275.netlify.com https://www.google-analytics.com",
    //       // you can add your directives or override defaults
    //     },
    //   },
    // },
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        trackingId: "UA-145166770-1",
        head: false,
      },
    },
    "gatsby-plugin-netlify",
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/some-other-sitemap.xml`,
        // Exclude specific pages or groups of pages using glob parameters
        // See: https://github.com/isaacs/minimatch
        // The example below will exclude the single `path/to/page` and all routes beginning with `category`
        exclude: ["/404"],
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`,
        serialize: ({ site, allSitePage }) =>
          allSitePage.edges.map(edge => {
            return {
              url: site.siteMetadata.siteUrl + edge.node.path,
              changefreq: `daily`,
              priority: 0.7,
            }
          }),
      },
    },
    "gatsby-plugin-webpack-bundle-analyser-v2",
  ],
}
