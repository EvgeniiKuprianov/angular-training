import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { NewCurrency } from './components/new-currency/new-currency.component';
import { CurrentCurrency } from './components/current-currency/current-currency.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AmountOfCurrencyInputComponent } from './components/amount-of-currency-input/amount-of-currency-input.component';

@NgModule({
  declarations: [
    CurrentCurrency,
    NewCurrency,
    AmountOfCurrencyInputComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
  ],
  providers: [],
  bootstrap: [CurrentCurrency, NewCurrency, AmountOfCurrencyInputComponent]
})
export class AppModule { }
