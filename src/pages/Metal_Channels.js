import React from "react"
import { CheckSquare } from "styled-icons/fa-solid"
import Layout from "../components/layout"
import "../components/Products/Products.css"

const Metal_Channels = () => {
  return (
    <Layout>
      <article className="product-details skip-nav">
        <section className="container-div">
          <h4 className="product-title">
            Ceiling Channels and Metal Accessories
          </h4>

          <p className="product-intro">
            We offer the following Channels in various sizes
          </p>
          <div
            className="list-container"
            style={{
              display: "block",
              margin: "auto",
              border: "2px solid black",
              borderRadius: "5px",
              width: "max-content",
            }}
          >
            <h5 className="product-subtitle">Channels</h5>
            <ul className="list-group">
              <li>
                <CheckSquare className="checksquare" size="1rem" />
                Ceiling Section
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />
                Intermediate Section
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />
                Perimeter Section
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />
                Ceiling Angle
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />W Stud
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />U Stud
              </li>
              <li>
                <CheckSquare className="checksquare" size="1rem" />
                Floor
              </li>
            </ul>
          </div>
        </section>
        <section className="table-section">
          <h5 className="product-subtitle">Accessories</h5>
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
                <th scope="col">Accessories</th>
                <th scope="col">Dimensions (in mm)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Connecting Clip</td>
                <td>2.64</td>
              </tr>
              <tr>
                <td>Drywall Screw</td>
                <td>3.5x25 / 3.5x35 / 3.5x50</td>
              </tr>
              <tr>
                <td>Corner Beed</td>
                <td>25 x 25 x 2440 / 25 x 25 x 3660</td>
              </tr>
              <tr>
                <td>Drywall Tape</td>
                <td>50 x 70</td>
              </tr>
              <tr>
                <td>Drywall Fastener</td>
                <td>-</td>
              </tr>
            </tbody>
          </table>
        </section>
      </article>
    </Layout>
  )
}

export default Metal_Channels
