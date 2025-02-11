import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { MenuItem } from 'primeng/api';
import { AvatarModule } from 'primeng/avatar';
import { ButtonModule } from 'primeng/button';
import { MenuModule } from 'primeng/menu';
@Component({
  selector: 'app-sidebar',
  imports: [
    ButtonModule,
    MenuModule,
    AvatarModule,
    RouterLink,
    RouterLinkActive,
  ],
  templateUrl: './sidebar.component.html',
  styleUrl: './sidebar.component.scss',
})
export class SidebarComponent {
  protected menus: MenuItem[] = [
    {
      label: 'Quản lý người dùng',
      icon: 'pi pi-fw pi-user',
      routerLink: '/admin/users',
    },
    {
      label: 'Quản lý người dùng',
      icon: 'pi pi-fw pi-user',
      routerLink: '/admin',
    },
    {
      label: 'Quản lý người dùng',
      icon: 'pi pi-fw pi-user',
      routerLink: '/admin/users',
    },
  ];

  protected accountMenus: MenuItem[] = [
    {
      label: 'Tài khoản',
      icon: 'pi pi-fw pi-user',
      items: [
        {
          label: 'Đăng xuất',
          icon: 'pi pi-fw pi-sign-out',
          command: () => {
            console.log('Logout');
          },
        },
      ],
    },
  ];
}
