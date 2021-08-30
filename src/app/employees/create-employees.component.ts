import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Department } from '../models/department.model';
import { Employee } from '../models/employee.model'
import { BsDatepickerConfig } from 'ngx-bootstrap/datepicker';
import { ActivatedRoute, Router } from '@angular/router';
import { EmployeeService } from '../employee.service';


@Component({
  selector: 'app-create-emloyees',
  templateUrl: './create-employees.component.html',
  styleUrls: ['./create-employees.component.css']
})
export class CreateEmployeesComponent implements OnInit {

  @ViewChild("employeeForm") public createEmployeeForm: NgForm;

  departments: Department[] = [
    { id: 1, name: 'Help Desk' },
    { id: 2, name: 'IT' },
    { id: 3, name: 'HR' },
    { id: 4, name: 'Payroll' }
  ];
  department: string;
  dateofBirth: Date = new Date(1996, 8, 29);
  employee: Employee;
  datepickerconfig: Partial<BsDatepickerConfig>;
  photoPath: string;
  previewPhoto: boolean = false;
  panelTitle : string;



  constructor(private _employeeService: EmployeeService, private _router: Router,
    private _route: ActivatedRoute) {
    this.datepickerconfig = Object.assign({},
      {
        containerClass: 'theme-dark-blue',
        showWeekNumbers: false,
        minDate: new Date(1980, 0, 1),
        maxDate: new Date(2003, 11, 31),
        dateInputFormat: 'DD/MM/YYYY'
      });
  }

  togglePhotoPreview() {
    this.previewPhoto = !this.previewPhoto;
  }

  ngOnInit(): void {
    this._route.paramMap.subscribe(parameterMap => {
      const id = +parameterMap.get('id');
      this.getEmployee(id);
    });
  }

  private getEmployee(id: number) {
    if (id === 0) {
      this.employee = {
        id: null,
        name: null,
        gender: null,
        contactPreference: null,
        phoneNumber: null,
        email: null,
        dateOfBirth: null,
        department: 'select',
        isActive: null,
        photoPath: null,
        password: null,
        confirmPassword: null
      };
      this.panelTitle = 'Create Employee';
      // this.createEmployeeForm.reset();
    } 
    else{
      this.panelTitle = 'Edit Employee';
//When fetching from static data
      this.employee = Object.assign({}, this._employeeService.getEmploye(id));

//When fetching from http get method
// this._employeeService.getEmploye(id).subscribe((employee) => {
//         this.employee = employee;
//       },
//         (err: any) => console.log(err))
//     }

    }
  }

  


 //When using static data inside the service
  saveEmployee(empForm: NgForm): void {
  console.log(empForm.value);
    const newEmployee: Employee = Object.assign({}, this.employee);
    this._employeeService.save(newEmployee);
    empForm.reset();
    this._router.navigate(['list']);
  }

//When using http post method
  // saveEmployee(empForm: NgForm): void {
  //   if (this.employee.id == null) {
  //     this._employeeService.addEmployee(this.employee).subscribe(
  //       (data: Employee) => {
  //         console.log(data);
  //         empForm.reset();
  //         this._router.navigate(['list']);
  //       },
  //       (error: any) => {
  //         //You can create a label and display it inside the create employee component
  //         console.log(error);
  //       }
  //     );
  //   }else{
  //     this._employeeService.updateEmployee(this.employee).subscribe(
  //       () => {
  //         empForm.reset();
  //         this._router.navigate(['list']);
  //       },
  //       (error: any) => {
  //         //You can create a label and display it inside the create employee component
  //         console.log(error);
  //       }
  //     );
  //   }

  // }


}

