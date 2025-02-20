import { Component, inject } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { LanguagesComponent } from './languages/languages.component';
import { CartComponent } from './cart/cart.component';
import { LogoComponent } from './logo/logo.component';
import { TranslatePipe } from '@ngx-translate/core';
import { Store } from '@ngrx/store';
import { authActions } from '../../core/store/auth/auth.actions';
import { UiService } from '../../core/services/ui.service';
import { MatProgressBar } from '@angular/material/progress-bar';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatToolbar,
    MatIcon,
    LanguagesComponent,
    CartComponent,
    LogoComponent,
    TranslatePipe,
    MatProgressBar,
    NgIf
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  private store = inject(Store);
  uiService = inject(UiService);

  logout(): void {
    this.store.dispatch(authActions.logout());
  }
}
