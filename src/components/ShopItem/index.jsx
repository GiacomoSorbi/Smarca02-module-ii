import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./shopItem.css";

// state from the context is shared and updated
export const ShopItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const shopitem = {
      src: props.src,
      name: props.name,
      price: props.price,
      colour: props.colour,
    };
    //the whole array is destructured and a new item is pushed through
    setCart((currentState) => [...currentState, shopitem]);
  };

  // props are received and matched with semantic html to be display
  //any ShopItem presents 4 properties (name,image, price and colour)
  return (
    <div className="shopItem">
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>
      <h3>£{props.price}</h3>
      <h4>{props.colour}</h4>
      <button className="addTocart" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};
