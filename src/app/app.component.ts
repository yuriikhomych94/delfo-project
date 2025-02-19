import { Component, inject } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { LanguagesService } from './i18n/languages/languages.service';
import { RouterEventService } from './core/services/router-event.service';
import { UiService } from './core/services/ui.service';

@Component({
  selector: 'app-root',
  imports: [ RouterOutlet ],
  standalone: true,
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {

  private languageService = inject(LanguagesService);
  private routerEventsService = inject(RouterEventService);
  private uiService = inject(UiService);

  constructor() {
    this.languageService.initLanguage();
    this.listenRouterEvents();
  }

  private listenRouterEvents() {
    this.routerEventsService.inProgress$.subscribe(value => this.uiService.setProgress(value));
  }

}
