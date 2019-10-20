import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"

const Convex = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">Rexon – Convex</h4>

          <p className="product-intro">
            <strong>Convex</strong> is our Premium Offering in Gypsum Powders.
            The distinguished advantage of Convex is that it is pure white in
            colour and offers hardness superior to other gypsum plasters.
          </p>
          <p className="product-intro">
            Designed to be applied by hand up to 15mm thickness, Convex delivers
            a professional crack free finishing ready for painting, it enhances
            the light reflectance, imparts true colour tone and gloss for Paint.
            With easy trowelling and application and without requiring any
            curing, Convex achieves great results with minimal efforts and
            waste, can be applied directly on brick, block and RCC.
          </p>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Specifications</h5>
          <table
            style={{
              textAlign: "center",
            }}
            className="table"
          >
            <thead className="thead-dark">
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <th scope="col">Properties</th>
                <th scope="col">Details</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Colour</td>
                <td>Pure White</td>
              </tr>
              <tr>
                <td>
                  Dry loose Bulk Density(kg/m<sup>3</sup>)
                </td>
                <td>Max 770</td>
              </tr>
              <tr>
                <td>
                  Wet Bulk Density (kg/m<sup>3</sup>)
                </td>
                <td>1650-1750</td>
              </tr>
              <tr>
                <td>Initial Setting Time</td>
                <td>6-10 Mins.</td>
              </tr>
              <tr>
                <td>Coverage</td>
                <td>20-22 Sqft. Per 25 Kg Bag</td>
              </tr>

              <tr>
                <td>Surface</td>
                <td>Smooth</td>
              </tr>

              <tr>
                <td>Workability</td>
                <td>Easy</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default Convex
