import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { PositionsService } from "../../shared/positions.service";
import { Positions } from "../../shared/positions";
import { EmployeeService } from "../shared/employee.service";
import { Location } from '@angular/common';
import { EmployeeFormModel } from "../shared/employee-form-model";

@Component({
  selector: 'app-employee-add-form',
  templateUrl: './employee-add-form.component.html',
  styleUrls: ['employee-add-form.component.css']
})
export class EmployeeAddFormComponent implements OnInit {

  isLoaded: boolean = false;
  positions!: Positions;

  employeeForm = this.fb.group({
    name: ['', [Validators.required]],
    surname: ['', [Validators.required]],
    position: ['', Validators.required],
    birthday: [new Date(), Validators.required]
  })

  constructor(
    private positionsService: PositionsService,
    private employeeService: EmployeeService,
    private location: Location,
    private fb: FormBuilder
  ) {
  }
  ngOnInit(): void {
    this.positionsService.getPositions()
      .subscribe(positions => {
        this.positions = positions;
        this.isLoaded = true;
      })
  }

  onSubmit() {
    if(this.employeeForm.valid) {
      this.employeeService.addEmployee(
        this.employeeForm.value as EmployeeFormModel
      ).subscribe();
    }
    this.location.back();
  }

}
