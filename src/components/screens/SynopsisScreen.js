import React from "react";
import { Link } from "react-router-dom";
import {
  SynopsisContainer,
  DescriptionText,
  SynopsisBackground,
  SynopsisScreenImage,
  SynopsisButton,
  SynopsisHeading,
} from "../../Styles";
import mountainpath from "../../assets/synopsis-image1.jpeg";
import pharoah from "../../assets/synopsis-image2.jpeg";
import SideBar from "../general-parts/SideBar";
//
function Synopsis() {
  return (
    <SynopsisBackground>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <SynopsisHeading>Learn about the way</SynopsisHeading>
        <SynopsisScreenImage src={mountainpath} />
        <SynopsisContainer>
          <DescriptionText>
            In noise, <br />
            there is no hearing. <br />
          </DescriptionText>
          <DescriptionText>
            With unfocused vision, <br />
            there is no sight. <br />
            <DescriptionText></DescriptionText>
            Without paitence, <br />
            there is no understanding. <br />
          </DescriptionText>
        </SynopsisContainer>
        <SynopsisScreenImage src={pharoah} />
        <SynopsisContainer>
          <DescriptionText>
            Be the ship, <br />
            that no wave can move.
          </DescriptionText>
          <Link style={{ textDecoration: "none" }} to="/userguide">
            <SynopsisButton>Learn more</SynopsisButton>
          </Link>
        </SynopsisContainer>
      </div>
    </SynopsisBackground>
  );
}

export default Synopsis;
