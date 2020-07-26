import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./shop-cart.css";

export const ShopCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);
  return (
    <div className="shopping-cart">
      <span>Items in Cart : {cart.length}</span>
      <span> Total price: £{totalPrice}</span>
      <button>Checkout</button>
    </div>
  );
};
