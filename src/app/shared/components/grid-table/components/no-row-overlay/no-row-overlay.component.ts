import { Component } from '@angular/core';
import { INoRowsOverlayAngularComp } from 'ag-grid-angular';

@Component({
  selector: 'app-no-row-overlay',
  imports: [],
  templateUrl: './no-row-overlay.component.html',
  styleUrl: './no-row-overlay.component.scss',
})
export class NoRowOverlayComponent implements INoRowsOverlayAngularComp {
  agInit(): void {
    this.refresh();
  }

  refresh(): void {}
}
