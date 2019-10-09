import React from "react"
import "./Navbar.css"
import { Link } from "gatsby"
import { FacebookSquare } from "styled-icons/fa-brands"
import { Linkedin } from "styled-icons/fa-brands"

const Navbar = ({ siteName }) => {
  // const wideNav = document.getElementById("wide-nav")
  let handleSidebar = () => {
    let sidebarNav = document.getElementById("sidebar-nav")
    let navToggle = document.getElementById("nav-toggle")
    // sidebarNav.classList.toggle("display-flex")
    navToggle.classList.toggle("animate-toggle")
    sidebarNav.classList.toggle("active")

    // wideNav.style.display = "none"
  }

  return (
    // <Fragment>
    <nav
      style={{
        display: "flex",
      }}
    >
      <h1 style={{ margin: 0, fontSize: "1.25rem" }}>
        <Link
          to="/"
          style={{
            color: `rgba(255, 255, 255, 0.8)`,
            textDecoration: `none`,
          }}
        >
          {siteName}
        </Link>
      </h1>
      <ul
        id="wide-nav"
        style={{
          margin: "0 0 0 auto",
          width: "50%",
          height: "100%",
          justifyContent: "space-around",
          alignItems: "center",
          listStyle: "none",
          display: "flex",
          // background: "lightcoral",
          // marginLeft: "auto",
          fontFamily: "Lato, sans-serif",
          fontSize: "1.1rem",
          fontWeight: "bold",
          // fontFamily: "Raleway",
        }}
      >
        <li style={{ marginBottom: 0 }}>
          <Link
            className="nav-link"
            to="/"
            style={{
              textDecoration: "none",
            }}
          >
            Home
          </Link>
        </li>
        <li style={{ marginBottom: 0 }}>
          <Link
            className="nav-link"
            to="/#products"
            style={{
              textDecoration: "none",
            }}
          >
            Products
          </Link>
        </li>
        <li style={{ marginBottom: 0 }}>
          <Link
            className="nav-link"
            to="/#about"
            style={{
              textDecoration: "none",
            }}
          >
            About
          </Link>
        </li>
        <li style={{ marginBottom: 0 }}>
          <Link
            className="nav-link"
            to="/#contact"
            style={{
              textDecoration: "none",
            }}
          >
            Contact
          </Link>
        </li>
      </ul>
      <button
        id="nav-toggle"
        aria-label="Navigation Menu Button"
        onClick={handleSidebar}
      >
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </button>
      <div id="sidebar-nav">
        <Link to="/" onClick={handleSidebar} style={{ textDecoration: "none" }}>
          HOME
        </Link>
        <Link
          to="/#products"
          onClick={handleSidebar}
          style={{ textDecoration: "none" }}
        >
          PRODUCTS
        </Link>
        <Link
          to="/#about"
          onClick={handleSidebar}
          style={{ textDecoration: "none" }}
        >
          ABOUT
        </Link>
        <Link
          to="/#contact"
          onClick={handleSidebar}
          style={{ textDecoration: "none" }}
        >
          CONTACT
        </Link>
        <a
          id="facebook-link"
          href="https://www.facebook.com/saiindiagypsum/"
          aria-label="Check out Sai India Gypsum on Facebook"
        >
          <FacebookSquare
            id="facebook"
            style={{
              color: "#addfff",
              margin: 0,
              padding: 0,
              width: "2rem",
              height: "2rem",
            }}
            size="2rem"
            title="Sai India Gypsum on Facebook"
          />
        </a>
        <a
          id="linkedin-link"
          href="https://www.linkedin.com/in/sai-india-gypsum-pvt-ltd-9652a128/"
          aria-label="Check out Sai India Gypsum on LinkedIn"
        >
          <Linkedin
            id="linkedin"
            style={{
              color: "#addfff",
              margin: 0,
              padding: 0,
              width: "2rem",
              height: "2rem",
            }}
            size="2rem"
            title="Sai India Gypsum on LinkedIn"
          />
        </a>
        <p
          style={{
            fontFamily: "Raleway",
            fontWeight: "normal",
            display: "block",
            borderTop: "1px solid #dddddd",
            borderBottom: "1px solid #dddddd",
            color: "#dddddd",
            position: "absolute",
            left: 0,
            right: 0,
            margin: "auto",
            bottom: "10%",
            fontSize: "1.1rem",
            padding: "0.5rem",
          }}
        >
          Sai India Gypsum
        </p>
      </div>
    </nav>
    //</Fragment>
  )
}

export default Navbar
