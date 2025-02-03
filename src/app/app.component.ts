import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslateModule, TranslatePipe } from '@ngx-translate/core';
import { LanguagesService } from './core/languages/languages.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, TranslateModule, TranslatePipe ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  languageService = inject(LanguagesService);

  constructor() {
    this.languageService.initLanguage();
  }

}
