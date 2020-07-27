import React from "react";
import "./eventCard.css";

// this function is taking props from the event
function EventCard({ date, when, where, price, cardimg }) {
  return (
    <div className="cardContainer">
      <img className="cardImg" src={cardimg} alt="" />
      <h3 className="cardDate">{date}</h3>
      <h3 className="cardTime">{when}</h3>
      <p className="cardAddress">{where}</p>
      <div className="cardBottom">
        <h3 className="cardPrice">{price}</h3>
        <button className="cardButton">Learn more</button>
      </div>
    </div>
  );
}
export default EventCard;
