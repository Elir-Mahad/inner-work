import React, { useEffect } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link } from "react-router-dom";
import { IoIosClose } from "react-icons/io";
import { CgMenuRight } from "react-icons/cg";
//
import { useStateValue } from "../../rca/StateProvider";

function SideBar(props) {
  //
  const [{ basket }] = useStateValue();

  useEffect(() => {
    //
    localStorage.setItem("basket", JSON.stringify(basket));
    // Store the basket in the local storage
  });
  //
  return (
    <div>
      <Menu
        //
        customBurgerIcon={<CgMenuRight />}
        customCrossIcon={<IoIosClose />}
        {...props}
      >
        <Link to="/">
          <p>Home</p>
        </Link>
        <Link to="/synopsis">
          <p>Synopsis</p>
        </Link>
        <Link to="/userguide">
          <p>User guide</p>
        </Link>
        <Link to="/general">
          <p>General quotes</p>
        </Link>
        <Link to="/favourite">
          <p>Liked quotes: {basket?.length}</p>
        </Link>
      </Menu>
    </div>
  );
}

export default SideBar;
