import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users-module/users-module.module';
import { SharedUserCardModule } from './shared-user-card-module/shared-user-card.module';
import { UserStateService } from './users-module/services/user-state.service';
import { HeaderComponent } from './components/header/header.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedUserCardModule,
    UsersModule,
  ],
  providers: [UserStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
