import React from "react";
import "./whatwedo.css";

const WhatWeDo = () => (
  <div className="main-container">
    <article className="whatwedo">
      <div className="two-rows">
        <h2>WHAT WE DO</h2>
        <p className="column-text">
          We are based in the UK and meet up regularly across different towns to
          swap house and garden plants, cutting, seeds and all things
          plant-related. Moreover, we exchange tips on how to care for our
          lovely leafy (and spiky) friends whilst welcoming new people in an
          inclusive and casual atmosphere.
        </p>
      </div>
      <div className="button-container">
        <button className="event-button">
          Join us at our next BRING A PLANT EVENT
        </button>
      </div>
    </article>
    <div className="green-image">
      <img
        src={require("../../myimages/green-imgcomp.jpg")}
        alt="green collage of people and plants"
      />
    </div>
  </div>
);

export default WhatWeDo;
