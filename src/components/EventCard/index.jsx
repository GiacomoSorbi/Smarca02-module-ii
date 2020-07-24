import React from "react";
import "./event-card.css";

function EventCard({ date, when, where, price, cardimg }) {
  return (
    <div className="card-container">
      <img className="card-img" src={cardimg} alt="" />
      <h3 className="card-date">{date}</h3>
      <h3 className="card-time">{when}</h3>
      <p className="card-address">{where}</p>
      <div className="card-bottom">
        <h3 className="card-price">{price}</h3>
        <button className="card-button">Learn more</button>
      </div>
    </div>
  );
}
export default EventCard;
