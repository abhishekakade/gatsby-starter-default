import React from "react"
import { CheckSquare, PlusSquare } from "styled-icons/fa-solid"
import Layout from "../components/layout"
import { Link } from "gatsby"
import "../components/Products/Products.css"

const Plasters = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h1 className="product-page-header">Gypsum Plasters</h1>
          <h2 className="product-page-subtitle">SIG - Plasters</h2>

          <p className="product-intro">
            <strong>SIG - Plasters</strong> are made with 100% Natural Gypsum,
            are easy to use and cost-effective.
          </p>

          <div
            className="main-list-container"
            style={{
              display: "flex",
              flexWrap: "wrap",
              alignItems: "center",
              justifyContent: "center",
              // negative marginTop to negate the top margin on list-container divs
              marginTop: "-1rem",
            }}
          >
            <div
              className="list-container"
              style={{
                display: "inline-block",
                margin: "1rem",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <h5
                className="product-subtitle"
                style={{
                  background: "black",
                  color: "#dddddd",
                  margin: 0,
                  padding: "0.5rem",
                }}
              >
                Features of SIG Plasters
              </h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  More Strength than Traditional Plasters
                </li>
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  Delivers High-Quality Finishing
                </li>
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  Protects Against Fire
                </li>
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  No Shrinkage and No Cracks
                </li>
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  High Strength Bonding
                </li>
                <li className="list-group-item">
                  <CheckSquare className="checksquare" size="1rem" />
                  No Water Curing Required
                </li>
              </ul>
            </div>

            <div
              className="list-container"
              style={{
                display: "inline-block",
                margin: "1rem",
                border: "2px solid black",
                borderRadius: "5px",
              }}
            >
              <h5
                className="product-subtitle"
                style={{
                  background: "black",
                  color: "#dddddd",
                  margin: 0,
                  padding: "0.5rem",
                }}
              >
                Advantages
              </h5>
              <ul className="list-group">
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Saves Costs and Covers more area
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Easy to Apply and Paint
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Provides Thermal and Acoustic Insulation
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Eco-Friendly and Sustainable
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Produced with Natural gypsum
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Fire Resistance
                </li>
              </ul>
            </div>
          </div>

          <h3
            className="product-title"
            style={{
              fontSize: "1.35rem",
              color: "royalblue",
              marginTop: "2rem",
            }}
          >
            Products Available in Plasters
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
              <h4>Rexon Convex</h4>
              <p className="classification-product-intro">
                The distinct advantage of Rexon Convex is that it is pure white
                in color and offers hardness superior to other gypsum plasters.
              </p>
              <Link to="/products/Convex">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Elite</h4>
              <p className="classification-product-intro">
                SIG – Elite comes with thermal insulating and fire-resisting
                properties that help you save energy costs and protect your
                living and working environment.
              </p>
              <Link to="/products/Elite">
                <button className="classification-product-button">
                  More Details
                </button>
              </Link>
            </li>
            <li>
              <h4>Stucco</h4>
              <p className="classification-product-intro">
                Stucco is perfect for the creation of refined textures and
                smooth surfaces that are free of cracks and chip. Stucco creates
                healthy and aesthetic ambiance.
              </p>
              <Link to="/products/Stucco">
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

export default Plasters
