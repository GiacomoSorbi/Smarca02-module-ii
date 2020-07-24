import React from "react";
import HeroImg from "../../components/HeroImg";
import EventsText from "../../components/EventsText";
import EventCard from "../../components/EventCard";
import SignUpForm from "../../components/SignupForm";
import "./eventpage.css";

function EventsPage() {
  return (
    <>
      <HeroImg heroimage={require("../../myimages/events_Img1.jpg")} />
      <EventsText />
      <div>
        <h2 className="card-title">Events Calendar</h2>
        <div className="cardlist-container">
          <EventCard
            cardimg={require("../../myimages/eventCard1.jpg")}
            date="SUNDAY, SEPTEMBER 20"
            when="LONDON E17 @ 11am - 3pm"
            where="William Morris Community Center, 6-8 Greenleaf Road Walthamstow E17
          6QQ"
            price="£2"
          />
          <EventCard
            cardimg={require("../../myimages/eventCard2.jpg")}
            date="Sunday, October 11"
            when="Surrey, West Byfleet @ 11am-3pm"
            where="West Byfleet Junior School Courtyard, 10 Camphill Road, West Byfleet KT14 6EF"
            price="£2"
          />

          <EventCard
            cardimg={require("../../myimages/eventCard3.jpg")}
            date="Sunday, November 8"
            when="Brighton @ 11am-3pm"
            where="Community Base, 113 Queen Road, Brighton BN1 3GX"
            price="£2"
          />
          <EventCard
            cardimg={require("../../myimages/eventCard4.jpg")}
            date="Sunday, December 6"
            when="London N1 @ 11am-3pm"
            where="Community Centre, 111 Ballspond Road, London N1 4DN"
            price="£2"
          />
        </div>
      </div>
      <SignUpForm />
    </>
  );
}

export default EventsPage;
