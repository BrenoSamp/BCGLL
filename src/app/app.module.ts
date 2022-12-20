import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { ApiService } from './service/api.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { ConsoleListComponent } from './components/console-list/console-list.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { LoginComponent } from './components/login/login.component';
import { GamesListComponent } from './components/games-list/games-list.component';
import { ConsoleGamesListComponent } from './components/console-games-list/console-games-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EmployeeCreateComponent,
    EmployeeListComponent,
    ReviewListComponent,
    ReviewCreateComponent,
    GameCreateComponent,
    ConsoleListComponent,
    UserCreateComponent,
    LoginComponent,
    GamesListComponent,
    ConsoleGamesListComponent,
  ],
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    BrowserModule,
    AppRoutingModule
  ],
  providers: [ApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
