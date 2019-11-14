import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <article
      style={{
        height: "70vh",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
      }}
      className="skip-nav"
    >
      <h1>PAGE NOT FOUND!</h1>
      <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
    </article>
  </Layout>
)

export default NotFoundPage
