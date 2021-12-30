import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
    path: '',
    component: UsersListShellComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})

export class UsersRoutingModule {}