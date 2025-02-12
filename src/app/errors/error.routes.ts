import { Routes } from '@angular/router';
import { ErrorsComponent } from './errors.component';
import { ErrorsRouterPath } from '../core/types/routes.types';

export const errorRoutes: Routes = [
  {
    path: ErrorsRouterPath.error_404,
    component: ErrorsComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: ErrorsComponent
  },
]
