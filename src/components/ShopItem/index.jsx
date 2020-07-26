import React, { useContext } from "react";
import { CartContext } from "../CartContext";
import "./shop-item.css";

export const ShopItem = (props) => {
  const [cart, setCart] = useContext(CartContext);
  const addToCart = () => {
    const shopitem = {
      src: props.src,
      name: props.name,
      price: props.price,
      colour: props.colour,
    };
    setCart((currentState) => [...currentState, shopitem]);
  };

  return (
    <div className="shop-item">
      <img src={props.src} alt={props.name} />
      <h3>{props.name}</h3>
      <h3>£{props.price}</h3>
      <h4>{props.colour}</h4>
      <button className="add-tocart" onClick={addToCart}>
        Add to cart
      </button>
    </div>
  );
};
