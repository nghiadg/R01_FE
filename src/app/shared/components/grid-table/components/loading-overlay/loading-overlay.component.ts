import { Component } from '@angular/core';
import type { ILoadingOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-loading-overlay',
  imports: [],
  templateUrl: './loading-overlay.component.html',
  styleUrl: './loading-overlay.component.scss',
})
export class LoadingOverlayComponent implements ILoadingOverlayAngularComp {
  agInit(): void {
    this.refresh();
  }

  refresh(): void {}
}
