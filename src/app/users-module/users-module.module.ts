import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { SharedUserCardModule } from '../shared-user-card-module/shared-user-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';



@NgModule({
  declarations: [
    UsersListShellComponent,
    AddUserShellComponent
  ],
  imports: [
    CommonModule,
    SharedUserCardModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [
    UsersListShellComponent
  ]
})
export class UsersModule {
  constructor() {}
}