import React from "react"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../components/Products/Products.css"

const Gypsum_Boards = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h1 className="product-page-header">Plasterboards (Gypsum Boards)</h1>
          <h2 className="product-page-subtitle">SIG - PlasterBoards</h2>

          <p className="product-intro">
            <strong>SIG - Plasterboards</strong> are ultimate wall and ceiling
            solutions for today's buildings, providing&nbsp;
            <em className="text-highlighter">
              &nbsp;high levels of performance in terms of fire rating, acoustic
              insulation, thermal insulation, moisture resistance and impact
              resistance.&nbsp;
            </em>
          </p>

          <p className="product-intro">
            Our Plasterboards are durable, easy-to-shape and cost-efficient, are
            flexible and lightweight; the most practical way of construction in
            today's and tomorrow's homes, offices, Hospitals and buildings.
          </p>

          <h3
            className="product-title"
            style={{
              fontSize: "1.35rem",
              color: "royalblue",
              marginTop: "2rem",
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
            }}
          >
            <li>
              <h4>Premium Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG Premium </strong>
                Gypsum Plasterboards are stronger, more fire and moisture
                resistant than other standard gypsum boards.
              </p>
              <Link to="/products/Premium">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Moisture Resistant Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG MR </strong>
                offers higher level of moisture resistance and is thus used in
                kitchens, washrooms, swimming pools, sauna, etc.
              </p>
              <Link to="/products/MoistureResistant">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Fire Resistant Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG FR </strong>
                is produced in compliance to ASTM C1396 and EN 520 standards. It
                offers higher level of fire resistance compared to Regular
                Plasterboards.
              </p>
              <Link to="/products/FireResistant">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Moisture & Fire Resistant Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG MRFR </strong>
                combines the properties of SIG FR and SIG MR Plasterboards and
                thus can be used in wide range of applications where both of the
                properties are desired.
              </p>
              <Link to="/products/MFR">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Impact Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG IR </strong>
                is used in areas subject to crowd pressure and impact damage
                such as corridors and circulation areas in residencies,
                hospitals, educational institutions, airports, etc.
              </p>
              <Link to="/products/Impact">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Regular Gypsum Boards</h4>
              <p className="classification-product-intro">
                <strong>SIG Regular </strong>
                Gypsum Plasterboard is used as a covering material for walls,
                ceilings, also in making partition walls in new building
                construction or renovation work.
              </p>
              <Link to="/products/RegularBoards">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
          </ul>
        </section>
      </article>
    </Layout>
  )
}

export default Gypsum_Boards
