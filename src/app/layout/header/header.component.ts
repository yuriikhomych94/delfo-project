import { Component, inject } from '@angular/core';
import { AuthService } from '../../auth/auth.service';
import { MatButton } from '@angular/material/button';
import { MatToolbar } from '@angular/material/toolbar';
import { MatIcon } from '@angular/material/icon';
import { LanguagesComponent } from './languages/languages.component';
import { CartComponent } from './cart/cart.component';
import { LogoComponent } from './logo/logo.component';
import { TranslatePipe } from '@ngx-translate/core';

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

  authService = inject(AuthService);

}
