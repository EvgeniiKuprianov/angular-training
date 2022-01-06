import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './user-card/user-card.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonStatusComponent } from './button-status/button-status.component';
import { CustomErrorComponent } from './mat-error/mat-error.component';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule } from '@angular/material/dialog';
import { MatTabsModule } from '@angular/material/tabs';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { UsersRoutingModule } from './../users-module/users-routing.module';
import { UserFormComponent } from './user-form/user-form.component';
import { AddressesFieldComponent } from './addresses-field/addresses-field.component';
import { SearchUserInputComponent } from './search-user-input/search-user-input.component';
import { EditModalPopupComponent } from './edit-modal-popup/edit-modal-popup.component';
import { HeaderComponent } from './header/header.component';
import { UserTableComponent } from './user-table/user-table.component';
import { MatSortModule } from '@angular/material/sort';


@NgModule({
    declarations: [
        UserCardComponent, 
        ButtonStatusComponent, 
        CustomErrorComponent, 
        UserFormComponent, 
        AddressesFieldComponent,  
        SearchUserInputComponent,
        EditModalPopupComponent,
        HeaderComponent,
        UserTableComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule,
        MatTableModule,
        MatSortModule,
        MatPaginatorModule,
        UsersRoutingModule
    ],
    exports: [
        UserCardComponent, 
        CustomErrorComponent, 
        UserFormComponent, 

        AddressesFieldComponent, 
        SearchUserInputComponent, 
        EditModalPopupComponent,
        HeaderComponent
    ]
})
export class SharedUserCardModule { }
