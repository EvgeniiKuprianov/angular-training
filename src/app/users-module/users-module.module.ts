import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { UserCardComponent } from './user-card/user-card.component';
import { ShowHideButtonComponent } from './show-hide-button/show-hide-button.component';


@NgModule({
  declarations: [
    UsersListComponent,
    ShowHideButtonComponent,
    UserCardComponent,
  ],
  imports: [
    CommonModule,
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule {
  constructor() {}
}