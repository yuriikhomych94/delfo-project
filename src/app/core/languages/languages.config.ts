import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { provideTranslateService, TranslateLoader } from '@ngx-translate/core';
import { makeEnvironmentProviders } from '@angular/core';

export const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export const translationConfig = makeEnvironmentProviders([
  provideTranslateService({
    loader: {
      provide: TranslateLoader,
      useFactory: httpLoaderFactory,
      deps: [ HttpClient ]
    }
  })
])
