import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { Switch, Route } from "react-router-dom";
import { HomePage, EventsPage, PlantAppPage, ShopPage } from "./pages";

function App() {
  return (
    <Switch>
      <Route path="/" exact component={HomePage} />
      <Route path="/events" exact component={EventsPage} />
      <Route path="/plant_tips" exact component={PlantAppPage} />
      <Route path="/shop" exact component={ShopPage} />
    </Switch>
  );
}

export default App;
