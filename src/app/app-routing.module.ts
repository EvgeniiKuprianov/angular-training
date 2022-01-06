import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
    {
        path: '',
        loadChildren: () => import('./auth-module/auth-user.module')
        .then(m => m.AuthUserModule)
    },
    { 
        path: 'users',
        loadChildren: () => import('./users-module/users.module')
        .then(m => m.UsersModule),
    },
];


@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule {

}
