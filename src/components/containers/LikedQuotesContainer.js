import React from "react";
import "../../App.css";
import {
  LiCategoryIcons,
  LiQuoteBox,
  LiQuotesRight,
  LiQuotesLeft,
  LiQuotetitle,
  LiTag,
  LiTextAndQuotes,
  LiTextIcon,
  LiTheQuote,
  LiTopTextIcon,
  LiBackgroundImageContainer,
  LiIconButton,
} from "../../Styles";
import { FaQuoteLeft } from "react-icons/fa";
import { FaQuoteRight } from "react-icons/fa";
//
import SubjectIcon from "@material-ui/icons/Subject";
import FormatListNumberedRtlIcon from "@material-ui/icons/FormatListNumberedRtl";
import DeleteIcon from "@material-ui/icons/Delete";
//
import { useStateValue } from "../../rca/StateProvider";

function LikedQuotesContainer({ id, tag, title, quoteText }) {
  //
  const [{}, dispatch] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT

  const removeFromBasket = () => {
    // remove item from basket
    dispatch({
      type: "REMOVE_FROM_BASKET",
      // this is the action.type from the reducer.js
      id: id,
      // fetch the id of the item that's being removed
    });
  };

  return (
    <LiQuoteBox>
      <LiBackgroundImageContainer>
        {/* Top texts and icons below */}
        <LiTopTextIcon>
          <LiTextIcon>
            <SubjectIcon />
            <LiTag>{tag}</LiTag>
          </LiTextIcon>
          <LiTextIcon>
            <LiQuotetitle> {title}</LiQuotetitle>
            <FormatListNumberedRtlIcon />
          </LiTextIcon>
        </LiTopTextIcon>
        {/* The actual quote is below */}
        <LiTextAndQuotes>
          <LiQuotesLeft>
            <FaQuoteLeft />
          </LiQuotesLeft>
          <LiTheQuote>{quoteText}</LiTheQuote>
          <LiQuotesRight>
            <FaQuoteRight />
          </LiQuotesRight>
        </LiTextAndQuotes>
        {/* Liked icon below */}
        <LiCategoryIcons>
          <LiIconButton onClick={removeFromBasket}>
            <DeleteIcon />
          </LiIconButton>
        </LiCategoryIcons>
        {/*  */}
      </LiBackgroundImageContainer>
    </LiQuoteBox>
  );
}

export default LikedQuotesContainer;
