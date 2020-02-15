import { Product } from "../product";

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

export function reducer(state, action) {
  switch (action.type) {
    case "TOGGLE_PRODUCT_CODE": {
      return {
        ...state,
        showProductCode: action.payload,
        myFavoriteMovie: "LOTR"
      };
    }

    default:
      return state;
  }
}
