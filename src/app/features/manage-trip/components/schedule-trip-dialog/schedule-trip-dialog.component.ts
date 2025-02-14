import { Component } from '@angular/core';
import { ButtonModule } from 'primeng/button';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { CheckboxModule } from 'primeng/checkbox';

@Component({
  selector: 'app-schedule-trip-dialog',
  imports: [
    InputTextModule,
    SelectModule,
    InputNumberModule,
    ButtonModule,
    DatePickerModule,
    CheckboxModule,
  ],
  templateUrl: './schedule-trip-dialog.component.html',
  styleUrl: './schedule-trip-dialog.component.scss',
})
export class ScheduleTripDialogComponent {}
