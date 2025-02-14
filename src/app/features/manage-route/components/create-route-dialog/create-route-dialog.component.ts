import { Component } from '@angular/core';
import { InputTextModule } from 'primeng/inputtext';
import { InputNumberModule } from 'primeng/inputnumber';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-create-route-dialog',
  imports: [InputTextModule, InputNumberModule, ButtonModule],
  templateUrl: './create-route-dialog.component.html',
  styleUrl: './create-route-dialog.component.scss',
})
export class CreateRouteDialogComponent {}
