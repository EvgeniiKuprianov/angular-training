import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NewCurrency } from './new-currency/new-currency.component';
import { CurrentCurrency } from './current-currency/current-currency.component';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatExpansionModule } from '@angular/material/expansion';
import { MatIconModule } from '@angular/material/icon'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { InputCurrencyComponent } from './input-currency/input-currency.component';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ToolbarTabComponent } from './toolbar-tab/toolbar-tab.component';
import { ChangePageComponent } from './change-page/change-page.component';
import { ListOfCurrenciesComponent } from './list-of-currencies/list-of-currencies.component';
import { ContactPageComponent } from './contact-page/contact-page.component';

@NgModule({
  declarations: [
    AppComponent,
    CurrentCurrency,
    NewCurrency,
    InputCurrencyComponent,
    ToolbarComponent,
    ToolbarTabComponent,
    ChangePageComponent,
    ListOfCurrenciesComponent,
    ContactPageComponent,
  ],
  imports: [
    MatSelectModule,
    MatInputModule,
    MatToolbarModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatIconModule,
    MatExpansionModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
