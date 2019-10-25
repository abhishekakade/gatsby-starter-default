import React from "react"
import Layout from "../../components/layout"
import "../../components/Products/Products.css"

const RegularBoards = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">SIG - Regular Boards</h4>

          <p className="product-intro">
            Covered with ivory cardboard on face side and grey cardboard on the
            back side with blue edge tape,
            <strong> SIG Regular Gypsum Plasterboard</strong> is{" "}
            <em className="text-highlighter">
              used as a covering material for walls, ceilings, also in making
              partition walls in new building construction or renovation work.
            </em>
          </p>
          <p className="product-intro">
            It is designed for direct attachment by screws, nails or adhesive to
            wood or metal framing and even existing surfaces.
          </p>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Details</h5>

          <table
            className="table one-col"
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
                <td>Can produce Between 1800 - 4000</td>
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
                <td>On request: 9/9.5/12/5/15/18/19</td>
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
                <td>Face: Ivory, Back: Grey</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Specifications</h5>
          <table
            className="responsive table pb2"
            style={{
              textAlign: "center",
            }}
          >
            <caption>Properties (Per 12.5mm)</caption>
            <thead
              className="thead-dark"
              style={{
                textAlign: "center",
              }}
            >
              <tr>
                <th scope="col">Properties</th>
                <th scope="col">ASTM C1396</th>
                <th scope="col">DIN EN 520</th>
                <th scope="col">SIG – Regular</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Thickness (mm)</td>
                <td>&plusmn; 0.4</td>
                <td>&plusmn; 0.5</td>
                <td>&plusmn; 0.3</td>
              </tr>
              <tr>
                <td>Length (mm)</td>
                <td>0 to -6</td>
                <td>0 to -5</td>
                <td>0 to -4</td>
              </tr>
              <tr>
                <td>Width (mm)</td>
                <td>0 to -3</td>
                <td>O to -4</td>
                <td>0 to -3</td>
              </tr>
              <tr>
                <td>Squareness</td>
                <td>&le; 3</td>
                <td>&le; 2.5</td>
                <td>&le; 2</td>
              </tr>
              <tr>
                <td>Flexural Strength (N) Longitudinal</td>
                <td>&ge; 489</td>
                <td>&ge; 550</td>
                <td>&ge; 625</td>
              </tr>
              <tr>
                <td>Flexural Strength (N) Transverse</td>
                <td>&ge; 178</td>
                <td>&ge; 210</td>
                <td>&ge; 250</td>
              </tr>
              <tr>
                <td>Core Hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 80.1</td>
              </tr>

              <tr>
                <td>End hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 75.65</td>
              </tr>

              <tr>
                <td>Edge Hardness (N)</td>
                <td>&ge; 67</td>
                <td>Not Specified</td>
                <td>&ge; 75.65</td>
              </tr>

              <tr>
                <td>Nail Pull (N)</td>
                <td>&ge; 356</td>
                <td>Not Specified</td>
                <td>&ge; 369.5</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default RegularBoards
