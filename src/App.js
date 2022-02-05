import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
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
            <Route
              //
              path="/inner-work/favourite"
              element={<LikedQuotesScreen />}
            />
            <Route
              //
              path="/inner-work/general"
              element={<GeneralScreen />}
            />
            <Route
              //
              path="/inner-work/userguide"
              element={<UserGuideScreen />}
            />
            <Route
              //
              path="/inner-work/synopsis"
              element={<SynopsisScreen />}
            />
            <Route
              //
              path="/inner-work"
              element={<LandingScreen />}
            ></Route>
          </Routes>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
