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
import SideBar from "../general-parts/SideBar";
//!------------------------------------------------------------IMPORTS

const LikedQuotes = () => {
  //
  const [{ basket }] = useStateValue();
  // THIS IS THE DATA LAYER FROM STATE PROVIDER
  // THIS IS USUALLY SUMMONED
  // WHEN WILL NEED TO THE GRAB THE BASKET ITEMS
  // OR THE WHOLE BASKET SOMEWHERE IN THE COMPONENT
  //
  return (
    <CategoryScreen>
      <SideBar pageWrapId={"page-wrap"} outerContainerId={"App"} />
      <div id="page-wrap">
        <div>
          {basket.length === 0 ? ( // if the basket is empty, has no items, then return the below div
            <NoLikedQuotesContainer>
              <NoLikedQuotesText>
                You have no Favourite quotes
              </NoLikedQuotesText>
            </NoLikedQuotesContainer>
          ) : (
            // other wise (i.e, if the basket is not empty) return the below div

            <div>
              <LikedQuotesTitle> Your favourite quotes </LikedQuotesTitle>

              {/* list all the checkout products */}

              {/* for every single item, return the checkout products component */}

              {basket.map((item, index) => (
                <LikedQuotesContainer
                  //
                  key={index}
                  // adding this will stop this error:
                  // 'Encountered two children with the same key, ``. Keys should be unique so that components maintain their identity across updates. Non-unique keys may cause children to be duplicated and/or omitted — the behavior is unsupported and could change in a future version.'
                  // More info here: programmersought.com/article/66582053289/
                  id={item.id}
                  tag={item.tag}
                  title={item.title}
                  quoteText={item.quoteText}
                />
              ))}
            </div>
          )}
        </div>
      </div>
    </CategoryScreen>
  );
};
export default LikedQuotes;
