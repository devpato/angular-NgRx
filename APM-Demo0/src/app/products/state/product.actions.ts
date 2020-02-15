import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
  ToggleProductCode = "[Product] Toggle Product Code",
  SetCurrentProduct = "[Product] Set current product",
  ClearCurrentProduct = "[Product] Clear current Product",
  InitiazlizeCurrentProduct = "[Product] Initialize Current Product",
  Load = "[Product] Load",
  LoadSuccess = "[Product] Load Success",
  LoadFail = "[Product] Load Fail"
}

export class ToggleProductCode implements Action {
  readonly type = ProductActionTypes.ToggleProductCode;

  constructor(public payload: boolean) {}
}

export class SetCurrentProduct implements Action {
  readonly type = ProductActionTypes.SetCurrentProduct;

  constructor(public payload: Product) {}
}

export class ClearCurrentProduct implements Action {
  readonly type = ProductActionTypes.ClearCurrentProduct;
}

export class InitiazlizeCurrentProduct implements Action {
  readonly type = ProductActionTypes.InitiazlizeCurrentProduct;
}

export class LoadProducts implements Action {
  readonly type = ProductActionTypes.Load;
}

export class SuccessLoadProducts implements Action {
  readonly type = ProductActionTypes.LoadSuccess;

  constructor(public payload: Product[]) {}
}

export class FailedLoadProducts implements Action {
  readonly type = ProductActionTypes.LoadFail;

  constructor(public payload: string) {}
}

export type ProductActions =
  | ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitiazlizeCurrentProduct
  | LoadProducts
  | SuccessLoadProducts
  | FailedLoadProducts;
