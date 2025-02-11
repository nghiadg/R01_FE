import { Component } from '@angular/core';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { HeaderComponent } from './components/header/header.component';
import { RouterOutlet } from '@angular/router';
import { ContentPanelComponent } from '../../shared/components/content-panel/content-panel.component';

@Component({
  selector: 'app-admin-layout',
  imports: [
    SidebarComponent,
    HeaderComponent,
    RouterOutlet,
    ContentPanelComponent,
  ],
  templateUrl: './admin-layout.component.html',
  styleUrl: './admin-layout.component.scss',
})
export class AdminLayoutComponent {}
