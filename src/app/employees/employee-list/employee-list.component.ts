import {Component, OnInit} from '@angular/core';
import {Employee} from "../shared/employee";
import {EmployeeService} from "../shared/employee.service";

@Component({
  selector: 'app-employee-list',
  templateUrl: './employee-list.component.html',
  styleUrls: []
})
export class EmployeeListComponent implements OnInit {

  employees: Employee[] = [];

  constructor(private employeeService: EmployeeService) {
  }

  ngOnInit(): void {
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }

  getEmployees(){
    this.employeeService.getEmployees().subscribe(employees => this.employees = employees);
  }
}
