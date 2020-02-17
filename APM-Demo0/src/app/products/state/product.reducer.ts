import { Product } from "../product";
import * as fromRoot from "../../state/app.state";
import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ProductActions, ProductActionTypes } from "./product.actions";

export interface State extends fromRoot.State {
  products: ProductState;
}

export interface ProductState {
  showProductCode: boolean;
  currentProductId: number | null;
  products: Product[];
  error: string;
}

const initialState: ProductState = {
  showProductCode: true,
  currentProductId: null,
  products: [],
  error: ""
};

/*Selector */

const getProductFeatureState = createFeatureSelector<ProductState>("products");

export const getShowProductCode = createSelector(
  getProductFeatureState,
  state => state.showProductCode //proyector function
);

export const getCurrentProductId = createSelector(
  getProductFeatureState,
  state => state.currentProductId //proyector function
);

export const getCurrentProduct = createSelector(
  getProductFeatureState, //the product slice of state
  getCurrentProductId, // currently selected product
  (state, currentProductId) => {
    if (currentProductId === 0) {
      return {
        id: 0,
        productName: "",
        productCode: "New",
        description: "",
        starRating: 0
      };
    } else {
      return currentProductId
        ? state.products.find(p => p.id === currentProductId)
        : null;
    }
  }
);

export const getProducts = createSelector(
  getProductFeatureState,
  state => state.products //proyector function
);

export const getError = createSelector(
  getProductFeatureState,
  state => state.error //proyector function
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

    case ProductActionTypes.SetCurrentProduct: {
      return {
        ...state,
        currentProductId: action.payload.id
      };
    }

    case ProductActionTypes.ClearCurrentProduct: {
      return {
        ...state,
        currentProductId: null
      };
    }

    case ProductActionTypes.InitiazlizeCurrentProduct: {
      return {
        ...state,
        currentProductId: 0
      };
    }

    case ProductActionTypes.LoadSuccess: {
      return {
        ...state,
        products: action.payload,
        error: ""
      };
    }

    case ProductActionTypes.LoadFail: {
      return {
        ...state,
        error: action.payload
      };
    }

    case ProductActionTypes.UpdateProductSuccess: {
      const updatedProducts = state.products.map(item =>
        action.payload.id === item.id ? action.payload : item
      );

      return {
        ...state,
        products: updatedProducts,
        currentProductId: action.payload.id,
        error: ""
      };
    }

    case ProductActionTypes.UpdateProductFail: {
      return {
        ...state,
        error: action.payload
      };
    }

    default:
      return state;
  }
}
