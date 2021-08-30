import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from '../models/employee.model';


@Component({

  templateUrl: './list-employees.component.html',
  styleUrls: ['./list-employees.component.css']

})
export class ListEmployeesComponent implements OnInit {


  private _searchTerm: string;
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    this._searchTerm = value;
    this.filteredEmployees = this.filterEmployees(value);
  }

  filterEmployees(searchString: string) {
    return this.employees.filter(employee =>
      employee.name.toLowerCase().indexOf(searchString.toLowerCase()) !== -1)
  }


  employees: Employee[];
  filteredEmployees: Employee[];
  // dataFromChild : Employee;

  
//If fetching static data
  constructor( private _router: Router
    , private _route: ActivatedRoute) {
      this.employees= this._route.snapshot.data['employeeList'];
      if (this._route.snapshot.queryParamMap.has('searchTerm')) {
        this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
      } else {
        this.filteredEmployees = this.employees;
      }
  }

//If fetching it from http get method
// constructor( private _router: Router
//     , private _route: ActivatedRoute) {
//       const resolvedEmployeeList : ResolvedEmployeeList = this._route.snapshot.data['employeeList'];
//       if(resolvedEmployeeList.error === null){
//         this.employees = resolvedEmployeeList.employeeList;
//    }
//       else{
//         this.error = resolvedEmployeeList.error;
//         console.log(this.error);
//       }
//       if (this._route.snapshot.queryParamMap.has('searchTerm')) {
//         this.searchTerm = this._route.snapshot.queryParamMap.get('searchTerm');
//       } else {
//         this.filteredEmployees = this.employees;
//       }
//   }

  ngOnInit(): void {
    
  }

  onDeleteNotifictaion(id: number){
    const i = this.filteredEmployees.findIndex(e => e.id === id);
     if(i !== -1){
       this.filteredEmployees.splice(i, 1);
     }
  }

  // onClick(employeeId: number) {
  //   this._router.navigate(['/employees', employeeId], {
  //     queryParams: { 'searchTerm': this.searchTerm }
  //   });
  // }

  // handleEvent(eventData : Employee){
  //   this.dataFromChild = eventData;
  // }

}
