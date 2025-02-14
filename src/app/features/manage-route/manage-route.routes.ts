import { Routes } from '@angular/router';

export const manageRouteRoutes: Routes = [
  {
    path: 'routes',
    loadComponent: () =>
      import('./pages/manage-route-list/manage-route-list.component').then(
        (m) => m.ManageRouteListComponent
      ),
  },
];
