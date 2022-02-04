import React from "react";
import { Link } from "react-router-dom";
import {
  SynopsisContainer,
  DescriptionText,
  SynopsisBackground,
  SynopsisScreenImage,
  SynopsisButton,
} from "../../Styles";
import mountainpath from "../../assets/synopsis-image1.jpeg";
import pharoah from "../../assets/synopsis-image2.jpeg";
//
function Synopsis() {
  return (
    <SynopsisBackground>
      <SynopsisScreenImage src={mountainpath} />
      <SynopsisContainer>
        <DescriptionText >
          In noise,  <br />
          there is no hearing. <br />
          </DescriptionText>
          <DescriptionText >
          With unfocused vision,  <br />
          there is no sight. <br /> 
          <DescriptionText >
          </DescriptionText>
          Without paitence,  <br />
          there is no understanding. <br />
        </DescriptionText>
      </SynopsisContainer>
      <SynopsisScreenImage src={pharoah} />
      <SynopsisContainer>
          <DescriptionText >
          Be the ship, <br />
          that no wave can move.
        </DescriptionText>
        <Link style={{ textDecoration: "none" }} to="/userguide">
          <SynopsisButton>
          Learn more
          </SynopsisButton>
          </Link>
      </SynopsisContainer>
    </SynopsisBackground>
  );
}

export default Synopsis;
