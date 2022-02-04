import React from "react";
import { slide as Menu } from "react-burger-menu";
// import { Link } from "react-router-dom";
//
function SideBar(props) {
  //
  return (
    <Menu {...props}>
      {/*  */}
      {/* <Link to="/"> */}
      <p>Home</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Synopsis</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>User guide</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>General quotes</p>
      {/* </Link> */}
      <p>Liked quotes</p>
      {/*  */}
    </Menu>
  );
}

export default SideBar;
