import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
//
import MenuAndBasket from "./components/general-parts/MenuAndBasket";
//
import LandingScreen from "./components/screens/LandingScreen";
import SynopsisScreen from "./components/screens/SynopsisScreen";
import UserGuideScreen from "./components/screens/UserGuideScreen";
import GeneralScreen from "./components/screens/GeneralScreen";
import LikedQuotesScreen from "./components/screens/LikedQuotesScreen";
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
          <Routes>
            <Route path="/favourite">
              <LikedQuotesScreen />
            </Route>
            <Route path="/general">
              <GeneralScreen />
            </Route>
            <Route path="/userguide">
              <UserGuideScreen />
            </Route>
            <Route path="/synopsis">
              <SynopsisScreen />
            </Route>
            <Route path="/">
              <LandingScreen />
            </Route>
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
