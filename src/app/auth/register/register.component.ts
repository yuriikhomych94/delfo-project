import { Component, inject } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { AuthService } from '../auth.service';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthRoutesPath, RoutesPath } from '../../core/types/routes.types';

@Component({
  selector: 'app-register',
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatFormField,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent {

  formGroup: FormGroup = new FormGroup({
    username: new FormControl('', [ Validators.required ]),
    email: new FormControl('', [ Validators.required, Validators.email ]),
    password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
  });

  private authService = inject(AuthService);
  private router = inject(Router);

  register() {
    const { username, email, password } = this.formGroup.value;
    this.authService.register(username, email, password);
  }

  goToLoginPage() {
    this.router.navigate([`${RoutesPath.auth}/${AuthRoutesPath.login}`]);
  }
}
