import React from "react";
import Container from "./Container";
// import {useLocation} from 'react-router-dom'
const Hero = () => {
  return (
      <div className="hero-section">
    <Container>
        <div className="content">
          <div className="heading">
            <h1 className="head">Watch trailers, sneak peaks and news <span>with Movify</span></h1>
          </div>
          <div className="para">
            <p className="child">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Itaque
              quasi asperiores, odit fuga numquam dicta sit rerum modi
              consequuntur saepe.
            </p>
          </div>


          <div className="cta">
                <button>Watch trailer</button>
          </div>
        </div>
    </Container>
      </div>
  );
};

export default Hero;
