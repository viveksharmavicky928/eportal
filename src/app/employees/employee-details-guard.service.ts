import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot } from "@angular/router";
import { EmployeeService } from '../employee.service';


@Injectable()
export class EmployeeDetailsGuardService implements CanActivate{

    constructor(private _employeeService : EmployeeService, private _router :Router){

    }

//When getting static data from service
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot):  boolean{
        const employeeExists =  !!this._employeeService.getEmploye(+route.paramMap.get('id'));

        if(employeeExists){
            return true;
        }else{
            this._router.navigate(['notfound']);
            return false;
        }
    }

}