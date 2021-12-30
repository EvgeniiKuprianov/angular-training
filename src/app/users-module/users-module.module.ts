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
import { UsersRoutingModule } from './users-routing.module';


@NgModule({
    providers: [ExitEditUserGuard],
    declarations: [
        UsersListShellComponent,
        AddUserShellComponent
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
        UsersRoutingModule
    ],
    exports: [
        UsersListShellComponent
    ]
})
export class UsersModule {
    constructor() { }
}