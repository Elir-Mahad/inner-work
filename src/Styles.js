import styled from "styled-components";
// Background images
import samuraiguard from "./assets/welcome-screen-background.jpeg";
import darkbackground from "./assets/dark_texture_background.jpg";
import blackbackground from "./assets/black.png";

//-------------------------------------- General styles

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

export const MenuBox = styled.div``;

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

export const MenuItemIcon = styled.img`
  width: 1.5rem;
  height: 1.5rem;
  background-color: white;
`;

export const MenuItem = styled.a`
  text-decoration: none;
  color: black;
  font-size: 1.1rem;
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

// MenuAndBasket

export const TopBar = styled.div`
  display: flex;
  justify-content: space-between;
  position: sticky;
  background-color: black;
  padding: 0.5rem;
  top: 0;
`;

// ------------------------------------- Page specific styles

// Landing

export const LandingBackground = styled.div`
  background-image: url(${samuraiguard});
  height: 100vh;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
`;

export const WelcomeContainer = styled.div`
  //
`;

export const Japanesetitle = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LettersJp = styled.div`
  background-color: black;
  display: flex;
  justify-content: center;
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

// Synopsis

export const SynopsisBackground = styled.div`
  //
`;

export const SynopsisHeading = styled.p`
  text-align: center;
  position: fixed;
  top: 0;
  width: 100%;
  background-color: #d3dedc;
  padding-top: 1.3rem;
  padding-bottom: 1rem;
`;

export const SynopsisScreenImage = styled.img`
  width: 100%;
  display: block;
  margin: auto;
`;

export const SynopsisContainer = styled.div`
  justify-content: center;
  padding: 1rem;
  color: white;
  font-size: 1.2rem;
  background-color: #130f40;
  background-image: linear-gradient(-100deg, #130f40 0%, #000000 64%);
`;

export const DescriptionText = styled.p`
  text-align: center;
  margin: 1rem;
`;

export const SynopsisButton = styled.button`
  background-color: white;
  color: black;
  width: 9rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  display: block;
  margin: auto;
  margin-top: 3rem;
  cursor: pointer;
`;

// User guide

export const UserGuideBackground = styled.div`
  height: 100%;
  padding-bottom: 2rem;
  padding-right: 1rem;
`;

export const UserGuideScreenImage = styled.img`
  height: 5rem;
  display: block;
  margin: auto;
  margin-top: 2rem;
`;

export const UserGuideContainer = styled.div`
  margin-top: 1rem;
  padding: 0.5rem;
  height: 100%;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 2rem;
`;

export const UserGuideInstruction = styled.p`
  font-size: 1.1rem;
  margin-bottom: 1.5rem;
  color: black;
`;

export const UserGuideNext = styled.button`
  background-color: black;
  color: white;
  width: 9rem;
  height: 2.5rem;
  border: none;
  border-radius: 5px;
  display: block;
  margin: auto;
  cursor: pointer;
`;

//Liked Quotes - no liked quotes

export const NoLikedQuotesContainer = styled.p`
  border-bottom: 1px solid black;
  padding: 1rem;
`;

export const NoLikedQuotesText = styled.p`
  font-size: 1.2rem;
  text-align: center;
`;

// Quotes style - for liked quotes category

export const LikedQuotesTitle = styled.p`
  text-align: center;
  font-size: 1.2rem;
  border-bottom: 1px solid black;
  padding: 1rem;
`;

export const LiQuoteBox = styled.div`
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 2rem;
`;

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

export const LiQuotesRight = styled.div`
  font-size: 2rem;
  display: flex;
  align-self: flex-end;
`;

export const LiTheQuote = styled.p`
  font-size: 1.25rem;
  margin: 1rem;
  line-height: 1.7rem;
  text-align: left;
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

// Quotes styles for all other categories

export const CategoryScreen = styled.div`
  //
`;
// This styled component is used in all the category specific screen

export const QuoteBox = styled.div`
  margin-bottom: 2rem;
  margin-left: 2.5rem;
  margin-right: 2.5rem;
  margin-top: 2rem;
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
  padding: 0.5rem;
`;

export const TextIcon = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

export const Tag = styled.h3`
  font-size: 0.9rem;
  font-weight: 100;
`;

export const Quotetitle = styled.h2`
  font-size: 0.9rem;
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
  font-size: 1rem;
`;

export const TheQuote = styled.p`
  color: white;
  font-size: 1.25rem;
  margin-left: 0.3rem;
  line-height: 1.7rem;
  text-align: left;
`;

export const QuotesRight = styled.div`
  color: white;
  font-size: 1rem;
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
