import React from "react"
import "../components/Products/Products.css"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import SEO from "../../components/seo"
// import "../../../../public/bootstrap.min.css"

import { CheckSquare } from "styled-icons/fa-solid"
const FiberCement = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">SIG - Fiber Cement Boards</h4>
          <p className="product-intro">
            Fiber Cement Boards are made from a mix of cement, cellulose fiber
            and fire resistant fillers on Hatschek machines. The products having
            excellent resistance against fire, termite and moisture makes it
            ideal material for varying applications.
          </p>
        </section>

        <section className="container-div">
          <h5 className="product-subtitle">Advantages</h5>
          <ul className="list-group">
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Fire and Moisture Resistant
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Doesn't warp or fade
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Withstands ultraviolet rays and is impenetrable by insects and
              birds
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              It doesn't dent or bump under direct impact and will not become
              brittle in cold temperatures
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Fiber cement boards can be used in historical renovations, where
              other cladding materials are not allowed
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Because of their long life, fiber cement boards also cut down on
              repair and maintenance costs
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              Environment Friendly as Fiber cement boards are made from natural
              cellulose fibers and are completely non asbestos
            </li>
            <li className="list-group-item">
              <CheckSquare className="checksquare" size="1rem" />
              This product does not contain asbestos, formaldehydes or harmful
              chemicals
            </li>
          </ul>
        </section>

        <section className="container-div">
          <h5 className="product-subtitle">Application</h5>
          <p>
            Fiber Cement Boards are mostly used for Internal and External Wall
            cladding, wall partitions, mezzanine flooring, Roof Underlay, False
            Ceiling, Office cubical partitions, Fixed Wardrobes, Kitchen
            cabinets, Duct Covering.
          </p>
          <p>
            Fiber cement boards are a good alternative for Plywood for better
            fire protection and longer durability
          </p>
        </section>

        <section className="container-div">
          <h5 className="product-subtitle">Board Performance</h5>
          <p>
            Thermal Conductivity: SIG Fiber Cement Boards are test for 0.21 W/mK
            for 6mm thick board.
          </p>
          <p>
            Effect of Temperature: SIG Fiber Cement Boards are not recommended
            to be stored in temperature above 500 for prolonged period.
          </p>
          <p>
            Effect of condensation: SIG Fiber Cement Boards are vapor permeable.
            If vapor condenses on the surface, the board will retain its
            strength.
          </p>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Product Attributes and Benefits</h5>
          <table className="responsive table fc1">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Attributes</th>
                <th scope="col">Benefits</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Asbestos Free</td>
                <td>Breathe easy environment</td>
              </tr>
              <tr>
                <td>Moisture Resistant</td>
                <td>Long lasting</td>
              </tr>
              <tr>
                <td>Sound/Thermal Insulation</td>
                <td>Comfortable Interior</td>
              </tr>
              <tr>
                <td>Termite Resistance</td>
                <td>Not Degraded by any living organism</td>
              </tr>
              <tr>
                <td>Dimensional Stability</td>
                <td>Within Tolerance Limits</td>
              </tr>

              <tr>
                <td>Fire Resistant</td>
                <td>Non-Combustible; Non Toxic</td>
              </tr>

              <tr>
                <td>Flexible</td>
                <td>Ensure Double Handling</td>
              </tr>
              <tr>
                <td>Easy Workability</td>
                <td>Very easy to use with carpenter tools</td>
              </tr>

              <tr>
                <td>Good Adhesion</td>
                <td>Can Take all type of Finishes (Paint/Wall Paper)</td>
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

        <section className="table-section">
          <h5 className="product-subtitle">Board Sizes and Thickness</h5>
          <table className="responsive table fc2">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Product</th>
                <th scope="col">Thickness (mm)</th>
                <th scope="col">Width (mm)</th>
                <th scope="col">Length (mm)</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Board Square Edge</td>
                <td>5,6,9,12,16,18,20</td>
                <td>600,610,1200,1220</td>
                <td>2400, 2440, 2700, 3000, 3200</td>
              </tr>
              <tr>
                <td>Boards Recess Edge</td>
                <td>9 &amp; 12</td>
                <td>1200 &amp; 1220</td>
                <td>2400, 2440, 2700, 3000, 3200</td>
              </tr>
              <tr>
                <td>Wood Textures Planks</td>
                <td>8</td>
                <td>230</td>
                <td>2500</td>
              </tr>
              <tr>
                <td>Designer Board Internal Cladding</td>
                <td>6, 8 &amp; 12</td>
                <td>600, 610, 1200, 1220</td>
                <td>1200, 2400, 2440</td>
              </tr>
              <tr>
                <td>Designer Board Ceiling</td>
                <td>5 &amp; 6</td>
                <td>600, 610</td>
                <td>600,610,1200,1220</td>
              </tr>
            </tbody>
          </table>
        </section>

        <section className="table-section">
          <h5 className="product-subtitle">Properties</h5>

          <table className="responsive table fc3">
            <thead className="thead-dark">
              <tr>
                <th scope="col">Properties</th>
                <th scope="col">Specifications</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td>Density</td>
                <td>&ge; 1300kg/m3</td>
              </tr>
              <tr>
                <td>Moisture Content</td>
                <td>&le; 10%</td>
              </tr>
              <tr>
                <td>PH Value</td>
                <td>8-9</td>
              </tr>
              <tr>
                <td>Flexural Strength</td>
                <td>&ge; 10 MPA</td>
              </tr>
              <tr>
                <td>Impact Strength</td>
                <td>&ge; 7.1 kg/m2 (8mm)</td>
              </tr>
              <tr>
                <td>Adhesion Bond Strength</td>
                <td>&ge; 7.9 kg/m2 (10mm)</td>
              </tr>
              <tr>
                <td>Screw Withdraw Strength</td>
                <td>0.9 – 1.0 N</td>
              </tr>
              <tr>
                <td>Fire Resistance</td>
                <td>Upto 3 Hours (BS EN 12467)</td>
              </tr>
              <tr>
                <td>Length variation due to water absorption</td>
                <td>0.06%</td>
              </tr>
              <tr>
                <td>Thermal Conductivity</td>
                <td>&le; 0.21/W.mk</td>
              </tr>
              <tr>
                <td>Water Absorption "After 48 Hours"</td>
                <td>&le; 34%</td>
              </tr>
              <tr>
                <td>Asbestos Content</td>
                <td>Not present</td>
              </tr>
              <tr>
                <td>Formaldehyde Content</td>
                <td>Not Present</td>
              </tr>
              <tr>
                <td>Sound Insulation</td>
                <td>12mm 53db</td>
              </tr>
              <tr>
                <td>Maintenance</td>
                <td>Low</td>
              </tr>
              <tr>
                <td>Workability</td>
                <td>Easy</td>
              </tr>
              <tr>
                <td>Service Duration</td>
                <td>Upto 25 Years</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default FiberCement
