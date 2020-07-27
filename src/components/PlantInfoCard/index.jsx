import React from "react";
import "./plantinfoCard.css";
// this function is taking no value since I have not been able to successfully fetch data from api
const plantInfoCard = ({ data }) => (
  <div className="pinfoCard">{data.main}</div>
);

export default plantInfoCard;
