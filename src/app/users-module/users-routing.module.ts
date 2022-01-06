import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HeaderComponent } from '../shared-module/header/header.component';
import { UserTableComponent } from '../shared-module/user-table/user-table.component';
import { UnauthHeaderComponent } from './components/unauth-header/unauth-header.component';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { EditUserShellComponent } from './containers/edit-user-shell/edit-user-shell.component';
import { UserContactsShellComponent } from './containers/user-contacts-shell/user-contacts-shell.component';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { UserLocationShellComponent } from './containers/user-location-shell/user-location-shell.component';
import { UserPersonalShellComponent } from './containers/user-personal-shell/user-personal-shell.component';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { AuthGuard } from './guards/auth.guard';
import { ExitEditUserGuard } from './guards/exit.user-form.guard';


const routes: Routes = [
    {
        path: '',
        component: UnauthHeaderComponent,
        canActivate: [AuthGuard],
        children: [
            {
                path: '',
                component: UsersListShellComponent,
            },
            {
                path: 'users-table',
                component: UserTableComponent
            },
            {
                path: 'add-user', 
                component: AddUserShellComponent, 
            },
            {
                path: 'edit-user/:id',
                component: EditUserShellComponent,
                canDeactivate: [ExitEditUserGuard], 
            },
            {
                path: 'user-details/:id',
                component: UserDetailsShellComponent, 
                children: [
                    {
                        path: ':id',
                        component: UserPersonalShellComponent
                    },
                    {
                        path: 'personal-info/:id',
                        component: UserPersonalShellComponent
                    },
                    {
                        path: 'location/:id',
                        component: UserLocationShellComponent
                    },
                    {
                        path: 'contacts/:id',
                        component: UserContactsShellComponent
                    }
                ]
            }
        ]
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class UsersRoutingModule {}