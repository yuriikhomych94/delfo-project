import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { LanguagesService } from './core/languages/languages.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet, TranslatePipe ],
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
