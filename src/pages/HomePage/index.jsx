import React from "react";
import HeroImg from "../../components/HeroImg";
import AboutUs from "../../components/AboutUs";
import WhatWeDo from "../../components/WhatWeDo";
import SignUpInput from "../../components/SignUpInput";

const HomePage = (props) => (
  <>
    <HeroImg heroimage={require("../../myimages/home-Img1.jpg")} />
    <AboutUs />
    <WhatWeDo />
    <SignUpInput />
  </>
);

export default HomePage;
