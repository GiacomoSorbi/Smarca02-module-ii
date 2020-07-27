import React from "react";
import "./aboutUs.css";
import groupPhoto from "../../myimages/home_groupPhoto.jpg";

//this is a dummy component that simply displays the about us section in the homepage
const AboutUs = () => (
  <div className="mainContainer">
    <article className="aboutUs">
      <div className="twoRows1">
        <h2>ABOUT US</h2>
        <p className="columnText1">
          We are a friendly group of people from different walks of life and
          backgrounds who share the love for nature and socialising. Bring a
          Plant was born out of our common genuine obsession with growing
          plants.
        </p>
      </div>
      <div className="columnPic1">
        <img src={groupPhoto} alt="group of people gardening" />
      </div>
    </article>
  </div>
);

export default AboutUs;
