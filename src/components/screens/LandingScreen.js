//
import React from "react";
import {
  Japanesetitle,
  JpLetter,
  LettersJp,
  WelcomeContainer,
  LandingBackground,
  IntroText,
} from "../../Styles";
import SideBar from "../general-parts/SideBar";
//

//!------------------------------------------------------------IMPORTS

const Landing = () => {
  //
  return (
    <LandingBackground>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <WelcomeContainer>
          <Japanesetitle>
            <LettersJp>
              <JpLetter> 戦 </JpLetter>
              <JpLetter> 士 </JpLetter>
              <JpLetter> ク </JpLetter>
              <JpLetter> ラ </JpLetter>
              <JpLetter> ス </JpLetter>
            </LettersJp>
            <LettersJp>
              <JpLetter> 戦 </JpLetter>
              <JpLetter> 士 </JpLetter>
              <JpLetter> ク </JpLetter>
              <JpLetter> ラ </JpLetter>
              <JpLetter> ス </JpLetter>
            </LettersJp>
          </Japanesetitle>
        </WelcomeContainer>
        <IntroText>Follow the way</IntroText>
      </div>
    </LandingBackground>
  );
};
export default Landing;

/* 戦士クラス - warrior class */
