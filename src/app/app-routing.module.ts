import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsersListShellComponent } from './users-module/container/users-list-shell/users-list-shell.component';
import { AddUserComponent } from './users-module/components/add-user/add-user.component';



const routes: Routes = [ 
  { path: 'users-list', component: UsersListShellComponent },
  { path: 'add-user', component: AddUserComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {

 }
