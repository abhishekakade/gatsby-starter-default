import React from "react"
import "../components/Products/Products.css"

import Layout from "../components/layout"
import { Link } from "gatsby"

const Gypsum_Boards = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h1 className="product-page-header">Plasterboards (Gypsum Boards)</h1>
          <h2 className="product-page-subtitle">SIG - PlasterBoards</h2>

          <p className="product-intro">
            <strong>SIG - Plasterboards</strong> are ultimate wall and ceiling
            solutions for today's buildings, providing high levels of
            performance in terms of
            <em>
              &nbsp;fire rating, acoustic insulation, thermal insulation,
              moisture resistance and impact resistance.&nbsp;
            </em>
            Our Plasterboards are durable, easy-to-shape and cost-efficient, are
            flexible and lightweight; the most practical way of construction in
            today's and tomorrow's homes, offices, Hospitals and buildings.
          </p>

          <h3
            className="product-title"
            style={{
              fontSize: "1.35rem",
              color: "royalblue",
            }}
          >
            Products Available in PlasterBoards
          </h3>

          <ul
            className="classification-list"
            style={{
              listStyle: "none",
              fontSize: "1.2rem",
              display: "flex",
              padding: "1rem",
            }}
          >
            <li>
              <h4>Premium Gypsum Boards</h4>
              <Link to="/products/Premium">More Details</Link>
            </li>
            <li>
              <h4>Moisture Resistant Gypsum Boards</h4>
              <Link to="/products/MoistureResistant">More Details</Link>
            </li>
            <li>
              <h4>Fire Resistant Gypsum Boards</h4>
              <Link to="/products/FireResistant">More Details</Link>
            </li>
            <li>
              <h4>Moisture & Fire Resistant Gypsum Boards</h4>
              <Link to="/products/MFR">More Details</Link>
            </li>
            <li>
              <h4>Impact Gypsum Boards</h4>
              <Link to="/products/Impact">More Details</Link>
            </li>
            <li>
              <h4>Regular Gypsum Boards</h4>
              <Link to="/products/RegularBoards">More Details</Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Gypsum_Boards
