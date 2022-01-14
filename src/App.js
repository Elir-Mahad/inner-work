import React, { useState, useEffect } from "react";
import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
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
            <Route path="/">{/* Landing page route */}</Route>
            <Route path="/synopsis">{/* Synopsis page route */}</Route>
          </Switch>
        </Router>
      </StateProvider>
    </div>
  );
}

export default App;
