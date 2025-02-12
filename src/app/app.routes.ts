import { Routes } from '@angular/router';
import { ErrorsRouterPath, RoutesPath } from './core/types/routes.types';

export const routes: Routes = [
  {
    path: RoutesPath.main,
    loadChildren: () => import('./main/layout.routes').then(r => r.layoutRoutes)
  },
  {
    path: RoutesPath.auth,
    loadChildren: () => import('./auth/auth.routes').then(r => r.authRoutes)
  },
  {
    path: RoutesPath.errors,
    loadChildren: () => import('./errors/error.routes').then(r => r.errorRoutes)
  },
  {
    path: '**',
    pathMatch: 'full',
    redirectTo: `${RoutesPath.errors}/${ErrorsRouterPath.error_404}`
  }
];
