import React from "react";
import { ShopItem } from "../ShopItem";
import pot from "../../myimages/terracotta_Pots.jpg";
import signpost from "../../myimages/plant-signpost.jpg";
import mug from "../../myimages/camping_mug.jpg";
import cap from "../../myimages/green_cap.jpg";
import tshirt from "../../myimages/t-shirt.jpg";
import apron from "../../myimages/gardener_Apron.jpg";
import "./shopList.css";

//The ShopList is the first component of the whole shop
// Below, the array of 6 initial objects
export const ShopList = () => {
  const shopData = [
    {
      id: "1",
      img: pot,
      name: "Terracotta Pot",
      colour: "Natural",
      price: 3,
    },
    {
      id: "2",
      img: signpost,
      name: "Plant signposts",
      price: 5,
      colour: "White",
    },
    {
      id: "3",
      img: mug,
      name: "Coffee Mug",
      price: 8,
      colour: "White",
    },
    {
      id: "4",
      name: "Baseball Cap",
      img: cap,
      price: 12,
      colour: "Green",
    },
    {
      id: "5",
      name: "T-Shirt",
      img: tshirt,
      price: 10,
      colour: "White",
    },
    {
      id: "6",
      name: "Gardener Apron",
      img: apron,
      price: 20,
      colour: "Royal blue",
    },
  ];

  //the shopData array is mapped as props into the ShopItem component
  // to return a new array of items that populate the ShopList
  // the unique key element is needed by React for item identification

  return (
    <div className="shoplistContainer">
      {shopData.map((data) => (
        <ShopItem
          img
          src={data.img}
          name={data.name}
          price={data.price}
          colour={data.colour}
          key={data.id}
        />
      ))}
    </div>
  );
};
