import { Product } from "../product";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProduct: Product;
  products: Product[];
}

const initialState: ProductState = {
  showProductCode: true,
  currentProduct: null,
  products: []
};

/*Selector */

const getProductFeatureState = createFeatureSelector<ProductState>("products");

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode //proyector function
);

export const getCurrentProduct = createSelector(
  getProductFeatureState,
  state => state.currentProduct //proyector function
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products //proyector function
);

export function reducer(
  state = initialState,
  action: ProductActions
): ProductState {
  switch (action.type) {
    case ProductActionTypes.ToggleProductCode: {
      return {
        ...state,
        showProductCode: action.payload
      };
    }

    default:
      return state;
  }
}
