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
    <CategoryScreen>
      <div>
        {/*  */}
        {quotesData.map((item) => (
          <QuoteContainer
            id={item.id}
            title={item.title}
            tag={item.tag}
            quoteText={item.quoteText}
          />
        ))}
      </div>
    </CategoryScreen>
  );
}

export default GeneralScreen;
