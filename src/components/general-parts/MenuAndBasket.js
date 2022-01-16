import React from "react";
import BasketHeartIcon from "./BasketHeartIcon";
import { TopBar } from "../../Styles";
import Menu from "./Menu";
function MenuAndBasket() {
  return (
    <TopBar>
      <Menu />
      <BasketHeartIcon />
    </TopBar>
  );
}

export default MenuAndBasket;
