import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmployeeCreateComponent } from './components/employee-create/employee-create.component';
import { EmployeeListComponent } from './components/employee-list/employee-list.component';
import { EmployeeEditComponent } from './components/employee-edit/employee-edit.component';
import { ReviewListComponent } from './components/review-list/review-list.component';
import { ReviewCreateComponent } from './components/review-create/review-create.component';
import { GameListComponent } from './components/game-list/game-list.component';
import { GameCreateComponent } from './components/game-create/game-create.component';


const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'create-employee' },
  { path: 'create-employee', component: EmployeeCreateComponent },
  { path: 'edit-employee/:id', component: EmployeeEditComponent },
  { path: 'employees-list', component: EmployeeListComponent },
  { path: 'reviews-list', component: ReviewListComponent},
  { path: 'create-review/:id', component: ReviewCreateComponent},
  { path: 'reviews-list/:id', component: ReviewListComponent},
  { path: 'lista-consoles', component: GameListComponent},
  { path: 'game-create', component: GameCreateComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }