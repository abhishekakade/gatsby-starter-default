import React from "react"
import "./Footer.css"
import { Phone } from "styled-icons/icomoon"
import { Link } from "gatsby"
const Footer = () => {
  return (
    <footer>
      <Link to="/">Home</Link>&nbsp;|&nbsp;<Link to="/#products">Products</Link>
      <Link>
        <p
          style={{
            padding: "0.5rem",
            textDecoration: "underline",
          }}
        >
          <a
            className="contact-number"
            href="tel:+91-9004899758"
            style={{
              color: "#ddddff",
              fontSize: "1.1rem",
              fontWeight: "bold",
            }}
          >
            Get a Quote:
            <Phone
              className="phone"
              style={{
                color: "dodgerblue",
                border: "0.15rem solid dodgerblue",
                borderRadius: "10px",
                padding: "0.2rem",
                width: "2rem",
                height: "2rem",
                fontSize: "1.35rem",
                margin: "auto 0.5rem",
              }}
            />
            +91-9004899758
            {/* <span></span> */}
          </a>
        </p>
      </Link>
      <p>© 2019 by Sai India Gypsum Products Private Limited​</p>
    </footer>
  )
}

export default Footer
