import { Actions, createEffect, ofType } from '@ngrx/effects';
import { inject } from '@angular/core';
import { AuthService } from '../../../auth/auth.service';
import { authActions } from './auth.actions';
import { catchError, map, of, switchMap, tap } from 'rxjs';
import { UserInterface } from '../../../auth/auth.types';
import { StorageService } from '../../../shared/services/storage.service';
import { Router } from '@angular/router';
import { AuthRoutesPath, RoutesPath } from '../../types/routes.types';

export const registerEffect = createEffect((
  actions$ = inject(Actions), authService = inject(AuthService), storageService = inject(StorageService)
) => {
  return actions$.pipe(
    ofType(authActions.register),
    switchMap(action =>
      authService.register(action.username, action.email, action.password).pipe(
        map((user: UserInterface) => {
          storageService.setItem<UserInterface>('currentUser', user);
          return authActions.registerSuccess({ user });
        }),
        catchError((error) => of(authActions.registerFailure({ errors: error })))
      )
    )
  )
}, { functional: true });

export const loginEffect = createEffect((
  actions$ = inject(Actions), authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.login),
    switchMap(action =>
      authService.login(action.email, action.password).pipe(
        map((user: UserInterface) => {
          return authActions.loginSuccess({ user })
        }),
        catchError((error) => of(authActions.loginFailure({ errors: error })))
      )
    )
  )
}, { functional: true });

export const logoutEffect = createEffect((
  actions$ = inject(Actions), authService = inject(AuthService)
) => {
  return actions$.pipe(
    ofType(authActions.logout),
    switchMap(() => authService.logout().pipe(
      map(() => authActions.logoutSuccess()),
      catchError((error) => of(authActions.logoutFailure({ errors: error })))
    ))
  );
}, { functional: true });

export const redirectAfterRegisterAndLogin = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.registerSuccess, authActions.loginSuccess),
      tap(() => router.navigate([ '/' ]))
    )
  },
  { functional: true, dispatch: false }
)

export const redirectAfterLogout = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(authActions.logoutSuccess),
      tap(() => router.navigate([ `${RoutesPath.auth}/${AuthRoutesPath.login}` ])
      )
    )
  },
  { functional: true, dispatch: false }
)
