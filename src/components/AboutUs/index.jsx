import React from "react";
import "./about-us.css";

const AboutUs = () => (
  <div className="main-container">
    <article className="about-us">
      <div className="two-rows">
        <h2>ABOUT US</h2>
        <p className="column-text">
          We are a friendly group of people from different walks of life and
          backgrounds who share the love for nature and socialising. Bring a
          Plant was born out of our common genuine obsession with growing
          plants.
        </p>
      </div>
      <img
        className="column-pic"
        src={require("../../myimages/home_groupPhoto.jpg")}
        alt="group of people gardening"
      />
    </article>
  </div>
);

export default AboutUs;
