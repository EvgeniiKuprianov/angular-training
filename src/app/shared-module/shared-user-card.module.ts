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
import { UserFormComponent } from './user-form/user-form.component';
import { AddressesFieldComponent } from './addresses-field/addresses-field.component';
import { ControlButtonsComponent } from './control-buttons/control-buttons.component';
import { SearchUserInputComponent } from './search-user-input/search-user-input.component';
import { EditModalPopupComponent } from './edit-modal-popup/edit-modal-popup.component';
import { UserDetailsComponent } from './user-details/user-details.component';
import { UserPersonalComponent } from './user-personal/user-personal.component';
import { UserLocationComponent } from './user-location/user-location.component';
import { UserContactsComponent } from './user-contacts/user-contacts.component';


@NgModule({
    declarations: [
        UserCardComponent, 
        ButtonStatusComponent, 
        CustomErrorComponent, 
        UserFormComponent, 
        AddressesFieldComponent, 
        ControlButtonsComponent, 
        SearchUserInputComponent,
        EditModalPopupComponent,
        UserDetailsComponent,
        UserPersonalComponent,
        UserLocationComponent,
        UserContactsComponent
    ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatSelectModule,
        MatButtonModule,
        MatDialogModule,
        MatTabsModule
    ],
    exports: [
        UserCardComponent, 
        CustomErrorComponent, 
        UserFormComponent, 
        AddressesFieldComponent, 
        SearchUserInputComponent, 
        EditModalPopupComponent
    ]
})
export class SharedUserCardModule { }
