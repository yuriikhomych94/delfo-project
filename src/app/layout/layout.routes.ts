import { Routes } from '@angular/router';

export const layoutRoutes: Routes = [
  {
    path: '',
    loadComponent: () => import('../layout/layout.component').then(c => c.LayoutComponent)
  }
];
