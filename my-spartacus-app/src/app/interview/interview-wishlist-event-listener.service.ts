import { inject, Injectable } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { EventService } from '@spartacus/core';
import { WishlistAddedEvent } from './events/wishlist-added.event';
declare global {
  interface Window {
    dataLayer: any[];
  }
}
@Injectable()
export class InterviewWishlistEventListener {
  private readonly eventService = inject(EventService);

  constructor() {
    this.eventService
      .get(WishlistAddedEvent)
      .pipe(takeUntilDestroyed())
      .subscribe((event) => {
        console.log('Wishlist event received:', event);
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push({ event: 'wishlist_added', productCode: event.productCode });
      });
    // Exercise 4: WishlistAddedEvent triggered but not registered in dataLayer
  }
}
