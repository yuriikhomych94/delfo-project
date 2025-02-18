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

@Component({
  selector: 'app-header',
  imports: [
    MatButton,
    MatToolbar,
    MatIcon,
    LanguagesComponent,
    CartComponent,
    LogoComponent,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {
  private store = inject(Store);

  logout(): void {
    this.store.dispatch(authActions.logout());
  }
}
