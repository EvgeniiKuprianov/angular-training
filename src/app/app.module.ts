import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { UsersModule } from './users-module/users-module.module';
import { SharedUserCardModule } from './shared-user-card-module/shared-user-card.module';
import { UserStateService } from './user-state.service';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    AppRoutingModule,
    BrowserAnimationsModule,
    SharedUserCardModule,
    UsersModule
  ],
  providers: [UserStateService],
  bootstrap: [AppComponent]
})
export class AppModule { }
