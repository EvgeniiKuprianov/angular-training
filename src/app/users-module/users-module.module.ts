import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListShellComponent } from './container/users-list-shell/users-list-shell.component';
import { SharedUserCardModule } from '../shared-user-card-module/shared-user-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserComponent } from './components/add-user/add-user.component';



@NgModule({
  declarations: [
    UsersListShellComponent,
    AddUserComponent
  ],
  imports: [
    CommonModule,
    SharedUserCardModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    UsersListShellComponent
  ]
})
export class UsersModule {
  constructor() {}
}