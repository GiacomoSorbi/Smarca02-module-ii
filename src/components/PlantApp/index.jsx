import React, { useState } from "react";
import PlantAppInput from "../PlantAppInput";
import PlantAppForm from "../PlantAppForm";
import PlantInfoCard from "../PlantInfoCard";
import { TREFLE_TOKEN } from "../constants";
import "./plantApp.css";

//useState is used to change the state of the component.
// here the initialState is set as en empty string
function PlantApp() {
  const initialState = {
    plant: "",
  };
  // the initail state is changed with the creation of a new array
  const [search, setSearch] = useState(initialState);
  const [data, setData] = useState({});

  const onChange = (event) => {
    setSearch({ ...search, [event.target.id]: event.target.value });
  };
  // eventPreventDefault prevents the browser from refreshing immediately after a stroke is entered with the keyboard
  const onSubmit = (event) => {
    event.eventPreventDefault();
    setData({ ...data, loading: true });
    // with fetch data from an API are accessed and filtered to be used in the app
    const fetch = require("node-fetch");

    fetch(
      `${window.location.protocol}//trefle.io/api/v1/plants?token=${TREFLE_TOKEN}`
    )
      .then((res) => {
        if (!res.ok) throw Error("Sorry, it's not working!");
        return res.json();
      })
      .then((plantData) => {
        setData({ ...plantData, loading: false, error: null });
      })
      .catch((error) => setData({ ...data, error, loading: false }));
  };

  return (
    <div className="searchPlantContainer">
      <div className="searchPlantInfo">
        <h1>
          <span aria-label="plant app" role="img">
            🌱
          </span>
          TRY OUR PLANT APP!
          <span aria-label="plant app" role="img">
            🌱
          </span>
        </h1>
        <p>
          Insert a plant common name to learn more about its specifications.
        </p>
      </div>
      <PlantAppForm onSubmit={onSubmit} className="searchPlantForm">
        <PlantAppInput
          type="text"
          id="plant"
          label="Search plant"
          onChange={onChange}
          placeholder=" Insert common plant name"
          value={search.plant}
        />
        <button
          className="searchPlantButton"
          disabled={data.loading || !search.plant}
        >
          {data.loading ? "Loading..." : "Search!"}
        </button>
      </PlantAppForm>
      {data.plantData && <PlantInfoCard plant={data.plantData} />}
      {data.error && <div>{JSON.stringify(data.error)}</div>}
    </div>
  );
}
export default PlantApp;

// Old attempts to fetch data

// const TREFLE_TOKEN = "dkFNOEFMOEVoYldpUXQyaTNab05sZz09";

// useEffect(() => {
//   getPlantinfo();
// }, []);

// const getPlantinfo = require("node-fetch");

// (async () => {
//   const response = await fetch(
//     `https://trefle.io/api/v1/plants?token=${TREFLE_TOKEN}`
//   );
//   const json = await response.json();
//   console.log(json);
// })();

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
