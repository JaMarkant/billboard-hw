import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from "./employee";
import {catchError, Observable, of, tap} from "rxjs";
import {EmployeeFormModel} from "./employee-form-model";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';

  private httpOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  addEmployee(name: EmployeeFormModel): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, name, this.httpOptions).pipe(
      tap((newEmployee: Employee) => console.log(`new id ${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addHero'))
    );
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions).pipe(
      tap(_ => console.log(`deleted hero id=${id}`)),
      catchError(this.handleError<Employee>('deleteHero'))
    );
  }

  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.log(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url).pipe(
      tap(_ => console.log(`fetched employee id=${id}`)),
      catchError(this.handleError<Employee>(`getEmployee id=${id}`))
    );
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeesUrl, employee, this.httpOptions).pipe(
      tap(_ => console.log(`updated hero id=${employee.id}`)),
      catchError(this.handleError<any>('updateHero'))
    );
  }
}
