import { Routes } from '@angular/router';
import { authRoutes } from './features/auth/auth.routes';
import { manageTripRoutes } from './features/manage-trip/manage-trip.routes';
import { manageRouteRoutes } from './features/manage-route/manage-route.routes';

export const routes: Routes = [
  ...authRoutes,
  // admin routes
  {
    path: 'admin',
    loadComponent: () =>
      import('./layouts/admin-layout/admin-layout.component').then(
        (m) => m.AdminLayoutComponent
      ),
    children: [...manageTripRoutes, ...manageRouteRoutes],
  },
];
