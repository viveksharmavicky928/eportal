import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ListEmployeesComponent } from './employees/list-employees.component';
import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { CraeteEmployeeCanDeactivateGuardService } from './employees/create-employees-can-deactivate-guard.service';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';
import { CreateEmployeesComponent } from './employees/create-employees.component';



const appRoutes : Routes = [
  {
    path : 'list', 
    component : ListEmployeesComponent,
    resolve : {employeeList : EmployeeListResolverService}  
  },
  {
    path : 'edit/:id', 
    component : CreateEmployeesComponent,
    canDeactivate : [CraeteEmployeeCanDeactivateGuardService]
  },
  {path : 'employees/:id', component : EmployeeDetailsComponent
      , canActivate : [EmployeeDetailsGuardService]},
  {path : '' , redirectTo : '/list' ,pathMatch : 'full'},
  {path : 'notfound', component : PageNotFoundComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
