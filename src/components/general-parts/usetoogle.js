import React from "react";

// The below function contains the toogle logic

export const useToggle = (initialState) => {
  //
  const [isToggled, setIsToggled] = React.useState(initialState);
  //
  const toggle = React.useCallback(
    //
    () => setIsToggled((state) => !state),
    //
    [setIsToggled]
    //
  );

  return [isToggled, toggle];
};
