import React from "react"
import "./Homepage.css"
const Homepage = () => {
  return (
    <ul
      className="carousel"
      style={{
        marginLeft: 0,
        height: "100vh",
        width: "100vw",
      }}
    >
      <li>
        <span>Image 01</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>SAI INDIA GYPSUM</p>
            <p>
              A Leading Manufacturer, Supplier and Exporter of Gypsum Products.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 02</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>COMPREHENSIVE RANGE</p>
            <p>
              A wide range of Gypsum products available to suit all your needs.
            </p>
          </div>
        </div>
      </li>
      <li>
        <span>Image 03</span>
        <div className="image-text">
          <div
            className="row"
            style={{
              textAlign: "right",
            }}
          >
            <p>QUALITY ASSURANCE</p>
            <p>
              Products formulated using high-grade raw material procured from
              trustworthy vendors.
            </p>
          </div>
        </div>
      </li>
    </ul>
  )
}

export default Homepage
