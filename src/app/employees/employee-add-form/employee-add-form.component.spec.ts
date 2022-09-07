import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EmployeeAddFormComponent } from './employee-add-form.component';

describe('EmployeeFormComponent', () => {
  let component: EmployeeAddFormComponent;
  let fixture: ComponentFixture<EmployeeAddFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EmployeeAddFormComponent ]
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
