import { Component, OnInit, OnDestroy } from "@angular/core";

import { Subscription } from "rxjs";

import { Product } from "../product";
import { ProductService } from "../product.service";
import { Store, select } from "@ngrx/store";
import * as fromProduct from "../state/product.reducer";
import * as productActions from "../state/product.actions";

@Component({
  selector: "pm-product-list",
  templateUrl: "./product-list.component.html",
  styleUrls: ["./product-list.component.css"]
})
export class ProductListComponent implements OnInit, OnDestroy {
  pageTitle = "Products";
  errorMessage: string;

  displayCode: boolean;

  products: Product[];

  // Used to highlight the selected product in the list
  selectedProduct: Product | null;
  sub: Subscription;

  constructor(
    private productService: ProductService,
    private store: Store<fromProduct.State>
  ) {}

  ngOnInit(): void {
    // this.sub = this.productService.selectedProductChanges$.subscribe(
    //   selectedProduct => (this.selectedProduct = selectedProduct)
    // );

    this.sub = this.store
      .pipe(select(fromProduct.getCurrentProduct))
      .subscribe(cp => {
        this.selectedProduct = cp;
      });

    this.productService.getProducts().subscribe({
      next: (products: Product[]) => (this.products = products),
      error: (err: any) => (this.errorMessage = err.error)
    });

    this.store
      .pipe(select(fromProduct.getShowProductCode))
      .subscribe(showProductCode => {
        this.displayCode = showProductCode;
      });
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

  checkChanged(value: boolean): void {
    this.displayCode = value;
    this.store.dispatch(new productActions.ToggleProductCode(true));
  }

  newProduct(): void {
    this.store.dispatch(new productActions.InitiazlizeCurrentProduct());
  }

  productSelected(product: Product): void {
    this.store.dispatch(new productActions.SetCurrentProduct(product));
  }
}
