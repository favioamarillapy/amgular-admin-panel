import { Component } from '@angular/core';
import { MenuItem } from 'primeng/api';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css'],
})
export class UsersComponent {
  items: MenuItem[] = [{ label: 'Users' }];
  home: MenuItem = { icon: 'pi pi-home', routerLink: '/' };

  visibleFilters: boolean = false;
  cols: any = [
    { field: 'id', header: '#ID' },
    { field: 'firstName', header: 'First Name' },
    { field: 'lastName', header: 'Last Name' },
  ];

  users = [
    {
      id: 1,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 2,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 3,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 4,
      firstName: 'John',
      lastName: 'Doe',
    },
    {
      id: 5,
      firstName: 'John',
      lastName: 'Doe',
    },
  ];

  first: number = 0;
  rows: number = 10;

  onPageChange(event: any) {
    this.first = event.first;
    this.rows = event.rows;
  }
}
