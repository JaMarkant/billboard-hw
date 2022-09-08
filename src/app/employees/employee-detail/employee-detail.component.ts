import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { EmployeeService } from "../shared/employee.service";
import { Employee } from "../shared/employee";
import { FormBuilder, Validators } from "@angular/forms";
import { PositionsService } from "../../shared/positions.service";
import { Positions } from "../../shared/positions";
import { Location } from "@angular/common";

@Component({
  selector: 'app-employee-detail',
  templateUrl: './employee-detail.component.html',
  styleUrls: ['employee-detail.component.css']
})
export class EmployeeDetailComponent implements OnInit {

  employee?: Employee;

  employeeDetailForm = this.fb.group({
    surname: ['', Validators.required],
    position: ['', Validators.required]
  });

  positions!: Positions;

  constructor(
    private route: ActivatedRoute,
    private employeeService: EmployeeService,
    private fb: FormBuilder,
    private location: Location,
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
    if (this.employee && this.employeeDetailForm.valid) {
      let position = this.employeeDetailForm.getRawValue().position;
      if (position !== null) {
        this.employee.position = position;
      }
      let surname = this.employeeDetailForm.getRawValue().surname;
      if (surname !== null) {
        this.employee.surname = surname;
      }
      this.employeeService.updateEmployee(this.employee).subscribe();
      this.location.back();
    }
  }
}
