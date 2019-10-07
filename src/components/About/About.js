import React from "react"
import "./About.css"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
import constructionImage from "../../images/bg10.jpg"

const About = () => {
  // console.log(this.props)
  // const imgData = this.props

  return (
    <section
      id="about"
      style={{
        padding: 0,
      }}
    >
      <h2>ABOUT</h2>
      <div className="container-div">
        {/* <Img fluid={imgData.data.file.childImageSharp.fixed} /> */}
        <img
          src={constructionImage}
          alt="Sai India Gypsum"
          id="about-page-img"
          style={{
            // width: "65%",
            // maxWidth: "70%",
            height: "auto",
            marginTop: "1rem",
            display: "block",
            margin: "auto",
            border: "2px solid midnightblue",
            borderRadius: "5px",
          }}
        />

        <p
          id="about-page-intro"
          style={{
            maxWidth: "65ch",
            margin: "auto",
            textAlign: "center",
          }}
        >
          Established in the year <strong>2002</strong>, we,
          <strong> 'Sai India Gypsum Products Private Limited'</strong>, are a
          leading manufacturer, supplier, and exporter of a comprehensive range
          of Gypsum Products. We formulate our products using the high-grade raw
          material, which is procured from trustworthy vendors of the market.
          Due to their durability, accurate composition, and elegant finish, our
          products are superior and are extensively used for various industrial
          and residential applications.
        </p>
      </div>
    </section>
  )
}

export default About

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "bg10.jpg" }) {
//       childImageSharp {
//         # Specify the image processing specifications right in the query.
//         # Makes it trivial to update as your page's design changes.
//         fluid(jpegProgressive: true, maxWidth: 1200) {
//           base64
//           srcSet
//           ...GatsbyImageSharpFluid
//         }
//       }
//     }
//   }
// `
