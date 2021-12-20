import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserShellComponent } from './users-module/containers/edit-user-shell/edit-user-shell.component';
import { UsersListShellComponent } from './users-module/containers/users-list-shell/users-list-shell.component';
import { AddUserShellComponent } from './users-module/containers/add-user-shell/add-user-shell.component';
import { ControlButtonsComponent } from './shared-module/control-buttons/control-buttons.component';



const routes: Routes = [
    { path: 'users-list', component: UsersListShellComponent },
    { path: 'add-user', component: AddUserShellComponent },
    { path: 'control-buttons', component: ControlButtonsComponent },
    { path: 'edit-user/:id', component: EditUserShellComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
