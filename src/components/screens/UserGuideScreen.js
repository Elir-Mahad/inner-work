import React from "react";
import {
  UserGuideInstruction,
  UserGuideContainer,
  UserGuideBackground,
  UserGuideScreenImage,
  UserGuideNext,
} from "../../Styles";
import infoicon from "../../assets/info.png";
import SideBar from "../general-parts/SideBar";
import { Link } from "react-router-dom";
//
function UserGuide() {
  return (
    <UserGuideBackground>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <UserGuideScreenImage src={infoicon} />
        <UserGuideContainer>
          <UserGuideInstruction>
            This app contains a variety of quotes that are categorized by
            themes. Find a quote that you like, press the heart icon of that
            quote.
          </UserGuideInstruction>
          <UserGuideInstruction>
            Click on the heart icon on the top right of the screen, and your
            liked quote/quotes will appear.
          </UserGuideInstruction>
          <UserGuideInstruction>
            On the top left of the quote box, you will see the name of the
            category that the quote belongs to.
          </UserGuideInstruction>
          <UserGuideInstruction>
            For example: If on the top left of the quote box, it says
            'Education', then this means that this quote belongs to the category
            'Education'.
          </UserGuideInstruction>
          <UserGuideInstruction>
            Some quotes are part of a series. If a quote is part of a series,
            then on the top right of the quote box, you will see the quote title
            and its number within the series.
          </UserGuideInstruction>
          <UserGuideInstruction>
            For example: If on the top right of the quote box, it says
            'calculation 2', then this means that this quote is the second quote
            of a a series titled calculation.
          </UserGuideInstruction>
        </UserGuideContainer>
        <Link style={{ textDecoration: "none" }} to="/general">
          <UserGuideNext>General quotes</UserGuideNext>
        </Link>
      </div>
    </UserGuideBackground>
  );
}

export default UserGuide;
