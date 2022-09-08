import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddFormComponent } from './employee-add-form.component';
import {HttpClientModule} from "@angular/common/http";
import { FormsModule, ReactiveFormsModule} from "@angular/forms";

describe('EmployeeAddFormComponent', () => {
  let component: EmployeeAddFormComponent;
  let fixture: ComponentFixture<EmployeeAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddFormComponent ],
      imports: [HttpClientModule, FormsModule, ReactiveFormsModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EmployeeAddFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
