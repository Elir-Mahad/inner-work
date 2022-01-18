import React from "react";
//
import { useStateValue } from "../../rca/StateProvider";
//
import LikedQuotesContainer from "../containers/LikedQuotesContainer";
import {
  CategoryScreen,
  LikedQuotesTitle,
  NoLikedQuotesContainer,
  NoLikedQuotesText,
} from "../../Styles";

function LikedQuotesScreen() {
  //
  const [{ basket }] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT
  //
  return (
    <div>
      <h1>Liked quotes</h1>
    </div>
  );
}

export default LikedQuotesScreen;
