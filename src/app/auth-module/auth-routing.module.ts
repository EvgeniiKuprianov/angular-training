import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthHeaderComponent } from './auth-header/auth-header.component';
import { LoginComponent } from './login/login.component';
import { RegistryComponent } from './registry/registry.component';


const routes: Routes = [{
    path: '',
    component: AuthHeaderComponent,
    children: [
        {
            path: 'login',
            component: LoginComponent,
        },
        {
            path: 'registration', 
            component: RegistryComponent, 
        }
    ]
}];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})

export class AuthRoutingModule {}