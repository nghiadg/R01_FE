import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { SelectModule } from 'primeng/select';
import { DatePickerModule } from 'primeng/datepicker';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-trip-dialog',
  imports: [
    SelectModule,
    InputTextModule,
    DatePickerModule,
    InputNumberModule,
    ButtonModule,
  ],
  templateUrl: './create-trip-dialog.component.html',
  styleUrl: './create-trip-dialog.component.scss',
})
export class CreateTripDialogComponent {}
