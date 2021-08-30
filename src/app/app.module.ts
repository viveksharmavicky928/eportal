import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import{BsDatepickerModule} from 'ngx-bootstrap/datepicker';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {HttpClientModule} from '@angular/common/http'

import { AppComponent } from './app.component';
import { ListEmployeesComponent } from './employees/list-employees.component';;
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';




import { EmployeeService } from './employee.service';

import { EmployeeDetailsComponent } from './employees/employee-details.component';
import { PageNotFoundComponent } from './page-not-found.component';
import { SelectRequiredValidatorDirective } from './shared/select-required-validator.directive';
import { ConfirmEqualValidatorDirective } from './shared/confirm-equal-validator.directive';
import { CraeteEmployeeCanDeactivateGuardService } from './employees/create-employees-can-deactivate-guard.service';
import { EmployeeListResolverService } from './employees/employee-list-resolver.service';
import { EmployeeDetailsGuardService } from './employees/employee-details-guard.service';

import { DisplayEmployeeComponent } from './employees/display-employees.component';
import { CreateEmployeesComponent } from './employees/create-employees.component';
import { AppRoutingModule } from './app-routing.module';





@NgModule({
  declarations: [
    AppComponent,
    ListEmployeesComponent,
    CreateEmployeesComponent,
    SelectRequiredValidatorDirective,
    ConfirmEqualValidatorDirective,
    DisplayEmployeeComponent,
    EmployeeDetailsComponent,
    PageNotFoundComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    BsDatepickerModule.forRoot(),
    RouterModule,
    AppRoutingModule
  ],
  providers: [EmployeeService, CraeteEmployeeCanDeactivateGuardService, 
    EmployeeListResolverService, EmployeeDetailsGuardService],
  bootstrap: [AppComponent]
})
export class AppModule { }
