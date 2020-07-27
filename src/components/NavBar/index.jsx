import React from "react";
import { NavLink } from "react-router-dom";
import Logo from "../../myimages/logo.svg";
import "./NavBar.css";

// Navbar for the whole website.
//Link to is imported directly from the react-router-dom library to allow navigability
//throughout the webpages
const NavBar = () => (
  <nav className="navBarContainer">
    <div className="navBarLogoh">
      <NavLink to="/">
        <img src={Logo} alt="Bring a plant logo" className="navBarLogo" />
      </NavLink>
    </div>
    <ul className="navBarLinks">
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>
      <li>
        <NavLink to="/plant_tips">Plant Care</NavLink>
      </li>
      <li>
        <NavLink to="/shop">Shop</NavLink>
      </li>
    </ul>
  </nav>
);

export default NavBar;
