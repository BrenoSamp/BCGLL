import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { ConsoleListComponent } from './components/console-list/console-list.component';
import { GameCreateComponent } from './components/game-create/game-create.component';
import { UserCreateComponent } from './components/user-create/user-create.component';
import { LoginComponent } from './components/login/login.component';
import { ConsoleGamesListComponent } from './components/console-games-list/console-games-list.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista-consoles' },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'avaliacoes', component: ReviewListComponent},
  { path: 'create-review/:id', component: ReviewCreateComponent},
  { path: 'reviews-list/:id', component: ReviewListComponent},
  {path: 'lista-games/:id', component: ConsoleGamesListComponent},
  {path: 'game-create', component: GameCreateComponent}, 
  {path: 'user-create', component: UserCreateComponent},
  { path: 'lista-consoles', component: ConsoleListComponent},
  { path: 'user-login', component: LoginComponent},
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }