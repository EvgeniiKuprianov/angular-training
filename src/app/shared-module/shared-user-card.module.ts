import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonStatusComponent } from './button-status/button-status.component';
import { CustomErrorComponent } from './mat-error/mat-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { UserFormComponent } from './user-form/user-form.component';
import { AddressesFieldComponent } from './addresses-field/addresses-field.component';


@NgModule({
  declarations: [UserCardComponent, ButtonStatusComponent, CustomErrorComponent, UserFormComponent, AddressesFieldComponent],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatButtonModule
  ],
  exports: [UserCardComponent, CustomErrorComponent, UserFormComponent, AddressesFieldComponent]
})
export class SharedUserCardModule { }
