import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersListShellComponent } from './containers/users-list-shell/users-list-shell.component';
import { SharedUserCardModule } from '../shared-module/shared-user-card.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AddUserShellComponent } from './containers/add-user-shell/add-user-shell.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { ExitEditUserGuard } from './guards/exit.user-form.guard';
import { MatPaginatorModule } from '@angular/material/paginator';
import { RouterModule } from '@angular/router';
import { UserDetailsShellComponent } from './containers/user-details-shell/user-details-shell.component';
import { UserPersonalShellComponent } from './containers/user-personal-shell/user-personal-shell.component';
import { UserLocationShellComponent } from './containers/user-location-shell/user-location-shell.component';
import { UserContactsShellComponent } from './containers/user-contacts-shell/user-contacts-shell.component';
import { UnauthHeaderComponent } from './components/unauth-header/unauth-header.component';


@NgModule({
    providers: [ExitEditUserGuard],
    declarations: [
        UsersListShellComponent,
        AddUserShellComponent,
        UserDetailsShellComponent,
        UserPersonalShellComponent,
        UserLocationShellComponent,
        UserContactsShellComponent,
        UnauthHeaderComponent
    ],
    imports: [
        CommonModule,
        SharedUserCardModule,
        FormsModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatPaginatorModule,
        RouterModule
    ],
    exports: [
        UsersListShellComponent
    ]
})
export class UsersModule {
    constructor() {}
}