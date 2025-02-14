import { Component } from '@angular/core';
import type { ColDef } from 'ag-grid-community';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { ContentPanelComponent } from '../../../../shared/components/content-panel/content-panel.component';
import { GridTableComponent } from '../../../../shared/components/grid-table/grid-table.component';
import { CreateRouteDialogComponent } from '../../components/create-route-dialog/create-route-dialog.component';
import { PaginatorModule } from 'primeng/paginator';

@Component({
  selector: 'app-manage-route-list',
  imports: [
    ContentPanelComponent,
    InputGroupModule,
    InputGroupAddonModule,
    ButtonModule,
    InputTextModule,
    GridTableComponent,
    PaginatorModule,
  ],
  templateUrl: './manage-route-list.component.html',
  styleUrl: './manage-route-list.component.scss',
  providers: [DialogService],
})
export class ManageRouteListComponent {
  protected colDefs: ColDef[] = [
    { field: '', headerName: 'Mã tuyến' },
    { field: '', headerName: 'Tuyến đường' },
    { field: '', headerName: 'Khoảng cách (km)' },
    { field: '', headerName: 'Thời gian dự kiến' },
    { field: '', headerName: 'Giá tiêu chuẩn' },
  ];

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  protected onClickCreateRoute() {
    this.ref = this.dialogService.open(CreateRouteDialogComponent, {
      header: 'Tạo tuyến đường',
      closable: true,
      width: '400px',
      modal: true,
    });
  }
}
