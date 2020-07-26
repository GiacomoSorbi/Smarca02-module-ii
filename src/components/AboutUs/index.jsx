import React from "react";
import "./about-us.css";
import groupPhoto from "../../myimages/home_groupPhoto.jpg";

const AboutUs = () => (
  <div className="main-container">
    <article className="about-us">
      <div className="two-rows1">
        <h2>ABOUT US</h2>
        <p className="column-text1">
          We are a friendly group of people from different walks of life and
          backgrounds who share the love for nature and socialising. Bring a
          Plant was born out of our common genuine obsession with growing
          plants.
        </p>
      </div>
      <div className="column-pic1">
        <img src={groupPhoto} alt="group of people gardening" />
      </div>
    </article>
  </div>
);

export default AboutUs;
