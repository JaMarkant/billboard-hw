import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from "@angular/router";
import {EmployeeService} from "../shared/employee.service";
import {Employee} from "../shared/employee";
import {FormBuilder, Validators} from "@angular/forms";
import {PositionsService} from "../../shared/positions.service";
import {Positions} from "../../../positions";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: []
})
export class EmployeeDetailComponent implements OnInit {

  employee: Employee | undefined;

  employeeDetailForm = this.fb.group({
    surname: ['', [Validators.required]],
    position: ['', Validators.required]
  })

  positions!: Positions;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private positionsService: PositionsService
    ) { }

  ngOnInit(): void {
    this.getEmployee();
  }

  getEmployee(): void {
    const id = parseInt(this.route.snapshot.paramMap.get('id')!, 10);
    this.employeeService.getEmployee(id)
      .subscribe(employee => {
        this.employee = employee;
        this.populateFormData(employee)
      });
    this.positionsService.getPositions()
      .subscribe(positions => {
        this.positions = positions;
      })
  }


  populateFormData(employee: Employee): void {
    this.employeeDetailForm.patchValue({
      position: employee.position,
      surname: employee.surname
    });
  }

  onSubmit() {

  }
}
