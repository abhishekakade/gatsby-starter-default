import React from "react"
// import { graphql } from "gatsby"
// import Img from "gatsby-image"
// import constructionImg from "../../images/bg10.webp"
import constructionImg480 from "../../images/bg10-480.webp"
import constructionImg768 from "../../images/bg10-768.webp"
// import constructionImg1280 from "../../images/bg10-1280.webp"
import "./About.css"

const About = () => {
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
        <picture>
          <source srcSet={constructionImg480} media="(max-width: 480px)" />
          <source srcSet={constructionImg768} media="(max-width: 768px)" />
          <img
            src={constructionImg768}
            // loading="lazy"
            // width="100%"
            // height="100%"
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
        </picture>

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
          of Gypsum Products.
          <br /> We formulate our products using the high-grade raw material,
          which is procured from trustworthy vendors of the market. Due to their
          durability, accurate composition, and elegant finish, our products are
          superior and are extensively used for various industrial and
          residential applications.
        </p>
      </div>
    </section>
  )
}

export default About

// export const query = graphql`
//   query {
//     file(relativePath: { eq: "bg10.webp" }) {
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
