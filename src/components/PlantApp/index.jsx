import React, { useState, useEffect } from "react";
import "./plant-app.css";

function PlantApp() {
  const TREFLE_TOKEN = "dkFNOEFMOEVoYldpUXQyaTNab05sZz09";

  useEffect(() => {
    getPlantinfo();
  }, []);

  const getPlantinfo = require("node-fetch");

  (async () => {
    const response = await fetch(
      `https://trefle.io/api/v1/plants?token=${TREFLE_TOKEN}`
    );
    const json = await response.json();
    console.log(json);
  })();

  // const [query, setQuery] = useState(initialState);
  // const [data, setData] = useState({});

  // const onChange = (event) => {
  //   setQuery({ ...query, [event.target.id]: event.target.value });
  // };

  // const onSubmit = (event) => {
  //   event.preventDefault();
  //   setData({ ...data, loading: true });
  //   fetch(
  //     `https://trefle.io/api/v1/plants?token=dkFNOEFMOEVoYldpUXQyaTNab05sZz09`
  //   ).then((res) => {
  //     if (!res.ok) {
  //       setData({ ...data, error: res.statusText, loading: false });
  //       return;
  //     }
  //     return res.json().then((plantData) => {
  //       setData({ plantData, loading: false, error: null });
  //     });
  //   });
  // };

  return (
    <div className="searchPlant-container">
      <h1>Plant App</h1>
      <form className="searchPlant-form">
        <label>Search Plant</label>
        <input
          id="searchPlant"
          type="text"
          placeholder="Insert common plant name to search"
        />
        <button type="submit" className="searchPlant-button">
          Learm about your plant!
        </button>
      </form>
    </div>
  );
}
export default PlantApp;

//const YOUR_TREFLE_TOKEN = "dkFNOEFMOEVoYldpUXQyaTNab05sZz09";

///const [plantinfo, setPlantinfo] = useState([]);

//useEffect(() => {
//fetch;
//}, []);

//const getPlantInfo = require("node-fetch");

//async () => {
//const response = await fetch(
// `https://trefle.io/api/v1/plants?token=${YOUR_TREFLE_TOKEN}`
//);
//const json = await response.json();
//console.log(json);
//};
//return (
//<div className="papp-wrapper">
//<form className="papp-form">
// <imput className="papp-seach" type="text" />
//<button className="papp-searchb" type="submit">
// SEARCH
// </button>
// </form>
//{plantinfo.map((plantinfo) => (
//  <PlantInfo />
//))}
// </div>
// );
