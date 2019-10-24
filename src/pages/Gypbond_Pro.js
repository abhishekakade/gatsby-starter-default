import React from "react"
import { PlusSquare } from "styled-icons/fa-solid"
import Layout from "../components/layout"
import "../components/Products/Products.css"

const Gypbond_Pro = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">Gypbond Pro</h4>

          <p className="product-intro">
            <strong>Gypbond Pro</strong> is a&nbsp;
            <em className="text-highlighter">
              highly viscous solution which provides mechanical as well as
              chemical bonding to Gypsum based materials.
            </em>
            &nbsp;Apart from giving high strength, it also has high tensile and
            flexural strength.
          </p>
        </section>

        <div
          className="list-container"
          style={{
            display: "block",
            width: "max-content",
            margin: "auto",
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
              Provides mechanical & Chemical Bonding
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              Excellent Adhesion to Gypsum Materials
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              High Flexibility
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              High Tensile Strength
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              Versatile & Economical
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              Easy to Use
            </li>
            <li className="list-group-item">
              <PlusSquare className="plussquare" size="1rem" />
              Increases Durability
            </li>
          </ul>
        </div>

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
                <td>Finish</td>
                <td>Texture</td>
              </tr>
              <tr>
                <td>Solids</td>
                <td>80.00 ± 2%</td>
              </tr>
              <tr>
                <td>Specific Gravity</td>
                <td>Kg/lt 1.8 ± 0.05%</td>
              </tr>
              <tr>
                <td>Adhesion Strength</td>
                <td>
                  1.01 N/m<sup>2</sup>
                </td>
              </tr>
              <tr>
                <td>Theoretical Spreading Rate</td>
                <td>50-60 sqft/kg/coat</td>
              </tr>

              <tr>
                <td>Drying Time at 30 Degrees</td>
                <td>12-16 hrs (Varies due to many factors)</td>
              </tr>

              <tr>
                <td>Shelf Life</td>
                <td>1 Year from Date of Mfg. (Sealed Container)</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default Gypbond_Pro
