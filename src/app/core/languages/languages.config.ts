import { HttpClient } from '@angular/common/http';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { EnvironmentProviders, importProvidersFrom, inject, provideAppInitializer } from '@angular/core';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { LanguagesService } from './languages.service';

const httpLoaderFactory: (http: HttpClient) => TranslateHttpLoader = (http: HttpClient) =>
  new TranslateHttpLoader(http, './assets/i18n/', '.json');

export function provideTranslationFeatures(): EnvironmentProviders[] {
  return [
    importProvidersFrom([ TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: httpLoaderFactory,
        deps: [ HttpClient ],
      }
    }) ]),
    provideAppInitializer(() => inject(LanguagesService).initLanguage())
  ];
}
