import React from "react";
import QuoteContainer from "../containers/QuoteContainer";
import { CategoryScreen } from "../../Styles";
import { data } from "../general-parts/Data";
import SideBar from "../general-parts/SideBar";
import BasketHeartIcon from "../general-parts/BasketHeartIcon";
//!------------------------------------------------------------IMPORTS

const General = () => {
  //
  const quotesData = data.general;
  //
  return (
    <CategoryScreen>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
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
      </div>
    </CategoryScreen>
  );
};
export default General;
