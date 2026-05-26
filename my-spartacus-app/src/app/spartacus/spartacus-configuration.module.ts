import { NgModule } from '@angular/core';
import { translationChunksConfig, translationsEn } from '@spartacus/assets';
import {
  FeaturesConfig,
  I18nConfig,
  OccConfig,
  provideConfig,
  provideConfigFactory,
  SiteContextConfig,
} from '@spartacus/core';
import { defaultB2bOccConfig } from '@spartacus/setup';
import {
  defaultCmsContentProviders,
  layoutConfigFactory,
  mediaConfig,
} from '@spartacus/storefront';

@NgModule({
  declarations: [],
  imports: [],
  providers: [
    provideConfigFactory(layoutConfigFactory),
    provideConfig(mediaConfig),
    ...defaultCmsContentProviders,
    provideConfig(<OccConfig>{
      backend: {
        occ: {
          baseUrl: 'https://composable-storefront-demo.eastus.cloudapp.azure.com:8443',
        },
      },
    }),
    provideConfig(<SiteContextConfig>{
      context: {
        urlParameters: ['baseSite', 'language', 'currency'],
        baseSite: ['electronics-spa', 'apparel-uk-spa'],
        currency: ['USD', 'GBP'],
      },
    }),
    provideConfig(<I18nConfig>{
      i18n: {
        resources: { en: translationsEn },
        chunks: translationChunksConfig,
        fallbackLang: 'en',
      },
    }),
    provideConfig(<FeaturesConfig>{
      features: {
        level: '221121.11',
      },
    }),
    provideConfig(defaultB2bOccConfig),
  ],
})
export class SpartacusConfigurationModule {}
