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
  return (
    <div>
      <h1>quote container</h1>
    </div>
  );
}

export default QuoteContainer;
