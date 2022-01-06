import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';
import { SharedUserCardModule } from '../shared-module/shared-user-card.module';
import { AuthRoutingModule } from '../auth-module/auth-routing.module';
import { AuthHeaderComponent } from './auth-header/auth-header.component';


@NgModule({
    declarations: [
        LoginComponent,
        RegistryComponent,
        AuthHeaderComponent,
        ],
    imports: [
        CommonModule,
        ReactiveFormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatButtonModule,
        SharedUserCardModule,
        AuthRoutingModule
        ],
    exports: [
        LoginComponent,
        RegistryComponent,
        AuthHeaderComponent
    ]
})

export class AuthUserModule { }
