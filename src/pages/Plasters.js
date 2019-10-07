import React from "react"
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

          <p className="product-intro">some info</p>
          <Link to="/products/Stucco">More Details</Link>
          <Link to="/products/Convex">More Details</Link>
          <Link to="/products/Elite">More Details</Link>
        </section>
      </article>
    </Layout>
  )
}

export default Plasters
