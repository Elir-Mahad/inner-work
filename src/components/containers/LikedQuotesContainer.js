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
    <div>
      <h1>Liked quotes</h1>
    </div>
  );
}

export default LikedQuotesContainer;
