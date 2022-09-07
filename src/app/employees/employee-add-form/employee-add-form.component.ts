import {Component, OnInit} from '@angular/core';
import {FormBuilder} from '@angular/forms';
import {PositionsService} from "../../shared/positions.service";
import {Positions} from "../../../positions";
import {EmployeeService} from "../shared/employee.service";
import {Employee} from "../shared/employee";

@Component({
  selector: 'app-employee-add-form',
  templateUrl: './employee-add-form.component.html',
  styleUrls: []
})
export class EmployeeAddFormComponent implements OnInit {

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
