import React, { useState, useEffect } from "react";
import "./App.css";
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
        <h1>Inner work</h1>
      </StateProvider>
    </div>
  );
}

export default App;
