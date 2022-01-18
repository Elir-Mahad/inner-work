import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
//
import MenuAndBasket from "./components/general-parts/MenuAndBasket";
//
import Landing from "./components/screens/LandingScreen";
//
import { StateProvider } from "./rca/StateProvider";
import { initialState } from "./rca/reducer";
import reducer from "./rca/reducer";
//
const basketFromLocalStorage = JSON.parse(
  localStorage.getItem("basket") || "[]"
);
function App() {
  //
  const [basket, setBasket] = useState(basketFromLocalStorage);

  useEffect(() => {
    //
    localStorage.setItem("basket", JSON.stringify(basket));
    // Store the basket in the local storage
  });
  //
  return (
    <div className="App">
      <StateProvider initialState={initialState} reducer={reducer}>
        <Router>
          <Switch>
            <Route path="/favourite">{/* Liked quotes route */}</Route>
            <Route path="/general">{/* General page route */}</Route>
            <Route path="/userguide">{/* User guide page route */}</Route>
            <Route path="/synopsis">{/* Synopsis page route */}</Route>
            <Route path="/">
              <MenuAndBasket />
              <Landing />
            </Route>
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
