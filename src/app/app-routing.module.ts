import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditUserShellComponent } from './users-module/containers/edit-user-shell/edit-user-shell.component';
import { AddUserShellComponent } from './users-module/containers/add-user-shell/add-user-shell.component';
import { ControlButtonsComponent } from './shared-module/control-buttons/control-buttons.component';
import { ExitEditUserGuard } from './users-module/guards/exit.user-form.guard';
import { LoginComponent } from './auth-module/login/login.component';
import { RegistryComponent } from './auth-module/registry/registry.component';
import { AuthGuard } from './users-module/guards/auth.guard';
import { UserDetailsComponent } from './shared-module/user-details/user-details.component';

// const userDetails = [
//     {
//         path: 'personal-info'
//     },
//     {
//         path: 'location'
//     },
//     {
//         path: 'contacts', component: 
//     }
// ]


const routes: Routes = [
    { 
        path: 'login', 
        component: LoginComponent 
    },
    { 
        path: 'registration', 
        component: RegistryComponent 
    },
    { 
        path: 'users-list', 
        loadChildren: () => import('./users-module/users-module.module')
        .then(m => m.UsersModule),
        canActivate: [AuthGuard]
    },
    { 
        path: 'add-user', 
        component: AddUserShellComponent, 
        canActivate: [AuthGuard] },
    { 
        path: 'control-buttons', 
        component: ControlButtonsComponent, 
        canActivate: [AuthGuard] },
    {
        path: 'edit-user/:id',
        component: EditUserShellComponent,
        canDeactivate: [ExitEditUserGuard], 
        canActivate: [AuthGuard]
    },
    {
        path: 'user-details/:id',
        component: UserDetailsComponent, 
        canActivate: [AuthGuard],
        // children: userDetails
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
