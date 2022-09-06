import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Employee} from "../employee";
import {catchError, Observable, of, tap} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  private employeesUrl = 'api/employees';

  private cudOptions = { headers: new HttpHeaders({ 'Content-Type': 'application/json' })};

  constructor(
    private http: HttpClient
  ) { }

  getEmployees(): Observable<Employee[]> {
    return this.http.get<Employee[]>(this.employeesUrl).pipe(
      catchError(this.handleError<Employee[]>('getEmployees', []))
    );
  }

  addEmployee(name: string, surname: string, position:string, birthday: Date): Observable<Employee> {
    const newE = {name,surname,position,birthday};
    console.log(newE);
    return this.http.post<Employee>(this.employeesUrl, newE, this.cudOptions).pipe(
      tap((newEmployee: Employee) => console.log(`new id ${newEmployee.id}`)),
      catchError(this.handleError<Employee>('addHero'))
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
}
