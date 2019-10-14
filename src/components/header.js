import PropTypes from "prop-types"
import React from "react"
import Navbar from "../components/Navbar/Navbar"

// sky blue #ADDFFF
// white #EEEEEE
// deepskyblue
// dodgerblue

const Header = ({ siteTitle }) => (
  <header
    style={{
      background: "rgba(0, 70, 143, 0.95)",
      // background: "rgba(0, 70, 143, 0)",
      padding: "0.5rem 1rem",
      position: "fixed",
      width: "100%",
      zIndex: "2",
      // marginBottom: `1rem`,
    }}
  >
    <Navbar siteName={siteTitle}></Navbar>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
