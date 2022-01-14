import React, { useEffect } from "react";
//
import { useStateValue } from "../../rca/StateProvider";

//!------------------------------------IMPORTS

const BasketHeartIcon = () => {
  const [{ basket }] = useStateValue();
  //
  // console.log(basket);
  useEffect(() => {
    //
    localStorage.setItem("basket", JSON.stringify(basket));
    // Store the basket in the local storage
  });
  // //
  return (
    <div>
      <h1>Basket heart icon</h1>
    </div>
  );
};

export default BasketHeartIcon;
