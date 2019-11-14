import React from "react"
import "./Footer.css"
import { Phone } from "styled-icons/icomoon"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>&nbsp;&nbsp;<strong>|</strong>
      &nbsp;&nbsp;
      <Link to="/#products">Products</Link>
      <p
        style={{
          color: "#bbbbee",
          padding: "1rem",
          lineHeight: "1.75",
        }}
      >
        Get a Quote:
        <a
          className="contact-number"
          href="tel:+91-9004899758"
          style={{
            color: "#bbbbee",
            fontSize: "1rem",
            fontWeight: "bold",
            textDecoration: "underline",
          }}
        >
          <br />
          <Phone className="phone" />
          +91-9004899758
          {/* <span></span> */}
        </a>
      </p>
      <p
        style={{
          fontSize: "0.9rem",
        }}
      >
        &copy; 2019 by Sai India Gypsum Products Private Limited​
      </p>
    </footer>
  )
}

export default Footer
