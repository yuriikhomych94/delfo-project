import { Routes } from '@angular/router';
import { AuthRoutesPath } from '../core/types/routes.types';
import { AuthGuard } from '@angular/fire/auth-guard';
import { redirectLoggedInToMainPage } from '../core/guards/auth/auth-guards';

export const authRoutes: Routes = [
  {
    path: AuthRoutesPath.login,
    canActivate: [ AuthGuard ],
    data: { authGuardPipe: redirectLoggedInToMainPage },
    loadComponent: () => import('./login/login.component').then(c => c.LoginComponent),
  },
  {
    path: AuthRoutesPath.register,
    loadComponent: () => import('./register/register.component').then(c => c.RegisterComponent),
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: AuthRoutesPath.login
  }
]
