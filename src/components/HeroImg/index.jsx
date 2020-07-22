import React from "react";
import "./heroImg.css";

function HeroImg(props) {
  return (
    <div className="hero-container">
      {props.heroimage && (
        <img className="heroimg" src={props.heroimage} alt={props.title} />
      )}
    </div>
  );
}

export default HeroImg;
