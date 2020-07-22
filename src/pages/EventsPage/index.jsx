import React from "react";
import HeroImg from "../../components/HeroImg";
import EventsText from "../../components/EventsText";

function EventsPage() {
  return (
    <>
      <main>
        <HeroImg heroimage={require("../../myimages/events_Img1.jpg")} />
        <EventsText />
      </main>
    </>
  );
}

export default EventsPage;
