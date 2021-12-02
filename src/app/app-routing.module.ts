import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListShellComponent } from './users-module/containers/users-list-shell/users-list-shell.component';
import { AddUserShellComponent } from './users-module/containers/add-user-shell/add-user-shell.component';



const routes: Routes = [ 
  { path: 'users-list', component: UsersListShellComponent },
  { path: 'add-user', component: AddUserShellComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
