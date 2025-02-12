import { Routes } from '@angular/router';
import { ErrorsRouterPath, RoutesPath } from './core/types/routes.types';
import { AuthGuard } from '@angular/fire/auth-guard';
import { redirectUnauthorizedToLogin } from './core/guards/auth/auth-guards';


export const routes: Routes = [
  {
    path: '',
    canActivate: [ AuthGuard ],
    data: { authGuardPipe: redirectUnauthorizedToLogin },
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
