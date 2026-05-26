import { AsyncPipe, NgIf } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { EventService, I18nModule, Product } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';
import { Observable } from 'rxjs';
import { WishlistAddedEvent } from '../events/wishlist-added.event';

@Component({
  selector: 'app-interview-custom-configure-product',
  standalone: true,
  imports: [AsyncPipe, NgIf, I18nModule],
  templateUrl: './interview-custom-configure-product.component.html',
})
export class InterviewCustomConfigureProductComponent implements OnInit {
  product$!: Observable<Product | null>;

  constructor(
    private currentProductService: CurrentProductService,
    private eventService: EventService,
  ) {}

  ngOnInit(): void {
    this.product$ = this.currentProductService.getProduct();
  }

  addToCart(): void {
    const event = new WishlistAddedEvent();
    event.productCode = '300785814';
    event.productName = 'Mock Product';
    this.eventService.dispatch(event, WishlistAddedEvent);
  }
}
