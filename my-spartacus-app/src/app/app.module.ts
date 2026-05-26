import { NgModule } from '@angular/core';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { AppRoutingModule } from '@spartacus/storefront';
import { InterviewModule } from './interview/interview.module';
import { SpartacusModule } from './spartacus/spartacus.module';

@NgModule({
  imports: [
    StoreModule.forRoot({}),
    EffectsModule.forRoot([]),
    AppRoutingModule,
    SpartacusModule,
    InterviewModule,
  ],
})
export class AppModule {}
