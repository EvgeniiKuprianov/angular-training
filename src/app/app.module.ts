import { NgModule } from '@angular/core';
import { HttpClientModule }   from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users-module/users-module.module';
import { SharedUserCardModule } from './shared-module/shared-user-card.module';
import { HeaderComponent } from './components/header/header.component';
import { EditUserShellComponent } from './users-module/containers/edit-user-shell/edit-user-shell.component';
import { UserStateService } from './users-module/services/user-state.service';
import { AuthUserModule } from './auth-module/auth-user.module';


@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        EditUserShellComponent,
    ],
    imports: [
        HttpClientModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        SharedUserCardModule,
        UsersModule,
        AuthUserModule
    ],
    providers: [
        UserStateService
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
