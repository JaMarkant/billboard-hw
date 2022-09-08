import { Component, OnInit } from '@angular/core';
import { Employee } from "../shared/employee";
import { EmployeeService } from "../shared/employee.service";
import { Router } from "@angular/router";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: ['employee-list.component.css']
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(
    private employeeService: EmployeeService,
    private router: Router
  ) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  addEmployee(){
    this.router.navigateByUrl('employees/add');
  }

  deleteEmployee(employee: Employee){
    this.employees = this.employees.filter(e => e !== employee);
    this.employeeService.deleteEmployee(employee.id).subscribe();
  }

  employeeDetail(employee: Employee){
    this.router.navigateByUrl(`employees/detail/${employee.id}`)
  }
}
