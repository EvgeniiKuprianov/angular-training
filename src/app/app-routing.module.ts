import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChangePageComponent } from './change-page/change-page.component';
import { ContactPageComponent } from './contact-page/contact-page.component';
import { ListOfCurrenciesComponent } from './list-of-currencies/list-of-currencies.component';

const routes: Routes = [
  { 'path': 'change', component: ChangePageComponent, },
  { 'path': 'list', component: ListOfCurrenciesComponent, },
  { 'path': 'contact', component: ContactPageComponent, }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
