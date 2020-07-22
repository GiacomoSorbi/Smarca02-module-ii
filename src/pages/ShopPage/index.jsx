import React from "react";
import HeroImg from "../../components/HeroImg";
import ShopText from "../../components/ShopText";

function ShopPage() {
  return (
    <>
      <main>
        <HeroImg heroimage={require("../../myimages/shop_Img1.jpg")} />
        <ShopText />
      </main>
    </>
  );
}

export default ShopPage;
