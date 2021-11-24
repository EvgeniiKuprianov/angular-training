import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListComponent } from './users-list/users-list.component';
import { ShowHideButtonComponent } from './show-hide-button-shell/show-hide-button-shell.component';
import { SharedUserCardModule } from '../shared-user-card-module/shared-user-card.module';
import { DeactivateButtonShellComponent } from './deactivate-button-shell/deactivate-button-shell.component';


@NgModule({
  declarations: [
    UsersListComponent,
    ShowHideButtonComponent,
    DeactivateButtonShellComponent,
  ],
  imports: [
    CommonModule,
    SharedUserCardModule
  ],
  exports: [
    UsersListComponent
  ]
})
export class UsersModule {
  constructor() {}
}