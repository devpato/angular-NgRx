import { Injectable } from "@angular/core";
import { Actions, Effect, ofType } from "@ngrx/effects";
import { ProductService } from "../product.service";
import * as productActions from "./product.actions";
import { mergeMap, map } from "rxjs/operators";
import { Product } from "../product";

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
      this.productService
        .getProducts()
        .pipe(
          map(
            (products: Product[]) =>
              new productActions.SuccessLoadProducts(products)
          )
        )
    )
  );
}
