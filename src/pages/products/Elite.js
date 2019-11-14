import React from "react"
import Layout from "../../components/layout"
import SEO from "../../components/seo"
import "../../components/Products/Products.css"

const Elite = () => {
  return (
    <Layout>
      <SEO title="Elite Plaster" description="SIG - Elite Plaster" />
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">SIG – Elite</h4>

          <p className="product-intro">
            <strong>SIG – Elite</strong> comes with empowered formulation that
            delivers thermal insulating and fire resisting properties that can
            help you save energy costs and protect your living and working
            environment.
          </p>

          <p className="product-intro">
            Designed to be applied by hand up to 15mm thickness, SIG – Elite +
            delivers a professional crack free finishing ready for painting, it
            enhances the light reflectance, imparts true colour tone and gloss
            for Paint. With easy trowelling and application and without
            requiring any curing, SIG – Elite + achieves great results with
            minimal efforts and waste, can be applied directly on brick, block
            and RCC.
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
                <td>Off White</td>
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
                <td>1600-1750</td>
              </tr>
              <tr>
                <td>Initial Setting Time</td>
                <td>12-20 Mins.</td>
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

export default Elite
