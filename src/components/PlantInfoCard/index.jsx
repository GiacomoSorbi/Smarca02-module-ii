import React from "react";
import "./plantinfo-card.css";

const plantInfoCard = ({ data }) => (
  <div className="pinfo-card">{data.main}</div>
);

export default plantInfoCard;
