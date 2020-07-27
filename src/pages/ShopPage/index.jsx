import React from "react";
import HeroImg from "../../components/HeroImg";
import ShopText from "../../components/ShopText";
import { ShopList } from "../../components/ShopList";
import { ShopCart } from "../../components/ShopCart";
import { CartProvider } from "../../components/CartContext";
import heroShop from "../../myimages/shop_Img1.jpg";

//all the building blocks of the shop page are returned and displayed
// note the Cart Provider wraps the ShopCart and ShopLists elements
//so they can use and share the context dynamically
function ShopPage() {
  return (
    <>
      <HeroImg heroimage={heroShop} />
      <ShopText />
      <CartProvider>
        <ShopCart />
        <ShopList />
      </CartProvider>
    </>
  );
}

export default ShopPage;
