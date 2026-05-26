import { CxEvent } from '@spartacus/core';

export class WishlistAddedEvent extends CxEvent {
  static override readonly type = 'WishlistAddedEvent';
  productCode!: string;
  productName!: string;
}
