const basketFromLocalStorage = JSON.parse(
  localStorage.getItem("basket") || "[]"
);

export const initialState = {
  basket: basketFromLocalStorage,
  user: null,
  // the data layer in the beginning is a basket with an empty array --> basket :[] ;

  // items will get added to it by the user

  // This is similar to the empty array, that is used in the constructor,
  // as a placeholder for incoming api data is being expected

  // To test whether the context api is working.
  // Comment out the above 'basket:[]'

  // Uncomment the below basket
  // basket: ["bread", "meat"],

  // This basket has two items, therefore if the context api is working
  // then, on the page, it should display the number 2 next to the basket.

  // Or uncomment the below basket
  // basket: ["bread", "meat", "pizza"],

  // This basket has three items, therefore if the context api is working
  // then, on the page, it should display the number 3 next to the basket.
};
