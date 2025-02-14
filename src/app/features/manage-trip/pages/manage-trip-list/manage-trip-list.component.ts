import { Component } from '@angular/core';
import { ColDef } from 'ag-grid-community';
import { ButtonModule } from 'primeng/button';
import { DialogService, DynamicDialogRef } from 'primeng/dynamicdialog';
import { InputGroupModule } from 'primeng/inputgroup';
import { InputGroupAddonModule } from 'primeng/inputgroupaddon';
import { InputTextModule } from 'primeng/inputtext';
import { PaginatorModule } from 'primeng/paginator';
import { SelectButton } from 'primeng/selectbutton';
import { ContentPanelComponent } from '../../../../shared/components/content-panel/content-panel.component';
import { GridTableComponent } from '../../../../shared/components/grid-table/grid-table.component';
import { CreateTripDialogComponent } from '../../components/create-trip-dialog/create-trip-dialog.component';
import { ScheduleTripDialogComponent } from '../../components/schedule-trip-dialog/schedule-trip-dialog.component';

@Component({
  selector: 'app-manage-trip-list',
  imports: [
    ContentPanelComponent,
    SelectButton,
    ButtonModule,
    PaginatorModule,
    GridTableComponent,
    InputGroupModule,
    InputGroupAddonModule,
    InputTextModule,
  ],
  templateUrl: './manage-trip-list.component.html',
  styleUrl: './manage-trip-list.component.scss',
  providers: [DialogService],
})
export class ManageTripListComponent {
  protected tabOptions = [
    { label: 'Hôm nay', value: 1 },
    { label: 'Đang khởi hành', value: 2 },
    { label: 'Chưa khởi hành', value: 3 },
  ];

  protected colDefs: ColDef[] = [
    { field: '', headerName: 'Mã chuyến' },
    { field: '', headerName: 'Tuyến đường' },
    { field: '', headerName: 'Xe' },
    { field: '', headerName: 'Tài xế' },
    { field: '', headerName: 'Lơ xe' },
    { field: '', headerName: 'Khởi hành' },
    { field: '', headerName: 'Số ghế trống' },
    { field: '', headerName: 'Giá vé' },
    { field: '', headerName: 'Trạng thái' },
  ];

  ref: DynamicDialogRef | undefined;

  constructor(public dialogService: DialogService) {}

  protected onClickCreateTrip() {
    this.ref = this.dialogService.open(CreateTripDialogComponent, {
      header: 'Tạo chuyến đi',
      closable: true,
      width: '600px',
      modal: true,
    });
  }

  protected onClickScheduleTrip() {
    this.ref = this.dialogService.open(ScheduleTripDialogComponent, {
      header: 'Lên lịch chuyến đi',

      closable: true,
      width: '600px',
      modal: true,
    });
  }
}
