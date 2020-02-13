export function reducer(state, action) {
  console.log(JSON.stringify(state));
  console.log(action.payload);
  switch (action.type) {
    case "TOGGLE_PRODUCT_CODE": {
      return { ...state, showProductCode: action.payload };
    }

    default:
      return state;
  }
}
