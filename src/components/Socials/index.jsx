import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./socials.css";
// this component displays the social media icons from FontAwesome imported through the react-icons library
const Socials = () => (
  <div className="socialsContainer">
    <button className="facebook social">
      <FaFacebookF />
    </button>

    <button className="instagram social">
      <FaInstagram />
    </button>

    <button className="twitter social">
      <FaTwitter />
    </button>
  </div>
);

export default Socials;
