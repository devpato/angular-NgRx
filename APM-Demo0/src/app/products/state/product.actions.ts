import { Action } from "@ngrx/store";
import { Product } from "../product";

export enum ProductActionTypes {
  ToggleProductCode = "[Product] Toggle Product Code",
  SetCurrentProduct = "[Product] Set current product",
  ClearCurrentProduct = "[Product] Clear current Product",
  InitiazlizeCurrentProduct = "[Product] Initialize Current Product",
  Load = "[Product] Load",
  LoadSuccess = "[Product] Load Success",
  LoadFail = "[Product] Load Fail",
  UpdateProduct = "[Product] Update Product",
  UpdateProductSuccess = "[Product] Update Product Success",
  UpdateProductFail = "[Product] Update Product Success Failed",
  CreateProduct = "[Product] Create Product",
  CreateProductSuccess = "[Product] Create product sucess",
  CreateProductFail = "[Product] Create product fail",
  DeleteProduct = "[Product] Delete Product",
  DeleteProductSuccess = "[Product] Delete product success",
  DeleteProductFail = "[Product] Delete product fail"
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

export class UpdateProduct implements Action {
  readonly type = ProductActionTypes.UpdateProduct;

  constructor(public payload: Product) {}
}

export class UpdateProductSuccess implements Action {
  readonly type = ProductActionTypes.UpdateProductSuccess;

  constructor(public payload: Product) {}
}

export class UpdateProductFail implements Action {
  readonly type = ProductActionTypes.UpdateProductFail;

  constructor(public payload: string) {}
}

export class CreateProduct implements Action {
  readonly type = ProductActionTypes.CreateProduct;

  constructor(public payload: Product) {}
}

export class CreateProductSuccess implements Action {
  readonly type = ProductActionTypes.CreateProductSuccess;

  constructor(public payload: Product) {}
}

export class CreateProductFail implements Action {
  readonly type = ProductActionTypes.CreateProductFail;

  constructor(public payload: string) {}
}

export class DeleteProduct implements Action {
  readonly type = ProductActionTypes.DeleteProduct;

  constructor(public payload: number) {}
}

export class DeleteProductSuccess implements Action {
  readonly type = ProductActionTypes.DeleteProductSuccess;

  constructor(public payload: number) {}
}

export class DeleteProductFail implements Action {
  readonly type = ProductActionTypes.DeleteProductFail;

  constructor(public payload: string) {}
}

export type ProductActions =
  | ToggleProductCode
  | SetCurrentProduct
  | ClearCurrentProduct
  | InitiazlizeCurrentProduct
  | LoadProducts
  | SuccessLoadProducts
  | FailedLoadProducts
  | UpdateProduct
  | UpdateProductFail
  | UpdateProductSuccess
  | CreateProduct
  | CreateProductSuccess
  | CreateProductFail
  | DeleteProduct
  | DeleteProductSuccess
  | DeleteProductFail;
