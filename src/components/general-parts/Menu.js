import React from "react";
import { Link } from "react-router-dom";
import { useToggle } from "./usetoogle";
import {
  MenuBox,
  MenuIconContainer,
  MenuItems,
  ItemAndIcon,
  MenuItem,
  // MenuItemIcon,
} from "../../Styles";
import MenuIcon from "@material-ui/icons/Menu";
//
// import logo from "../../assets/logo.jpeg";
// import description from "../../assets/description.png";
// import guide from "../../assets/info.png";
// import time from "../../assets/time.png";
//
function Menu() {
  const [isToggled, toggle] = useToggle(false);
  return (
    <MenuBox>
      <MenuIconContainer onClick={toggle}>
        <MenuIcon />
      </MenuIconContainer>
      {isToggled && (
        <MenuItems>
          <Link style={{ textDecoration: "none" }} to="/">
            <ItemAndIcon>
              <MenuItem> Home </MenuItem>
              {/* <MenuItemIcon src={logo} /> */}
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/synopsis">
            <ItemAndIcon>
              <MenuItem> Synopsis </MenuItem>
              {/* <MenuItemIcon src={description} /> */}
            </ItemAndIcon>
          </Link>
          {/*  */}
          <Link style={{ textDecoration: "none" }} to="/userguide">
            <ItemAndIcon>
              <MenuItem> User guide </MenuItem>
              {/* <MenuItemIcon src={guide} /> */}
            </ItemAndIcon>
          </Link>
          <Link style={{ textDecoration: "none" }} to="/general">
            <ItemAndIcon>
              <MenuItem> General </MenuItem>
              {/* <MenuItemIcon src={time} /> */}
            </ItemAndIcon>
          </Link>
        </MenuItems>
      )}
    </MenuBox>
  );
}

export default Menu;
