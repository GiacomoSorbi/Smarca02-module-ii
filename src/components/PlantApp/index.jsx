import React, { useEffect, useState } from "react";
import PlantInfo from "../PlantInfo";

const PlantApp = () => {
  const YOUR_TREFLE_TOKEN = "dkFNOEFMOEVoYIdpUXQyaTNab05sZz09";

  const [plantinfo, setPlantinfo] = useState([]);

  useEffect(() => {
    fetch;
  }, []);

  const getPlantInfo = require("node-fetch");

  async () => {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${YOUR_TREFLE_TOKEN}`
    );

    const json = await response.json();
    console.log(json);
  };
  return (
    <div className="papp-wrapper">
      <form className="papp-form">
        <imput className="papp-seach" type="text" />
        <button className="papp-searchb" type="submit">
          SEARCH
        </button>
      </form>
      {plantinfo.map((plantinfo) => (
        <PlantInfo />
      ))}
    </div>
  );
};

export default PlantApp;
