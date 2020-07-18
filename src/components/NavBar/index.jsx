import React from "react";
import { Link } from "react-router-dom";
import Logo from "../../myimages/logo.svg";
import "./NavBar.css";

const NavBar = () => (
  <nav className="navBar_container">
    <div className="navBar_logoh">
      <Link to="/">
        <img src={Logo} alt="Bring a plant logo" className="navBarLogo" />
      </Link>
    </div>
    <ul className="navBar_links">
      <li>
        <Link to="/events">Events</Link>
      </li>
      <li>
        <Link to="/plant_tips">Plant Care</Link>
      </li>
      <li>
        <Link to="/shop">Shop</Link>
      </li>
    </ul>
  </nav>
);

export default NavBar;
