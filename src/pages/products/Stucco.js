import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"

const Stucco = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
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
                <td>Max 740</td>
              </tr>
              <tr>
                <td>
                  Wet Bulk Density (kg/m<sup>3</sup>)
                </td>
                <td>1600-1650</td>
              </tr>
              <tr>
                <td>Initial Setting Time</td>
                <td>10-16 Mins.</td>
              </tr>
              <tr>
                <td>Coverage</td>
                <td>18-20 Sqft. Per 25 Kg Bag</td>
              </tr>

              <tr>
                <td>Surface</td>
                <td>Smooth</td>
              </tr>

              <tr>
                <td>Workability</td>
                <td>Easy</td>
              </tr>
              <tr>
                <td>
                  Compressive Strength (N/mm<sup>2</sup>)
                </td>
                <td>2-4.5</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default Stucco
