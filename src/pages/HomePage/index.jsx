import React from "react";
import HeroImg from "../../components/HeroImg";
import AboutUs from "../../components/AboutUs";
import WhatWeDo from "../../components/WhatWeDo";
import SignUpForm from "../../components/SignupForm";
import heroHome from "../../myimages/home-Img1.jpg";

const HomePage = () => (
  <>
    <HeroImg heroimage={heroHome} />
    <AboutUs />
    <WhatWeDo />
    <SignUpForm />
  </>
);

export default HomePage;
