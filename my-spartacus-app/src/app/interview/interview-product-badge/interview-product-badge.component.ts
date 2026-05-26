import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import { ProductScope } from '@spartacus/core';
import { CurrentProductService } from '@spartacus/storefront';

@Component({
  selector: 'app-interview-product-badge',
  standalone: true,
  templateUrl: './interview-product-badge.component.html',
  styleUrls: ['./interview-product-badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class InterviewProductBadgeComponent {
  private readonly currentProductService = inject(CurrentProductService);

  protected readonly product = toSignal(
    this.currentProductService.getProduct([ProductScope.PRICE, ProductScope.STOCK]),
    {
      initialValue: null,
    },
  );
}
