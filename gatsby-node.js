/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

// You can delete this file if you're not using it

// to make react-helmet chunk so it is made just once and used multiple times
// instead of adding it in every SEO component
// exports.onCreateWebpackConfig = ({ stage, actions, getConfig }) => {
//   if (stage === `build-javascript`) {
//     const config = getConfig()

//     // Optimize the default code splitting config by putting heavy things
//     // that changes independently on separate bundles
//     config.optimization.splitChunks.cacheGroups = {
//       ...config.optimization.splitChunks.cacheGroups,
//       helmet: {
//         // test: /[\\/]node_modules[\\/]/,
//         test: /[\\/]node_modules[\\/]react-helmet[\\/]/,
//         enforce: true,
//         chunks: "all",
//         priority: 1,
//       },
//     }
//     // Ensure Gatsby does not do any css code splitting
//     // config.optimization.splitChunks.cacheGroups.styles.priority = 10

//     actions.replaceWebpackConfig(config)
//   }
// }
