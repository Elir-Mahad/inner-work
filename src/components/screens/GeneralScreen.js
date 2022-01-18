import React from "react";
import QuoteContainer from "../containers/QuoteContainer";
import { CategoryScreen } from "../../Styles";
import { data } from "../general-parts/Data";
//

function GeneralScreen() {
  //
  const quotesData = data.general;
  //
  return (
    <div>
      <h1>General screen</h1>
    </div>
  );
}

export default GeneralScreen;
