import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { LogButtonComponent } from './button-log/log-button.component';
import { ButtonStatusComponent } from './button-status/button-status.component';
import { VehicleCardComponent } from './vehicle-card/vehicle-card.component';



@NgModule({
  declarations: [UserCardComponent, LogButtonComponent, ButtonStatusComponent, VehicleCardComponent],
  imports: [
    CommonModule,
  ],
  exports: [UserCardComponent]
})
export class SharedUserCardModule { }
