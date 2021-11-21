import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { InputBindComponent } from './input-bind/input-bind.component';


@NgModule({
  declarations: [
    InputBindComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    InputBindComponent
  ]
})
export class InputModule {
  constructor() {}
}