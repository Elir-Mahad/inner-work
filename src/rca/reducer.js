const basketFromLocalStorage = JSON.parse(
  localStorage.getItem("basket") || "[]"
);
