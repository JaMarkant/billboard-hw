import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PositionsService} from "../positions.service";
import {Positions} from "../../positions";
import {EmployeeService} from "../employee.service";
import {Employee} from "../../employee";

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.css']
})
export class EmployeeFormComponent implements OnInit {

  isLoaded: boolean = false;
  positions!: Positions;
  model!: Employee;

  constructor(
    private positionsService: PositionsService,
    private employeeService: EmployeeService
  ) {
  }

  ngOnInit(): void {
    this.positionsService.getPositions()
      .subscribe(positions => {
        this.positions = positions;
        this.isLoaded = true;
      })

    this.model = new Employee(1, '', '', '', new Date());
  }

  onSubmit() {
    this.employeeService.addEmployee(
      this.model.name,
      this.model.surname,
      this.model.position,
      this.model.birthday
    ).subscribe(
      employee => {
        console.log(employee)
      }
    );
  }

}
