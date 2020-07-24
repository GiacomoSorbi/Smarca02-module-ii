import React from "react";
import HeroImg from "../../components/HeroImg";
import AboutUs from "../../components/AboutUs";
import WhatWeDo from "../../components/WhatWeDo";
import SignUpForm from "../../components/SignupForm";

const HomePage = (props) => (
  <>
    <HeroImg heroimage={require("../../myimages/home-Img1.jpg")} />
    <AboutUs />
    <WhatWeDo />
    <SignUpForm />
  </>
);

export default HomePage;
