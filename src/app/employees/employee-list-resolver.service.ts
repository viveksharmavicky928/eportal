import { Injectable } from "@angular/core";
import { Resolve , ActivatedRouteSnapshot, RouterStateSnapshot} from "@angular/router";
import { Observable } from "rxjs";
import { Employee } from "../models/employee.model";
import { EmployeeService } from '../employee.service';



@Injectable()
export class EmployeeListResolverService implements Resolve<Employee[]>  {
//Use ResolvedEmployeeList as an parameter with Resolve

    constructor(private _employeeService : EmployeeService){

    }

    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot ): Observable<Employee[]>{
        return this._employeeService.getEmployee();
    } 
}

