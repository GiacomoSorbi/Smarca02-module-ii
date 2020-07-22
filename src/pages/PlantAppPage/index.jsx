import React from "react";
import HeroImg from "../../components/HeroImg";
import PlantCareText from "../../components/PlantCareText";

function PlantAppPage() {
  return (
    <>
      <main>
        <HeroImg heroimage={require("../../myimages/plantCare_Img1.jpg")} />
        <PlantCareText />
      </main>
    </>
  );
}

export default PlantAppPage;
