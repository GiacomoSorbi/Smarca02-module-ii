import React from "react";
import HeroImg from "../../components/HeroImg";
import ShopText from "../../components/ShopText";
import { ShopList } from "../../components/ShopList";
import { ShopCart } from "../../components/ShopCart";
import { CartProvider } from "../../components/CartContext";
import heroShop from "../../myimages/shop_Img1.jpg";

import "./shoppage.css";

function ShopPage() {
  return (
    <>
      <main>
        <HeroImg heroimage={heroShop} />
        <ShopText />
        <CartProvider>
          <ShopList />
          <ShopCart />
        </CartProvider>
      </main>
    </>
  );
}

export default ShopPage;
