import React, { useState } from "react";
import "../../App.css";
import {
  CategoryIcons,
  QuoteBox,
  QuotesRight,
  QuotesLeft,
  Quotetitle,
  Tag,
  TextAndQuotes,
  TextIcon,
  TheQuote,
  TopTextIcon,
  BackgroundImageContainer,
  IconButton,
} from "../../Styles";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
//
import SubjectIcon from "@material-ui/icons/Subject";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import FavoriteIcon from "@material-ui/icons/Favorite";
//
import { useStateValue } from "../../rca/StateProvider";

function QuoteContainer({ id, tag, title, quoteText }) {
  // split apart the object, and grab the id, title, and quote text

  const [{}, dispatch] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

  //!Below is the function to add the item to the basket when the heart icon is clicked
  const addToBasket = () => {
    // console.log();
    // add item to basket
    dispatch({
      type: "ADD_TO_BASKET", // this is the action.type from the reducer.js
      item: {
        id: id, // fetch the id of the item that's being added
        tag: tag,
        title: title,
        quoteText: quoteText,
      },
    });
  };

  //! Below is the function to change the heart icon's color when its clicked
  //! The color change only remains while the user is still on that category
  //! If the category is changed the color of the heart icon, changes back to black
  const [iconColor, setIconColor] = useState("black");
  // The constant iconColor stores the value 'black'
  // The useState declares that this value will be manipulated

  const changeColor = () => {
    // The constant changeColor stores a function
    setIconColor("darkred");
    // that changes the value of iconColor to 'darkred'
  };

  //! Below is the function that combines the two previous functions
  const addToBaskeAndChangeColor = () => {
    // The constant addToBaskeAndChangeColor stores
    addToBasket();
    // the function that adds a quote to the basket
    changeColor();
    // the function that changes heart color on click
  };

  // const nquoteText = quoteText.replace(/,/g, "\n").toString();

  // console.log(nquoteText);

  function NewlineText(props) {
    //
    const text = props.text;
    //
    if (text == null) {
      return `nothing here`;
    } else {
      return (
        text
          //
          .split(",")
          // split at end of period
          .map((str) => (
            // map all strings on new lines
            <p>{str}</p>
            // the string replace the square brackets with empty space
          ))
      );
    }
  }

  return (
    <QuoteBox>
      <BackgroundImageContainer>
        {/* Top texts and icons below */}
        <TopTextIcon>
          <TextIcon>
            <SubjectIcon />
            <Tag style={{ paddingLeft: "0.2rem" }}>{tag}</Tag>
          </TextIcon>
          <TextIcon>
            <Quotetitle style={{ paddingRight: "0.2rem" }}> {title}</Quotetitle>
            <FormatListNumberedRtlIcon />
          </TextIcon>
        </TopTextIcon>
        {/* The actual quote is below */}
        <TextAndQuotes>
          <QuotesLeft>
            <FaQuoteLeft />
          </QuotesLeft>
          {/* <TheQuote>{quoteText}</TheQuote> */}
          <TheQuote>
            <NewlineText text={quoteText} />
          </TheQuote>
          <QuotesRight>
            <FaQuoteRight />
          </QuotesRight>
        </TextAndQuotes>
        {/* Liked icon below */}
        <CategoryIcons>
          <IconButton
            style={{ color: iconColor }}
            // the icon's color will be value that's stored in iconColor
            onClick={addToBaskeAndChangeColor}
            // On click trigger this function
          >
            <FavoriteIcon />
          </IconButton>
        </CategoryIcons>
        {/*  */}
      </BackgroundImageContainer>
    </QuoteBox>
  );
}

// f4f4f2

export default QuoteContainer;
