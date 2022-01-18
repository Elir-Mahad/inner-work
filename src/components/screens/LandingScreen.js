import React from "react";
import {
  Japanesetitle,
  JpLetter,
  LettersJp,
  WelcomeContainer,
  LandingBackground,
  IntroText,
} from "../../Styles";
//
function LandingScreen() {
  return (
    <LandingBackground>
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
    </LandingBackground>
  );
}

export default LandingScreen;
