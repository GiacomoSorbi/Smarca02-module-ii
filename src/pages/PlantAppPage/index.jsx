import React from "react";
import HeroImg from "../../components/HeroImg";
import PlantCareText from "../../components/PlantCareText";
import PlantApp from "../../components/PlantApp";
import SignupForm from "../../components/SignupForm";
import heroPlantcare from "../../myimages/plantCare_Img1.jpg";

function PlantAppPage() {
  return (
    <>
      <main>
        <HeroImg heroimage={heroPlantcare} />
        <PlantCareText />
        <PlantApp />
        <SignupForm />
      </main>
    </>
  );
}

export default PlantAppPage;
