import React, { useState } from "react";
// exporting the context to ShopList and ShopItem
export const CartContext = React.createContext();

// exporting the provider that will accept props
// using useState to create state that will be shared across the shop components
export const CartProvider = (props) => {
  const [cart, setCart] = useState([]);

  // all the children components within the context provider
  // now share state as the new array will be passed on
  return (
    <CartContext.Provider value={[cart, setCart]}>
      {props.children}
    </CartContext.Provider>
  );
};
