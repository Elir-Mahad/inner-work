import React, { useEffect } from "react";
//
import { Link } from "react-router-dom";
//
import FavoriteIcon from "@material-ui/icons/Favorite";
//
import { useStateValue } from "../../rca/StateProvider";
import {
  BasketAndCount,
  BasketAndCountBox,
  BasketIcon,
  ItemCount,
} from "../../Styles";

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
    <BasketAndCountBox className="basket">
      <Link style={{ textDecoration: "none" }} to="/favourite">
        <BasketAndCount>
          <ItemCount>{basket?.length}</ItemCount>
          <BasketIcon>
            <FavoriteIcon />
          </BasketIcon>
        </BasketAndCount>
      </Link>
    </BasketAndCountBox>
  );
};

export default BasketHeartIcon;
