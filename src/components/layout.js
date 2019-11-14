/**
 * Layout component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
// import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"

import Header from "./header"
import Footer from "./Footer/Footer"

import "./layout.css"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      {/* <div
        className="app-container"
        style={{
          // height: "100vh",
          position: "relative",
          overflow: "hidden",
        }}
      > */}
      <Header siteTitle={data.site.siteMetadata.title} />
      {/* </div> */}
      {/* <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          // padding: `0px 1.0875rem 1.45rem`,
          padding: `0px 1.0875rem `,
          paddingTop: 0,
        }}
      > */}
      <main>{children}</main>
      <Footer></Footer>
      {/* </div> */}

      {/* <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a>
      </footer> */}
    </>
  )
}

// Layout.propTypes = {
//   children: PropTypes.node.isRequired,
// }

export default Layout
