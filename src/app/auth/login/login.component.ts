import { Component, inject, OnInit } from '@angular/core';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatLabel } from '@angular/material/form-field';
import { MatInput } from '@angular/material/input';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthRoutesPath, RoutesPath } from '../../core/types/routes.types';
import { Store } from '@ngrx/store';
import { authActions } from '../../core/store/auth/auth.actions';

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

  private router = inject(Router);
  private store = inject(Store);


  ngOnInit(): void {
    this.initForm();
  }

  login(): void {
    this.store.dispatch(authActions.login(this.formGroup.value));
  }

  goToRegisterPage(): void {
    this.router.navigate([ `${RoutesPath.auth}/${AuthRoutesPath.register}` ]);
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    });
  }
}
