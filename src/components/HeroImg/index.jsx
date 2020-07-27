import React from "react";
import "./heroImg.css";

// function that displays the image hero on top of every single webpage which bears a different image and title
// props are passed to change the image from the different page components
function HeroImg(props) {
  return (
    <div className="heroContainer">
      {props.heroimage && (
        <img className="heroimg" src={props.heroimage} alt={props.title} />
      )}
    </div>
  );
}

export default HeroImg;
