import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import * as productActions from "./product.actions";
import { mergeMap, map, catchError } from "rxjs/operators";
import { Product } from "../product";
import { of } from "rxjs";

@Injectable()
export class ProductEffects {
  constructor(
    private actions$: Actions,
    private productService: ProductService
  ) {}

  @Effect()
  loadProducts$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.Load),
    mergeMap((action: productActions.LoadProducts) =>
      this.productService.getProducts().pipe(
        map(
          (products: Product[]) =>
            new productActions.SuccessLoadProducts(products)
        ),
        catchError(err => of(new productActions.FailedLoadProducts(err)))
      )
    )
  );

  @Effect()
  updateProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.UpdateProduct),
    map((action: productActions.UpdateProduct) => action.payload), //to get the product to update
    mergeMap((
      product: Product //we use merge map to handle the 2 observables the one form our action and the one from our service
    ) =>
      this.productService.updateProduct(product).pipe(
        map(
          updatedProduct =>
            new productActions.UpdateProductSuccess(updatedProduct)
        ),
        catchError(err => of(new productActions.UpdateProductFail(err)))
      )
    )
  );

  @Effect()
  createProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.CreateProduct),
    map((action: productActions.CreateProduct) => action.payload), //to get the product to create
    mergeMap((
      newProduct: Product //we use merge map to handle the 2 observables the one form our action and the one from our service
    ) =>
      this.productService.createProduct(newProduct).pipe(
        map(newProduct => new productActions.CreateProductSuccess(newProduct)),
        catchError(err => of(new productActions.CreateProductFail(err)))
      )
    )
  );

  @Effect()
  deleteProduct$ = this.actions$.pipe(
    ofType(productActions.ProductActionTypes.DeleteProduct),
    map((action: productActions.DeleteProduct) => action.payload), //to get the product to update
    mergeMap((
      id: number //we use merge map to handle the 2 observables the one form our action and the one from our service
    ) =>
      this.productService.deleteProduct(id).pipe(
        map(() => new productActions.DeleteProductSuccess(id)),
        catchError(err => of(new productActions.DeleteProductFail(err)))
      )
    )
  );
}
