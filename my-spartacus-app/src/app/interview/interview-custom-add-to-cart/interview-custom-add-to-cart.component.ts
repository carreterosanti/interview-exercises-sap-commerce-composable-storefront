import { Component, OnInit } from '@angular/core';
import { AsyncPipe, NgIf } from '@angular/common';
import { ActiveCartFacade } from '@spartacus/cart/base/root';
import { I18nModule, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { take } from 'rxjs/operators';
import { Observable } from 'rxjs';

//  Exercise 3: Custom button to add to cart not working when mapping CMS
@Component({
  selector: 'app-interview-custom-add-to-cart',
  standalone: true,
  imports: [AsyncPipe, NgIf, I18nModule],
  templateUrl: './interview-custom-add-to-cart.component.html',
})
export class InterviewCustomAddToCartComponent implements OnInit {
  product$!: Observable<Product | null>;

  constructor(
    private currentProductService: CurrentProductService,
    private activeCartFacade: ActiveCartFacade,
  ) {}

  ngOnInit(): void {
    this.product$ = this.currentProductService.getProduct();
  }

  addToCart(): void {
    this.currentProductService
      .getProduct()
      .pipe(take(1))
      .subscribe((product: Product | null) => {
        if (!product?.code) {
          return;
        }
        this.activeCartFacade.addEntry(product.code, 1);
      });
  }
}
