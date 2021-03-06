import React, { useState, useEffect } from "react";
import "./App.css";
import { HashRouter, Routes, Route } from "react-router-dom";
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
        <HashRouter basename={process.env.PUBLIC_URL}>
          <Routes>
            <Route
              //
              path="/favourite"
              element={<LikedQuotesScreen />}
            />
            <Route
              //
              path="/general"
              element={<GeneralScreen />}
            />
            <Route
              //
              path="/userguide"
              element={<UserGuideScreen />}
            />
            <Route
              //
              path="/synopsis"
              element={<SynopsisScreen />}
            />
            <Route
              //
              path="/"
              element={<LandingScreen />}
            ></Route>
          </Routes>
        </HashRouter>
      </StateProvider>
    </div>
  );
}

export default App;
