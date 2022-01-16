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
  return (
    <div>
      <h1>Liked quotes</h1>
    </div>
  );
}

export default LikedQuotesContainer;
