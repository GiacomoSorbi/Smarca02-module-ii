import React from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";

const NavBar = () => (
  <nav>
    <ul>
      <li>
        <Link to="/">Home</Link>
      </li>
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
