import { Component, inject, OnInit } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButton } from '@angular/material/button';
import { MatFormField, MatInput, MatLabel } from '@angular/material/input';
import { TranslatePipe } from '@ngx-translate/core';
import { AuthRoutesPath, RoutesPath } from '../../core/types/routes.types';
import { Store } from '@ngrx/store';
import { authActions } from '../../core/store/auth/auth.actions';
import { selectIsLoading } from '../../core/store/auth/auth.reducers';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';

@Component({
  selector: 'app-register',
  imports: [
    MatButton,
    ReactiveFormsModule,
    MatInput,
    MatLabel,
    MatFormField,
    TranslatePipe,
    AsyncPipe
  ],
  standalone: true,
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss'
})
export class RegisterComponent implements OnInit {
  private router = inject(Router);
  private store = inject(Store);

  formGroup!: FormGroup;
  isLoading$: Observable<boolean> = this.store.select(selectIsLoading);

  ngOnInit(): void {
    this.initForm();
  }

  register(): void {
    this.store.dispatch(authActions.register(this.formGroup.value))
  }

  goToLoginPage(): void {
    this.router.navigate([ `${RoutesPath.auth}/${AuthRoutesPath.login}` ]);
  }

  private initForm(): void {
    this.formGroup = new FormGroup({
      username: new FormControl('', [ Validators.required ]),
      email: new FormControl('', [ Validators.required, Validators.email ]),
      password: new FormControl('', [ Validators.required, Validators.minLength(6) ]),
    });
  }
}
