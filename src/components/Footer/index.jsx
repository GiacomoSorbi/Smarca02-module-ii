import React from "react";
import Socials from "../Socials";

import "./footer.css";

const Footer = () => {
  return (
    <div className="main-footer">
      <div className="footer-container">
        <div className="row1">Bring a Plant 2020</div>
        <div className="row2">
          <Socials />
        </div>
      </div>
    </div>
  );
};

export default Footer;
