import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardShellComponent } from './user-card-shell/user-card-shell.component';
import { LogButtonShellComponent } from './button-log-shell/log-button-shell.component';
import { ButtonStatusShellComponent } from './button-status-shell/button-status-shell.component';
import { VehicleCardShellComponent } from './vehicle-card-shell/vehicle-card-shell.component';



@NgModule({
  declarations: [UserCardShellComponent, LogButtonShellComponent, ButtonStatusShellComponent, VehicleCardShellComponent],
  imports: [
    CommonModule,
  ],
  exports: [UserCardShellComponent]
})
export class SharedUserCardModule { }
