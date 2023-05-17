import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ButtonModule } from 'primeng/button';
import { BreadcrumbModule } from 'primeng/breadcrumb';
import { CardModule } from 'primeng/card';
import { TableModule } from 'primeng/table';
import { PaginatorModule } from 'primeng/paginator';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { UsersComponent } from './users/users.component';

@NgModule({
  declarations: [HomeComponent, LoginComponent, UsersComponent],
  imports: [
    CommonModule,
    ButtonModule,
    BreadcrumbModule,
    CardModule,
    TableModule,
    PaginatorModule
  ],
  exports: [HomeComponent, LoginComponent, UsersComponent]
})
export class PagesModule {}
