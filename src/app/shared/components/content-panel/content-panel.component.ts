import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-content-panel',
  imports: [],
  templateUrl: './content-panel.component.html',
  styleUrl: './content-panel.component.scss',
})
export class ContentPanelComponent {
  @Input() heading: string = '';
}
