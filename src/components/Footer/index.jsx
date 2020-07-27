import React from "react";
import Socials from "../Socials";

import "./footer.css";

//this function return the footer for the whole website.
// Socials is the component containing the social media icons
const Footer = () => {
  return (
    <div className="mainFooter">
      <div className="footerContainer">
        <div className="row1">Bring a Plant 2020</div>
        <div className="row2">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
