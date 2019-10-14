import React from "react"
// import { Link } from "gatsby"

import Layout from "../components/layout"
// import Image from "../components/image"
import SEO from "../components/seo"
import Homepage from "../components/Homepage/Homepage"
import Products from "../components/Products/Products"
// import Footer from "../components/Footer/Footer"
import About from "../components/About/About"
import StatsAnimation from "../components/StatsAnimation/StatsAnimation"
import Contact from "../components/Contact/Contact"

const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
    <Homepage></Homepage>
    <Products></Products>
    {/* <About imgData={this.props}></About> */}
    <About></About>

    <StatsAnimation></StatsAnimation>
    <Contact></Contact>
    {/* <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <div style={{ maxWidth: `300px`, marginBottom: `1.45rem` }}>
      <Image />
    </div>
    <Link to="/page-2/">Go to page 2</Link> */}
    {/* <Footer></Footer> */}
  </Layout>
)

export default IndexPage

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "bg10.webp" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(maxWidth: 1200) {
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
