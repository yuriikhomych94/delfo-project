import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./main/layout.routes').then(r => r.layoutRoutes)
  },
  {
    path: 'auth',
    loadChildren: () => import('./auth/auth.routes').then(r => r.authRoutes)
  },
  {
    path: 'error',
    loadChildren: () => import('./errors/error.routes').then(m => m.errorRoutes)
  },
  {
    path: '**',
    redirectTo: 'error'
  }
];
