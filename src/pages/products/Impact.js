import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"

const Impact = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">SIG - Impact Resistant Boards</h4>

          <p className="product-intro">
            SIG Impact Resistant Board is produced from high purity natural
            gypsum core being sheeted in closely adhering paper liners. SIG IR
            is produced in compliance to ASTM C1396 and EN 520 standards and
            tested in accordance to ASTM C1629. SIG IR is tested and certified
            by leading third party laboratories. SIG IR is produced in wide
            variety of length, width, thickness and edge types to cover the
            entire spectrum of the requirement.
          </p>

          <p className="product-intro">
            SIG IR boards have high density gypsum core with glass fibers and
            special additives in strong paper liners to provide high impact
            rating. SIG IR is used in areas subject to crowd pressure and impact
            damage such as corridors and circulation areas in residencies,
            hospitals, educational institutions, airports, etc.
          </p>
          <p className="product-intro">
            SIG IR is laminated with yellow paper lining on board face and grey
            paper on the back. It is high performance special plasterboard
            designed for systems for high impact resistance.
          </p>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Details</h5>

          <table
            className="table imp1"
            style={{
              textAlign: "center",
              background: "white",
            }}
          >
            <thead className="thead">
              <tr>
                <th style={{ textAlign: "center" }} scope="col">
                  Length (mm)
                </th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Standard 1830</td>
              </tr>
              <tr>
                <td>Can produce Between 1800 - 3000</td>
              </tr>

              <tr>
                <th scope="col">Width (mm)</th>
              </tr>

              <tr>
                <td>Standard 1220</td>
              </tr>
              <tr>
                <td>Can Produce Between 1200 – 1220</td>
              </tr>

              <tr>
                <th scope="col">Thickness (mm)</th>
              </tr>

              <tr>
                <td>Standard 12.5mm</td>
              </tr>
              <tr>
                <td>On request: 9.5/15/16</td>
              </tr>
              <tr>
                <th scope="col">Edge</th>
              </tr>
              <tr>
                <td>Tapered</td>
              </tr>
              <tr>
                <th scope="col">Colour</th>
              </tr>
              <tr>
                <td>Face: Yellow, Back: Grey</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Product Attributes and Benefits</h5>
          <table
            style={{
              textAlign: "center",
            }}
            className="responsive table imp2"
          >
            <caption>Properties (Per 12.5mm)</caption>
            <thead className="thead-dark">
              <tr
                style={{
                  textAlign: "center",
                }}
              >
                <th scope="col">Properties</th>
                <th scope="col">SIG - IR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Thickness (mm)</td>
                <td>&plusmn; 0.3</td>
              </tr>
              <tr>
                <td>Length (mm)</td>
                <td>0 to -4</td>
              </tr>
              <tr>
                <td>Width (mm)</td>
                <td>0 to -3</td>
              </tr>
              <tr>
                <td>Squareness</td>
                <td>&le; 2</td>
              </tr>
              <tr>
                <td>Flexural Strength (N) Longitudinal</td>
                <td>&ge; 732</td>
              </tr>

              <tr>
                <td>Flexural Strength (N) Transverse</td>
                <td>&ge; 410</td>
              </tr>

              <tr>
                <td>Nail Pull (N)</td>
                <td>&ge; 565</td>
              </tr>
              <tr>
                <td>
                  Weight (kg/m<sup>2</sup>) &plusmn; 0.2
                </td>
                <td>12.87</td>
              </tr>
              <tr>
                <td>
                  Min. Board Density (kg/m<sup>3</sup>)
                </td>
                <td>1029</td>
              </tr>
              <tr>
                <td>Eco Friendly</td>
                <td>Wood Substitute</td>
              </tr>

              <tr>
                <td>Weather Resistance</td>
                <td>Withstands cyclic weather changes</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default Impact
