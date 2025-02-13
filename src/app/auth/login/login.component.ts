import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthRoutesPath, RoutesPath } from '../../core/types/routes.types';

@Component({
  selector: 'app-login',
  imports: [
    MatButton,
    MatFormField,
    MatInput,
    MatLabel,
    ReactiveFormsModule,
    TranslatePipe
  ],
  standalone: true,
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent implements OnInit {

  formGroup!: FormGroup;

  private authService = inject(AuthService);
  private router = inject(Router);

  ngOnInit() {
    this.initForm();
  }

  login() {
    const { email, password } = this.formGroup.value;
    this.authService.login(email, password);
  }

  goToRegisterPage() {
    this.router.navigate([ `${RoutesPath.auth}/${AuthRoutesPath.register}` ]);
  }

  private initForm() {
    this.formGroup = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    });
  }
}
