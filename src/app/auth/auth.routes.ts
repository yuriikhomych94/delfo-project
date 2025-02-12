import { Routes } from '@angular/router';
import { AuthRoutesPath } from '../core/types/routes.types';

export const authRoutes: Routes = [
  {
    path: AuthRoutesPath.login,
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
