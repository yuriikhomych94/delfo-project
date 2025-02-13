import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguagesService } from './i18n/languages/languages.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
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
