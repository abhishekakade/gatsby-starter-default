import React from "react"
import "./StatsAnimation.css"
import "../Products/Products.css"
const StatsAnimation = () => {
  return (
    <section
      className="product-details"
      style={{
        padding: 0,
      }}
    >
      <div id="slider" className="container-div">
        <div className="container">
          <div className="slide">
            <h3>2002</h3>
            <p>Year Established</p>
          </div>
          <div className="slide">
            <h3>17</h3>
            <p>Years In Business</p>
          </div>
          <div className="slide">
            <h3>9001:2008</h3>
            <p>ISO Certification</p>
          </div>
          <div className="slide">
            <h3>OHSAS</h3>
            <p>DCS Certification</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default StatsAnimation
