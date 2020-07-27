import React from "react";
import HeroImg from "../../components/HeroImg";
import EventsText from "../../components/EventsText";
import EventCard from "../../components/EventCard";
import SignUpForm from "../../components/SignupForm";
import heroEvents from "../../myimages/events_Img1.jpg";
import eventCard1 from "../../myimages/eventCard1.jpg";
import eventCard2 from "../../myimages/eventCard2.jpg";
import eventCard3 from "../../myimages/eventCard3.jpg";
import eventCard4 from "../../myimages/eventCard4.jpg";
import "./eventpage.css";

function EventsPage() {
  return (
    <>
      <HeroImg heroimage={heroEvents} />
      <EventsText />
      <div>
        <h2 className="cardTitle">Events Calendar</h2>
        <div className="cardlistContainer">
          <EventCard
            cardimg={eventCard1}
            date="SUNDAY, SEPTEMBER 20"
            when="LONDON E17 @ 11am - 3pm"
            where="William Morris Community Center, 6-8 Greenleaf Road Walthamstow E17
          6QQ"
            price="£2"
          />
          <EventCard
            cardimg={eventCard2}
            date="Sunday, October 11"
            when="Surrey, West Byfleet @ 11am-3pm"
            where="West Byfleet Junior School Courtyard, 10 Camphill Road, West Byfleet KT14 6EF"
            price="£2"
          />

          <EventCard
            cardimg={eventCard3}
            date="Sunday, November 8"
            when="Brighton @ 11am-3pm"
            where="Community Base, 113 Queen Road, Brighton BN1 3GX"
            price="£2"
          />
          <EventCard
            cardimg={eventCard4}
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
