import { inject, Injectable } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Injectable({
  providedIn: 'root'
})

export class LanguagesService {

  translateService = inject(TranslateService);

  initLanguage(defaultLanguage: string = 'en_US'): void {
    this.translateService.setDefaultLang(defaultLanguage);
    this.translateService.use(defaultLanguage);
  }
}
