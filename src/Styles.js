import styled from "styled-components";
import samuraiguard from "./assets/welcome-screen-background.jpeg";

// BasketHeart

export const BasketAndCountBox = styled.div`
  //
`;

export const BasketAndCount = styled.div`
  display: flex;
  background-color: black;
  color: white;
`;

export const BasketIcon = styled.div`
  display: flex;
  border: 1px solid white;
  border-radius: 3px;
  justify-content: center;
  padding: 0.4rem;
`;

export const ItemCount = styled.p`
  font-size: 1rem;
  text-align: center;
  position: relative;
  top: 20px;
  left: 35px;
`;

// Menu

export const MenuBox = styled.div`
  //
`;

export const MenuIconContainer = styled.button`
  display: flex;
  background-color: black;
  color: white;
  border: 1px solid white;
  border-radius: 3px;
  justify-content: center;
  padding: 0.4rem;
`;

export const MenuItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  background-color: white;
  height: 27rem;
  width: 12rem;
  position: absolute;
  top: 55px;
  left: 1px;
`;

export const ItemAndIcon = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 0.5rem;
  align-items: center;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
`;

export const MenuItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
`;

// MenuAndBasket

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: black;
  padding: 0.5rem;
  top: 0;
`;

// QUOTE CONTAINER

export const QuoteBox = styled.div`
  // background-color: black;
  margin-bottom: 2rem;
`;

export const BackgroundImageContainer = styled.div`
  background-image: url(${blackbackground});
  background-size: cover;
`;

export const TopTextIcon = styled.div`
  background-color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const TextIcon = styled.div`
  display: flex;
  flexdirection: row;
  alignitems: center;
`;

export const Tag = styled.h3`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const Quotetitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const TextAndQuotes = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: flex;
`;

export const QuotesLeft = styled.div`
  color: white;
  font-size: 2rem;
`;

export const TheQuote = styled.p`
  color: white;
  font-size: 1.25rem;
  margin: 1rem;
  line-height: 1.7rem;
  text-align: left;
`;

export const QuotesRight = styled.div`
  color: white;
  font-size: 2rem;
  display: flex;
  align-self: flex-end;
`;

export const CategoryIcons = styled.div`
  background-color: white;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const IconButton = styled.button`
  background-color: white;
  border: none;
`;

// LIKED QUOTES

// Quotes style - for liked quotes category

export const LiQuoteBox = styled.div`
  margin-bottom: 2rem;
`;

// export const LikedQuotesTitle = styled.p`
//   text-align: center;
//   font-size: 17px;
//   padding-top: 10px;
//   padding-bottom: 10px;
//   margin-bottom: 1rem;
//   background-color: #e8e8e4;
//   color: black;
//   border: 1px solid grey;
// `;

export const LiBackgroundImageContainer = styled.div`
  background-color: #e8e8e4;
  color: black;
`;

export const LiTopTextIcon = styled.div`
  background-color: black;
  color: white;
  display: flex;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  padding: 0.8rem;
`;

export const LiTextIcon = styled.div`
  display: flex;
  flexdirection: row;
  alignitems: center;
`;

export const LiTag = styled.h3`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const LiQuotetitle = styled.h2`
  font-size: 1.1rem;
  font-weight: 100;
`;

export const LiTextAndQuotes = styled.div`
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0.5rem;
  padding-left: 0.5rem;
  display: flex;
  border-left: 1px solid grey;
  border-right: 1px solid grey;
`;

export const LiQuotesLeft = styled.div`
  font-size: 2rem;
`;

export const LiTheQuote = styled.p`
  font-size: 1.25rem;
  margin: 1rem;
  line-height: 1.7rem;
  text-align: left;
`;

export const LiQuotesRight = styled.div`
  font-size: 2rem;
  display: flex;
  align-self: flex-end;
`;

export const LiCategoryIcons = styled.div`
  background-color: black;
  width: 100%;
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
`;

export const LiIconButton = styled.button`
  color: white;
  background-color: black;
  border: none;
`;

// Landing

export const LandingBackground = styled.div`
  background-image: url(${samuraiguard});
  height: 88vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;
// Important:The code in the background image
// makes the image take up the full height of the screen.
// The height needs to be adjusted, based on the screen,
//  so that there is no scroll on the screen.
// For the the landing, i didn't want for there to be any scrolling,
// so i set the height to 91.5vh;

export const WelcomeContainer = styled.div`
  //
`;

export const Japanesetitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LettersJp = styled.div`
  background-color: black;
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
`;

export const JpLetter = styled.p`
  font-size: 1.1rem;
  text-align: center;
  color: white;
  width: 2rem;
  padding: 0.5rem;
`;

export const IntroText = styled.p`
  font-size: 1.1rem;
  text-align: center;
  width: 100%;
  color: white;
  background-color: black;
  padding-top: 0.5rem;
  padding-bottom: 1rem;
  position: fixed;
  bottom: 0;
`;
