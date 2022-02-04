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
      <p>Resources</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Philosophy</p>
      {/* </Link> */}
      {/* <Link> */}
      <p>Ecosystems</p>
      {/* </Link> */}
      {/*  */}
    </Menu>
  );
}

export default SideBar;
