import { Injectable } from "@angular/core";


import {  Observable, of } from "rxjs";
import {delay} from 'rxjs/operators';
import {HttpClient} from '@angular/common/http';
import { Employee } from './models/employee.model';


@Injectable()
export class EmployeeService {

  constructor(private httpClient : HttpClient){

  }

  private listEmployees: Employee[] = [
    {
      id: 1,
      name: 'Mark',
      gender: 'Male',
      email: "Mark@gmail.com",
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1988'),
      department: '2',
      isActive: true,
      photoPath: 'assets/images/john.png',
      password: "null",
      confirmPassword: "null"
    },
    {
      id: 2,
      name: 'Ellon',
      gender: 'Male',
      email: "Ellon@gmail.com",
      contactPreference: 'Email',
      dateOfBirth: new Date('10/25/1998'),
      department: '3',
      isActive: true,
      photoPath: 'assets/images/mark.png',
      password: "null",
      confirmPassword: "null"
    }

  ];

//If fetching using static data  
getEmployee(): Observable<Employee[]> {
    return of(this.listEmployees).pipe(delay(3000));
  }

//If fetching using http get
//  getEmployee(): Observable<Employee[]> {
//     return this.httpClient.get<Employee[]>(this.baseUrl)
//                 .pipe(catchError(this.handleError))
                
//   }

//   private handleError(errorResponse : HttpErrorResponse){
//       //Client Side Or Network error
//       if(errorResponse.error instanceof ErrorEvent){
//         console.error('Client Side Error', errorResponse.error.message);
//       } else{
//         console.error('Server Side Error', errorResponse);
//       }

//       return throwError('There is a problem with the service. We are notified and working on it. Please try again later.');
//   }

//If fetching data from static
  getEmploye(id : number): Employee {
    return this.listEmployees.find(e => e.id === id);
  }
//If fetching using http get
// getEmploye(id : number): Observable<Employee> {
//     return this.httpClient.get<Employee>(`${this.baseUrl}/${id}`)
//     .pipe(catchError(this.handleError));
//   }

//If updating in static data
  save(employee: Employee) {
    if(employee.id === null){
      const maxid = this.listEmployees.reduce(function(e1, e2){
        return (e1.id > e2.id) ? e1 : e2;
      }).id;
      employee.id = maxid+1;
    this.listEmployees.push(employee);
  }else{
   const foundIndex = this.listEmployees.findIndex(e => e.id === employee.id);
   this.listEmployees[foundIndex] = employee;
  }
  }

//If updating using http post
// addEmployee(employee: Employee) : Observable<Employee> {
//       return this.httpClient.post<Employee>(this.baseUrl, employee , {
//         headers : new HttpHeaders({
//           'Content-Type' : 'application/json'
//         })
//       })
//       .pipe(catchError(this.handleError));
//   }

// updateEmployee(employee: Employee) : Observable<void> {
//     return this.httpClient.put<void>(`${this.baseUrl}/${employee.id}`, employee , {
//         headers : new HttpHeaders({
//           'Content-Type' : 'application/json'
//         })
//       })
//       .pipe(catchError(this.handleError));
 
//   }

  deleteEmployee(id: number){
     const i = this.listEmployees.findIndex(e => e.id === id);
     if(i !== -1){
       this.listEmployees.splice(i, 1);
     }
  }
}