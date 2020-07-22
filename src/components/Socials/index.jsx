import React from "react";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import "./socials.css";

const Socials = () => (
  <div className="socials-container">
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
