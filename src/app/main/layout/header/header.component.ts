import { Component, inject } from '@angular/core';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthService } from '../../../auth/auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-header',
  imports: [
    TranslatePipe,
    MatButton
  ],
  standalone: true,
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  authService = inject(AuthService);

}
