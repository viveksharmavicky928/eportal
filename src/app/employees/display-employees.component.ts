import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';
import {Router, ActivatedRoute } from '@angular/router';
import { Employee } from '../models/employee.model';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employees.component.html',
  styleUrls: ['./display-employees.component.css']
})
export class DisplayEmployeeComponent implements OnInit {

  selectedEmployeeId : number;
  @Input() employee : Employee;
  @Input() searchTerm : string;
  // @Output() notify : EventEmitter<Employee> = new EventEmitter<Employee>();
  @Output() notifyDelete: EventEmitter<number> = new EventEmitter<number>();

  confirmDelete = false;
  panelExpanded = false;
   

  constructor(private _route : ActivatedRoute, private _router : Router,
    private _employeeService : EmployeeService) { }

  ngOnInit(): void {
    this.selectedEmployeeId = +this._route.snapshot.paramMap.get('id');
  }

  viewEmployee(){
    this._router.navigate(['/employees', this.employee.id], {
      queryParams: { 'searchTerm': this.searchTerm }
    });
  }

  editEmployee(){
    this._router.navigate(['/edit', this.employee.id]);
  }

  deleteEmployee(){
      this._employeeService.deleteEmployee(this.employee.id);
      this.notifyDelete.emit(this.employee.id);
  }

  // handleClick (){
  //   this.notify.emit(this.employee);
  // }

}

