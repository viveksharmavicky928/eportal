import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { ListEmployeesComponent } from './employees/list-employees.component';


const routes: Routes = [
  {
    path : 'list', 
    component : ListEmployeesComponent
  },
  {
    path : 'edit/:id', 
    component : CreateEmployeesComponent,
  },
  {path : '' , redirectTo : '/list' ,pathMatch : 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
