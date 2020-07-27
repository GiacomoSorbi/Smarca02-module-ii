import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./shopCart.css";

// this function shares the context and uses it to update total price
export const ShopCart = () => {
  const [cart, setCart] = useContext(CartContext);
  const totalPrice = cart.reduce((acc, current) => acc + current.price, 0);

  // as state is shared items in the cart and total price
  //are updated dynamically when the buttons are clicked
  return (
    <div className="shoppingCart">
      <span>Items in Cart : {cart.length}</span>
      <span> Total price: £{totalPrice}</span>
      <button>Checkout</button>
    </div>
  );
};
