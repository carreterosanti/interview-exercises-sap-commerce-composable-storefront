import { NgModule } from '@angular/core';
import { CmsConfig, I18nConfig, provideConfig } from '@spartacus/core';
import { OutletPosition, provideOutlet } from '@spartacus/storefront';

import { InterviewCustomAddToCartComponent } from './interview-custom-add-to-cart/interview-custom-add-to-cart.component';
import { InterviewCustomConfigureProductComponent } from './interview-custom-configure-product/interview-custom-configure-product.component';
import { InterviewProductBadgeComponent } from './interview-product-badge/interview-product-badge.component';
import { InterviewWishlistEventListener } from './interview-wishlist-event-listener.service';

@NgModule({
  imports: [InterviewProductBadgeComponent, InterviewCustomAddToCartComponent],
  providers: [
    InterviewWishlistEventListener,
    provideOutlet({
      id: 'ProductSummaryComponent',
      position: OutletPosition.AFTER,
      component: InterviewProductBadgeComponent,
    }),
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ProductAddToCartComponent: {
          component: InterviewCustomAddToCartComponent,
        },
      },
    }),
    provideConfig(<CmsConfig>{
      cmsComponents: {
        ConfigureProductComponent: {
          component: InterviewCustomConfigureProductComponent,
        },
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: {
          en: {
            interview: {
              productSettings: {
                label: 'CONFIGURACION DE PRODUCTO',
              },
            },
            product: {
              addToCart: {
                addToCart: 'Exercise 3: Original Add to cart component',
              },
            },
          },
        },
        chunks: {
          interview: ['productSettings'],
        },
      },
    }),
  ],
})
export class InterviewModule {
  constructor(_wishlistListener: InterviewWishlistEventListener) {}
}
