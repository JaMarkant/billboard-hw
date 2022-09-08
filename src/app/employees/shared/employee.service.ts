import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Employee } from "./employee";
import { Observable } from "rxjs";
import { EmployeeFormModel } from "./employee-form-model";

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
    return this.http.get<Employee[]>(this.employeesUrl);
  }

  addEmployee(name: EmployeeFormModel): Observable<Employee> {
    return this.http.post<Employee>(this.employeesUrl, name, this.httpOptions);
  }

  deleteEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;

    return this.http.delete<Employee>(url, this.httpOptions);
  }

  getEmployee(id: number): Observable<Employee> {
    const url = `${this.employeesUrl}/${id}`;
    return this.http.get<Employee>(url);
  }

  updateEmployee(employee: Employee): Observable<Employee> {
    return this.http.put<Employee>(this.employeesUrl, employee, this.httpOptions);
  }
}
