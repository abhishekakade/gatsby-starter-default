import React from "react"
import { Link } from "gatsby"
// import boxBg from "../../images/box-bg.svg"
import "./Products.css"

const Products = () => {
  return (
    <section
      id="products"
      style={{
        // position: "absolute",
        // top: "100vh",
        left: 0,
      }}
    >
      <h2>Products</h2>
      <div className="container-div">
        <h3 style={{ textAlign: "center", margin: "1rem" }}>
          Wide Range of Products Available at SIG
        </h3>
        <ul id="products-list">
          <li className="GypsumBoards">
            <h4 className="main-product-title">
              Plasterboards (Gypsum Boards)
            </h4>
            <p className="main-product-summary">
              <strong>SIG - Plasterboards</strong> are the ultimate wall and
              ceiling solutions for today's buildings. They are lightweight,
              durable, easy-to-shape and cost-efficient...
            </p>
            <Link to="/Gypsum_Boards">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>

          <li
            className="FiberCement"
            // style={{
            //   backgroundImage: { boxBg },
            // }}
          >
            <h4 className="main-product-title">Fiber Cement Boards</h4>
            <p className="main-product-summary">
              <strong>SIG - Fiber Cement Boards</strong> are made from a mix of
              cement, cellulose fiber &amp; fire-resistant fillers on Hatschek
              machines. They make it an ideal material for diverse
              applications...
            </p>
            <Link to="/FiberCement">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>

          <li className="Plasters">
            <h4 className="main-product-title">Plasters</h4>
            <p className="main-product-summary">
              <strong>SIG - Plasters</strong> are made with 100% natural Gypsum.
              They are easy to use, cost-effective &amp; eco-friendly. They
              provide high compressive strength &amp; deliver superior
              finishing...
            </p>
            <Link to="/Plasters">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>

          <li className="Gypbond">
            <h4 className="main-product-title">Gypbond Pro</h4>
            <p className="main-product-summary">
              <strong>Gypbond Pro</strong> is a highly viscous solution which
              provides mechanical as well as chemical bonding. Apart from
              providing high strength, it also has high tensile &amp; flexural
              strength...
            </p>
            <Link to="/Gypbond_Pro">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>

          <li className="Tiles">
            <h4 className="main-product-title">Tiles</h4>
            <p className="main-product-summary">
              <strong>SIG - Tiles</strong> are laminated with PVC film on the
              front side and metalised polyester film on the other. They are
              easy to install, maintenance free, durable &amp; provide great
              light reflectance...
            </p>
            <Link to="/Tiles">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>

          <li className="Metal">
            <h4 className="main-product-title">
              Metal Channels &amp; Accessories
            </h4>
            <p className="main-product-summary">
              We offer a large variety of
              <strong> metal ceiling channels and accessories </strong>
              like connecting clips, corner beeds, drywall screws, tapes and
              fasteners in various sizes...
            </p>
            <Link to="/Metal_Channels">
              <button className="main-product-button">More Details</button>
            </Link>
          </li>
        </ul>
      </div>
      {/* <Tiles /> */}
      {/* <RegularBoards /> */}
      {/* <Stucco /> */}
      {/* <Elite /> */}
      {/* <Convex /> */}
      {/* <FiberCement /> */}
      {/* <Premium /> */}
      {/* <MoistureResistant /> */}
      {/* <MFR /> */}
      {/* <FireResistant /> */}
      {/* <Impact /> */}
      {/* <StatsAnimation /> */}
    </section>
  )
}

export default Products
