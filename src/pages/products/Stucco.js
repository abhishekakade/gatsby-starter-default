import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"
import { CheckSquare, PlusSquare } from "styled-icons/fa-solid"

const Stucco = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h1 className="product-page-header">SIG - Plasters</h1>
          <h2 className="product-page-subtitle">SIG – Stucco </h2>

          <p className="product-intro">
            <strong>SIG – Stucco</strong> delivers beautiful and quality
            cornices and decorations. SIG Stucco is perfect for creation of
            refined textures and smooth surfaces that are free of cracks and
            chip. SIG – Stucco creates healthy and aesthetic ambiance.
          </p>
          <p className="product-intro">
            Designed to be applied by hand up to 13mm thickness, Stucco delivers
            a professional crack free finishing ready for painting, and it
            enhances the light reflectance, imparts true color tone and gloss
            for Paint. With easy trowelling and application and without
            requiring any curing, Stucco achieves excellent results with minimal
            efforts and waste, can be applied directly on brick, block and RCC.
          </p>
        </section>

        <section className="container-div">
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
                Features
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
            {/* </section> */}

            {/* <section className= "container-div"> */}
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
                  Durable and Long-Lasting
                </li>
                <li className="list-group-item">
                  <PlusSquare className="plussquare" size="1rem" />
                  Maintenance Free
                </li>
              </ul>
            </div>
          </div>
        </section>
      </article>
    </Layout>
  )
}

export default Stucco
