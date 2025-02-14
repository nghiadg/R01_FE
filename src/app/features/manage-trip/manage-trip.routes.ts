import { Routes } from '@angular/router';

export const manageTripRoutes: Routes = [
  {
    path: 'trips',
    loadComponent: () =>
      import('./pages/manage-trip-list/manage-trip-list.component').then(
        (m) => m.ManageTripListComponent
      ),
  },
  {
    path: 'trips/:id',
    loadComponent: () =>
      import('./pages/manage-trip-details/manage-trip-details.component').then(
        (m) => m.ManageTripDetailsComponent
      ),
  },
];
