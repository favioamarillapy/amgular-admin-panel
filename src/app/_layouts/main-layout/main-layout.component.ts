import { Component, HostListener } from '@angular/core';

import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-main-layout',
  templateUrl: './main-layout.component.html',
  styleUrls: ['./main-layout.component.css']
})
export class MainLayoutComponent {
  sidebarVisible: boolean = true;
  isMobile: boolean = false;
  sidebarOptions: MenuItem[] = [
    {
      label: 'Home',
      icon: 'pi pi-home',
      routerLink: '/'
    },
    {
      label: 'Access',
      items: [
        {
          label: 'User',
          icon: 'pi pi-user',
          routerLink: '/users'
        }
      ]
    }
  ];
  userOptions: MenuItem[] = [
    {
      label: 'Profile',
      icon: 'pi pi-fw pi-wrench'
    },

    {
      label: 'Quit',
      icon: 'pi pi-fw pi-power-off'
    }
  ];

  constructor() {
    this.isMobile = window.innerWidth < 800;
    this.sidebarVisible = window.innerWidth > 800;
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.isMobile = window.innerWidth < 800;
    this.sidebarVisible = window.innerWidth > 800;
  }
}
