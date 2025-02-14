import { Component, Input } from '@angular/core';
import { AgGridAngular } from 'ag-grid-angular';
import type { ColDef } from 'ag-grid-community';
import { AllCommunityModule, ModuleRegistry } from 'ag-grid-community';
import { LoadingOverlayComponent } from './components/loading-overlay/loading-overlay.component';
import { NoRowOverlayComponent } from './components/no-row-overlay/no-row-overlay.component';

ModuleRegistry.registerModules([AllCommunityModule]);

@Component({
  selector: 'app-grid-table',
  imports: [AgGridAngular],
  templateUrl: './grid-table.component.html',
  styleUrl: './grid-table.component.scss',
})
export class GridTableComponent {
  @Input() columnDefs: ColDef[] = [];
  protected loadingOverlayComponent = LoadingOverlayComponent;
  protected noRowOverlayComponent = NoRowOverlayComponent;
}
